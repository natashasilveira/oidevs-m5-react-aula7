import './Input.css';
import PropTypes from 'prop-types';


const Input = ({label, text, hideContent, change}) => {
  return (
    <div className='inputContainer'>
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
  label: PropTypes.string
}

export default Input;