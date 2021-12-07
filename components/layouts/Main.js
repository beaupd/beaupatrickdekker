import Nav from "../Nav"
import Container from "../Container"
import Footer from "../Footer"

const Main = ({ children }) => {
    return (
        <main className="bg-light dark:bg-dark">
            <Nav />
            <Container>
                {children}
            </Container>
            <Footer />
        </main>
    )
}

export default Main