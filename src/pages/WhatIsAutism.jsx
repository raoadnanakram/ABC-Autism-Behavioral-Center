import React, { useState } from "react";
import { Link } from "react-router-dom";

const WhatIsAutism = () => {
  const [activeTab, setActiveTab] = useState("communication");

  const tabs = [
    {
      id: "communication",
      title: "SOCIAL COMMUNICATION",
      color: "bg-[#F52F55]",
      contentBg: "bg-[#F9D1D8]",
      content: (
        <>
          <p className="mb-3">
            Autistic people have difficulties with interpreting both verbal and
            non-verbal language like gestures or tone of voice. Many have a very
            literal understanding of language and think people always mean
            exactly what they say. They may find it difficult to use or
            understand:
          </p>

          <ul className="list-disc pl-5 mt-1 mb-3">
            <li>facial expressions</li>
            <li>tone of voice</li>
            <li>jokes and sarcasm</li>
          </ul>

          <p className="mb-3">
            Some may not speak, or have fairly limited speech. They will often
            understand more of what other people say to them than they are able
            to express, yet may struggle with vagueness or abstract concepts.
            Some autistic people benefit from using, or prefer to use,
            alternative means of communication, such as sign language or visual
            symbols. Some are able to communicate very effectively without
            speech.
          </p>

          <p className="mb-1">
            Others have good language skills, but they may still find it hard
            to understand the expectations of others within conversations,
            perhaps repeating what the other person has just said (this is
            called echolalia) or talking at length about their own interests.
          </p>

          <p>
            It often helps to speak in a clear, consistent way and to give
            autistic people time to process what has been said to them.
          </p>
        </>
      ),
    },

    {
      id: "interaction",
      title: "SOCIAL INTERACTION",
      color: "bg-[#92C6DF]",
      contentBg: "bg-[#DDF1FA]",
      content: (
        <>
          <p className="mb-3">
            Autistic people often have difficulty ‘reading’ other people –
            recognising or understanding others’ feelings and intentions – and
            expressing their own emotions. This can make it very hard for them
            to navigate the social world. They may:
          </p>

          <ul className="list-disc pl-5 mt-1 mb-3">
            <li>appear to be insensitive</li>

            <li>
              seek out time alone when overloaded by other people
            </li>

            <li>not seek comfort from other people</li>

            <li>
              appear to behave ‘strangely’ or in a way thought to be socially
              inappropriate.
            </li>
          </ul>

          <p>
            Autistic people may find it hard to form friendships. Some may want
            to interact with other people and make friends, but may be unsure
            how to go about it.
          </p>
        </>
      ),
    },

    {
      id: "routine",
      title: "REPETITIVE BEHAVIOUR & ROUTINES",
      color: "bg-[#FFA915]",
      contentBg: "bg-[#FFF0D6]",
      content: (
        <>
          <p className="mb-3">
            The world can seem a very unpredictable and confusing place to
            autistic people, who often prefer to have a daily routine so that
            they know what is going to happen every day. They may want to
            always travel the same way to and from school or work, or eat
            exactly the same food for breakfast.
          </p>

          <p>
            The use of rules can also be important. It may be difficult for an
            autistic person to take a different approach to something once they
            have been taught the ‘right’ way to do it. People on the autism
            spectrum may not be comfortable with the idea of change, but may be
            able to cope better if they can prepare for changes in advance.
          </p>
        </>
      ),
    },

    {
      id: "interests",
      title: "HIGHLY-FOCUSED INTERESTS",
      color: "bg-[#9B83C5]",
      contentBg: "bg-[#F0E8FA]",
      content: (
        <>
          <p className="mb-3">
            Many autistic people have intense and highly-focused interests,
            often from a fairly young age. These can change over time or be
            lifelong, and can be anything from art or music, to trains or
            computers. An interest may sometimes be unusual. One autistic
            person loved collecting rubbish, for example.
          </p>

          <p className="mb-3">
            With encouragement, the person developed an interest in recycling
            and the environment.
          </p>

          <p>
            Many channel their interest into studying, paid work, volunteering,
            or other meaningful occupation. Autistic people often report that
            the pursuit of such interests is fundamental to their wellbeing and
            happiness.
          </p>
        </>
      ),
    },

    {
      id: "sensory",
      title: "SENSORY SENSITIVITY",
      color: "bg-[#ED646C]",
      contentBg: "bg-[#F9D1D8]",
      content: (
        <>
          <p>
            Autistic people may also experience over- or under-sensitivity to
            sounds, touch, tastes, smells, light, colours, temperatures or
            pain. For example, they may find certain background sounds, which
            other people ignore or block out, unbearably loud or distracting.
            This can cause anxiety or even physical pain. Or they may be
            fascinated by lights or spinning objects.
          </p>
        </>
      ),
    },
  ];

  const activeContent = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="w-full min-h-screen bg-white font-sans">

      {/* =====================================================
          PAGE BANNER
      ===================================================== */}
      <div className="relative w-full h-48 sm:h-60 lg:h-72 overflow-hidden bg-gray-900">

        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage:
              "url('https://www.bristolautismsupport.org/wp-content/uploads/2020/05/how-to-tell-child-about-autism-diagnosis.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative max-w-7xl mx-auto h-full px-6 sm:px-8 lg:px-10 flex flex-col justify-center items-center text-center">

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-wide drop-shadow-lg mb-2">
            What Is Autism
          </h1>

          <div className="flex items-center space-x-2 text-xs sm:text-sm font-medium text-gray-200 tracking-wider">

            <Link
              to="/"
              className="hover:text-amber-400 transition-colors duration-200 underline underline-offset-4"
            >
              Home
            </Link>

            <span>/</span>

            <span className="text-gray-300">
              What Is Autism
            </span>

          </div>

        </div>
      </div>


      {/* =====================================================
          ABOUT AUTISM
      ===================================================== */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-10 lg:py-14">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* IMAGE */}
          <div className="lg:col-span-5 flex justify-center">

            <div className="w-full max-w-md rounded-lg overflow-hidden shadow-md">

              <img
                src="https://www.incredibleyears.com/hs-fs/hubfs/IY%20Autism%20Parenting%20Programs%20--%20empowercc%20(1).jpg?length=1300&name=IY%20Autism%20Parenting%20Programs%20--%20empowercc%20(1).jpg"
                alt="Child therapy and autism support"
                className="w-full h-auto object-cover"
              />

            </div>

          </div>


          {/* CONTENT */}
          <div className="lg:col-span-7 space-y-3">

            <div>

                        <h2 className="text-4xl font-extrabold text-black tracking-wider uppercase bg-[#000000] px-6 py-3 inline-block">

                ABOUT AUTISM
              </h2>

              <h3 className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                Understanding Autism
              </h3>

            </div>


            <p className="text-gray-700 text-[11px] sm:text-xs leading-5">
              Autistic individuals experience the world in unique ways,
              perceiving, hearing, and feeling things differently from others.
              Autism is not an illness or disease, and there is no “cure” for it.
              If you are autistic, you are autistic for life. For many, autism
              is an integral part of their identity.
            </p>


            <p className="text-gray-700 text-[11px] sm:text-xs leading-5">
              Autism is a spectrum condition, meaning that while all autistic
              individuals share certain difficulties, it affects them in varying
              ways. With appropriate support, all people on the autism spectrum
              can learn, grow, and lead fulfilling lives, shaped by their own
              choices and preferences.
            </p>


            {/* MALAYSIA PREVALENCE */}
            <div className="space-y-1 pt-1">

              <h4 className="text-[11px] sm:text-xs font-bold text-black uppercase tracking-wide">
                Prevalence of Autism in Malaysia
              </h4>

              <p className="text-gray-700 text-[11px] sm:text-xs leading-5">
                Currently, there is no comprehensive data on the prevalence of
                autism in Malaysia. However, a smaller-scale study conducted by
                the Ministry of Health on children aged 18 to 36 months revealed
                a rate of 1.6 per 1,000 children, or approximately 1 in 625.
              </p>

              <p className="text-gray-700 text-[11px] sm:text-xs leading-5">
                Given that many cases may go undiagnosed and that professionals
                in the medical and education fields report an increasing number
                of autism cases, it is likely that the true prevalence rate in
                Malaysia is higher.
              </p>

            </div>


            {/* GLOBAL PREVALENCE */}
            <div className="space-y-1 pt-1">

              <h4 className="text-[11px] sm:text-xs font-bold text-black uppercase tracking-wide">
                Global Prevalence Data
              </h4>

              <p className="text-gray-700 text-[11px] sm:text-xs leading-5">
                In 2024, The Centers for Disease Control and Prevention (CDC)
                estimated that 1 in 31 children have autism spectrum disorder
                (ASD). This is an increase from the previous estimate of 1 in
                44 children.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          AUTISM DIAGNOSIS / TABS
      ===================================================== */}
      <section className="bg-[#004D68] py-12 sm:py-14 px-4 sm:px-6 lg:px-10">

        <div className="max-w-7xl mx-auto">

          {/* =================================================
              HEADING
          ================================================= */}
          <div className="mb-8 text-center max-w-4xl mx-auto">

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-wide uppercase leading-tight">
              HOW IS AUTISM
            
              DIAGNOSED?
            </h2>

            <p className="mt-3 text-[11px] sm:text-xs font-bold leading-5 text-white/90">
              The characteristics of autism vary from one person to another,
              but in order for a diagnosis to be made, a person will usually be
              assessed as having had persistent difficulties with social
              communication and interaction and restricted and repetitive
              patterns of behaviours, activities or interests since early
              childhood, to the extent that these “limit and impair everyday
              functioning”.
            </p>

          </div>


          {/* =================================================
              TABS + CONTENT
          ================================================= */}
          <div className="w-full max-w-[1188px] mx-auto">

            {/* =================================================
                5 TABS
            ================================================= */}
            <div
              className="
                w-full
                flex
                flex-col
                lg:flex-row
                items-stretch
                shadow-sm
              "
            >

              {tabs.map((tab, index) => {

                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      ${tab.color}

                      ${
                        isActive
                          ? "opacity-100 ring-1 ring-white/70 z-10"
                          : "opacity-95 hover:opacity-100"
                      }

                      w-full
                      lg:flex-1

                      h-[52px]

                      px-2
                      sm:px-3
                      py-2

                      text-white
                      text-[9px]
                      sm:text-[10px]

                      font-bold
                      uppercase
                      leading-[13px]

                      flex
                      items-center
                      justify-center
                      text-center

                      transition-all
                      duration-200

                      focus:outline-none

                      ${
                        index !== tabs.length - 1
                          ? "border-r border-[#003348]"
                          : ""
                      }
                    `}
                  >
                    {tab.title}
                  </button>
                );

              })}

            </div>


            {/* =================================================
                ACTIVE CONTENT
            ================================================= */}
            <div
              className={`
                ${activeContent.contentBg}

                w-full
                max-w-full

                text-gray-900

                px-5
                sm:px-7
                lg:px-8

                py-5
                sm:py-6

                text-[11px]
                sm:text-[12px]

                font-semibold
                leading-[1.5]

                shadow-sm

                box-border

                overflow-hidden

                break-words
                whitespace-normal

                [&_p]:break-words
                [&_p]:whitespace-normal
                [&_li]:break-words
                [&_li]:whitespace-normal
              `}
              style={{
                overflowWrap: "break-word",
                wordBreak: "normal",
              }}
            >
              {activeContent.content}
            </div>

          </div>


          {/* =================================================
              APPLY FOR JOB
          ================================================= */}
          <div className="flex justify-center mt-6">

            <Link
              to="/career"
              className="
                inline-flex
                items-center
                justify-center

                px-7
                py-2.5

                border
                border-white

                text-white
                text-xs
                font-bold
                uppercase
                tracking-wide

                hover:bg-white
                hover:text-[#004D68]

                transition-all
                duration-200
              "
            >
              APPLY FOR JOB
            </Link>

          </div>


          {/* =====================================================
              CAUSES / CURES + ASSESSMENT SECTION
              DIRECTLY BELOW APPLY FOR JOB
          ===================================================== */}
          <section className="w-full mt-12">

            {/* =================================================
                ROW 1
                LEFT = BLUE TEXT
                RIGHT = IMAGE
            ================================================= */}
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full">

              {/* LEFT - CAUSES AND CURES */}
              <div className="relative bg-[#43A5C5] min-h-[420px] lg:min-h-[500px] overflow-hidden">

                {/* Decorative Circle */}
                <div className="absolute right-[-30px] bottom-[-30px] opacity-10 pointer-events-none">

                  <div className="w-[330px] h-[330px] rounded-full border-[45px] border-[#004D68]">

                    <div className="w-[150px] h-[150px] rounded-full border-[35px] border-[#004D68] mt-[45px] ml-[45px]" />

                  </div>

                </div>


                <div className="relative z-10 h-full flex items-center">

                  <div className="w-full px-8 sm:px-12 lg:px-16 py-12">

                    <h2 className="text-white text-3xl sm:text-4xl lg:text-[38px] font-light uppercase leading-[1.05] mb-5">
                      Causes and
                      <br />
                      Cures of Autism
                    </h2>


                    <p className="text-white text-[11px] sm:text-xs font-semibold leading-5 max-w-[520px]">
                      The exact cause of autism is still being investigated.
                      Research into causes suggests that a combination of factors –
                      genetic and environmental – may account for differences in
                      development. Autism is not caused by a person’s upbringing,
                      their social circumstances and is not the fault of the
                      individual with the condition.
                    </p>


                    <div className="mt-7">

                      <h3 className="text-white text-sm sm:text-base font-bold mb-1">
                        Is there a cure?
                      </h3>


                      <p className="text-white text-[11px] sm:text-xs font-semibold leading-5 max-w-[520px]">
                        There is no “cure” for autism. However, autism is
                        treatable through appropriate support and interventions
                        that can help individuals develop skills and manage
                        challenges.
                      </p>

                    </div>

                  </div>

                </div>

              </div>


              {/* RIGHT - IMAGE 1 */}
              <div className="w-full min-h-[420px] lg:min-h-[500px] overflow-hidden">

                <img
                  src="https://www.iup.edu/research/images/Centers_and_Institutes/Health_and_Wellness/CAP/childtherapy5edit-737.jpg"
                  alt="Child receiving autism therapy"
                  className="w-full h-full object-cover"
                />

              </div>

            </div>


            {/* =================================================
                ROW 2
                LEFT = IMAGE
                RIGHT = PINK TEXT
            ================================================= */}
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full">

              {/* LEFT - IMAGE 2 */}
              <div className="w-full min-h-[420px] lg:min-h-[500px] overflow-hidden">

                <img
                  src="https://assets.zyrosite.com/cdn-cgi/image/format%3Dauto%2Cw%3D1024%2Ch%3D633%2Cfit%3Dcrop/j8RRElisjpzKGG8L/therapy-session-XFxgpmDdLID3nNsU.png"
                  alt="Autism assessment and therapy session"
                  className="w-full h-full object-cover"
                />

              </div>


              {/* RIGHT - WHO DO I NEED */}
              <div className="relative bg-[#E7438B] min-h-[420px] lg:min-h-[500px] overflow-hidden">

                {/* Decorative Heart */}
                <div className="absolute right-8 bottom-[-25px] opacity-10 pointer-events-none">

                  <div className="text-[260px] leading-none text-[#8E1C5B]">
                    ♥
                  </div>

                </div>


                <div className="relative z-10 h-full flex items-center">

                  <div className="w-full px-8 sm:px-12 lg:px-16 py-12">

                    <h2 className="text-white text-3xl sm:text-4xl lg:text-[38px] font-light uppercase leading-[1.05] mb-5">

                      Who Do I Need
                      <br />

                      For Assistance
                      <br />

                      And/Or
                      <br />

                      Assessments?

                    </h2>


                    <p className="text-white text-[11px] sm:text-xs font-bold leading-5 mb-4">

                      Parents/teachers should seek an assessment by a qualified
                      professional:

                    </p>


                    <ul className="list-disc pl-5 text-white text-[11px] sm:text-xs font-semibold leading-5 mb-5">

                      <li>Pediatrician</li>

                      <li>Developmental Paediatrician</li>

                      <li>Child Psychologist</li>

                      <li>Child Psychiatrist</li>

                      <li>Clinical Psychologist</li>

                    </ul>


                    <p className="text-white text-[11px] sm:text-xs font-semibold leading-5">

                      If your child is not meeting the appropriate milestones, or
                      presents with some or all signs of Autism, it is recommended
                      to seek professional assessment.

                    </p>


                    <p className="text-white text-[11px] sm:text-xs font-bold leading-5 mt-2">

                      *Contact us for references to get your child assessed.

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </section>

        </div>

      </section>

    </div>
  );
};

export default WhatIsAutism;