import Link from 'next/link';

export default function Header() {
  return (
    <header className="relative flex items-center max-w-[1120px] mx-auto py-6 px-4 md:px-10 bg-transparent z-10">
      <div className="
        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
        md:static md:translate-x-0 md:translate-y-0
        flex items-center
        w-full md:w-auto justify-center
        pointer-events-none md:pointer-events-auto
      ">
        <img
          src="/images/fametonic-logo.png"
          alt="Fametonic Logo"
          className="h-12 w-auto md:h-14 drop-shadow-[2px_2px_0px_#ff00a8] select-none"
          style={{ filter: 'drop-shadow(2px 2px 0 #ff00a8)' }}
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-10 text-lg font-figtree font-semibold text-[#A9A9A9] ml-auto md:mr-[110px]">
        <NavLink href="/about">About us</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </nav>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-white text-3xl ml-auto focus:outline-none z-10"
        aria-label="Open navigation menu"
      >
        <span>&#9776;</span>
      </button>
    </header>
  );
}

// Custom NavLink component for underline effect
function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="
        relative
        after:content-['']
        after:absolute
        after:left-0
        after:-bottom-1
        after:w-0
        after:h-[2px]
        after:bg-[#00E7F9]
        after:transition-all
        after:duration-300
        hover:after:w-full
        px-1
      "
      style={{ display: 'inline-block' }}
    >
      {children}
    </Link>
  );
}