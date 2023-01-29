import './Input.css';
import PropTypes from 'prop-types';


const Input = ({label, text, hideContent}) => {
  return (
    <div className='inputContainer'>
      <label htmlFor={label}>{text}</label>
      <br></br>
      <input id={label} type={hideContent ? "password" : "text"} />
    </div>

  )
}

Input.propTypes = {
  label: PropTypes.string
}

export default Input;