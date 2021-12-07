import Landing from "../components/layouts/Landing"
import Divider from "../components/Divider"
import Nav from "../components/Nav"
import Button from "../components/utilities/Button"

const Index = () => {
    return (
        <>
            <Landing>
                <header className="mb-24 mt-10 sm:mb-36">
                    <h1 className="uppercase text-6xl sm:text-9xl flex flex-col font-semibold text-dark dark:text-light sm:tracking-tightst">
                        <span>Beau</span>
                        <span className="-my-4 sm:-my-9">Patrick</span>
                        <span>Dekker</span>
                    </h1>
                    <h3 className="text-lg sm:text-3xl text-dark dark:text-light font-light sm:pl-2 -mt-4">Junior Fullstack Developer</h3>
                </header>

                <Nav />

                <Divider className="my-4 bg-black dark:bg-white" />

                <section>
                    <header className="w-full flex items-center">
                        <h2 className="uppercase font-bold tracking-tight text-5xl mt-20 ml-auto">
                            About
                        </h2>
                    </header>
                    
                    <main>

                    </main>

                    <Button>Contact</Button>
                </section>

                <Divider className="my-4 bg-black dark:bg-white " />
            </Landing>
        </>
    )
}

export default Index