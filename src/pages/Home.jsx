import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

/* =========================================================
   LOCAL HERO IMAGES
========================================================= */

import speechTherapy1 from '../assets/speech-therapy-1.jpg';
import speechTherapy2 from '../assets/speech-therapy-2.jpg';
import speechTherapy3 from '../assets/speech-therapy-3.jpg';
import speechTherapy4 from '../assets/speech-therapy-4.jpg';
import speechTherapy5 from '../assets/speech-therapy-5.jpg';


/* =========================================================
   HERO SLIDES
========================================================= */

const slides = [
  {
    image: speechTherapy1,
    title: 'Speech Therapy',
  },
  {
    image: speechTherapy2,
    title: 'Speech Therapy for Children',
  },
  {
    image: speechTherapy3,
    title: 'Communication Skills',
  },
  {
    image: speechTherapy4,
    title: 'Language Development',
  },
  {
    image: speechTherapy5,
    title: 'Child Speech Support',
  },
];


/* =========================================================
   FEATURED ON
========================================================= */

const featuredOn = [
  {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7nei2YqFNe9oNbuOxZ8mUtrA9t-iToCt1s0r3Qux8Yg&s=10',
    title: 'Speech Therapy',
  },
  {
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=900&auto=format&fit=crop',
    title: 'Child Development',
  },
  {
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=900&auto=format&fit=crop',
    title: 'Communication Therapy',
  },
  {
    image: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=900&auto=format&fit=crop',
    title: 'Child Therapy',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvZElA8HUMIIzVT7ztQYYhqyIK5fdyifmIc21zVFodkQ&s=10',
    title: 'Therapy Support',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7nei2YqFNe9oNbuOxZ8mUtrA9t-iToCt1s0r3Qux8Yg&s=10',
    title: 'Early Intervention',
  },
  {
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=900&auto=format&fit=crop',
    title: 'Speech & Language',
  },
  {
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=900&auto=format&fit=crop',
    title: 'Special Education',
  },
  {
    image: 'https://images.unsplash.com/photo-1607453998774-d533f65dac99?q=80&w=900&auto=format&fit=crop',
    title: 'Autism Support',
  },
  {
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=900&auto=format&fit=crop',
    title: 'Occupational Therapy',
  },
  {
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=900&auto=format&fit=crop',
    title: 'Family Support',
  },
  {
    image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=900&auto=format&fit=crop',
    title: 'Learning & Development',
  },
];


/* =========================================================
   SERVICES
========================================================= */

const servicesData = [
  {
    title: 'PHYSIOTHERAPY',
    desc: 'Tailored physical therapy sessions designed to enhance gross motor skills, core strength, and overall mobility through targeted therapeutic movements, focusing on building physical balance, flexibility, posture correction, and daily movement independence for every individual.',
    bg: 'bg-[#38959c]',
    imgSrc: 'https://img.icons8.com/ios-filled/100/ffffff/brain.png',
  },
  {
    title: 'HOME BASED',
    desc: 'Personalized therapy sessions conducted directly in the comfort of your home, designed to help children build essential life skills, improve daily communication, and develop positive routines within their familiar environment, ensuring customized care tailored to every individual\'ss unique pace.',
    bg: 'bg-[#9b8bb4]',
    imgSrc: 'https://img.icons8.com/ios-filled/100/ffffff/reading.png',
  },
  {
    title: 'ABA THERAPY',
    desc: 'A specialized approach where trained professionals support individuals in developing essential life skills, enhancing communication, improving socialization, managing emotions, and mastering academic tasks through structured guidance and consistent daily routines.',
    bg: 'bg-[#eb6b65]',
    imgSrc: 'https://img.icons8.com/ios-filled/100/ffffff/student-male.png',
  },
  {
    title: 'FREE AUTISM SCREENING',
    desc: 'Complimentary early evaluations designed to identify potential signs and developmental risks of autism for young children, helping parents understand early intervention needs specifically for children aged 30 months and below, subject to terms and conditions.',
    bg: 'bg-[#fca139]',
    imgSrc: 'https://img.icons8.com/ios-filled/100/ffffff/test-passed.png',
  },
  {
    title: 'AUTISM AWARENESS TALK IN SCHOOLS/ORGANIZATIONS',
    desc: 'An education and training program for parents and teachers on the topics below:\n- Identifying autism, ADHD, and general developmental delays\n- Screening for Autism\n- Screening for ADHD\n- Identifying functions of behaviors and basic behavior management strategies\n- Identifying skills for school readiness skills\nFees start at 45 Minutes',
    bg: 'bg-[#5dc2df]',
    imgSrc: 'https://img.icons8.com/ios-filled/100/ffffff/presentation.png',
  },
  {
    title: 'DIAGNOSTIC ASSESSMENT AND EVALUATION',
    desc: 'Our in house Clinical Psychological provide diagnosis and evaluation services in:\n- Autism Diagnosis,\n- ADHD Diagnosis,\n- Global Delay Development Diagnosis,\n- Intellectual Disabilities Diagnosis,\n- Intelligence Testing,\n- Developmental Level Testing,\n- Adaptive Functioning Assessment,\n- School Placement Assessment and\n- Screening',
    bg: 'bg-[#38959c]',
    imgSrc: 'https://img.icons8.com/ios-filled/100/ffffff/medical-history.png',
  },
  {
    title: 'OCCUPATIONAL THERAPY',
    desc: '• Duration & Fee: 45-minutes assessment\n• What it Offers: One-on-one support during the session, with regular updates for parents\n• Focus Areas: Attention, sensory needs, daily living skills (ADL), balance, and coordination',
    bg: 'bg-[#9b8bb4]',
    imgSrc: 'https://img.icons8.com/ios-filled/100/ffffff/puzzle.png',
  },
  {
    title: 'NUTRITION DIETITIAN',
    desc: 'A fun and engaging programme specially designed to help children build confidence, improve coordination, develop motor skills, and enjoy movement in a supportive group setting.\n- Small groups\n- Led by qualified special needs providers\n- Learning through active play\n30 minutes session (Once a week)',
    bg: 'bg-[#eb6b65]',
    imgSrc: 'https://img.icons8.com/ios-filled/100/ffffff/dumbbell.png',
  },
  {
    title: 'SPEECH THERAPY',
    desc: '• Duration & Fee: 30 mins – RM365 per session (online)\n• What it Offers: Therapist works directly with parents to guide home practice\n• Focus Area: Integrated with the child’s ABA program, with personalized speech drills',
    bg: 'bg-[#fca139]',
    imgSrc: 'https://img.icons8.com/ios-filled/100/ffffff/microphone.png',
  },
  {
    title: 'MONTESSORI EDUCATION',
    desc: 'Description: Tailored developmental activities utilizing sensory-rich materials and structured routines to foster cognitive growth, independence, and foundational learning skills.',
    bg: 'bg-[#5dc2df]',
    imgSrc: 'https://img.icons8.com/ios-filled/100/ffffff/musical.png',
  },
  {
    title: 'PARENT TRAINING',
    desc: 'Dedicated guidance sessions empowering families with evidence-based behavioral strategies, communication techniques, and tools to support progress consistently at home.',
    bg: 'bg-[#38959c]',
    imgSrc: 'https://img.icons8.com/ios-filled/100/ffffff/family.png',
  },
  {
    title: 'EARLY CHILDHOOD EDUCATION',
    desc: 'A structured group-based program focusing on play skills, turn-taking, and peer interactions to prepare children for school and community settings.',
    bg: 'bg-[#9b8bb4]',
    imgSrc: 'https://img.icons8.com/ios-filled/100/ffffff/children.png',
  },
];


/* =========================================================
   FAQ DATA
========================================================= */

const faqData = [
  {
    question: 'What services does Autism Behavioral Center (ABC) Pakistan offer?',
    answer: 'ABC Pakistan offers individualized behavioral intervention using principles of Applied Behavior Analysis (ABA), including center-based and home-based programs, shadow aide / PLA support, autism screening, diagnostic assessment and evaluation, occupational therapy, adaptive fitness sessions, and speech therapy.',
  },
  {
    question: 'How do I know if my child needs therapy at Autism Behavioral Center Pakistan?',
    answer: 'If you have concerns about your child’s communication, social skills, behavior, independence, school readiness, development, or sensory needs, you can contact ABC Pakistan to discuss your concerns and explore appropriate assessment or intervention options.',
  },
  {
    question: 'What makes Autism Behavioral Center Pakistan unique compared to other autism centers in Karachi?',
    answer: 'ABC Pakistan provides individualized programs designed around each child’s unique needs. The center also offers multiple forms of support, including ABA-based intervention, occupational therapy, speech therapy, diagnostic assessment, and school support services.',
  },
  {
    question: 'Can you provide information on the qualifications and experience of the therapists at Autism Behavioral Center Pakistan?',
    answer: 'The program is supervised by local and international Board Certified Behavior Analysts (BCBAs) / Qualified Behavior Analysts (QBAs). The team also includes Case Supervisors and Applied Behavior Analysis Technicians (ABATs).',
  },
  {
    question: 'Is Autism Behavioral Center Pakistan equipped to handle children with varying degrees of autism spectrum disorders?',
    answer: 'ABC Pakistan provides individualized intervention based on the child’s abilities, needs, goals, and level of support required. Programs are tailored to each individual rather than using the same approach for every child.',
  },
  {
    question: 'How long does a typical therapy session last at Autism Behavioral Center Pakistan?',
    answer: 'Session duration depends on the service. For example, occupational therapy is listed as 1 hour per session, speech therapy is listed as 30 minutes per session, and adaptive fitness sessions are 30 minutes once a week.',
  },
  {
    question: 'Are there any specific therapy approaches or techniques used at Autism Behavioral Center Pakistan?',
    answer: 'ABC Pakistan uses principles of Applied Behavior Analysis (ABA). Programs are individualized and may focus on communication, social skills, behavior, independence, school readiness, and other developmental goals.',
  },
  {
    question: 'What age groups does Autism Behavioral Center Pakistan cater to?',
    answer: 'ABC Pakistan provides individualized services for children and families. The free autism screening service specifically mentioned by the center is available for children 30 months and below, subject to terms and conditions.',
  },
  {
    question: 'Does Autism Behavioral Center Pakistan offer any support or resources for parents and caregivers?',
    answer: 'Yes. Services include parent guidance as part of speech therapy, where the therapist works directly with parents to guide home practice. ABC also provides autism awareness talks and education programs for parents and teachers.',
  },
  {
    question: 'What is the process for enrolling my child at Autism Behavioral Center Pakistan?',
    answer: 'Families can contact ABC Pakistan for inquiries and admissions. Depending on the child’s needs, the appropriate assessment or service can then be discussed with the center’s team.',
  },
  {
    question: 'How does Autism Behavioral Center Pakistan collaborate with schools or other professionals involved in my child’s care?',
    answer: 'ABC provides Shadow Aide / PLA Support, where a trained ABA therapist can support a child in school with communication, socialisation, emotion regulation, academics, instructions, and tasks.',
  },
  {
    question: 'Are there any support groups or community events organized by Autism Behavioral Center Pakistan?',
    answer: 'The available information highlights autism awareness talks and education programs for parents and teachers. For current community events or support group information, please contact ABC Pakistan directly.',
  },
  {
    question: 'Does Autism Behavioral Center Pakistan accept insurance or offer any financial assistance options?',
    answer: 'Insurance coverage and financial assistance options are not specified in the available information. Please contact ABC Pakistan directly for the latest information regarding payment, insurance, or available assistance.',
  },
  {
    question: 'Can I schedule a tour of Autism Behavioral Center Pakistan before enrolling my child?',
    answer: 'For tour availability and scheduling, please contact ABC Pakistan directly. The center can provide the latest information about visiting the facility before enrollment.',
  },
];


/* =========================================================
   HOME COMPONENT
========================================================= */

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();


  /* =======================================================
     HERO AUTO SLIDER
  ======================================================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);


  /* =======================================================
     HASH SCROLL
  ======================================================= */

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);

      setTimeout(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 100);
    }
  }, [location]);


  /* =======================================================
     SCROLL HELPERS
  ======================================================= */

  const scrollToFooter = () => {
    const footer = document.getElementById('footer-section');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navigateToAutismPage = () => {
    navigate('/what-is-autism');
  };

  const toggleFaq = (index) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    navigate('/thank-you');
  };


  return (
    <div className="w-full font-sans text-gray-800 bg-white overflow-x-hidden">

      {/* =====================================================
          PREMIUM ENHANCED ANIMATIONS & KEYFRAMES
      ===================================================== */}

      <style>{`
        @keyframes slideInLeft {
          0% { opacity: 0; transform: translateX(-60px) translateY(-50%); }
          100% { opacity: 1; transform: translateX(0) translateY(-50%); }
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes zoomInSlow {
          0% { transform: scale(1); }
          50% { transform: scale(1.06); }
          100% { transform: scale(1); }
        }

        .animate-slide-left {
          animation: slideInLeft 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-fade-up {
          animation: fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .hero-bg-zoom {
          animation: zoomInSlow 10s ease-in-out infinite;
        }
      `}</style>


      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section id="home" className="relative w-full aspect-[710/379] overflow-hidden bg-gray-900">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title || 'Speech Therapy'}
              className="w-full h-full object-cover hero-bg-zoom brightness-95"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = speechTherapy1;
              }}
            />
            {/* Dark Gradient Overlay for Better Text Visibility & Depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent"></div>
          </div>
        ))}
{/* HERO TEXT BOX */}
<div
  className="
    absolute z-30

    /* ================= MOBILE ================= */
    top-[140px]
    left-4
    right-4
    w-auto
    max-w-[192px]
    p-4

    /* ================= TABLET ================= */
    sm:top-1/4
    sm:left-6
    sm:right-auto
    sm:w-[49%]
    sm:max-w-none
    sm:p-6

    /* ================= DESKTOP ================= */
    md:top-1/4
    md:left-16
    md:right-auto
    md:w-[480px]
    md:max-w-none
    md:p-8

    /* ================= LARGE DESKTOP ================= */
    lg:left-24
    lg:w-[480px]

    bg-yellow-400/90
    backdrop-blur-md
    shadow-2xl
    rounded-sm
    border
    border-white/20
    animate-slide-left
  "
>
  <h1
    className="
      !m-0
      !p-0
      !font-bold
      !text-black
      !tracking-tight
      !leading-snug

      /* MOBILE */
      !text-[12px]

      /* TABLET */
      sm:!text-[22px]

      /* DESKTOP */
      md:!text-[24px]
      lg:!text-[24px]
    "
  >
    EMBRACING DIFFERENCES,
    <br />
    CHALLENGING STEREOTYPES
  </h1>

  <button
    onClick={scrollToFooter}
    className="
      mt-4

      bg-[#38959c]
      hover:bg-[#2f7d83]

      text-black
      font-bold
      uppercase
      tracking-widest

      px-5
      py-2
      text-[10px]

      sm:px-7
      sm:py-3
      sm:text-xs

      md:px-8
      md:py-3
      md:text-xs

      transition-all
      duration-300
      hover:-translate-y-0.5
      hover:shadow-lg
      cursor-pointer
    "
  >
    READ MORE
  </button>
</div>
      </section>


      {/* =====================================================
          OVERVIEW SECTION
      ===================================================== */}

      <section className="bg-[#f0746c] py-20 px-8 lg:px-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* VIDEO WITH HOVER ZOOM EFFECT */}
          <div className="w-full h-[320px] sm:h-[420px] rounded-lg overflow-hidden shadow-2xl bg-black relative transform transition duration-500 hover:scale-[1.01]">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/35WwPyx2-w0"
              title="Overview Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* TEXT */}
          <div className="text-white space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-wide uppercase border-l-4 border-white pl-4">
            OVERVIEW
            </h2>


            <p className="text-xs sm:text-sm leading-relaxed font-medium opacity-95">
              As Pakistan's largest 1:1 ABA (Applied Behaviour Analysis) center, we are equipped with 40 individual therapy rooms designed to minimize distractions and create a focused, personalized learning environment tailored to each child’s unique needs. At ABC, we believe every child deserves a customized path to success. Each child’s education is guided by an Individualized Education Plan (IEP), carefully developed to match their abilities and goals.
            </p>

            <p className="text-xs sm:text-sm leading-relaxed font-medium opacity-95">
              Our program is supervised by local and International Board Certified Behavior Analysts (BCBA’s) / Qualified Behavior Analyst’s (QBA’s) ensuring international standards of ABA therapy, adhering to global standards.
            </p>

            <p className="text-xs sm:text-sm leading-relaxed font-medium opacity-95">
              Our dedicated team includes Case Supervisors (clinical managers) with an average of 5 years of experience and interventionists that are Applied Behavior Analysis Technicians (ABAT’s). This rigorous preparation ensures your child receives exceptional care and support every step of the way.
            </p>
          </div>

        </div>
      </section>


      {/* =====================================================
          OUR SERVICES SECTION
      ===================================================== */}

      <section className="py-16 bg-gradient-to-b from-white to-gray-50" id="services">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12">
          <h2 className="text-xl font-extrabold mb-2 uppercase tracking-widest" style={{ color: '#2d545e' }}>
            Our Services
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-full max-w-[1150px]">
            {servicesData.map((service, index) => (
              <div
                key={index}
                id={`service-${index}`}
                className={`
                  ${service.bg} 
                  p-6 
                  flex 
                  flex-col 
                  justify-between 
                  text-white 
                  text-center 
                  w-full 
                  max-w-[350px] 
                  min-h-[460px] 
                  rounded-xl 
                  shadow-lg 
                  transition-all 
                  duration-300 
                  hover:-translate-y-2 
                  hover:shadow-2xl 
                  animate-fade-up
                `}
                style={{
                  animationDelay: `${(index % 3) * 0.1}s`,
                }}
              >
                <div>
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner border border-white/20 transform transition duration-300 hover:rotate-6">
                    <img
                      src={service.imgSrc}
                      alt={service.title}
                      className="w-8 h-8 object-contain brightness-0 invert"
                    />
                  </div>

                  <h3 className="text-[15px] font-bold tracking-wide mb-3 uppercase">
                    {service.title}
                  </h3>

          <p
  className="
    text-[13px]
    sm:text-[12px]
    md:text-[13px]
    lg:text-[13px]

    leading-relaxed
    whitespace-pre-line
    opacity-95
    mb-4
    font-medium

    text-center
  "
>
  {service.desc}
</p>
                </div>

                <button
                  onClick={scrollToFooter}
                  className="border-2 border-white hover:bg-white hover:text-gray-900 transition-all font-bold text-[10px] uppercase px-6 py-2.5 tracking-widest mt-auto cursor-pointer rounded shadow-sm"
                >
                  ENQUIRE NOW
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* =====================================================
          WHAT IS AUTISM SECTION
      ===================================================== */}

      <section
        id="autism"
        className="relative py-24 px-6 sm:px-12 lg:px-20 text-white bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: "url('https://www.helpguide.org/wp-content/uploads/2023/02/Does-My-Child-Have-Autism.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50 z-10"></div>

        <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-6 max-w-3xl">
<h2
  className="
    text-3xl
    sm:text-4xl
    md:text-5xl
    font-black
    tracking-tight
    uppercase
    text-white
    leading-tight
    block
    w-full

    /* MOBILE */
    text-center

    /* TABLET + DESKTOP */
    sm:text-left

    relative
    z-10
  "
>
  WHAT IS
  AUTISM?
</h2>

            {/* UNDERSTANDING AUTISM */}
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-teal-300 uppercase tracking-wide">
                Understanding Autism
              </h3>
              <p className="text-sm leading-relaxed font-medium text-gray-100 opacity-95">
                Autistic individuals experience the world in unique ways, perceiving, hearing, and feeling things differently from others. Autism is not an illness or disease, and there is no "cure" for it. If you are autistic, you are autistic for life. For many, autism is an integral part of their identity.
              </p>
              <p className="text-sm leading-relaxed font-medium text-gray-100 opacity-95">
                Autism is a spectrum condition, meaning that while all autistic individuals share certain difficulties, it affects them in varying ways. With appropriate support, all people on the autism spectrum can learn, grow, and lead fulfilling lives, shaped by their own choices and preferences.
              </p>
            </div>

            {/* MALAYSIA */}
            <div className="space-y-2 pt-2">
              <h3 className="text-lg font-bold text-teal-300 uppercase tracking-wide">
                Prevalence of Autism in Pakistan
              </h3>
              <p className="text-sm leading-relaxed font-medium text-gray-100 opacity-95">
                Currently, there is no comprehensive data on the prevalence of autism in Pakistan. However, a smaller-scale study conducted by the Ministry of Health on children aged 18 to 26 months revealed a rate of 1.6 per 1,000 children, or approximately 1 in 625. Given that many cases may go undiagnosed and that professionals in the medical and education fields report an increasing number of autism cases, it is likely that the true prevalence rate in Pakistan is higher.
              </p>
            </div>

            {/* GLOBAL */}
            <div className="space-y-2 pt-2">
              <h3 className="text-lg font-bold text-teal-300 uppercase tracking-wide">
                Global Prevalence Data
              </h3>
              <p className="text-sm leading-relaxed font-medium text-gray-100 opacity-95">
                In 2024, The Centers for Disease Control and Prevention (CDC) estimated that 1 in 36 children have autism spectrum disorder (ASD). This is an increase from the previous estimate of 1 in 44 children.
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={navigateToAutismPage}
                className="border-2 border-white hover:bg-white hover:text-gray-900 transition-all font-bold text-xs uppercase px-8 py-3 tracking-widest cursor-pointer shadow-lg transform hover:scale-105"
              >
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          FEATURED ON SECTION
      ===================================================== */}

      <section className="bg-white py-20">
        <div className="text-center mb-12">
          <h2 className="text-xl font-extrabold mb-3 uppercase tracking-widest" style={{ color: '#2d545e' }}>
            Featured On
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="w-full flex justify-center px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1100px] mx-auto">
            {featuredOn.map((item, index) => (
              <div
                key={index}
                className="group relative w-full h-[240px] overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-sm transition-all duration-500 hover:shadow-xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=900&auto=format&fit=crop';
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                <div className="absolute bottom-0 left-0 right-0 text-white text-center py-4 px-2 text-xs font-bold uppercase tracking-widest transform transition-transform duration-300">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* =====================================================
          FAQ SECTION
      ===================================================== */}

      <section id="faq" aria-labelledby="faq-heading" className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#e95f58]">
              Helpful answers
            </p>
            <h2 className="text-xl font-extrabold mb-3 uppercase tracking-wider" style={{ color: '#2d545e' }}>
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              Learn more about ABC Malaysia’s services and support for children and families.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {faqData.map((faq, index) => {
              const isOpen = openFaq === index;
              const answerId = `faq-answer-${index}`;

              return (
                <article
                  key={faq.question}
                  className={`overflow-hidden rounded-xl border bg-[#f0746c] shadow-sm transition-all duration-300 ${
                    isOpen ? 'border-[#f0746c] shadow-md ring-1 ring-[#000000]/20' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    className="flex w-full items-center gap-4 px-5 py-4 text-left outline-none transition-colors duration-300 cursor-pointer"
                  >
                    <span
                      aria-hidden="true"
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-lg font-bold leading-none transition-transform duration-300 ${
                        isOpen ? 'bg-[#f0746c] text-white rotate-180' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                    <span className="min-w-0 flex-1 text-sm font-bold text-gray-900 sm:text-[15px]">
                      {faq.question}
                    </span>
                  </button>

                  <div
                    id={answerId}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-slate-100 bg-white px-5 py-4 text-sm leading-6 text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>


      {/* =====================================================
          SPEECH THERAPY VIDEO SECTION
      ===================================================== */}

      <section
        className="relative py-20 px-4 sm:px-8 lg:px-12 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1800&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-[#6f6d83]/90"></div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-center text-3xl sm:text-4xl font-black text-white tracking-wider uppercase">
              SPEECH THERAPY
            </h2>
            <p className="w-full max-w-3xl mx-auto text-center text-white/90 text-sm sm:text-base mt-4 leading-7 px-4">
              Explore helpful speech and communication therapy videos for children, including language development, communication skills and practical therapy activities.
            </p>
            <div className="w-20 h-1 bg-[#f0746c] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[950px] mx-auto">
            
            {/* VIDEO CARD 1 */}
            <div className="bg-white/10 backdrop-blur-md p-4 shadow-xl border border-white/20 rounded-xl transition duration-300 hover:transform hover:-translate-y-1">
              <div className="relative aspect-video overflow-hidden rounded-lg bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/sAovlt4kaSI"
                  title="Speech Therapy Sessions for Children"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <h3 className="text-white font-bold text-sm mt-3 px-1">
                Speech Therapy Sessions for Children
              </h3>
              <p className="text-white/75 text-xs mt-1 px-1">
                Communication and language development activities.
              </p>
            </div>

            {/* VIDEO CARD 2 */}
            <div className="bg-white/10 backdrop-blur-md p-4 shadow-xl border border-white/20 rounded-xl transition duration-300 hover:transform hover:-translate-y-1">
              <div className="relative aspect-video overflow-hidden rounded-lg bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/k8ecQxHgFlI"
                  title="Speech Therapy Session for Kids"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <h3 className="text-white font-bold text-sm mt-3 px-1">
                Speech Therapy Session for Kids
              </h3>
              <p className="text-white/75 text-xs mt-1 px-1">
                Speech delay and communication-focused therapy session.
              </p>
            </div>

            {/* VIDEO CARD 3 */}
            <div className="bg-white/10 backdrop-blur-md p-4 shadow-xl border border-white/20 rounded-xl transition duration-300 hover:transform hover:-translate-y-1">
              <div className="relative aspect-video overflow-hidden rounded-lg bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/CRy1DgBmo9Y"
                  title="Using Attention to Promote Early Language Development"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <h3 className="text-white font-bold text-sm mt-3 px-1">
                Early Language Development
              </h3>
              <p className="text-white/75 text-xs mt-1 px-1">
                A practical communication strategy parents can use at home.
              </p>
            </div>

            {/* VIDEO CARD 4 */}
            <div className="bg-white/10 backdrop-blur-md p-4 shadow-xl border border-white/20 rounded-xl transition duration-300 hover:transform hover:-translate-y-1">
              <div className="relative aspect-video overflow-hidden rounded-lg bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/-pYIuECn0Z8"
                  title="Using Household Items for Early Language Development"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <h3 className="text-white font-bold text-sm mt-3 px-1">
                Language Development at Home
              </h3>
              <p className="text-white/75 text-xs mt-1 px-1">
                Simple everyday activities to encourage vocabulary and language.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          NEWSLETTER / FOOTER SECTION
      ===================================================== */}

      <section className="bg-[#a28bc7] py-12 px-6 sm:px-10" id="footer-section">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          <div className="flex items-center gap-5 lg:w-[32%] justify-center lg:justify-start">
            <div className="hidden sm:flex w-20 h-20 items-center justify-center text-white/90">
              <svg viewBox="0 0 100 100" className="w-20 h-20" fill="none" stroke="currentColor" strokeWidth="4">
                <path d="M25 25h50a7 7 0 0 1 7 7v36a7 7 0 0 1-7 7H25a7 7 0 0 1-7-7V32a7 7 0 0 1 7-7Z" />
                <path d="m20 31 30 24 30-24" />
                <path d="M20 73 40 53" />
                <path d="M80 73 60 53" />
                <path d="M50 25V12l10 9 10-9v13" />
              </svg>
            </div>

            <h2 className="text-white text-2xl sm:text-3xl font-bold leading-tight uppercase text-center lg:text-left">
              NEWSLETTER
              <br />
              SIGNUP
            </h2>
          </div>

          <div className="w-full lg:flex-1">
            <p className="text-white text-left text-sm sm:text-base mb-4 font-medium">
              Sign Up Below To Receive All The Latest Updates &amp; News From Us
            </p>

            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 items-stretch">
              <input
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
                required
                className="flex-1 h-12 px-4 bg-[#8f79b4] text-white placeholder-white/80 outline-none border border-transparent focus:border-white rounded transition shadow-inner"
              />
              <button
                type="submit"
                className="h-12 sm:w-[160px] bg-white text-[#8f79b4] font-bold text-xs uppercase rounded hover:bg-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                SUBMIT
              </button>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;