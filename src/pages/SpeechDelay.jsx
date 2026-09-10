import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SpeechDelay = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const faqData = [
    {
      question: "What is speech delay?",
      answer: "Speech delay, also known as language delay. It refers to a delay in the development of speech and language skills in children. It can involve difficulties in producing speech sounds, understanding language, or using language to communicate effectively."
    },
    {
      question: "What are the causes of speech delay?",
      answer: "Speech delays can be caused by various factors, including oral-motor issues, hearing loss, developmental disorders, autism spectrum disorder, or a lack of environmental stimulation."
    },
    {
      question: "At what age should I be concerned about my child's speech development?",
      answer: "You should consider seeking professional evaluation if your child is not babbling by 12 months, using single words by 16 months, or forming simple two-word phrases by 2 years of age."
    },
    {
      question: "How can I help my child with speech delay at home?",
      answer: "You can help by talking frequently with your child, reading books together daily, singing songs, describing what you are doing, and giving them time to respond when communicating."
    },
    {
      question: "When should I seek treatment for my child's speech delay?",
      answer: "It is always best to seek early intervention as soon as you notice signs of a delay. Early treatment yields the most positive and long-lasting outcomes for children."
    },
    {
      question: "What does speech therapy involve?",
      answer: "Speech therapy involves targeted exercises, interactive games, and communication strategies designed by professional speech-language pathologists to improve articulation, vocabulary, and comprehension."
    },
    {
      question: "Can speech delay be overcome with treatment?",
      answer: "Yes, with consistent speech therapy, proper guidance, and early intervention, many children successfully overcome speech delays and improve their overall communication abilities."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full font-sans text-gray-800 bg-white overflow-x-hidden">

      {/* =========================================================
          1. BANNER SECTION
      ========================================================= */}
      <div className="relative w-full h-[250px] sm:h-[300px] bg-gray-900 overflow-hidden flex items-center justify-center">
        <img
          src="https://abcautism.com.my/wp-content/uploads/2024/05/speech-delay.jpg"
          alt="Speech Delay Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wider uppercase mb-2 drop-shadow-lg">
            Speech Delay
          </h1>

          <p className="text-xs sm:text-sm font-medium tracking-wide text-gray-100 drop-shadow-md">
            <a href="/" className="hover:underline hover:text-teal-300 transition">Home</a>
            <span className="mx-2">/</span>
            <span className="text-[#da4453]">Speech Delay</span>
          </p>
        </div>
      </div>


      {/* =========================================================
          2. WHAT IS SPEECH THERAPY? SECTION
      ========================================================= */}
      <section className="max-w-5xl mx-auto px-6 sm:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <img 
              src="https://abcautism.com.my/wp-content/uploads/2024/05/delayed-speech-2048x1365.jpeg" 
              alt="What is Speech Therapy" 
              className="w-full max-w-[400px] h-auto object-contain"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800&auto=format&fit=crop";
              }}
            />
          </div>

          <div className="lg:col-span-7 space-y-5 text-gray-700 text-sm sm:text-base leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider" style={{ color: '#da4453' }}>
              What is Speech Therapy?
            </h2>
            <p className="text-xs sm:text-sm leading-7 text-gray-700">
              Speech therapy supports children who have trouble speaking or understanding language. It is carried out by professionals called speech therapists or speech-language pathologists. These experts work with children to improve their speaking skills, such as vocalizing words clearly, building their vocabulary, and forming sentences. They also help children who have difficulty understanding what others say or who struggle with communication in general.
            </p>
            <p className="text-xs sm:text-sm leading-7 text-gray-700">
              At ABC, through ABA (applied behavior analysis), a form of <strong>Speech Delay Treatment in Pakistan</strong> we focus on working on development of communication including speech, listening, following instructions, and teaching non-verbal methods of communication eg: sign language. Speech therapy sessions are often fun and engaging, using games and activities to make learning enjoyable and effective. The main goal is to help children communicate better and feel more confident in their ability to express themselves.
            </p>
            <p className="text-xs sm:text-sm leading-7 text-gray-700 pt-2">
              <em>At ABC, the early intervention program (EIP) is developed for children with developmental delays and disorders, including speech delays. Our treatment plans are designed in a way that a child will be able to deal with these conditions without losing their confidence.</em>
            </p>
          </div>
        </div>
      </section>


      {/* =========================================================
          3. WHO PROVIDES SPEECH THERAPY? SECTION
      ========================================================= */}
      <section className="bg-[#41a2a6] py-16 px-6 sm:px-12 text-white">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="max-w-4xl space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-wider" style={{ color: '#FFFFFF' }}>
              Who Provides Speech Therapy?
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed opacity-95">
              Speech therapy is primarily provided by professionals known as speech therapists or speech and language pathologists. These specialists are trained to help individuals, especially <strong>children, who have difficulties with speech, language, and communication</strong>. In addition to these experts, other healthcare professionals can also be involved in providing comprehensive speech therapy services. Clinical psychologists and clinical specialists often collaborate with speech therapists to address the broader needs of a child, particularly if there are underlying psychological or developmental issues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="bg-white text-gray-800 p-6 rounded-sm shadow-md flex items-start gap-4">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-teal-50 rounded-full">
                <span className="text-2xl">👶</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-gray-700 font-medium">
                Clinical psychologists supporting <strong>Speech Delay Treatment in Pakistan</strong> at ABC are experts in understanding the mental and emotional aspects of communication difficulties. They can help identify any psychological factors that might be affecting a child's ability to speak or understand language.
              </p>
            </div>

            <div className="bg-white text-gray-800 p-6 rounded-sm shadow-md flex items-start gap-4">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-teal-50 rounded-full">
                <span className="text-2xl">👩‍🏫</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-gray-700 font-medium">
                Behavioral or ABA therapists often work alongside speech therapists to address attention and behavioral concerns that impact learning and speech acquisition.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          4. WHO BENEFITS FROM SPEECH THERAPY? SECTION
      ========================================================= */}
      <section className="max-w-5xl mx-auto px-6 sm:px-12 py-16">
        <div className="space-y-6 mb-10">
          <h2 className="text-2xl sm:text-4xl font-bold uppercase tracking-wider" style={{ color: '#da4453' }}>
            Who Benefits from Speech Therapy?
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-4xl">
            <strong>Speech Therapy in Lahore </strong> can benefit a wide range of individuals, particularly children, who experience various types of communication challenges. Here are some groups who commonly benefit from speech therapy and at ABC we focus on these groups specifically:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm flex items-start gap-5">
            <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-teal-50 rounded-full border border-teal-100">
              <span className="text-2xl">🗣️</span>
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Children with Speech Delays</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Kids who start talking later than their peers or have trouble pronouncing words can improve their speaking skills through speech therapy.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm flex items-start gap-5">
            <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-teal-50 rounded-full border border-teal-100">
              <span className="text-2xl">📖</span>
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Children with Language Disorders</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Those who have difficulty understanding what others say or struggle to express their thoughts and ideas clearly can gain a better grasp of language and communication.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm flex items-start gap-5">
            <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-teal-50 rounded-full border border-teal-100">
              <span className="text-2xl">🧩</span>
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Children with Autism Spectrum Disorder (ASD)</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Speech therapy helps children with ASD improve their communication skills, including both verbal and non-verbal methods, enhancing their ability to interact socially.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm flex items-start gap-5">
            <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-teal-50 rounded-full border border-teal-100">
              <span className="text-2xl">💬</span>
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Children with Articulation Disorders</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Kids who have problems making certain sounds or words can learn to pronounce them correctly, making their speech clearer and more understandable.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm flex items-start gap-5 md:col-span-2 md:max-w-[calc(50%-12px)]">
            <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-teal-50 rounded-full border border-teal-100">
              <span className="text-2xl">⭐</span>
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Children with Developmental Disorders</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Those with conditions such as Down syndrome or cerebral palsy can benefit from speech therapy to enhance their communication abilities and overall quality of life.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          5. HOW DOES SPEECH THERAPY DIFFER FROM OTHER THERAPIES?
      ========================================================= */}
      <section className="bg-[#e75752] py-16 px-6 sm:px-12 text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider" style={{ color: '#FFFFFF' }}>
              How Does Speech Therapy Differ from Other Therapies?
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed opacity-95">
              Speech therapy stands apart from other therapies in its specialized focus on improving communication skills, particularly speech and language abilities. Unlike physical therapy, which targets motor skills and movement, or occupational therapy, which addresses daily living activities and fine motor skills, speech therapy is uniquely tailored to enhance how individuals speak, understand, and interact through language.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed opacity-95">
              ABA therapists in ABC employ a variety of techniques to assist children and adults in overcoming challenges such as autism, language delays, and difficulties with comprehension or social communication. The therapy sessions are highly individualized, adapting strategies to each person's specific needs and goals.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <img 
              src="https://abcautism.com.my/wp-content/uploads/2024/07/Speech-Therapy-Differ-scaled.jpeg" 
              alt="Therapy session" 
              className="w-full max-w-[400px] h-[300px] object-cover rounded-lg shadow-lg border border-white/20"
            />
          </div>
        </div>
      </section>


      {/* =========================================================
          6. WHAT MAKES ABC'S THERAPY APART FROM OTHERS?
      ========================================================= */}
      <section className="bg-[#e75752] py-16 px-6 sm:px-12 text-white border-t border-red-400">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <img 
              src="https://abcautism.com.my/wp-content/uploads/2024/07/Makes-ABCs-Therapy-scaled.jpg" 
              alt="ABC Therapy" 
              className="w-full max-w-[400px] h-[300px] object-cover rounded-lg shadow-lg border border-white/20"
            />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider" style={{ color: '#FFFFFF' }}>
              What Makes ABC's Therapy Apart from Others?
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed opacity-95">
              What sets ABC apart from other providers, especially for children, is our specialized focus on improving communication skills through targeted behavioral techniques based on reinforcement and motivation. Unlike occupational therapy, which focuses on fine motor skills, or physical therapy, which addresses gross motor skills and mobility, behavioral therapy in ABC focuses on language development—specifically targets the development of speech, language, and communication abilities. Early intervention specialists work closely with children to assess and address a wide range of challenges, including language delays, autism and difficulties with social communication.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed opacity-95">
              Well, at ABC children typically start with 1:1 sessions in the early Intervention program. Once they master the necessary skills in this individualized setting, they transition to small group sessions with 2-3 children and eventually integrate into a school environment. To achieve the best outcomes, early Intervention programs should commence as early as possible, ideally between the ages of 16 months old to 3 years old. By applying the principles of Applied Behavior Analysis (ABA) in its early Intervention program, ABC focuses on teaching and building essential skill.
            </p>
          </div>
        </div>
      </section>


      {/* =========================================================
          7. WHICH STRATEGIES HELP MANAGE SPEECH DELAY? (3-COLUMN)
      ========================================================= */}
      <section className="max-w-5xl mx-auto px-6 sm:px-12 py-16">
        <div className="space-y-3 mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider" style={{ color: '#da4453' }}>
            Which Strategies Help Manage Speech Delay/Disorder in Children (at Preschool, School, and Home)?
          </h2>
          <p className="text-xs sm:text-sm text-gray-700">
            Here are strategies to help manage speech delay/disorder in children at preschool, school, and home:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-[#e75752] text-white p-5 rounded-lg shadow-sm flex flex-col">
            <h3 className="text-base font-bold text-center mb-4 pb-2 border-b border-white/20 uppercase tracking-wider">
              Preschool
            </h3>
            <ul className="space-y-2.5 text-[11px] leading-snug opacity-95">
              <li className="flex items-start gap-2">
                <span className="font-bold">➔</span>
                <span><strong>Early Intervention:</strong> Start therapy as early as possible.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">➔</span>
                <span><strong>Structured Play:</strong> Engage in activities that promote speech and language development, such as storytelling, singing songs, and playing with puppets.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">➔</span>
                <span><strong>Visual Aids:</strong> Use pictures and visual cues to support understanding and communication.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">➔</span>
                <span><strong>Consistency:</strong> Maintain consistent routines and use simple, clear instructions.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">➔</span>
                <span><strong>Reinforce:</strong> Praise efforts and provide positive reinforcement for attempts at communication.</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#41a2a6] text-white p-5 rounded-lg shadow-sm flex flex-col">
            <h3 className="text-base font-bold text-center mb-4 pb-2 border-b border-white/20 uppercase tracking-wider">
              School
            </h3>
            <ul className="space-y-2.5 text-[11px] leading-snug opacity-95">
              <li className="flex items-start gap-2">
                <span className="font-bold">➔</span>
                <span><strong>Individualized Education Plan (IEP):</strong> Work with school professionals to develop an IEP tailored to the child's needs, including speech therapy goals.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">➔</span>
                <span><strong>Classroom Support:</strong> Ensure the child has access to classroom accommodations, such as preferential seating and extra time for assignments.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">➔</span>
                <span><strong>Speech Therapy Sessions:</strong> Attend regular sessions with a school-based speech-language pathologist (SLP) to practice speech and language skills.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">➔</span>
                <span><strong>Peer Interaction:</strong> Encourage interaction with peers through group activities and cooperative learning.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">➔</span>
                <span><strong>Teacher Collaboration:</strong> Communicate regularly with teachers to monitor progress and adjust strategies as needed.</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#947bb0] text-white p-5 rounded-lg shadow-sm flex flex-col">
            <h3 className="text-base font-bold text-center mb-4 pb-2 border-b border-white/20 uppercase tracking-wider">
              Home
            </h3>
            <ul className="space-y-2.5 text-[11px] leading-snug opacity-95">
              <li className="flex items-start gap-2">
                <span className="font-bold">➔</span>
                <span><strong>Daily Practice:</strong> Incorporate speech and language activities into daily routines, such as reading books together and discussing stories.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">➔</span>
                <span><strong>Modeling:</strong> Speak clearly and use correct grammar to model appropriate speech. Conversation: Engage in meaningful conversations and encourage the child to express thoughts and feelings.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">➔</span>
                <span><strong>Playtime:</strong> Use playtime as an opportunity for language development, with toys and games that encourage talking and interaction.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">➔</span>
                <span><strong>Patience and Support:</strong> Be patient and supportive, allowing the child time to express themselves and offering praise for efforts.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>


      {/* =========================================================
          8. WHAT SHOULD PARENTS KNOW ABOUT SPEECH THERAPY? (4-COLUMN)
      ========================================================= */}
      <section className="relative bg-gradient-to-br from-white via-red-50/20 to-white py-16 px-6 sm:px-12 overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider mb-12" style={{ color: '#da4453' }}>
            What Should Parents Know About Speech Therapy?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#41a2a6] font-bold text-sm uppercase tracking-wider">
                <span className="w-5 h-5 flex items-center justify-center border border-[#41a2a6] text-xs">✔</span>
                <span>Early Intervention</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Starting therapy early can significantly improve outcomes for children with speech delays or disorders.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#41a2a6] font-bold text-sm uppercase tracking-wider">
                <span className="w-5 h-5 flex items-center justify-center border border-[#41a2a6] text-xs">✔</span>
                <span>Customized Plans</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Therapy plans are tailored to each child's specific needs and may include strategies for improving speech clarity, language comprehension, and social communication skills.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#41a2a6] font-bold text-sm uppercase tracking-wider">
                <span className="w-5 h-5 flex items-center justify-center border border-[#41a2a6] text-xs">✔</span>
                <span>Home Practice</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Parents play a crucial role in supporting therapy goals by practicing exercises and techniques at home recommended by the therapist.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#41a2a6] font-bold text-sm uppercase tracking-wider">
                <span className="w-5 h-5 flex items-center justify-center border border-[#41a2a6] text-xs">✔</span>
                <span>Progress Monitoring</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Regular assessments and updates on Speech Therapy in Kuala Lumpur program help track the child's progress and adjust therapy strategies as needed.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-2 text-[#41a2a6] font-bold text-sm uppercase tracking-wider">
                <span className="w-5 h-5 flex items-center justify-center border border-[#41a2a6] text-xs">✔</span>
                <span>Communication Skills</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Therapy focuses not only on speech but also on enhancing overall communication abilities, including listening, understanding, and expressing thoughts effectively.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-2 text-[#41a2a6] font-bold text-sm uppercase tracking-wider">
                <span className="w-5 h-5 flex items-center justify-center border border-[#41a2a6] text-xs">✔</span>
                <span>Integration with Daily Life</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Techniques learned in therapy can be integrated into everyday routines to reinforce learning and skill development.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-2 text-[#41a2a6] font-bold text-sm uppercase tracking-wider">
                <span className="w-5 h-5 flex items-center justify-center border border-[#41a2a6] text-xs">✔</span>
                <span>Emotional Support</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Addressing speech delays can impact a child's confidence and self-esteem; therapy aims to foster a positive attitude towards communication.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-2 text-[#41a2a6] font-bold text-sm uppercase tracking-wider">
                <span className="w-5 h-5 flex items-center justify-center border border-[#41a2a6] text-xs">✔</span>
                <span>Parental Involvement</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Parents are encouraged to ask questions, communicate concerns, and actively participate in their child's therapy journey.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          9. WHAT HAPPENS IF A CHILD'S SPEECH DELAY ISN'T TREATED? (6-CARD)
      ========================================================= */}
      <section className="max-w-5xl mx-auto px-6 sm:px-12 py-16">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider" style={{ color: '#da4453' }}>
            What Happens If a Child's Speech Delay/Disorder Isn't Treated?
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            If a child's speech delay or disorder isn't treated, several potential consequences can arise, impacting various aspects of their development and well-being:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#947bb0] text-white p-6 rounded-lg shadow-sm text-center flex flex-col justify-center min-h-[190px]">
            <h3 className="text-base font-bold mb-2 tracking-wide">Academic Challenges</h3>
            <p className="text-xs leading-relaxed opacity-95">
              Untreated speech delays can affect a child's ability to learn and participate in school activities, potentially leading to academic struggles, especially in subjects requiring verbal communication.
            </p>
          </div>

          <div className="bg-[#41a2a6] text-white p-6 rounded-lg shadow-sm text-center flex flex-col justify-center min-h-[190px]">
            <h3 className="text-base font-bold mb-2 tracking-wide">Social Isolation</h3>
            <p className="text-xs leading-relaxed opacity-95">
              Difficulty communicating clearly may hinder a child's ability to interact with peers, leading to social withdrawal, frustration, or feelings of isolation.
            </p>
          </div>

          <div className="bg-[#e75752] text-white p-6 rounded-lg shadow-sm text-center flex flex-col justify-center min-h-[190px]">
            <h3 className="text-base font-bold mb-2 tracking-wide">Emotional Impact</h3>
            <p className="text-xs leading-relaxed opacity-95">
              Persistent difficulties in expressing oneself may lead to frustration, low self-esteem, and even behavioral issues as the child struggles to communicate effectively.
            </p>
          </div>

          <div className="bg-[#41a2a6] text-white p-6 rounded-lg shadow-sm text-center flex flex-col justify-center min-h-[190px]">
            <h3 className="text-base font-bold mb-2 tracking-wide">Delayed Language Development</h3>
            <p className="text-xs leading-relaxed opacity-95">
              Without intervention, speech delays can also delay overall language development, affecting comprehension, vocabulary growth, and the ability to understand and follow instructions.
            </p>
          </div>

          <div className="bg-[#e75752] text-white p-6 rounded-lg shadow-sm text-center flex flex-col justify-center min-h-[190px]">
            <h3 className="text-base font-bold mb-2 tracking-wide">Impact on Relationships</h3>
            <p className="text-xs leading-relaxed opacity-95">
              Communication challenges may strain relationships with family members, peers, and educators, potentially affecting the child's social and emotional development.
            </p>
          </div>

          <div className="bg-[#fca139] text-white p-6 rounded-lg shadow-sm text-center flex flex-col justify-center min-h-[190px]">
            <h3 className="text-base font-bold mb-2 tracking-wide">Long-term Effects</h3>
            <p className="text-xs leading-relaxed opacity-95">
              Untreated speech delays can have long-lasting effects into adulthood, potentially affecting career opportunities, relationships, and overall quality of life.
            </p>
          </div>
        </div>
      </section>


      {/* =========================================================
          10. WHAT DOES A SPEECH DELAY/DISORDER DIAGNOSIS MEAN FOR A CHILD?
      ========================================================= */}
      <section className="relative bg-[#e75752] py-20 px-6 sm:px-12 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format&fit=crop" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider" style={{ color: '#FFFFFF' }}>
              What Does a Speech Delay/Disorder Diagnosis Mean for a Child?
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed opacity-95">
              A diagnosis of speech delay or disorder for a child signifies that they are experiencing challenges in their ability to communicate effectively compared to their peers. Here's what it generally means:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-teal-200 font-bold text-sm uppercase tracking-wider">
                <span className="w-5 h-5 flex items-center justify-center border border-teal-200 text-xs">✔</span>
                <span>Specific Challenges Identified</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed opacity-95">
                The diagnosis pinpoints areas where the child is struggling, such as articulation (pronouncing words), language comprehension (understanding spoken language), expressive language (using words and sentences), or fluency (smoothness of speech).
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-teal-200 font-bold text-sm uppercase tracking-wider">
                <span className="w-5 h-5 flex items-center justify-center border border-teal-200 text-xs">✔</span>
                <span>Individualized Treatment Plan</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed opacity-95">
                Following diagnosis, a clinical pathologist typically develops a personalized treatment plan for the child. This plan outlines specific goals and strategies to address the child's communication difficulties.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-teal-200 font-bold text-sm uppercase tracking-wider">
                <span className="w-5 h-5 flex items-center justify-center border border-teal-200 text-xs">✔</span>
                <span>Early Intervention Opportunities</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed opacity-95">
                Early diagnosis opens the door to early intervention, which is crucial for improving the child's communication skills and minimizing the impact of the delay or disorder on their overall development.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-teal-200 font-bold text-sm uppercase tracking-wider">
                <span className="w-5 h-5 flex items-center justify-center border border-teal-200 text-xs">✔</span>
                <span>Support and Resources</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed opacity-95">
                The child and their family will have access to support from professionals, including potentially clinical psychologists or clinical specialists. This entirely depends on the underlying causes or co-existing conditions.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-teal-200 font-bold text-sm uppercase tracking-wider">
                <span className="w-5 h-5 flex items-center justify-center border border-teal-200 text-xs">✔</span>
                <span>Potential Challenges and Progress</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed opacity-95">
                While a diagnosis may present challenges, it also signifies opportunities for progress. With consistent therapy and support, many children make significant improvements in their speech and language abilities over time.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-teal-200 font-bold text-sm uppercase tracking-wider">
                <span className="w-5 h-5 flex items-center justify-center border border-teal-200 text-xs">✔</span>
                <span>Educational Implications</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed opacity-95">
                Depending on the severity of the delay or disorder, the child may receive accommodations or special education services in school to help them succeed academically and socially.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          11. DON'T WORRY BECAUSE ABC IS HERE TO HELP!
      ========================================================= */}
      <section className="bg-[#8f79b4] py-20 px-6 sm:px-12 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider leading-snug" style={{ color: '#FFFFFF' }}>
              Don't worry because Autism Behavioral Center is here to help your child!
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed opacity-95">
              Our team at ABC, an early intervention center located in Subang Jaya and Kuala Lumpur, is supervised by Board Certified Behavior Analysts and clinical supervisors, our team ensures that programs are individualized according to each child's needs and goals set by both the family and the team.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-block border-2 border-white hover:bg-white hover:text-gray-900 transition-all font-bold text-xs uppercase px-8 py-3 tracking-widest rounded-sm shadow-md"
              >
                CONTACT US
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=800&auto=format&fit=crop" 
              alt="Helping Child" 
              className="w-full max-w-[400px] h-[280px] object-cover rounded-lg shadow-xl border border-white/20"
            />
          </div>
        </div>
      </section>


      {/* =========================================================
          12. FREQUENTLY ASKED QUESTIONS (ACCORDION SECTION)
      ========================================================= */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider" style={{ color: '#111111' }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={index} className="overflow-hidden shadow-sm">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left px-6 py-4 bg-[#e75752] hover:bg-[#d44d48] text-white font-medium text-sm sm:text-base transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-lg font-bold">{isOpen ? '−' : '+'}</span>
                    <span>{index + 1}. {faq.question}</span>
                  </span>
                </button>

                {isOpen && (
                  <div className="bg-white border-x border-b border-gray-200 px-6 py-5 text-gray-700 text-xs sm:text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};

export default SpeechDelay;