import {Link} from '@nextui-org/link'
import { Button } from '@nextui-org/button'
import Header from 'next/head'
import {Image} from '@nextui-org/image'

export default function FiveZeroZeroErr() {
  return (
    <>
        <Header>
            <title>500 Internal Server Error - TuuperCove</title>
        </Header>
        <Image
            src='/statusbysawaratsuki1004/webp/500ISE.webp'
            alt='500 NOT FOUND by @sawaratsuki1004'
        />
        <p>Feel free to ask us in this issues</p>
        <Link href='https://support.vtuberhub.in.th'>
            <Button>Contact us NOW!!!</Button>
        </Link>
        
        <Link href='/'>
            <Button>Go Back</Button>
        </Link>
    </>
  )
}