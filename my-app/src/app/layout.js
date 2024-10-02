import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header Component */}
        <header className="p-4 text-white bg-gray-800">
          <nav className="container flex items-center justify-between mx-auto">
            <div className="text-2xl font-bold">My Website</div>
            <ul className="flex space-x-4">

              <div className="flex justify-center gap-3 mr-32">

                
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
              </div>

              
              <li>
                <Link href="/signup">
                  <p className="hover:text-gray-400">signup</p>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <p className="hover:text-gray-400">Login</p>
                </Link>
              </li>
              {/* <li>
                <Link href="/about">
                  <p className="hover:text-gray-400">About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/data">
                  <p className="hover:text-gray-400">Data</p>
                </Link>
              </li>
              <li>
                <Link href="/productsIncremental">
                  <p className="hover:text-gray-400">Products Incremental</p>
                </Link>
              </li>
              <li>
                <Link href="/productsServer">
                  <p className="hover:text-gray-400">Products Server</p>
                </Link>
              </li>
              <li>
                <Link href="/productsStatic">
                  <p className="hover:text-gray-400">Products Static</p>
                </Link>
              </li>
              <li>
                <Link href="/cart">
                  <p className="hover:text-gray-400"> cart</p>
                </Link>
              </li> */}
             
            </ul>
          </nav>
        </header>

        {/* Main content */}
        <main className="container p-4 mx-auto">{children}</main>
      </body>
    </html>
  );
}

