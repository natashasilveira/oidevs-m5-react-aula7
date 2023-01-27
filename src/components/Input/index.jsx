
function Input({label, text}) {
  return (
    <>
      <label htmlFor={label}>{text}</label>
      <input id={label} type="text" />
    </>
  )
}

export default Input;