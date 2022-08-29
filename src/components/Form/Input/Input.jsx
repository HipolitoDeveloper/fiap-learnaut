import {useRoutes} from "react-router-dom";

const Input = ({type, onChange, placeholder, label, name}) => {


    return (
        <div>
            <label htmlFor={name}>
                {label}
            </label>
            <input
                placeholder={placeholder}
                name={name}
                type={type ?? "text"}
                onChange={(event) => onChange(event.target.name, event.target.value)}/>
        </div>
    )
}

export default Input