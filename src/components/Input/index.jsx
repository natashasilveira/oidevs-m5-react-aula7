import './Input.css';
import PropTypes from 'prop-types';


const Input = ({label, text, loginFail, hideContent, change}) => {
  let textColor;
  if(loginFail) textColor = "#830505"
  else textColor = "white"

  return (
    <div className='inputContainer'
      style={{color: textColor}}
    >
      <label htmlFor={label}>{text}</label>
      <br></br>
      <input id={label} 
        type={hideContent ? "password" : "text"}
        onChange={change}
      />
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string,
  change: PropTypes.func
}

export default Input;