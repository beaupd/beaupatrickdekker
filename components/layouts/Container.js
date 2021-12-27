const Container = ({children, className=""}) => {
    
    return (
        <section className={`xl:mx-40 ${className}`}>{children}</section>
    )
}

export default Container