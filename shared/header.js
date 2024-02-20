class Header extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "closed" });
    shadow.innerHTML = `
    <style>
      .gg-menu {
        transform: scale(var(--ggs,1))
      }
      
      .gg-menu,
      .gg-menu::after,
      .gg-menu::before {
        box-sizing: border-box;
        position: relative;
        display: block;
        width: 20px;
        height: 2px;
        border-radius: 3px;
        background: currentColor
      }
      
      .gg-menu::after,
      .gg-menu::before {
        content: "";
        position: absolute;
        top: -6px
      }
      
      .gg-menu::after {
        top: 6px
      } 

      .gg-close {
        box-sizing: border-box;
        position: relative;
        display: block;
        transform: scale(var(--ggs,1));
        width: 22px;
        height: 22px;
        border: 2px solid transparent;
        border-radius: 40px
      }
      
      .gg-close::after,
      .gg-close::before {
        content: "";
        display: block;
        box-sizing: border-box;
        position: absolute;
        width: 16px;
        height: 2px;
        background: currentColor;
        transform: rotate(45deg);
        border-radius: 5px;
        top: 8px;
        left: 1px
      }
      
      .gg-close::after {
        transform: rotate(-45deg)
      } 

      .color-stripe {
        height: 5px;
        background: rgb(255,95,0);
        background: linear-gradient(90deg, rgba(255,95,0,1) 0%, rgba(255,194,111,1) 100%);
      }

      header {
        display: flex;
        background-color: white;
        padding: 10px;
        justify-content: space-between;
        align-items: center;
      }

      nav {
        display: flex;
        border-top: 1px solid var(--color-apricot);
        background-color: white;
      }

      nav > a {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: var(--color-bark);
        text-decoration: none;
        padding: 10px;
      }

      nav > a.active {
        color: var(--color-orange);
      }

      nav > a.active img {
        filter: invert(40%) sepia(17%) saturate(6555%) hue-rotate(1deg) brightness(100%) contrast(50%);
      }

      nav a:first-child {
        border-right: 1px solid var(--color-apricot);
      }

      nav a:hover {
        background-color: #f8f8f8;
      }

      #menuToggler {
        display: none;
      }

      @media (max-width: 1024px) {
        nav {
          display: none;
          flex-direction: column;
        }
        nav a {
          align-items: start;
        }
        nav a img {
          display: none;
        }
        nav.opened {
          display: flex;
        }
        #menuToggler {
          display: block;
        }
      }

    </style>

    <div class="color-stripe"></div>

    <header id="header">
      <img src="./assets/swedbank_logo.png" alt="logo">
      <i id="menuToggler" class="gg-menu"></i>
    </header>

    <nav>
      <a id="home" href="index.html" >
        <img src="./assets/home.svg" width="20px" height="18px">
        Home
      </a>
      <a id="banking" href="banking.html">
        <img src="./assets/wallet.svg" width="20px" height="18px">
        Everyday banking
      </a>
    </nav>

    `;

    this.menuToggler = shadow.querySelector("#menuToggler");
    this.navbar = shadow.querySelector("nav");

    this.menuToggler.addEventListener("click", this.toggleMenu);
    this.navbar.addEventListener("mouseover", () => {
      this.dataset.active = true;
    });
    this.navbar.addEventListener("mouseleave", () => {
      this.dataset.active = false;
    });

    const href = window.location.href;
    if (href.includes("index.html")) {
      shadow.querySelector("#home").classList.add("active");
    } else if (href.includes("banking.html")) {
      shadow.querySelector("#banking").classList.add("active");
    }
  }

  toggleMenu = (e) => {
    const isCurrentlyClosed = e.target.classList.contains("gg-menu");

    if (isCurrentlyClosed) {
      this.menuToggler.classList.add("gg-close");
      this.menuToggler.classList.remove("gg-menu");
      this.navbar.classList.add("opened");
      this.dataset.active = true;
    } else {
      this.menuToggler.classList.add("gg-menu");
      this.menuToggler.classList.remove("gg-close");
      this.navbar.classList.remove("opened");
      this.dataset.active = false;
    }
  };
}

customElements.define("ui-header", Header);
