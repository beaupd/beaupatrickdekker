import Head from "next/head"
import Navigation from "../Navigation"

const Main = ({ children, router}) => {
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Beau Patrick Dekker</title>
                <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet" />
            </Head>

            <main>
                <Navigation/>
                {children}
            </main>
        </div>
    )
}

export default Main