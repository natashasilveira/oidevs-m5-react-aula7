import './Button.css'
import PropTypes from 'prop-types';


const Button = ({ bgColor, color, btnName, click }) => {
  return (
    <button
      style={{backgroundColor: bgColor, color}}
      onClick={click}
    >
      {btnName}
    </button>
  )
}

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
  click: PropTypes.func,
  bgColor: PropTypes.string,
  color: PropTypes.string
}

Button.defaultProps = {
  bgColor: "#a13954",
  color: "white"
}

export default Button;