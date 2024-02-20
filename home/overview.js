class Overview extends HTMLElement {
    connectedCallback() {
      const shadow = this.attachShadow({ mode: "closed" });
      shadow.innerHTML = `
        <link rel="stylesheet" href="./styles/panel.css" />
        <link rel="stylesheet" href="./styles/links.css" />
  
        <style>
          .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .icon {
            display: flex;
            gap: 5px;
            align-items: center;
            font-size: smaller;
            color: #55A1AC;
          }

          .header p {
            margin: 0;
            padding: 0;
            font-weight: bold;
          }

          .pull-right {
            margin-left: auto;
            margin-right: 10px;
          }

          table tr th:not(:first-child), table tr td:not(:first-child) {
            text-align: right;
          }

          table {
            margin-top: 20px;
            width: 100%;
            border-collapse: collapse;
          }

          tbody tr {
            border-bottom: 1px solid #EBE7E2;
          }

          thead {
            background-color: #ECF7FA;
            padding: 5px;
          }

          th:first-child {
            text-align: left;
          }

          th, td {
            font-weight: normal;
            padding: 10px;
          }

          tfoot td:not(:last-child) {
            font-weight: bold;
          }

          tfoot .total {
            font-size: 1.6rem;
          }

          @media screen and (max-width: 1024px) {
            .hide-mobile {
              display: none;
            }
          }

        </style>
  
        <div class="panel">
            <div class="header">
              <p>Your Swedbank overview</p>

              <div class="icon pull-right">
                <img class="pdf" src="./assets/pdf.svg" alt="pdf">
                PDF
              </div>
              <div class="icon">
                <img class="pdf" src="./assets/pdf.svg" alt="xsl">
                XSL
              </div>              
            </div>

            <table>
              <thead>
                <tr>
                  <th>Account</th>
                  <th class="hide-mobile">Balance</th>
                  <th class="hide-mobile">Credit</th>
                  <th class="hide-mobile">Reserved</th>
                  <th>Available</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><a href="#" data-variant="teal-underline">Siim Tamm</a> EE752200221057734534</td>
                  <td class="hide-mobile">3 342 000.00</td>
                  <td class="hide-mobile">20.00</td>
                  <td class="hide-mobile">725.00</td>
                  <td>900.56 EUR</td>
                </tr>
                <tr>
                  <td><a href="#" data-variant="teal-underline">Marju Lepik</a> EE752200221057734534</td>
                  <td class="hide-mobile">50.90</td>
                  <td class="hide-mobile">2 000.00</td>
                  <td class="hide-mobile"></td>
                  <td>3 000.00 EUR</td>
                </tr>
                <tr>
                  <td><a href="#" data-variant="teal-underline">Liina Roosipõld</a> EE752200221057734534</td>
                  <td class="hide-mobile">12 041.00</td>
                  <td class="hide-mobile">20.00</td>
                  <td class="hide-mobile"></td>
                  <td>1300.12 EUR</td>
                </tr>                                
              </tbody>
              <tfoot>
                <tr>
                  <td>Total:</td>
                  <td class="hide-mobile">5456.56</td>
                  <td class="hide-mobile">456.56</td>
                  <td class="hide-mobile"></td>
                  <td><span class="total">456.56</span> EUR</td>
                </tr>
              </tfoot>
            </table>
        </div>
      `;
    }
  }
  
  customElements.define("ui-overview", Overview);
  