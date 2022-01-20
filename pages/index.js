import { Heading1, Heading2, Heading3 } from "../components/headings";
import { Container } from "../components/layouts";
import Lander from "../components/lander/Lander";

const Home = () => {
    return (
        <Main>

            <Container>
                <header>
                    <Heading1 className="text-light">Beau<br /> Patrick<br /> Dekker</Heading1>
                    <p className="text-light text-4xl font-light tagline">Junior Fullstack Developer</p>
                </header>

                <main>
                    <p className="text-light text-lg mt-16 md:max-w-xl ">
                        I'm currently a front-end developer at <TextLink href="https://www.unica.nl/">Unica</TextLink>, 
                        a student at <TextLink href="https://fdnd.nl/">FDND</TextLink>(Front-end design & development), 
                        a traditional chinese medicine student at <TextLink href="https://ohm-academy.info/">OHM-Academy</TextLink> and I do anything web freelance.<br/><br/>
                        I specialize in transforming ideas or designs into code. I love making fullstack web-apps for startups or small companies with great idea's and who love interactivity on the web.
                    </p>

                    <Button className="text-light mt-8">Contact me</Button>
                </main>
                
            </Container>

            <Container className="mt-40">
                <header>
                    <Heading2 className="text-light">Recent works</Heading2>
                </header>
            </Container>
        </Main>
    )
}

export default Home
