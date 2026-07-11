import Container from "../layout/Container";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-[var(--color-section)]">
      <Container>
        <div className="text-center mb-14">
          <span className="text-[var(--color-primary)] font-semibold uppercase tracking-widest">
            Contact Us
          </span>

          <h2 className="mt-3 text-4xl font-bold text-[var(--color-text)]">
            Let's Start a Conversation
          </h2>

          <p className="mt-4 text-gray-600">
            We'd love to hear from you. Get in touch with our team for any
            business or technology requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Information */}

          <div className="bg-white rounded-2xl p-8 shadow-sm">

            <h3 className="text-2xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div>
                <h4 className="font-semibold text-[var(--color-primary)]">
                  Address
                </h4>

                <p className="text-gray-600">
                  Nagpur, Maharashtra, India
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[var(--color-primary)]">
                  Email
                </h4>

                <p className="text-gray-600">
                  ichrosoftware@gmail.com
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[var(--color-primary)]">
                  LinkedIn
                </h4>

                <p className="text-gray-600">
                  ICHRO Software
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[var(--color-primary)]">
                  Business Hours
                </h4>

                <p className="text-gray-600">
                  Monday – Saturday
                  <br />
                  9:30 AM – 6:30 PM
                </p>
              </div>

            </div>

          </div>

          {/* Contact Form */}

          <div className="bg-white rounded-2xl p-8 shadow-sm">

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-primary)]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-primary)]"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-primary)]"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-primary)]"
              ></textarea>

              <button
                className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-8 py-3 rounded-xl transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </Container>
    </section>
  );
}

export default Contact;