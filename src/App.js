import "./styles.css";
import { useState } from "react";
export default function App3() {
  const [option, setOption] = useState();
  //  value is the current amount we are deopsit or withdraw
  const [value, setValue] = useState();
  // Amount is the account balance
  const [balance, setBalance] = useState(0);
  function main(e) {
    // e.preventDefault which prevents the event that is ocuur.
    e.preventDefault();
    if (!option) alert("Please select Deposit or Withdraw");
    else if (option === "Deposit") {
      setBalance(Number(value) + balance);
      console.log(balance);
    } else {
      const temp = balance - Number(value);
      if (temp < 0) {
        alert("Insufficient Balance");
      } else {
        setBalance(temp);
      }
    }
    setValue("");
  }

  return (
    <div className="First">
      <h1 className="head">AUTOMATED TELLER MACHINE </h1>
      <form onSubmit={main}>
        <br></br>
        <div>
          <label className="label">
            Please Choose Your Transaction
            <br></br>
            <select onChange={(e) => setOption(e.target.value)}>
              <option />
              <option> Deposit </option>
              <option> Withdraw </option>
            </select>
            <br></br>
            <br></br>
            <h2> Your Balance is Rs.{balance}</h2>
            Enter the amount
          </label>
        </div>
        <br></br>
        <input
          type="Number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div>
          <br></br>
          <button className="ok"> SUBMIT </button>
        </div>
      </form>
    </div>
  );
}
