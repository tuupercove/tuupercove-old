import Link from 'next/link'

export default function ForZeroForErrPage() {
    return (
        <div>
            <p>Huh? 404 is found. ummm something is wrong bro.</p>
            <Link href='/'>Return to My home</Link>
        </div>
    )
}