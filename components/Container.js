const Container = ({children, className}) => {
    return (
        <div className={`container mx-auto text-dark dark:text-light ${className}`}>
            {children}
        </div>
    )
}

export default Container