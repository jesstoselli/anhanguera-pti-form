import { useState } from "react";
import { useNavigate } from "react-router";
import "./Main.css";

function Main() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function handleCancelation() {
    setEmail("");
    setPassword("");
  }

  function handleConfirmation() {
    alert("Confirmation");
    navigate("/success");
  }

  return (
    <div className='App'>
      <h3>Register</h3>
      <div className='forms'>
        <div className='sectionInput'>
          <p className='label'>User</p>
          <input
            className='formInput'
            id='email'
            type='text'
            placeholder='email'
            value={email}
            onChange={(event) => handleEmail(event)}
          />
        </div>

        <div className='sectionInput'>
          <p className='label'>Password</p>
          <input
            className='formInput'
            type='password'
            placeholder='password'
            onChange={(event) => handlePassword(event)}
            value={password}
          />
        </div>

        <div className='sectionInput'>
          <button id='cancelBtn' onClick={handleCancelation}>
            Cancel
          </button>
          <button id='confirmBtn' type='submit' onClick={handleConfirmation}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
