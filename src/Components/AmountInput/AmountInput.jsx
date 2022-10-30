import { useState } from 'react';
import { fetchCurrencies } from '../../Services/ApiCurrencies';

export default function AmountInput({ currency, inputValue, setInputValue, setPlnValue, setRateInfo, setPlnInfo, rateInfo }) {
  const [isLoading, setIsLoading] = useState(false);

  const checkInputValue = (e) => {
    if (e.target.value < 0) {
      e.target.value = e.target.value * -1;
    }
    setInputValue(e.target.value);
  };

  const convertAmount = () => {
    if (inputValue !== '') {
      setIsLoading(!isLoading);
      fetchCurrencies(currency).then((data) => {
        const rate = data.rates[0].mid;
        const calculation = (rate * inputValue).toFixed(2);
        setPlnValue(calculation);
        setRateInfo('1 ' + currency + ' = ' + rate + ' PLN');
        setPlnInfo('PLN');
        setIsLoading(isLoading);
      });
    } else {
      alert('Please fill in amount!');
    }
  };

  return (
    <>
      <div className="number-input">
        <input type="number" className="currency-amount input-style" value={inputValue} onChange={checkInputValue} />
        <p>{rateInfo}</p>
      </div>
      <div className={isLoading ? 'loader' : 'loader-hidden'}></div>
      <button className="button" onClick={convertAmount}>
        Convert
      </button>
    </>
  );
}
