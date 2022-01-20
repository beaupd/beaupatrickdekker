import {Navbar} from "../navs/"

const Main = ({children}) => {
    return (
        <>
            <Navbar/>
            <main className="mt-24">
                {children}
            </main>
        </>
    )
}

export default Main