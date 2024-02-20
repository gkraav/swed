class SwedbankValues extends HTMLElement {
    connectedCallback() {
      const shadow = this.attachShadow({ mode: "closed" });
      shadow.innerHTML = `
        <link rel="stylesheet" href="./styles/links.css" />
        <link rel="stylesheet" href="./styles/panel.css" />
  
        <style>
          .panel {
            gap: 10px;
            display: flex;
          }

          .card {
            flex: 1;
            display: flex;
            flex-direction: column;
          }

          p {
            margin: 0 0 10px 0;
            padding: 0;
          }

          .open-heading {
            font-weight: bold;
          }

          .header {
            background-color: var(--color);
            padding: 10px;
            color: white;
            font-weight: bold;
            position: relative;
          }

          .header:before {
            content: ' ';
            height: 0;
            position: absolute;
            width: 0;
            left: 18px;
            bottom: -20px;
            border: 10px solid transparent;
            border-top-color: var(--color);
          }

          .blue {
            --color: #5B8AD6;
          }

          .yellow {
            --color: #F4BA44;
          }       
          
          .purple {
            --color: #C5569A;
          }              

          .content {
            background-color: var(--color-apricot);
            padding: 30px 10px 10px 10px;
            height: 100%;
          }

          .simple-item {
            margin: 0 0 10px 0;
          }

          .simple-item:before {
            content: '';
            display: inline-block;
            margin-right: 5px;
            width: 10px;
            height: 15px;
            border-radius: 0 10px 10px 0;
            background-color: var(--color);
          }

          .bullet {
            width: 10px;
            height: 15px;
            border-radius: 0 10px 10px 0;
            background-color: var(--color);
          }

          @media screen and (max-width: 1024px) {
            .panel {
              flex-direction: column;
            }
          }          
     
        </style>
  
        <div class="panel">
          <div class="card blue">
            <div class="header">
                Open
            </div>
            <div class="content">
                <p class="open-heading">
                    One of the core values of Swedbank
                </p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
          </div>
          <div class="card yellow">
            <div class="header">
                Caring
            </div>
            <div class="content">
                <p>
                    Proin porttitor eleifend pellentesque. Nulla vehicula nec diam sed interdum. Duis venenatis dolor sapien. Nulla euismod diam
                </p>
                <a href="#" data-variant="teal-bullet">Read more</a>
            </div>
          </div>
          <div class="card purple">
            <div class="header">
                Simple
            </div>
            <div class="content">
                <div class="simple-item">Lorem ipsum dolor sit amet</div>
                <div class="simple-item">Lorem ipsum dolor sit amet</div>
            </div>
          </div>            
        </div>
      `;
    }
  }
  
  customElements.define("ui-swedbank-values", SwedbankValues);
  