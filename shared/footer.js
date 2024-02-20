class Footer extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "closed" });
    shadow.innerHTML = `
      <link rel="stylesheet" href="./styles/links.css" />

      <style>
        footer {
          border-top: 5px solid var(--color-orange);
          margin-top: 20px;
          padding-top: 10px;
          background-color: var(--color-grey);
        }

        .footer-content {
          max-width: 1260px;
          display: flex;
          margin: 0 auto;
          align-items: stretch;
          justify-content: center;
        }

        .footer-content a {
          padding: 5px 0;
          font-size: smaller;
        }

        .footer-section {
          flex: 1;
        }

        .legal {
          background-color: white;
        }

        .legal .text {
          max-width: 960px;
          margin: 0 auto;
          font-size: smaller;
          padding: 15px 0;
        }

        @media (max-width: 1024px) {
          .footer-content {
            flex-direction: column;
          }
          .footer-section {
            border-bottom: 1px solid #80808057;
          }
        }        
      </style>

      <footer>
        <div class="footer-content">
          <div class="footer-section">
            <ui-contact></ui-contact>
          </div>
          <div class="footer-section">
            <ui-collapse-panel title="Quicklinks">
              <a data-variant="bark-bullet" href="#" slot="content">Calculators</a>
              <a data-variant="bark-bullet" href="#" slot="content">Prices</a>
              <a data-variant="bark-bullet" href="#" slot="content">Terms of seervice</a>
              <a data-variant="bark-bullet" href="#" slot="content">Privacy and security</a>
            </ui-collapse-panel>
          </div>
          <div class="footer-section">
            <ui-collapse-panel title="Join Swedbank">
              <a data-variant="bark-bullet" href="#" slot="content">Client programs</a>
              <a data-variant="bark-bullet" href="#" slot="content">Business customers</a>
              <a data-variant="bark-bullet" href="#" slot="content">Jobs</a>
              <a data-variant="bark-bullet" href="#" slot="content">Internships</a>
            </ui-collapse-panel>
          </div>
          <div class="footer-section">
            <ui-collapse-panel title="Products">
              <a data-variant="bark-bullet" href="#" slot="content">Everyday banking</a>
              <a data-variant="bark-bullet" href="#" slot="content">Loans</a>
              <a data-variant="bark-bullet" href="#" slot="content">Insurance</a>
              <a data-variant="bark-bullet" href="#" slot="content">Cards</a>
              <a data-variant="bark-bullet" href="#" slot="content">Stocks</a>
            </ui-collapse-panel>
          </div>
        </div>
      </footer>

      <div class="legal">
        <div class="text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </div>
      </div>
    `;
  }
}

customElements.define("ui-footer", Footer);
