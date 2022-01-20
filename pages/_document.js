import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
            <meta name="description" content="Beau Patrick Dekker a full stack developer's portfolio website"/>
            <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;300;400;600;700&display=swap" rel="stylesheet"/>
            <link rel="icon shortcut" href="/logo.svg" />
        </Head>
        
        <body>
          <Main />
          
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument