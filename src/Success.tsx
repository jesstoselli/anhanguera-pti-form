import "./Success.css";
import welcome from "./welcome.svg";

export default function Success() {
  return (
    <div className='successContainer'>
      <img src={welcome} alt='Welcome!' />
      <h2>You've been successfully registered!</h2>
    </div>
  );
}
