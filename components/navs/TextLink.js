const TextLink = ({children, href="/", className=""}) => {
    return (
        <a href={href} target="_blank" className={`font-bold ${className}`} rel="noreferrer">
            {children}
        </a>
    )
}

export default TextLink