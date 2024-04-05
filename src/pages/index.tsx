import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Header from "next/head"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header>
        <title>Home - TuuperCove</title>
      </Header>
      <p>Hmm it not finlished, please try again later</p>
      <Link href='/try'>Try to click here!</Link>
    </main>
  );
}

// homepage of https://vtuberhub.in.th
// Repository: https://github.com/CcNopebruh/tuupercove