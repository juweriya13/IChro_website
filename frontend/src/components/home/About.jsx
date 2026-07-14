import Container from "../layout/Container";

const coreServices = [
  "HR Outsourcing (HRO)",
  "Campus Recruitment (CRPO)",
  "Payroll & Compliance",
  "HRIS & Payroll Solutions",
  "Website Development",
  "Enterprise Solutions",
];

function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center">

          <span className="text-[var(--color-primary)] font-bold uppercase tracking-[0.2em]">
            About ICHRO Software
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-semibold text-[var(--color-text)] leading-tight">
            Business Process & Technology
            <br />
            Management Solutions
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-600">
            ICHRO Software is a trusted provider of Business Process and
            Technology Management solutions, helping organizations improve
            operational efficiency through innovative HR and technology
            services.

            <br /><br />

            We specialize in Human Resource Outsourcing (HRO), Campus
            Recruitment Process Outsourcing (CRPO), Contract Staffing,
            Payroll & Compliance, HRIS & Payroll Software, Website Design &
            Development, E-Commerce Solutions, and Enterprise Application
            Integration, serving businesses across a wide range of
            industries.
          </p>

          {/* Core Services */}

          <div className="mt-12">

            <h3 className="text-xl font-semibold text-[var(--color-text)] mb-6">
              Our Core Services
            </h3>

            <div className="flex flex-wrap justify-center gap-4">

              {coreServices.map((service) => (

                <span
                  key={service}
                  className="px-5 py-2 rounded-full bg-[var(--color-section)] border border-[var(--color-border)] text-gray-700"
                >
                  {service}
                </span>

              ))}

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}

export default About;