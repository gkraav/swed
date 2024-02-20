class CollapsePanel extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "closed" });
    shadow.innerHTML = `
      <style>
        .gg-chevron-down {
          box-sizing: border-box;
          position: relative;
          display: block;
          transform: scale(var(--ggs,1));
          width: 22px;
          height: 22px;
          border: 2px solid transparent;
          border-radius: 100px
        }
      
        .gg-chevron-down::after {
          content: "";
          display: block;
          box-sizing: border-box;
          position: absolute;
          width: 10px;
          height: 10px;
          border-bottom: 2px solid var(--color-orange);
          border-right: 2px solid var(--color-orange);
          transform: rotate(45deg);
          left: 4px;
          top: 2px
        }

        .gg-chevron-up {
          box-sizing: border-box;
          position: relative;
          display: block;
          transform: scale(var(--ggs,1));
          width: 22px;
          height: 22px;
          border: 2px solid transparent;
          border-radius: 100px
        }
      
        .gg-chevron-up::after {
          content: "";
          display: block;
          box-sizing: border-box;
          position: absolute;
          width: 10px;
          height: 10px;
          border-top: 2px solid;
          border-right: 2px solid;
          transform: rotate(-45deg);
          left: 4px;
          bottom: 2px
        }

        .content-wrapper {
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 0 10px 10px 10px;
        }

        .toggle {
          display: none;
        }

        .title-wrapper {
          display: flex;
          justify-content: space-between;
          padding: 10px;
        }      

        @media (max-width: 1024px) {
          .content-wrapper {
            display: none;
          }

          .content-wrapper.open {
            display: flex;
          }

          .toggle {
            display: block;
          }
        }
      </style>


      <div class="container">
        <div class="title-wrapper">
          <div class="title">${this.title}</div>
          <i class="toggle gg-chevron-down"></i>
        </div>
        <div class="content-wrapper">
          <slot id="content-slot" name="content"></slot>
        </div>
      </div>      
    `;

    this.title = this.getAttribute("title");

    this.toggle = shadow.querySelector(".toggle");
    this.titleWrapper = shadow.querySelector(".title-wrapper");
    this.container = shadow.querySelector(".container");
    this.contentWrapper = shadow.querySelector(".content-wrapper");

    this.titleWrapper.addEventListener("click", this.toggleSection);
  }

  toggleSection = () => {
    const style = getComputedStyle(this.contentWrapper);
    const display = style.getPropertyValue("display");

    if (display === "none") {
      this.contentWrapper.classList.add('open');
      this.toggle.classList.remove("gg-chevron-down");
      this.toggle.classList.add("gg-chevron-up");
    } else {
      this.contentWrapper.classList.remove('open');
      this.toggle.classList.remove("gg-chevron-up");
      this.toggle.classList.add("gg-chevron-down");
    }
  };
}

customElements.define("ui-collapse-panel", CollapsePanel);
