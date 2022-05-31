import Link from 'next/link'

export default function Header() {
    return (
        <html lang="de">
        <meta name='robots' content='index, follow />
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="google-site-verification" content="dOpGFO0v8SZbZaXAhQ13eR31E1eHX0MgSeOG54r_Hws" />
        <header>
            <div className='container'>
                <Link href='/' passHref>
                    <h4>Sales& Marketing News und Blog</h4>
                </Link>
            </div>
        </header>
    )
}
