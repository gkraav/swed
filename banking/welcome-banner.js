class WelcomeBanner extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "closed" });
    shadow.innerHTML = `
      <link rel="stylesheet" href="./styles/links.css" />
      <link rel="stylesheet" href="./styles/buttons.css" />
      <link rel="stylesheet" href="./styles/panel.css" />

      <style>
        :host {
          display: block;
        }

        .welcome-banner {
          background-color: var(--color-mist);
          display: flex;
          padding: 20px;
          gap: 20px;
        }

        .heading {
          font-weight: bold;
        }

        .cta-row {
          display: flex; 
          justify-content: space-between;
        }

        .circle {
          height: 100px;
          width: 100px;
          background-color: var(--color-pineapple);
          border-radius: 50%;
          display: inline-block;
          position: relative;
        }

        .circle::before {
          content: 'Hello World';
          position: absolute;
          top: 40px;
          left: 10px;
          color: white;
        }

        .circle::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 25px;
          color: white;

          width: 0px;
          height: 0px;
          border-left: 25px solid transparent;
          border-right: 25px solid transparent;
          border-top: 25px solid var(--color-pineapple);
        }

        @media (max-width: 1024px) {
          .welcome-banner {
            flex-direction: column;
            align-items: center;
          }
  
          .cta-row {
            flex-direction: column;
            gap: 5px;
          }
        }        
      </style>

      <div class="panel">
        <div class="welcome-banner">
          <div><span class="circle"></span></div>
          <div>
            <div>
              <p class="heading">Welcome to Swedbank!</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              </p>
            </div>
            <div class="cta-row">
              <a href="#" data-variant="teal-bullet">Read more</a>
              <button>Go</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("ui-welcome-banner", WelcomeBanner);
