import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getinitialProps(ctx) {
        const initialProps = await Document.getinitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="de" >
            <meta name="google-site-verification" content="dOpGFO0v8SZbZaXAhQ13eR31E1eHX0MgSeOG54r_Hws" />
                <Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }

}

export default MyDocument;
