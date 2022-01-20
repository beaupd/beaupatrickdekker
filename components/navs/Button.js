const Button = ({children, className="", onClick=null}) => {
    return (
        <button className={`
            border-solid border-2 py-3 px-12 border-current rounded-full 
            overflow-hidden
            
            ${className}
        `} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button