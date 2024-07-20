import React, { useState } from "react";
import "./App.css";


const conversionRates = {
  USD: 1,
  EUR: 0.85,
  Qorot: 10,
  Nan: 15,
  Shoro: 20,
  Toibos: 25,
  Shaurma: 30
};

const ExchangeRates = ({ rates }) => (
  <div className="exchange-rates">
    <h3>Exchange Rates (relative to USD)</h3>
    <ul>
      {Object.entries(rates).map(([currency, rate]) => (
        <li key={currency}>
          1 USD = {rate} {currency}
        </li>
      ))}
    </ul>
  </div>
);

function App() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [result, setResult] = useState(0);

  const handleConvert = () => {
    const fromRate = conversionRates[fromCurrency];
    const toRate = conversionRates[toCurrency];
    const convertedAmount = (amount / fromRate) * toRate;
    setResult(convertedAmount);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Currency Converter</h1>
        <div>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
          />
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            {Object.keys(conversionRates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            {Object.keys(conversionRates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          <button onClick={handleConvert}>Convert</button>
        </div>
        {result && (
          <div>
            <h2>
              {amount} {fromCurrency} is equal to {result.toFixed(2)}{" "}
              {toCurrency}
            </h2>
          </div>
        )}
        <ExchangeRates rates={conversionRates} />
      </header>
    </div>
  );
}

export default App;
