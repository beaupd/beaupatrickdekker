import Nav from "../Nav"

const Main = ({children}) => {
    return(
        <main className="bg-light dark:bg-dark">
            <Nav/>
            {children}
        </main>
    )
}

export default Main