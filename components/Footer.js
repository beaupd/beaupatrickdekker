import Divider from "./Divider"
import Container from "./Container"
import Clipboard from "./utilities/Clipboard"
import Button from "./utilities/Button"
import LinkHover from "./utilities/LinkHover"

const Footer = () => {
    return (
        <footer className="w-full absolute left-0 flex items-center flex-col">
            <Container>
                {/* <header className=" my-5">
                    <h2 className="text-6xl">Beau Patrick Dekker</h2>
                </header> */}

                <main className="flex justify-between px-10 font-semibold mt-10">
                    <ul className="">
                        <h4 className="opacity-80 pb-3 ">Contact</h4>
                        <li>E-mail: <br /><Clipboard copy="beau@patrickdekker.nl">beau@patrickdekker.nl</Clipboard></li>
                        <li>Phone: <br /><Clipboard copy="31630022508">+316 300 22 508</Clipboard></li>
                    </ul>

                    <ul className="">
                        <h4 className="opacity-80 pb-3">Links</h4>
                        <li><LinkHover>Home</LinkHover></li>
                        <li><LinkHover>About</LinkHover></li>
                        <li><LinkHover>Works</LinkHover></li>
                        <li><LinkHover>Contact</LinkHover></li>
                        <li><LinkHover href="/styleguide">Styleguide</LinkHover></li>
                        <li><LinkHover>Blog</LinkHover></li>
                        <li><LinkHover>Resumé</LinkHover></li>
                    </ul>

                    <div className="flex flex-col justify-between">
                        <ul className="">
                            <h4 className="opacity-80 pb-3">Social</h4>
                        </ul>
                        <Button>Subscribe</Button>
                    </div>

                </main>

                <Divider className="mt-10" />

                <p className=" w-full text-center py-5 uppercase font-semibold tracking-tight">
                    Designed by <a>Beau Dekker</a>
                </p>
            </Container>
        </footer>
    )
}

export default Footer