class Contact extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "closed" });
    shadow.innerHTML = `
      <link rel="stylesheet" href="./styles/links.css" />
      <style>

      .container {
        padding: 0 10px;
      }

      div {
        margin-bottom: 15px;
      }

      .title {
        padding-top: 10px;
      }

      .tel {
        font-size: 1.6rem;
        font-weight: bold;
        color: var(--color-orange);
      }

      .email a {
        font-size: smaller;
      }

      .contact {
        font-size: smaller;
      }

      .icons {
        display:flex;
        gap: 5px;
      }

      </style>


      <div class="container">
        <div class="title">Contact</div>
        <div class="tel">
          6 310 310
        </div>

        <div class="email">
          <a data-variant="teal-underline" href="mailto:info@swedbank.ee">info@swedbank.ee</a>
        </div>

        <div class="contact">
          SWEDBANK AS
          <br>
          LIIVALAIA 8, 15040 TALLINN
          <br>
          SWIFT kood/BIC: HABAEE2X
          <br>
          Reg. number: 10060701        
        </div>

        <div class="icons">
          <img src="./assets/social_icons/facebook.svg" alt="logo">
          <img src="./assets/social_icons/instagram.svg" alt="logo">
          <img src="./assets/social_icons/youtube.svg" alt="logo">
          <img src="./assets/social_icons/twitter.svg" alt="logo">
          <img src="./assets/social_icons/skype.svg" alt="logo">
        </div>

      </div>      
    `;
  }
}

customElements.define("ui-contact", Contact);
