const Button = ({ classes, text, children }) => {
  return (
    <button className={`${classes} flex-grow rounded-md text-sm font-semibold py-1.5`}>{children} {text}</button>
  )
}

export default Button
