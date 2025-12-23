

function Button({onClick,label}){
    console.log('Button Rendered:', label);

    return <button onClick={onClick}>{label}</button>
}

export default Button;