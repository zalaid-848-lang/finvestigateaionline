import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  component: () => (
    <div className="site-shell" id="top">
      <header className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-8 bg-white/70 backdrop-blur-md border-b border-gray-200/70 shadow-sm">
        <Link to="/" className="flex items-center gap-2 no-underline">
          <span className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            F/
          </span>
          <span className="text-lg font-semibold text-gray-800">finvestigativeai</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <Link to="/" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Home</Link>
          <Link to="/about" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">About</Link>
          <Link to="/product" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Product</Link>
          <Link to="/technology" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Technology</Link>
          <Link to="/traction" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Traction</Link>
          <Link to="/team" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Team</Link>
          <Link to="/contact" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Contact</Link>
          <Link to="/privacy" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Privacy</Link>
          <Link to="/terms" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Terms</Link>
        </nav>
        <Link
          to="/contact"
          className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold px-5 py-2 rounded-full shadow-md hover:scale-105 transition-transform duration-200"
        >
          Contact Us
        </Link>
      </header>
      <Outlet />
      <footer>
        <p>© 2026 Finvestigative AI</p>
      </footer>
    </div>
  ),
})
