import Divider from "./Divider"
import Container from "./Container"

const Footer = () => {
    return (
        <footer className="w-full bg-black absolute left-0 flex items-center flex-col">
            <Container>
                {/* <header className="text-light my-5">
                    <h2 className="text-6xl">Beau Patrick Dekker</h2>
                </header> */}

                <main className="flex justify-between px-1/4 font-semibold mt-10">
                    <ul className="text-light">
                        <h4 className="opacity-80 pb-3 ">Contact</h4>
                        <li></li>
                    </ul>

                    <ul className="text-light">
                        <h4 className="opacity-80 pb-3">Links</h4>
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Works</a></li>
                        <li><a>Contact</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Resumé</a></li>
                    </ul>

                    <ul className="text-light">
                        <h4 className="opacity-80 pb-3">Social</h4>
                    </ul>
                </main>

                <Divider className="bg-light mt-10" />

                <p className="text-light w-full text-center py-5">
                    Designed by <a>Beau Dekker</a>
                </p>
            </Container>
        </footer>
    )
}

export default Footer