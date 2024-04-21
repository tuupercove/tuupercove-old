import Navbar from './defaultlay/Navbar'
import {Footer} from './defaultlay/Footer'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Navbar />
      {children}
      <Footer />
    </section>
  )
}
