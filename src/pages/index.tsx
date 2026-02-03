import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Next.js Activity</title>
        <meta name="activity" content="Next.js Activity" />
      </Head>

      <Header />

      <div>
        <Image src="/next.svg" width={100} height={100} alt="Next Logo" />
        <nav>
          <Link href="/ssr">SSR Page</Link> | <Link href="/ssg">SSG Page</Link>{" "}
          | <Link href="/post/John">Dynamic Page</Link>
        </nav>
      </div>
    </>
  );
}
