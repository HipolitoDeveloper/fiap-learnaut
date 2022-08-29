import "./Button.styles.css"

const Button = ({children, backgroundColor, type}) => {
    return (
        <button type={type ?? "button"} className="button" style={{backgroundColor: backgroundColor}}>{children}</button>
    )
}

export default Button