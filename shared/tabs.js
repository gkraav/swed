class Tabs extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "closed" });
    shadow.innerHTML = `
      <style>
        :host { 
          display: flex; 
          flex-direction: column; 
        }
        .tabs { 
          display: flex; 
          flex-direction: row; 
          flex-wrap: nowrap; 

        }
        .tabs ::slotted(*) { 
          padding: 15px; 
          cursor: pointer;
        }
        .tabs ::slotted(.selected) { 
          background: white; 
        }
        .tab-contents ::slotted(*) { display: none; }
        .tab-contents ::slotted(.selected) { 
          display: block; 
          padding: 5px;
          background-color: white; 
        }
      </style>

      <div class="tabs">
        <slot id="tab-slot" name="tab"></slot>
      </div>
      <div class="tab-contents">
        <slot id="content-slot" name="content"></slot>
      </div>
    `;

    const tab = shadow.querySelector("#tab-slot");
    const content = shadow.querySelector("#content-slot");
    this.tabs = tab.assignedElements();
    this.contents = content.assignedElements();

    tab.addEventListener("click", this.tabSwitchListener);
  }

  tabSwitchListener = (a) => {
    const tabIndex = this.tabs.indexOf(a.target);
    this.selectTabByIndex(tabIndex);
  };

  selectTabByIndex(index) {
    const tab = this.tabs[index];
    const content = this.contents[index];
    if (!tab || !content) return;
    this.contents.forEach((p) => p.classList.remove("selected"));
    this.tabs.forEach((p) => p.classList.remove("selected"));
    content.classList.add("selected");
    tab.classList.add("selected");
  }
}

customElements.define("ui-tabs", Tabs);
