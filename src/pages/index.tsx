import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <p>Hmm it not finlished, please try again later</p>
      <Link href={'/try'}>Try to click here!</Link>
    </main>
  );
}
