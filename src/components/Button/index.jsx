import './Button.css'

function Button({ btnName, redirect }) {
  return (
    <button
      onClick={redirect}
    >
      {btnName}
    </button>
  )
}

export default Button;