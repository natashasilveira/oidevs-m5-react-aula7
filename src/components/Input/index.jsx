import './Input.css';

function Input({label, text}) {
  return (
    <div className='inputContainer'>
      <label htmlFor={label}>{text}</label>
      <br></br>
      <input id={label} type="text" />
    </div>

  )
}

export default Input;