import Container from "./Container";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";

function Navbar({ onContactClick }) {
  const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Careers", path: "/careers" },
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
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-700 font-medium hover:text-[var(--color-primary)] transition-colors duration-200"
                >
                  {link.name}
                </Link>
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