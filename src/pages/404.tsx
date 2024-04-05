import Link from 'next/link'
import Header from 'next/head'

export default function ForZeroForErrPage() {
    return (
        <div>
            <Header>
                <title>404 is welcome - TuuperCove</title>
            </Header>
            <p>Huh? 404 is found. ummm something is wrong bro.</p>
            <Link href='/'>Return to My home</Link>
        </div>
    )
}