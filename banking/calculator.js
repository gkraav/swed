class Calculator extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "closed" });
    shadow.innerHTML = `
      <link rel="stylesheet" href="./styles/select.css" />
      <link rel="stylesheet" href="./styles/buttons.css" />

      <style>
        .container {
          display: flex;
          align-items: stretch;
          margin: 50px;
          gap: 10px;
        }

        .calculator {
          flex: 2;
          flex-direction: column;
          border-right: 1px solid var(--color-grey);
        }

        .payment {
          flex: 1
        }

        .row {
          display: flex;
          gap: 10px;
          margin-bottom: 10px;
          align-items: center;
        }

        label {
          min-width: 200px;
          text-align: right;
        }

        label.loan {
          align-self: baseline;
        }

        .slider {
          min-width: 300px;
          -webkit-appearance: none;
          height: 12px;
          border-radius: 5px;
          background: #d3d3d3;
          outline: none;
          opacity: 0.7;
          -webkit-transition: .2s;
          transition: opacity .2s;
        }

        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background: var(--color-orange);
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background: var(--color-orange);
          cursor: pointer;
        }

        .slider-wrapper {
          position: relative;
          margin-bottom: 20px;
        }

        .sum {
          position: absolute;
          top: -25px;
          left: var(--value, -10px);
          color: var(--color-orange);
        }

        .monthly-payment {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid var(--color-grey);
        }

        .apply {
          justify-content: end;
        }

        .big-sum {
          color: var(--color-orange);
          font-size: 2rem;
        }

        .range {
          position: absolute;
          display: flex;
          justify-content: space-between;
          width: 100%;
          top: 4px;
          margin-top: 20px;
        }

        @media screen and (max-width: 1024px) {
          .container {
            flex-direction: column;
          }
          .calculator {
            border-right: none;
          }
          .monthly-payment {
            border-bottom: none;
          }
          .row {
            flex-direction: column;
            align-items: flex-start;
          }
          label.loan {
            margin-bottom: 20px;
          }
          label {
            text-align: left;
          }
        }
      </style>

      <div class="container">

        <div class="calculator">
          <div class="row">
            <label class="loan" for="loan">Loan size</label>
            <div class="slider-wrapper">
              <div class="sum">32000€</div>
              <input type="range" min="32000" max="320000" value="32000" step="1000" class="slider">
              <div class="range"><div>32000€</div> <div>320000€</div></div>
            </div>
          </div>        
          <div class="row">
            <label for="period">Period</label>
            <div class="custom-select">
              <select name="period" id="period">
                <option value="10">10 Years</option>
                <option value="20">20 Years</option>
                <option value="30" selected>30 Years</option>
              </select>
            </div>
          </div>
          <div class="row">
            <label for="interest">Interest</label>
            <div class="custom-select">
              <select name="interest" id="interest">
                <option value="3.5">3.5%</option>
                <option value="4.5" selected>4.5%</option>
              </select>
            </div>
          </div>          
        </div>

        <div class="payment">
          <div class="row monthly-payment">
            Monthly payment
            <div class="total"></div>
          </div>
          <div class="row apply">
            <button>Apply</button>
          </div>
        </div>

      </div>
    `;

    this.slider = shadow.querySelector(".slider");
    this.sumElement = shadow.querySelector(".sum");
    this.periodElement = shadow.querySelector("#period");
    this.interestElement = shadow.querySelector("#interest");
    this.totalElement = shadow.querySelector(".total");

    this.slider.addEventListener("input", this.slideListener);
    this.periodElement.addEventListener("change", this.periodInterestListener);
    this.interestElement.addEventListener(
      "change",
      this.periodInterestListener
    );

    this.calc();
  }

  calc() {
    let inputAmount = parseInt(this.slider.value);
    let inputInterest = parseFloat(this.interestElement.value);
    let inputPeriod = parseInt(this.periodElement.value);

    let interest = inputInterest / 100 / 12;

    let x = Math.pow(1 + interest, inputPeriod * 12);
    let monthly = Math.round((inputAmount * x * interest) / (x - 1));

    this.totalElement.innerHTML = `<span class="big-sum">${monthly}</span> EUR`;
  }

  periodInterestListener = () => {
    this.calc();
  };

  slideListener = (a) => {
    const sum = a.target.value - 32000;

    const value = (sum / 320000) * 100;

    this.sumElement.style.setProperty("--value", `calc(${value}% - 10px)`);
    this.sumElement.innerHTML = a.target.value + "€";

    this.calc();
  };
}

customElements.define("ui-calculator", Calculator);
