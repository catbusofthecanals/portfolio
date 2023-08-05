import Link from 'next/link'

// Header component

const Header = () => (
    <div className="header-container">
      {/* link to pages */}
        <Link href="/">
          <p>Home</p>
        </Link>
        <Link href="/about">
          <p>About</p>
        </Link>
        <Link href="/projects">
          <p>Projects</p>
        </Link>
        <Link href="/contact">
          <p>Contact</p>
        </Link>
        <style jsx>{`
        .header-container {
          padding: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center
        }
      `}</style>
    </div>
)

export default Header