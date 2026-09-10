import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  // =====================================================
  // SCROLL TO APPOINTMENT SECTION
  // =====================================================
  const scrollToFooter = () => {
    const footer = document.getElementById("footer");

    if (footer) {
      footer.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  // =====================================================
  // SERVICES DATA
  // =====================================================
  const services = [
    {
      title: "CENTER BASED",
      color: "bg-[#43A7B4]",
      icon: "https://img.icons8.com/ios/100/777777/brain.png",
      description:
        "Behavioral intervention using principles of ABA (Applied Behavior Analysis) aims to improve speech and communication, social skills, behavior, independence and school readiness skills. ABC implements Pennsylvania Training and Technical Assistance Network (PaTTAN) technology developed by Dr. Amiris Dipuglia and Mr. Mike Miklos (BCBA) in USA. All programs are individualized for each unique individual.",
    },

    {
      title: "HOME BASED",
      color: "bg-[#9B86C6]",
      icon: "https://img.icons8.com/ios/100/777777/reading.png",
      description:
        "Behavioral intervention using principles of ABA (Applied Behavior Analysis) aims to improve speech and communication, social skills, behavior, independence and school readiness skills. ABC implements Pennsylvania Training and Technical Assistance Network (PaTTAN) technology developed by Dr. Amiris Dipuglia and Mr. Mike Miklos (BCBA) in USA. All programs are individualized for each unique individual.",
    },

    {
      title: "SHADOW AIDE / PLA SUPPORT",
      color: "bg-[#F0646D]",
      icon: "https://img.icons8.com/ios/100/777777/teacher.png",
      description:
        "A trained ABA therapist supporting in school to assist in communication, socialisation, emotion regulation, academics, taking and following through instructions and tasks.",
    },

    {
      title: "FREE AUTISM SCREENINGS & AUTISM AWARENESS TALK",
      color: "bg-[#F0646D]",
      icon: "https://img.icons8.com/ios/100/777777/search-client.png",
      description:
        "A FREE service provided to help parents or educators identify if their child is at risk of Autism and to provide consultation on early intervention. Free autism screening, include (ages 16 months – 30 months only) *Terms & Conditions apply.",
    },

    {
      title: "AUTISM AWARENESS TALK IN SCHOOLS/ORGANIZATIONS",
      color: "bg-[#F8A343]",
      icon: "https://img.icons8.com/ios/100/777777/training.png",
      description:
        "An education and training program for parents and teachers on the topics below:",
      extra:
        "– Identifying autism, ADHD and general developmental delays\n– Screening for Autism\n– Screening for ADHD\n– Identifying functions of behaviors and basic behavior management strategies\n– Identifying skills for school readiness skills\nFees start at RM450 an hour",
    },

    {
      title: "DIAGNOSTIC ASSESSMENT AND EVALUATION",
      color: "bg-[#64C8DA]",
      icon: "https://img.icons8.com/ios/100/777777/todo-list.png",
      description:
        "Our in house Clinical Psychological provide diagnosis and evaluation services in:",
      extra:
        "– Autism Diagnosis\n– ADHD Diagnosis\n– Global Delay Development Diagnosis\n– Intellectual Disabilities Diagnosis\n– Intelligence Testing\n– Developmental Level Testing\n– Adaptive Functioning Assessment\n– School Placement Assessment and Screening",
    },

    {
      title: "OCCUPATIONAL THERAPY",
      color: "bg-[#43A7B4]",
      icon: "https://img.icons8.com/ios/100/777777/health-book.png",
      description:
        "Providing an option to drop off your child earlier for therapy prior to their regular sessions.",
      extra:
        "– OT addresses attention\n– Sensory challenges\n– ADL (activity of daily living skills)\n– Balance and coordination\nThere is no age limitation.",
    },

    {
      title: "ADAPTIVE FITNESS SESSIONS",
      color: "bg-[#9B86C6]",

      // FIXED FITNESS ICON
      icon: "https://img.icons8.com/ios-filled/100/777777/dumbbell.png",

      description:
        "A fun and engaging programme specially designed to help children build confidence, improve coordination, develop motor skills, and enjoy movement in a supportive group setting.",
      extra:
        "– Small groups\n– Led by qualified special needs providers\n– Learning through active play\n30 minutes session (Once a week)",
    },

    {
      title: "SPEECH THERAPY",
      color: "bg-[#F0646D]",
      icon: "https://img.icons8.com/ios/100/777777/speech-bubble.png",
      description:
        "– Designed to seamlessly integrate into your child’s ABA program",
      extra:
        "– The speech therapist will work directly with the team and your child’s case supervisor and your individualized speech drills and practices",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans">

      {/* =====================================================
          SERVICES PAGE HERO SECTION
      ===================================================== */}
      <div className="relative w-full h-56 sm:h-72 lg:h-96 overflow-hidden bg-gray-900 flex items-center justify-center">

        <img
          src="https://i.pinimg.com/1200x/76/f5/1c/76f51cd7adb31df7e98d11e9bf3a098f.jpg"
          alt="Services Banner"
          className="w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex flex-col justify-center items-center text-center z-10">

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-wide drop-shadow-lg mb-2">
            Services
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
              Services
            </span>

          </div>

        </div>
      </div>


      {/* =====================================================
          MAIN SERVICES CONTENT SECTION
      ===================================================== */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-12 lg:py-16">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* =================================================
              LEFT IMAGE
          ================================================= */}
          <div className="lg:col-span-5 flex justify-center">

            <div className="w-full max-w-md rounded-lg overflow-hidden shadow-md">

              <img
                src="https://abcautism.com.my/wp-content/uploads/2017/02/services-img-01.jpg"
                alt="Therapist working with child"
                className="w-full h-auto object-cover"
              />

            </div>

          </div>


          {/* =================================================
              RIGHT CONTENT
          ================================================= */}
          <div className="lg:col-span-7 space-y-4">

            <p className="text-gray-700 text-[11px] sm:text-xs leading-5">

              <strong>ABC (Autism Behavioral Center)</strong> primarily
              supports individuals with Autism, as well as children with
              learning difficulties and behavioural difficulties. We are
              proudly the largest ABA (Applied Behaviour Analysis) centre in
              Malaysia, with over 40 individual therapy rooms (first and only
              of its kind); this means your child will be able to work 1:1 in
              their own room with a trained therapist. ABC is supervised
              directly by our Board of Certified Behavior Analysts (BCBAs)
              whom facilitates ABA trainings, programming and supervision in
              ABC using the Pennsylvania training and technical assistance
              network (PaTTAN) technology developed in USA by Dr. Amiris
              DiPuglia (BCBA) & Mr. Mike Miklos (BCBA).

            </p>


            <p className="text-gray-700 text-[11px] sm:text-xs leading-5">

              Through support from BCBAs, ABC follows the PaTTAN's training
              model, protocols, and procedures while ensuring high integrity
              and social validity.

            </p>


            <p className="text-gray-700 text-[11px] sm:text-xs leading-5">

              All programs are individualised according to the child needs and
              level. For example, a child that has challenges with speech will
              have different programs and areas to address for a child that
              needs support in behaviour management or regulation. Our main
              objective here is always to be able to teach a child with
              sufficient skills, to be able to mainstream back into school and
              the community.

            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          9 SERVICES CARDS
          COMPACT SIZE
          NO "OUR SERVICES" HEADING
      ===================================================== */}
      <section className="w-full bg-white py-8 sm:py-10 lg:py-12 px-4 sm:px-6">

        <div className="max-w-[1280px] mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">

            {services.map((service, index) => (

              <div
                key={index}
                className={`
                  ${service.color}

                  min-h-[330px]
                  sm:min-h-[345px]
                  lg:min-h-[360px]

                  flex
                  flex-col
                  items-center
                  text-center

                  px-4
                  sm:px-5
                  lg:px-6

                  py-6
                  sm:py-7
                  lg:py-8

                  text-white

                  transition-all
                  duration-300

                  hover:shadow-lg
                `}
              >

                {/* =================================================
                    ICON CIRCLE
                ================================================= */}
                <div
                  className="
                    w-[105px]
                    h-[105px]
                    sm:w-[115px]
                    sm:h-[115px]

                    rounded-full

                    bg-white

                    flex
                    items-center
                    justify-center

                    mb-4

                    shrink-0

                    shadow-sm
                  "
                >

                  <img
                    src={service.icon}
                    alt={service.title}
                    className="
                      w-[58px]
                      h-[58px]
                      sm:w-[65px]
                      sm:h-[65px]

                      object-contain

                      opacity-80
                    "
                  />

                </div>


                {/* =================================================
                    TITLE
                ================================================= */}
                <h3
                  className="
                    text-[15px]
                    sm:text-[16px]
                    lg:text-[17px]

                    font-medium

                    uppercase

                    leading-[1.2]

                    tracking-wide

                    mb-2

                    max-w-[350px]
                  "
                >
                  {service.title}
                </h3>


                {/* =================================================
                    DESCRIPTION
                ================================================= */}
                <p
                  className="
                    text-[11px]
                    sm:text-[12px]

                    font-semibold

                    leading-[1.4]

                    max-w-[370px]

                    whitespace-pre-line

                    text-white
                  "
                >
                  {service.description}
                </p>


                {/* =================================================
                    EXTRA CONTENT
                ================================================= */}
                {service.extra && (
                  <p
                    className="
                      mt-1

                      text-[11px]
                      sm:text-[12px]

                      font-semibold

                      leading-[1.4]

                      max-w-[370px]

                      whitespace-pre-line

                      text-white
                    "
                  >
                    {service.extra}
                  </p>
                )}


                {/* =================================================
                    ENQUIRE BUTTON
                ================================================= */}
                <div className="mt-auto pt-5">

                  <button
                    type="button"
                    onClick={scrollToFooter}
                    className="
                      min-w-[160px]
                      sm:min-w-[180px]

                      px-4
                      py-2.5

                      border
                      border-white

                      bg-transparent

                      text-white

                      text-[11px]
                      sm:text-[12px]

                      font-medium

                      uppercase

                      tracking-wide

                      hover:bg-white
                      hover:text-[#004D68]

                      transition-all
                      duration-300

                      focus:outline-none
                    "
                  >
                    ENQUIRE NOW
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          APPOINTMENT / FOOTER CTA
          SCREENSHOT STYLE
      ===================================================== */}
      <section
        id="footer"
        className="
          relative
          w-full
          bg-[#F8A343]
          overflow-hidden
          scroll-mt-0
        "
      >

        {/* =================================================
            SUBTLE CALENDAR BACKGROUND ICON
        ================================================= */}
        <div
          className="
            absolute
            left-[20%]
            top-1/2
            -translate-y-1/2
            opacity-[0.10]
            pointer-events-none
          "
        >
          <img
            src="https://img.icons8.com/ios-filled/200/8C5B19/calendar.png"
            alt=""
            className="w-[150px] sm:w-[180px] lg:w-[200px]"
          />
        </div>


        {/* =================================================
            CTA CONTENT
        ================================================= */}
        <div
          className="
            relative
            z-10
            max-w-[1500px]
            mx-auto

            min-h-[180px]
            sm:min-h-[200px]
            lg:min-h-[230px]

            px-6
            sm:px-10
            lg:px-16

            py-8
            sm:py-10
            lg:py-12

            flex
            flex-col
            lg:flex-row

            items-center
            justify-between

            gap-8
            lg:gap-10
          "
        >

          {/* =================================================
              LEFT TEXT
          ================================================= */}
          <div
            className="
              w-full
              lg:w-[28%]

              text-center
              lg:text-left
            "
          >

            <h2
              className="
                text-white

                text-3xl
                sm:text-4xl
                lg:text-[40px]

                font-light

                uppercase

                leading-[1.15]

                tracking-wide
              "
            >
              MAKE YOUR
              <br />
              APPOINTMENT
            </h2>

          </div>


          {/* =================================================
              CENTER TEXT
          ================================================= */}
          <div
            className="
              w-full
              lg:w-[48%]

              text-center

              text-white
            "
          >

            <h3
              className="
                text-xl
                sm:text-2xl
                lg:text-[28px]

                font-bold

                uppercase

                tracking-[0.25em]

                leading-tight
              "
            >
              WE ARE READY TO HELP
            </h3>

            <p
              className="
                mt-1

                text-lg
                sm:text-xl
                lg:text-[26px]

                font-medium

                uppercase

                tracking-[0.18em]

                leading-tight
              "
            >
              CALL US NOW FOR AN APPOINTMENT
            </p>

            <a
              href="tel:+60122852007"
              className="
                inline-block

                mt-2

                text-4xl
                sm:text-5xl
                lg:text-[52px]

                font-bold

                leading-none

                tracking-tight

                hover:opacity-80

                transition-opacity
                duration-300
              "
            >
              +92 300 1330 450
            </a>

          </div>


          {/* =================================================
              CALL NOW BUTTON
          ================================================= */}
          <div
            className="
              w-full
              lg:w-[22%]

              flex
              justify-center
              lg:justify-end
            "
          >

            <a
              href="tel:+923001330450"
              className="
                min-w-[190px]
                sm:min-w-[220px]

                px-8
                py-4

                border
                border-white

                text-white

                text-sm
                sm:text-base

                font-medium

                uppercase

                text-center

                tracking-wide

                bg-transparent

                hover:bg-white
                hover:text-[#F8A343]

                transition-all
                duration-300
              "
            >
              CALL NOW
            </a>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Services;