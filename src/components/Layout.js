import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <div className="app-bg min-h-screen flex flex-col items-center justify-center">
      <div className="app-container my-0 sm:my-6 flex-grow w-screen sm:max-w-md sm:shadow-2xl sm:rounded-2xl sm:overflow-hidden flex flex-col">
        <Header />
        <main className="flex-grow bg-white flex flex-col">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
