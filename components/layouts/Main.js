import Nav from "../Nav"
import Container from "../Container"

const Main = ({ children }) => {
    return (
        <main className="bg-light dark:bg-dark">
            <Nav />
            <Container>
                {children}
            </Container>
        </main>
    )
}

export default Main