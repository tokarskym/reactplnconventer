export default function Select({ setCurrency, reset }) {
  const handleSelectChange = (event) => {
    setCurrency(event.target.value);
    reset();
  };

  return (
    <div className="select-menu">
      <select onChange={handleSelectChange}>
        <option value="USD" defaultValue>
          USD
        </option>
        <option value="CHF">CHF</option>
        <option value="EUR">EUR</option>
      </select>
    </div>
  );
}
