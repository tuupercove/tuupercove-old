import {Link} from '@nextui-org/link'
import { Button } from '@nextui-org/button'
import Header from 'next/head'
import {Image} from '@nextui-org/image'

export default function ForZeroForErrPage() {
    return (
        <div>
            <Header>
                <title>404 is welcome - TuuperCove</title>
            </Header>
            <Image
                src='/statusbysawaratsuki1004/webp/404NF.webp'
                alt='404 NOT FOUND by @sawaratsuki1004'
            />
            <Link href='/'>
                <Button>Return to My home</Button>
            </Link>
        </div>
    )
}