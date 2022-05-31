import Link from 'next/link'

export default function Header() {
    return (
        <html lang="de">
        <header>
            <div className='container'>
                <Link href='/' passHref>
                    <h4>Sales& Marketing News und Blog</h4>
                </Link>
            </div>
        </header>
    )
}
