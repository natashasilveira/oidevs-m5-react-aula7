import './Button.css'

function Button({url, btnName}) {
  return (
    <a href={url}>
      <button>{btnName}</button>
    </a>
  )
}

export default Button;