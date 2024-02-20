class Payment extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "closed" });
    shadow.innerHTML = `
      <link rel="stylesheet" href="./styles/select.css" />
      <link rel="stylesheet" href="./styles/buttons.css" />
      <link rel="stylesheet" href="./styles/inputs.css" />

      <style>
        .container {
          display: flex;
          flex-direction: column;
          margin: 50px;
        }

        .form {
          display: grid;
          grid-template-columns: 1fr 2fr;
          width: 500px;
          gap: 10px;
          align-items: center;
        }

        .currency-wrapper {
          display: flex;
        }

        .currency-wrapper input {
          flex: 1;
          margin-right: 5px;
        }

        label {
          text-align: right;
          margin-right: 5px;
        }

        .cta-row {
          margin-top: 15px;
          display: flex;
          gap: 15px;
          justify-content: end;
        }

        .input-wrapper {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        @media screen and (max-width: 1024px) {
          .form {
            grid-template-columns: 1fr;
            width: 100%;
          }
          label {
            text-align: left;
          }
          .currency-wrapper {
            flex-direction: column;
            gap: 5px;
          }
          .currency-wrapper input {
            margin-right: 0;
          }
          .cta-row {
            flex-direction: column;
          }
        }

      </style>

      <div class="container">
        <form>
          <div class="form">
              <label for="account">Account</label>

              <div class="custom-select">
                <select  name="account" id="account">
                  <option value="1" selected>Account name 1</option>
                  <option value="2">20 Account name 2</option>
                </select>
              </div>

              <label for="saved">Saved payments</label>
              <div class="custom-select">
                <select name="saved" id="saved">
                  <option value="">Select a saved payment</option>
                </select>
              </div>

              <label class="amount" for="amount">Amount</label>
              <div class="currency-wrapper">
                <div class="input-wrapper">
                  <input type="text" id="amount" name="amount">
                  <div></div>
                </div>

                <div class="custom-select">
                  <select name="currency" id="currency">
                    <option value="EUR" selected>EUR</option>
                    <option value="USD">USD</option>
                  </select>        
                </div>
              </div>

              <label class="description" for="description">Description</label>
              <input type="text" id="description">
          </div>

          <div class="cta-row">
            <button type="submit" data-variant="secondary">Save</button>
            <button type="submit">Pay</button>
          </div>
        </form>
      </div>
    `;

    this.form = shadow.querySelector("form");
    this.amountElement = shadow.querySelector("#amount");
    const inputWrapper = shadow.querySelector(".input-wrapper");
    this.errorElement = inputWrapper.querySelector("div");

    this.form.addEventListener("submit", this.submitHandler);
  }

  submitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const amount = Object.fromEntries(formData)["amount"];
    const isNumber = !isNaN(amount);

    if (isNumber) {
      this.amountElement.style.border = "1px solid rgb(188, 216, 219)";
      this.errorElement.innerHTML = "";
    } else {
      this.amountElement.style.border = "1px solid red";
      this.errorElement.innerHTML = "Amount accepts only numbers";
      this.errorElement.style.color = "red";
    }
  };
}

customElements.define("ui-payment", Payment);
