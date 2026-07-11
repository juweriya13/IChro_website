import Container from "../layout/Container";

function Hero() {
  return (
    <section id="home" className="bg-[var(--color-section)]">
      <Container>
        <div className="min-h-[85vh] grid lg:grid-cols-2 items-center gap-16">

          {/* Left Side */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-[var(--color-primary)] font-semibold text-sm">
              Innovative Nature • Limitless Potential
            </span>

            <h1 className="mt-6 text-5xl lg:text-6xl font-bold leading-tight text-[var(--color-text)]">
              Building Smart
              <br />
              Digital Solutions
              <br />
              For Modern Businesses.
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl">
              ICHRO Software empowers businesses through innovative
              software development, web applications, HR technology,
              digital transformation, and enterprise solutions that
              drive sustainable growth.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#services"
                className="bg-[var(--color-primary)] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[var(--color-primary-dark)] transition-colors duration-200" >
                Explore Our Services
                </a>

              {/* <button className="border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white px-7 py-3 rounded-xl transition duration-300 font-medium">
                Contact Us
              </button> */}

            </div>
          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <div className="w-full max-w-md aspect-square rounded-3xl bg-white shadow-xl border border-[var(--color-border)] flex items-center justify-center">

              <div className="text-center">

                <div className="text-7xl">💻</div>

                <h3 className="mt-4 text-2xl font-bold text-[var(--color-text)]">
                  Technology
                </h3>

                <p className="mt-2 text-gray-500">
                  Illustration Placeholder
                </p>

              </div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}

export default Hero;