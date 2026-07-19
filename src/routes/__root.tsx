import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  component: () => (
    <div className="site-shell" id="top">
      <header className="site-header">
        <Link to="/" style={{ color: '#f5f0e8', textDecoration: 'none' }}>
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>F/</span>
          <span>finvestigativeai</span>
        </Link>
        <nav className="desktop-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/product">Product</Link>
          <Link to="/technology">Technology</Link>
          <Link to="/traction">Traction</Link>
          <Link to="/team">Team</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </nav>
        <Link to="/contact" style={{
          background: '#d4c5a0',
          color: '#191a18',
          padding: '0.5rem 1.5rem',
          borderRadius: '4px',
          textDecoration: 'none'
        }}>
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
