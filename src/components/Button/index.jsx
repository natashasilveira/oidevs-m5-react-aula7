
function Button({link, btnName}) {
  return (
    <a href={link}>
      <button>{btnName}</button>
    </a>
  )
}

export default Button;