import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header Component */}
        <header className="bg-gray-800 text-white p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold">My Website</div>
            <ul className="flex space-x-4">
              <li>
                <Link href="/">
                  <p className="hover:text-gray-400">Home</p>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <p className="hover:text-gray-400">Products</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p className="hover:text-gray-400">About Us</p>
                </Link>
              </li>
             
            </ul>
          </nav>
        </header>

        {/* Main content */}
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}

