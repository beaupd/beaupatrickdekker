import { Heading1, Heading2, Heading3 } from "../components/headings";
import { Container } from "../components/layouts";
import {TextLink, Button} from "../components/navs/";
import Lander from "../components/lander/Lander";

const Home = () => {
    return (
        <>
            <Lander />

            <Container className="mt-40">
                <header>
                    <Heading2 className="text-light">Recent works</Heading2>
                </header>
            </Container>
        </>
    )
}

export default Home
