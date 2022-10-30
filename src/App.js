import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Select from './Components/SelectMenu/Select';
import AmountInput from './Components/AmountInput/AmountInput';
import AmountOutput from './Components/AmountOutput/AmountOutput';

function App() {
  const [currency, setCurrency] = useState('USD');
  const [inputValue, setInputValue] = useState('');
  const [plnValue, setPlnValue] = useState('');
  const [rateInfo, setRateInfo] = useState('');
  const [plnInfo, setPlnInfo] = useState('');

  const reset = () => {
    setPlnValue('');
    setRateInfo('');
    setPlnInfo('');
    setInputValue('');
  };

  return (
    <div className="container">
      <Header />
      <main>
        <Select setCurrency={setCurrency} reset={reset} />
        <div className="convert">
          <AmountInput
            currency={currency}
            inputValue={inputValue}
            setInputValue={setInputValue}
            setPlnValue={setPlnValue}
            setRateInfo={setRateInfo}
            setPlnInfo={setPlnInfo}
            rateInfo={rateInfo}
          />
          <AmountOutput plnValue={plnValue} plnInfo={plnInfo} />
        </div>
      </main>
    </div>
  );
}
export default App;
