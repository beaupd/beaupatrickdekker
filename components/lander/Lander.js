import Container from "../layouts/Container";
import { Heading1 } from "../headings";
import { useEffect, useState, useRef } from "react";
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

            <header>
                <Heading1 className="text-light relative">
                    Beau
                    <br /> Patrick
                    <br /> Dekker
                </Heading1>
            </header>

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
