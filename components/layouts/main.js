import Head from "next/head"
import Navigation from "../navigation"
import Footer from "../footer"

const Main = ({ children, router}) => {

    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap" rel="stylesheet"/>
                <title>Beau Patrick Dekker</title>
            </Head>

            <main>
                <Navigation />
                {children}
                <Footer />
            </main>
        </div>
    )
}

export default Main