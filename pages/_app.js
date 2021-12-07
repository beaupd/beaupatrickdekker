import Head from "next/head"
import "../styles/global.css"

const Website = ({ Component, pageProps, router }) => {
    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;600;700&display=swap" rel="stylesheet" />
                <link rel="icon shortcut" href="/logo.svg" />
            </Head>
            <Component {...pageProps} key={router.route} />
        </>
    )

}
export default Website