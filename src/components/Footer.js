import Link from "next/link"

export default function Footer() {
  return (
    <header className="py-6 bg-gray-900">
      <nav className="flex items-center justify-center">
        <Link href="/">
          <a className="text-lg mx-2 text-white">Home</a>
        </Link>
        <Link href="/timeline">
          <a className="text-lg mx-2 text-white">Timeline</a>
        </Link>
      </nav>
      <Link href="/">
        <h1 className="text-4xl text-purple-700 font-mono font-light text-center">
          GRADEV
        </h1>
      </Link>
    </header>
  )
}
