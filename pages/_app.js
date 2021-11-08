import Layout from "../components/layouts/Main"
import "../styles/global.css"

const Website = ({ Component, pageProps, router}) => {
    return(
        <Layout>
            <Component {...pageProps} key={router.route}/>
        </Layout>
    )
}

export default Website