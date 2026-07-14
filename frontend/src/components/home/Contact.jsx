import Container from "../layout/Container";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
} from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-white">
      <Container>

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-[var(--color-primary)] uppercase tracking-[0.2em] font-semibold">
            Contact Us
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-[var(--color-text)]">
            We'd Love To Hear From You</h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Get in touch with ICHRO Software for business inquiries,
            HR solutions, software services, and technology consulting.</p>
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-[var(--color-section)] rounded-3xl border border-[var(--color-border)] p-10">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="flex gap-4">

              <MapPin
                className="text-[var(--color-primary)] mt-1" size={26}/>
              <div>

                <h3 className="font-semibold text-xl">
                  Office Address</h3>

                <p className="mt-2 text-gray-600">
                  Nagpur, Maharashtra, India </p>

              </div>
            </div>
            <div className="flex gap-4">

              <Phone
                className="text-[var(--color-primary)] mt-1" size={26}/>

              <div>

                <h3 className="font-semibold text-xl">
                  Phone</h3>

                <p className="mt-2 text-gray-600">
                  +91 XXXXX XXXXX </p>

              </div>
            </div>
            <div className="flex gap-4">

              <Mail
                className="text-[var(--color-primary)] mt-1"
                size={26} />

              <div>
                <h3 className="font-semibold text-xl">
                  Email </h3>

                <p className="mt-2 text-gray-600">
                  info@ichrosoftware.com </p>

              </div>
            </div>

            <div className="flex gap-4">

              <Globe
                className="text-[var(--color-primary)] mt-1" size={26} />

              <div>

                <h3 className="font-semibold text-xl">
                  Website </h3>

                <p className="mt-2 text-gray-600">
                  www.ichrosoftware.com </p>

              </div>
            </div>

            <div className="flex gap-4">

              <Clock
                className="text-[var(--color-primary)] mt-1" size={26}/>
              <div>

                <h3 className="font-semibold text-xl">
                  Business Hours </h3>

                <p className="mt-2 text-gray-600">
                  Monday – Saturday
                  <br />
                  9:30 AM – 6:30 PM
                </p>

              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}

export default Contact;