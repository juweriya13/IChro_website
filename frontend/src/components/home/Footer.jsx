import Container from "../layout/Container";
import logo from "../../assets/logo/logo.png";

function Footer() {
  return (
    <footer className="bg-[#F5F8F4] border-t border-[#DDE5D8] mt-10">
      <Container>
        <div className="py-12">

          {/* Main Footer */}
          <div className="grid md:grid-cols-3 gap-12">

            {/* Company */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <img
                  src={logo}
                  alt="ICHRO Software"
                  className="h-12 w-12 object-contain"
                />

                <h2 className="text-2xl font-bold text-[var(--color-text)]">
                  ICHRO SOFTWARE
                </h2>
              </div>

              <p className="text-gray-600 leading-7 text-sm max-w-sm">
                Innovative Nature, Limitless Potential.
                Delivering HR, Recruitment, Software Development,
                Payroll, HRIS and Digital Solutions for modern
                businesses.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-5">
                Quick Links
              </h3>

              <ul className="space-y-3 text-gray-600">

                <li>
                  <a
                    href="#home"
                    className="hover:text-[var(--color-primary)] transition"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="#about"
                    className="hover:text-[var(--color-primary)] transition"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="#services"
                    className="hover:text-[var(--color-primary)] transition"
                  >
                    Services
                  </a>
                </li>

                <li>
                  <a
                    href="#contact"
                    className="hover:text-[var(--color-primary)] transition"
                  >
                    Contact
                  </a>
                </li>

              </ul>
            </div>

            {/* Contact */}
            <div>

              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-5">
                Contact
              </h3>

              <div className="space-y-3 text-gray-600 text-sm">

                <p>
                  Nagpur, Maharashtra, India
                </p>

                <p>
                  +91 XXXXX XXXXX
                </p>

                <p>
                  info@ichrosoftware.com
                </p>

                <p>
                  Monday – Saturday
                </p>

                <p>
                  9:30 AM – 6:30 PM
                </p>

              </div>

            </div>

          </div>

          {/* Divider */}

          <div className="border-t border-[#DDE5D8] my-8"></div>

          {/* Bottom */}

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-gray-500 text-sm">
              © 2026 ICHRO Software. All Rights Reserved.
            </p>

            <div className="flex gap-6 text-sm text-gray-500">

              <a
                href="#"
                className="hover:text-[var(--color-primary)] transition"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="hover:text-[var(--color-primary)] transition"
              >
                Terms
              </a>

            </div>

          </div>

        </div>
      </Container>
    </footer>
  );
}

export default Footer;