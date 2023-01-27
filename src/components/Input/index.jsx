import './Input.css';

function Input({label, text, hideContent}) {
  return (
    <div className='inputContainer'>
      <label htmlFor={label}>{text}</label>
      <br></br>
      <input id={label} type={hideContent ? "password" : "text"} />
    </div>

  )
}

export default Input;