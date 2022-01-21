import Container from "../layouts/Container";
import { Heading1 } from "../headings";
import { useEffect, useState, useRef } from "react";
import {TextLink, Button} from "../navs/";
import CanvasComponent from "./CanvasComponent";

const Lander = () => {
    const [isLoading, setLoading] = useState(true);
    const [canvasState, setCanvas] = useState();

    useEffect(() => {
        let throttle;
        const refreshCanvas = () => {
            setCanvas(<CanvasComponent />);
            setLoading(false);
        };
        const onResize = () => {
            setCanvas();
            setLoading(true);
            clearTimeout(throttle);
            throttle = setTimeout(refreshCanvas, 300);
        };
        refreshCanvas();

        window.addEventListener("resize", () => onResize());
        return () => window.removeEventListener("resize", () => onResize());
    }, []);

    return (
        <Container className="h-screen w-full bg-dark p-20">
            {canvasState}

            {/* <header>
                    <Heading1 className="text-light relative">Beau<br /> Patrick<br /> Dekker</Heading1>
                    <p className="text-light text-4xl font-light tagline relative">Junior Fullstack Developer</p>
                </header>

                <main>
                    <p className="text-light text-lg mt-16 md:max-w-xl relative">
                        I'm currently a front-end developer at <TextLink href="https://www.unica.nl/">Unica</TextLink>, 
                        a student at <TextLink href="https://fdnd.nl/">FDND</TextLink>(Front-end design & development), 
                        a traditional chinese medicine student at <TextLink href="https://ohm-academy.info/">OHM-Academy</TextLink> and I do anything web freelance.<br/><br/>
                        I specialize in transforming ideas or designs into code. I love making fullstack web-apps for startups or small companies with great idea's and interactivity on the web.
                    </p>

                    <Button className="text-light mt-8 relative">Contact me</Button>
                </main> */}

            <div
                className={`${
                    isLoading ? "block" : "hidden"
                } absolute right-20 bottom-20 text-light`}
            >
                Loading...
            </div>
        </Container>
    );
};

export default Lander;
