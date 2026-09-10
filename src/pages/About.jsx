import React from 'react';
import BilalImg from '../assets/Bilal.jpeg';

const About = () => {
  return (
    <div className="w-full font-sans text-gray-800 bg-white overflow-x-hidden">

      {/* =========================================================
          1. HORIZONTAL BANNER WITH BREADCRUMB
      ========================================================= */}
      <div className="relative w-full h-[250px] sm:h-[300px] bg-gray-900 overflow-hidden flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format&fit=crop"
          alt="Speech Therapy Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wider uppercase mb-2 drop-shadow-md">
            About Us
          </h1>

          <p className="text-xs sm:text-sm font-medium tracking-wide text-gray-200">
            <a
              href="/"
              className="hover:underline hover:text-teal-300 transition"
            >
              Home
            </a>

            <span className="mx-2">/</span>

            <span className="text-teal-400">
              About Us
            </span>
          </p>
        </div>
      </div>


      {/* =========================================================
          2. OVERVIEW SECTION
      ========================================================= */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* =====================================================
                LEFT SIDE - OVERVIEW IMAGE
            ===================================================== */}
            <div className="lg:col-span-5">

              <div className="relative max-w-[560px] mx-auto">

                {/* Decorative Shape */}
                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl bg-[#38959c]/10"></div>

                {/* Image Container */}
                <div className="relative overflow-hidden rounded-2xl bg-gray-100 shadow-xl border border-gray-100">

                  <img
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1400&auto=format&fit=crop"
                    alt="ABC Team Overview"
                    className="w-full h-[360px] sm:h-[440px] lg:h-[500px] object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                  />

                  {/* Image Bottom Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent h-28 pointer-events-none"></div>

                </div>

                {/* Small Badge */}
                <div className="absolute -bottom-6 left-5 sm:left-8 bg-white shadow-lg rounded-xl px-5 py-3 border border-gray-100">

                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
                    ABC Pakistan
                  </p>

                  <p className="text-sm font-extrabold text-[#2d545e]">
                    Autism Behavioral Center
                  </p>

                </div>

              </div>

            </div>


            {/* =====================================================
                RIGHT SIDE - OVERVIEW CONTENT
            ===================================================== */}
            <div className="lg:col-span-7 pt-4 lg:pt-0">

              {/* Section Heading */}
              <div className="mb-7">

                <p className="text-[11px] sm:text-xs font-bold tracking-[0.22em] uppercase text-[#38959c] mb-2">
                  About ABC
                </p>

                <h2
                  className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-wide"
                  style={{ color: '#2d545e' }}
                >
                  Overview
                </h2>

                <div className="mt-4 flex items-center gap-2">
                  <div className="w-14 h-1 bg-[#38959c] rounded-full"></div>
                  <div className="w-3 h-1 bg-[#f0746c] rounded-full"></div>
                </div>

              </div>


              {/* Main Content */}
              <div className="space-y-4 text-[13px] sm:text-sm leading-7 text-gray-600">

                <p>
                  <strong className="text-[#2d545e]">
                    ABC (Autism Behavioral Center)
                  </strong>{' '}
                  is proudly awarded{' '}
                  <span className="font-bold text-gray-800">
                    Best Early Intervention Center in 2025
                  </span>{' '}
                  in the South East Asia Business Awards.
                </p>


                <p>
                  We are the largest 1:1 ABA (Applied Behavior Analysis)
                  Center in Pakistan, with{' '}
                  <span className="font-bold text-gray-800">
                    40 individual therapy rooms
                  </span>
                  . This allows us to provide each child with a focused
                  learning environment with minimal distractions.
                </p>


                <p>
                  Every child's education is individualized according to
                  their{' '}
                  <span className="font-semibold text-gray-800">
                    IEP (Individualised Education Plan)
                  </span>{' '}
                  and individual abilities. Our programs are designed to
                  support each child's developmental, behavioral and
                  communication needs.
                </p>


                <p>
                  ABC is supervised directly by a{' '}
                  <span className="font-semibold text-gray-800">
                    Board Certified Behavior Analyst (BCBA)
                  </span>
                  , ensuring that ABA therapy is delivered according to
                  international standards and professional best practices.
                </p>


            

                <p>
                  Children as young as{' '}
                  <span className="font-semibold text-gray-800">
                    15 months
                  </span>{' '}
                  can enroll in our intervention programs. ABC also
                  supports teenagers and adults, welcoming families from
                  countries around the world.
                </p>


          


                <p className="font-semibold text-[#2d545e]">
                  Intervention is conducted solely in the English language.
                </p>

              </div>


              {/* =====================================================
                  CONTACT INFORMATION
              ===================================================== */}
              <div className="mt-8 pt-6 border-t border-gray-200">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                  {/* Phone */}
                  <div className="flex items-start gap-3">

                    <div className="w-10 h-10 flex-shrink-0 rounded-full bg-[#38959c]/10 flex items-center justify-center">
                      <span className="text-base">
                        📞
                      </span>
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1">
                        Contact Us
                      </p>

                      <a
                        href="tel:+60122852007"
                        className="text-sm font-bold text-[#2d545e] hover:text-[#38959c] transition"
                      >
                        +92300-1330450
                      </a>
                    </div>

                  </div>


                  {/* Email */}
                  <div className="flex items-start gap-3">

                    <div className="w-10 h-10 flex-shrink-0 rounded-full bg-[#f0746c]/10 flex items-center justify-center">
                      <span className="text-base">
                        ✉️
                      </span>
                    </div>

                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1">
                        Email
                      </p>

                      <a
                        href="mailto:info@abcautism.com.my"
                        className="text-sm font-bold text-[#2d545e] hover:text-[#38959c] transition break-all"
                      >
                        abcautismbehaviouralcenter@gmail.com
                      </a>
                    </div>

                  </div>

                </div>



              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          3. WHAT MAKES US STAND OUT
      ========================================================= */}
      <section className="relative bg-[#f0746c] text-white py-16 sm:py-20 px-5 sm:px-8 lg:px-12 overflow-hidden">

        {/* Background Circle */}
        <div className="absolute -right-28 -top-28 w-[400px] h-[400px] rounded-full border-[70px] border-white/10 pointer-events-none"></div>

        <div className="absolute -left-20 -bottom-32 w-[300px] h-[300px] rounded-full border-[50px] border-white/10 pointer-events-none"></div>


        <div className="max-w-6xl mx-auto relative z-10">

          {/* Heading */}
          <div className="mb-10">

            <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-bold text-white/75 mb-2">
              Why Choose ABC
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wide uppercase">
              What Makes Us Stand Out?
            </h2>

            <div className="mt-4 w-16 h-1 bg-white rounded-full"></div>

          </div>


          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">

            <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
              <span className="w-6 h-6 flex-shrink-0 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                ✓
              </span>

              <p className="text-xs sm:text-sm leading-6 font-medium">
                Team of consultants with a combined total of 15 years of
                experience working with individuals in the spectrum
              </p>
            </div>


            <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
              <span className="w-6 h-6 flex-shrink-0 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                ✓
              </span>

              <p className="text-xs sm:text-sm leading-6 font-medium">
                Dedicated team of experienced therapists
              </p>
            </div>


            <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
              <span className="w-6 h-6 flex-shrink-0 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                ✓
              </span>

              <p className="text-xs sm:text-sm leading-6 font-medium">
                Strategic location and pick up service from lobby
              </p>
            </div>


            <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
              <span className="w-6 h-6 flex-shrink-0 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                ✓
              </span>

              <p className="text-xs sm:text-sm leading-6 font-medium">
                Dedicated individual rooms for intensive 1:1 ABA therapy
              </p>
            </div>


            <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
              <span className="w-6 h-6 flex-shrink-0 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                ✓
              </span>

              <p className="text-xs sm:text-sm leading-6 font-medium">
                In progress: paperless and viewing the progress online
              </p>
            </div>


            <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
              <span className="w-6 h-6 flex-shrink-0 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                ✓
              </span>

              <p className="text-xs sm:text-sm leading-6 font-medium">
                Monthly progress meetings with your team of therapists
                and consultants
              </p>
            </div>


            <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
              <span className="w-6 h-6 flex-shrink-0 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                ✓
              </span>

              <p className="text-xs sm:text-sm leading-6 font-medium">
                Daily reports provided
              </p>
            </div>


            <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
              <span className="w-6 h-6 flex-shrink-0 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                ✓
              </span>

              <p className="text-xs sm:text-sm leading-6 font-medium">
                Individual Education Plan (IEP)
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          4. WHO ARE OUR THERAPISTS
      ========================================================= */}
      <section className="bg-white py-16 sm:py-20">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-xl border border-gray-100">

            {/* =====================================================
                LEFT - THERAPIST IMAGE
            ===================================================== */}
            <div className="relative h-[350px] sm:h-[450px] lg:h-[560px] overflow-hidden bg-gray-100">

            <img
  src={BilalImg}
  alt="Our Therapist"
  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
/>

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6">

                <div className="inline-block bg-white/95 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg">

                  <p className="text-[10px] uppercase tracking-widest font-bold text-[#38959c]">
                    Professional Care
                  </p>

                  <p className="text-sm font-bold text-[#2d545e]">
                    Dedicated & Experienced Therapists
                  </p>

                </div>

              </div>

            </div>


            {/* =====================================================
                RIGHT - THERAPIST CONTENT
            ===================================================== */}
            <div className="relative bg-[#fca139] text-white px-6 sm:px-10 lg:px-12 py-12 sm:py-14 lg:py-16 flex items-center overflow-hidden">

              {/* Decorative Circle */}
              <div className="absolute -right-24 -bottom-24 w-72 h-72 rounded-full border-[55px] border-white/10 pointer-events-none"></div>

              <div className="relative z-10 max-w-xl">

                <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-bold text-white/75 mb-2">
                  Our Team
                </p>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wide uppercase">
                  Who Are Our Therapists?
                </h2>

                <div className="mt-4 mb-7 w-14 h-1 bg-white rounded-full"></div>


                {/* Content Card 1 */}
                <div className="mb-5 bg-white/10 rounded-xl p-5 border border-white/10">

                  <div className="flex items-start gap-3">

                    <div className="w-9 h-9 flex-shrink-0 rounded-full bg-white/15 flex items-center justify-center">
                      <span className="text-sm">
                        ✓
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm leading-7 font-medium text-white/95">
                      All our therapists have a minimum diploma/degree in
                      Psychology, Education, Special Needs or related fields
                      only. All therapists are personally trained by our
                      Director (Charlene) and team trainers for a total of
                      100 hours before being assigned to children for ABA
                      therapy.
                    </p>

                  </div>

                </div>


                {/* Content Card 2 */}
                <div className="bg-white/10 rounded-xl p-5 border border-white/10">

                  <div className="flex items-start gap-3">

                    <div className="w-9 h-9 flex-shrink-0 rounded-full bg-white/15 flex items-center justify-center">
                      <span className="text-sm">
                        ✓
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm leading-7 font-medium text-white/95">
                      All our therapists have received CPR and Safety
                      training, as well as background checks by prior
                      employers and references.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


    </div>
  );
};

export default About;