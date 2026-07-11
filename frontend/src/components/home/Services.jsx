import Container from "../layout/Container";

const services = [
  {
    title: "HR Outsourcing",
    description:
      "Comprehensive Human Resource Outsourcing (HRO) solutions to streamline workforce management and improve operational efficiency.",
  },
  {
    title: "HRIS & Payroll",
    description:
      "Automated HRIS, payroll processing, compliance management, and employee lifecycle solutions for modern businesses.",
  },
  {
    title: "Software & Web Development",
    description:
      "Custom software, enterprise applications, responsive websites, and e-commerce solutions tailored to business needs.",
  },
  {
    title: "Recruitment Solutions",
    description:
      "Campus Recruitment (CRPO), contract staffing, and end-to-end recruitment services for organizations across industries.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-[var(--color-section)]"
    >
      <Container>
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[var(--color-primary)] font-semibold uppercase tracking-[0.2em]">
            Our Expertise
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-[var(--color-text)]">
            Solutions That Drive Business Growth
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We deliver integrated HR, technology, and digital transformation
            solutions that help organizations improve productivity, simplify
            operations, and achieve sustainable growth.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl border border-[var(--color-border)] p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Services;