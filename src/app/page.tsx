import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1><Link href="/">Home Page</Link></h1>

      <li><Link href="/products">Products</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/about/careers">Careers</Link></li>
      <li><Link href="/products/bottles">Bottles</Link></li>
      <Link href="https://nextjs.org/" target="_blank">Next js site</Link>
    </>
  );
}
