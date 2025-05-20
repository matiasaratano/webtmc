import Link from "next/link"

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-sm font-medium hover:text-gray-600">
            Inicio
          </Link>
          <Link href="/seminario" className="text-sm font-medium hover:text-gray-600">
            Seminario
          </Link>
        </div>
      </div>
    </header>
  )
} 