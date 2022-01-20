import Head from "next/head"
import {useRouter} from "next/router"
import "../styles/global.css";


function Website({ Component, pageProps }) {
    const router = useRouter()
    const {location} = router.query
    return (
        <>
            <Head>
                <title>Beau Patrick Dekker - {location}</title>
            </Head>
            <Component {...pageProps} />
        </>
    ) 
    
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default Website;
