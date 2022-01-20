import { Heading1, Heading2, Heading3 } from "../components/headings";
import { Container } from "../components/layouts";
import Lander from "../components/lander/Lander";

const Index = () => {
    return (
        <>
            <Lander />

            <Container className="h-screen"></Container>
        </>
    );
};

export default Index;
