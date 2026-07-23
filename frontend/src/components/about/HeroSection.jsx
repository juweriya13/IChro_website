import heroImage from "../../assets/hero.png";
import { ArrowRight, Eye, Target } from "lucide-react";

function HeroSection() {
  return (
    <>
      {/* ================= HERO ================= */}

      <section
        className="relative min-h-[88vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        {/* Overlay */}

        <div className="absolute inset-0 bg-white/55"></div>

        {/* Soft Gradient */}

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/35 to-transparent"></div>

        {/* ================= PAGE TITLE ================= */}

        <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20 w-full text-center px-6">

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            About ICHRO Software</h2>

          <p className="mt-3 text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-7">

            Delivering trusted Human Resource, Technology and Business
            Process Management solutions for organizations across
            diverse industries.

          </p>

        </div>

        {/* ================= HERO CONTENT ================= */}

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-48 pb-24 flex items-center min-h-[88vh]">

          <div className="max-w-3xl">

            {/* Heading */}

            <h1 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-semibold text-[#7FAE4A] leading-tight">
              Building Trust
              Through People,
              Technology & Innovation
            </h1>

            {/* Description */}

            <p className="mt-8 text-lg text-slate-700 leading-8 max-w-2xl">

              At ICHRO Software, we combine innovative technology,
              intelligent workforce solutions, and business expertise
              to help organizations streamline operations,
              embrace digital transformation, and achieve
              sustainable growth.

            </p>

            {/* Button */}

            <button className="mt-10 inline-flex items-center gap-3 bg-[#7FAE4A] hover:bg-[#6F9B42] transition-all duration-300 px-8 py-4 rounded-xl text-white font-semibold shadow-lg">

              Explore Our Services

              <ArrowRight size={18} />

            </button>

          </div>

        </div>

      </section>

      {/* ================= VISION & MISSION ================= */}

      <section className="relative -mt-20 z-20 pb-20">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-8">

            {/* Vision */}

            <div className="bg-white rounded-3xl shadow-xl p-8 border border-[#E6F0DD] hover:shadow-2xl transition-all duration-300">

              <div className="w-14 h-14 rounded-2xl bg-[#EEF7E7] flex items-center justify-center mb-6">

                <Eye className="text-[#7FAE4A]" />

              </div>

              <h3 className="text-3xl font-bold text-slate-900">

                Our Vision

              </h3>

              <p className="mt-5 text-slate-700 leading-8">

                To become a trusted global partner in business
                transformation by delivering innovative HR,
                technology, and digital solutions that inspire
                growth, efficiency, and long-term success.

              </p>

            </div>

            {/* Mission */}

            <div className="bg-white rounded-3xl shadow-xl p-8 border border-[#E6F0DD] hover:shadow-2xl transition-all duration-300">

              <div className="w-14 h-14 rounded-2xl bg-[#EEF7E7] flex items-center justify-center mb-6">

                <Target className="text-[#7FAE4A]" />

              </div>

              <h3 className="text-3xl font-bold text-slate-900">

                Our Mission

              </h3>

              <p className="mt-5 text-slate-700 leading-8">

                We empower businesses with reliable HR services,
                intelligent software solutions, and customer-focused
                innovation that simplifies operations and creates
                measurable business value.

              </p>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default HeroSection;