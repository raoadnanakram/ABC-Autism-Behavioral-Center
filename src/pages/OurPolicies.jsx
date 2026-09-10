import React, { useState } from "react";
import { Link } from "react-router-dom";

const OurPolicies = () => {
  // =====================================================
  // STATE
  // =====================================================
  const [openIndices, setOpenIndices] = useState({
    left: null,
    right: null,
  });

  const toggleAccordion = (column, index) => {
    setOpenIndices((prev) => ({
      ...prev,
      [column]: prev[column] === index ? null : index,
    }));
  };

  // =====================================================
  // LEFT COLUMN POLICIES
  // =====================================================
  const leftColumnPolicies = [
    {
      title: "General",
      content:
        "General terms and conditions regarding center sessions, schedule adherence, and policies at Autism Behavioral Center.",
    },
    {
      title: "Site Content & Copyrights",
      content:
        "All assessment frameworks, materials, and digital content provided on this platform are protected under copyright laws.",
    },
    {
      title: "Comments and Feedback",
      content:
        "Parents and guardians are welcome to provide feedback regarding therapy sessions to help us improve care outcomes for children.",
    },
    {
      title: "Newsletter",
      content:
        "Subscribing to our newsletter ensures you receive periodic updates, center event details, and educational autism resources.",
    },
    {
      title: "Indemnification",
      content:
        "Users agree to indemnify and hold harmless Autism Behavioral Center against any claims arising from misuse of site instructions or policies.",
    },
    {
      title: "Link to Other Sites",
      content:
        "Our website may contain links to external third-party sites; we assume no responsibility for their privacy practices or content.",
    },
    {
      title: "Inaccuracy Information",
      content:
        "We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice.",
    },
    {
      title: "Termination",
      content:
        "We may terminate or suspend access to our center services immediately, without prior notice, for conduct that violates our policies.",
    },
  ];

  // =====================================================
  // RIGHT COLUMN POLICIES
  // =====================================================
  const rightColumnPolicies = [
    {
      title: "Payments",
      content:
        "All therapy packages and individual sessions must be booked and settled in advance according to the center's standard billing policy.",
    },
    {
      title: "Privacy and Refund Policy",
      content:
        "Client confidentiality is strictly maintained. Refund requests for therapy packages are subject to our standard center cancellation guidelines.",
    },
    {
      title: "Consent",
      content:
        "By using our platform and registering your child, you hereby consent to our terms and conditions and privacy policy guidelines.",
    },
    {
      title: "Advertising Partners Privacy Policies",
      content:
        "You may consult this list to find the privacy policy for each of the advertising partners of Autism Behavioral Center.",
    },
    {
      title: "Third Party Privacy Policies",
      content:
        "Our Privacy Policy does not apply to other advertisers or websites, and we advise you to consult their respective privacy policies.",
    },
    {
      title: "GDPR Data Protection Rights",
      content:
        "We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to data access and rectification.",
    },
    {
      title: "Children's Information",
      content:
        "Protecting children online is our priority. We encourage parents and guardians to observe, participate in, and monitor their online activity.",
    },
    {
      title: "Refunds and Cancellations Policy",
      content:
        "Cancellations made within 24 hours of scheduled sessions may incur standard charges as outlined in our active cancellation policy.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans pb-16">

      {/* =====================================================
          POLICIES PAGE HERO SECTION
      ===================================================== */}
      <div className="relative w-full h-56 sm:h-72 lg:h-96 overflow-hidden bg-gray-900 flex items-center justify-center">

        <img
          src="https://abcautism.com.my/wp-content/uploads/2017/01/banner-06.jpg"
          alt="Our Policies Banner"
          className="w-full h-full object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Content */}
        <div className="absolute inset-0 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex flex-col justify-center items-center text-center z-10">

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-wide drop-shadow-lg mb-2">
            Our Policies
          </h1>

          <div className="flex items-center space-x-2 text-xs sm:text-sm font-medium text-gray-200 tracking-wider drop-shadow-sm">

            <Link
              to="/"
              className="hover:text-amber-300 transition-colors duration-200 underline underline-offset-4"
            >
              Home
            </Link>

            <span>/</span>

            <span className="text-gray-300">
              Our Policies
            </span>

          </div>

        </div>
      </div>


      {/* =====================================================
          MAIN POLICIES INTRO SECTION
      ===================================================== */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-12 pb-5">

        <div className="text-center max-w-3xl mx-auto space-y-3">

                    <h2 className="text-4xl font-extrabold text-black tracking-wider uppercase bg-[#000000] px-6 py-3 inline-block">

            Terms and Conditions

          </h2>

          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
            We maintain structured policies to ensure a safe, secure, and
            nurturing environment for all children and staff members at
            Autism Behavioral Center.
          </p>

        </div>

      </section>


      {/* =====================================================
          TWO COLUMN ACCORDION SECTION
          8 LEFT + 8 RIGHT
          COMPACT SIZE
      ===================================================== */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-5">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-4">


          {/* =================================================
              LEFT COLUMN
          ================================================= */}
          <div className="space-y-2">

            {leftColumnPolicies.map((item, index) => {

              const isOpen = openIndices.left === index;

              return (
                <div
                  key={index}
                  className="border-b border-gray-200 pb-2 transition-all"
                >

                  {/* Policy Button */}
                  <button
                    type="button"
                    onClick={() => toggleAccordion("left", index)}
                    className="
                      w-full
                      flex
                      items-center
                      justify-between
                      py-2
                      text-left
                      focus:outline-none
                      group
                    "
                  >

                    {/* Policy Title */}
                    <span
                      className="
                        text-sm
                        sm:text-base
                        font-semibold
                        text-gray-900
                        group-hover:text-teal-700
                        transition-colors
                      "
                    >
                      {item.title}
                    </span>


                    {/* Plus / Minus */}
                    <span
                      className="
                        text-base
                        font-bold
                        text-gray-700

                        w-6
                        h-6

                        flex
                        items-center
                        justify-center

                        rounded-full

                        bg-gray-100

                        group-hover:bg-teal-700
                        group-hover:text-white

                        transition-all

                        shadow-sm

                        flex-shrink-0

                        ml-2
                      "
                    >
                      {isOpen ? "−" : "+"}
                    </span>

                  </button>


                  {/* Accordion Content */}
                  {isOpen && (
                    <div
                      className="
                        pt-1
                        pb-2
                        text-gray-600
                        text-[11px]
                        sm:text-xs
                        leading-relaxed
                        animate-fadeIn
                      "
                    >
                      {item.content}
                    </div>
                  )}

                </div>
              );
            })}

          </div>


          {/* =================================================
              RIGHT COLUMN
          ================================================= */}
          <div className="space-y-2">

            {rightColumnPolicies.map((item, index) => {

              const isOpen = openIndices.right === index;

              return (
                <div
                  key={index}
                  className="border-b border-gray-200 pb-2 transition-all"
                >

                  {/* Policy Button */}
                  <button
                    type="button"
                    onClick={() => toggleAccordion("right", index)}
                    className="
                      w-full
                      flex
                      items-center
                      justify-between
                      py-2
                      text-left
                      focus:outline-none
                      group
                    "
                  >

                    {/* Policy Title */}
                    <span
                      className="
                        text-sm
                        sm:text-base
                        font-semibold
                        text-gray-900
                        group-hover:text-teal-700
                        transition-colors
                      "
                    >
                      {item.title}
                    </span>


                    {/* Plus / Minus */}
                    <span
                      className="
                        text-base
                        font-bold
                        text-gray-700

                        w-6
                        h-6

                        flex
                        items-center
                        justify-center

                        rounded-full

                        bg-gray-100

                        group-hover:bg-teal-700
                        group-hover:text-white

                        transition-all

                        shadow-sm

                        flex-shrink-0

                        ml-2
                      "
                    >
                      {isOpen ? "−" : "+"}
                    </span>

                  </button>


                  {/* Accordion Content */}
                  {isOpen && (
                    <div
                      className="
                        pt-1
                        pb-2
                        text-gray-600
                        text-[11px]
                        sm:text-xs
                        leading-relaxed
                        animate-fadeIn
                      "
                    >
                      {item.content}
                    </div>
                  )}

                </div>
              );
            })}

          </div>

        </div>

      </section>

    </div>
  );
};

export default OurPolicies;