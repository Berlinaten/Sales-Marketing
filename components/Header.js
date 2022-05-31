import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <div className='container'>
                <Link href='/' passHref>
                    <h4>Sales& Marketing News und Blog</h4>
                </Link>
            </div>
        </header>
    )
}
