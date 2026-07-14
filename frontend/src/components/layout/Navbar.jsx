import Container from "./Container";
import logo from "../../assets/logo/logo.png";

function Navbar({ onContactClick }) {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between h-24">

          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <img
              src={logo}
              alt="ICHRO Software Logo"
              className="h-12 w-12 object-contain"
            />

            <h1 className="text-2xl font-bold tracking-wide text-[var(--color-text)]">
              ICHRO SOFTWARE
            </h1>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-8">

            {/* Navigation */}
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 font-medium hover:text-[var(--color-primary)] transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Button */}
            <button
              onClick={onContactClick}
              className="bg-[var(--color-primary)] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[var(--color-primary-dark)] transition-all duration-300"
            >
              Get in Touch
            </button>

          </div>

        </div>
      </Container>
    </nav>
  );
}

export default Navbar;