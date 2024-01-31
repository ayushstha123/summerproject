import Link from "next/link";

export default function Header(){
    return(
        <header className="z-10 bg-white p-2 flex items-center justify-between sticky top-0">
      <Link href=""  className="font-extrabold text-2xl">NCFS</Link>
      <nav className="flex gap-9 items-center text-gray-600 font-extralight">
      <Link href={''}>Home</Link>
      <Link href={''}>Menu</Link>
      <Link href={''}>About</Link>
      <Link href={''}>Contact</Link>
      <Link href={''} className="bg-green-500 px-6 py-2 rounded-full text-white">Login</Link>
      </nav>
    </header>
    )
}