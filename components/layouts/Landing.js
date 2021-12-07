import Container from "../Container"
import Footer from "../Footer"

const Main = ({ children }) => {
    return (
        <main className="bg-light dark:bg-dark">
            <Container className="bg-light dark:bg-dark">
                {children}
            </Container>
            <Footer/>
        </main>
    )
}

export default Main