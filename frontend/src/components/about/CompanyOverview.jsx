import {
  BriefcaseBusiness,
  Users,
  LaptopMinimal,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

import companyImage from "../../assets/company-overview.jpg";

function CompanyOverview() {
  return (
    <section className="py-24 bg-[var(--color-section)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ================= Heading ================= */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-[var(--color-primary)] font-semibold uppercase tracking-[0.2em]">
            Who We Are
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight text-[var(--color-heading)]">
            Empowering Businesses
            <br />
            Through{" "}
            <span className="text-[var(--color-primary)]">
              People & Technology
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-[var(--color-text)]">
            At ICHRO Software, we deliver integrated HR, staffing,
            payroll, compliance, and digital transformation solutions
            that enable organizations to operate more efficiently while
            embracing innovation.
          </p>

        </div>

        {/* ================= Content ================= */}

        <div className="grid lg:grid-cols-2 gap-20 items-center mt-20">

          {/* Left Image */}

          <div>

            <img
              src={companyImage}
              alt="ICHRO Software"
              className="w-full rounded-3xl border border-[var(--color-border)] shadow-lg object-cover"
            />

          </div>

          {/* Right Content */}

          <div>

            <h3 className="text-3xl font-bold text-[var(--color-heading)]">
              Building Long-Term Business Partnerships
            </h3>

            <p className="mt-6 text-[var(--color-text)] leading-8">
              We combine experienced professionals, modern technology,
              and customer-centric strategies to provide reliable
              business solutions tailored to every organization's unique
              goals.
            </p>

            <div className="space-y-5 mt-10">

              {[
                "Human Resource Outsourcing",
                "Campus Recruitment Solutions",
                "Payroll & Compliance",
                "Software & Web Development",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <CheckCircle2
                    size={22}
                    className="text-[var(--color-primary)]"
                  />

                  <span className="font-medium text-[var(--color-heading)]">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* ================= Feature Cards ================= */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">

          {[
            {
              icon: Users,
              title: "People First",
              desc: "Building meaningful relationships with clients and employees.",
            },
            {
              icon: LaptopMinimal,
              title: "Technology Driven",
              desc: "Delivering modern software solutions for every business.",
            },
            {
              icon: BriefcaseBusiness,
              title: "Business Excellence",
              desc: "Helping organizations achieve sustainable growth.",
            },
            {
              icon: ShieldCheck,
              title: "Trusted Partner",
              desc: "Reliable support with long-term commitment.",
            },
          ].map((card) => {

            const Icon = card.icon;

            return (

              <div
                key={card.title}
                className="bg-white border border-[var(--color-border)] rounded-3xl p-8 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >

                <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary-light)] flex items-center justify-center mb-6">

                  <Icon
                    size={28}
                    className="text-[var(--color-primary)]"
                  />

                </div>

                <h4 className="text-xl font-bold text-[var(--color-heading)]">
                  {card.title}
                </h4>

                <p className="mt-4 leading-7 text-[var(--color-text)]">
                  {card.desc}
                </p>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}

export default CompanyOverview;