import React, { useState } from 'react';
import { 
  Brain, 
  HeartHandshake, 
  BookOpen, 
  Users, 
  Dumbbell, 
  ClipboardList, 
  GraduationCap, 
  Briefcase, 
  MessageSquareCode,
  ChevronDown
} from 'lucide-react';

const ADHD = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "Is ABA the standard treatment for ADHD?",
      answer: "ABA is widely recognized and used for building functional skills, improving focus, and managing behaviors in children with ADHD, often complementing other medical or educational approaches."
    },
    {
      question: "What can it actually help with?",
      answer: "It helps with attention span, impulse control, emotional regulation, following multi-step instructions, social skills, daily routines, and school readiness."
    },
    {
      question: "Who’s a good fit?",
      answer: "Children diagnosed with or showing characteristics of ADHD who need structured behavioral support to manage daily tasks, self-regulation, and social interactions."
    },
    {
      question: "How long does it take?",
      answer: "The duration varies depending on each child's specific goals, consistency, and developmental needs, ranging from several months to ongoing support."
    },
    {
  question: "Do you run this in Lahore as well?",
answer: "Yes, our services and support programs are available for families across Lahore, Pakistan."
    },
    {
      question: "Is it in English?",
      answer: "Sessions are conducted primarily in English as well as Lahore Pakistan to accommodate families comfortably."
    },
    {
      question: "How many hours a week does my child need?",
      answer: "Hours are tailored based on the initial assessment and the specific goals established for your child's intervention plan."
    },
    {
      question: "Can this run alongside medication or other therapies?",
      answer: "Yes, ABA intervention is structured to work collaboratively alongside medical treatments, speech therapy, and occupational therapy."
    },
    {
      question: "What age should we start?",
      answer: "Early intervention can begin as soon as noticeable behavioral or developmental challenges emerge, providing a stronger foundation for growth."
    },
    {
      question: "Do we need a formal diagnosis first?",
      answer: "While a formal diagnosis is helpful, we also offer screening and diagnostic assessments to understand your child's needs before starting a program."
    }
  ];

  return (
    <div className="w-full font-sans text-gray-800 bg-white overflow-x-hidden">

      {/* =========================================================
          1. BANNER SECTION (WITH BREADCRUMB)
      ========================================================= */}
      <div className="relative w-full h-[250px] sm:h-[300px] bg-gray-900 overflow-hidden flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=1600&auto=format&fit=crop"
          alt="ADHD Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-wider uppercase mb-2 drop-shadow-md">
            ADHD in Lahore, Pakistan
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
              ADHD in Lahore, Pakistan
            </span>
          </p>
        </div>
      </div>


      {/* =========================================================
          2. ABA-BASED SUPPORT SECTION (WITH IMAGE & ENQUIRE BUTTON)
      ========================================================= */}
      <section className="bg-white py-16 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Text Content */}
          <div className="space-y-6">
            <p className="text-xs sm:text-sm font-bold tracking-wider text-gray-500 uppercase">
              ABA-Based Support for Children with ADHD in Lahore, Pakistan
            </p>
                <h2
  className="text-2xl sm:text-4xl font-extrabold tracking-wide"
  style={{ color: "#000000", opacity: 1 }}
>
   What ABA-based intervention looks like for a child with ADHD
   </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              If your child has ADHD, you’ve probably already heard a dozen opinions on what actually helps; medication, diet changes, exposing your child to school or <span className="italic">“just more structure at home.”</span>
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Here’s where ABA fits into that picture honestly: it’s not a replacement for medication or parent training, and it’s not marketed that way in the clinical literature. What it does offer is a structured way to teach the specific skills ADHD makes hard—staying with a task, waiting a turn, catching yourself before you blurt something out, calming down after a meltdown, using reinforcement and repetition rather than lectures or punishment.
            </p>

            <div className="pt-2">
              <a
                href="/contact"
                className="inline-block bg-[#38959c] hover:bg-[#2f7d83] text-white font-bold text-xs uppercase px-7 py-3 tracking-widest transition-all rounded shadow-md"
              >
                ENQUIRE NOW
              </a>
            </div>
          </div>

          {/* Right Image Container */}
          <div className="w-full flex justify-center">
            <img
              src="https://abcautism.com.my/wp-content/uploads/2026/08/image-45.png"
              alt="ABA Based Intervention for ADHD"
              className="w-full h-auto max-h-[420px] object-cover rounded-2xl shadow-lg"
            />
          </div>

        </div>
      </section>


      {/* =========================================================
          3. THE SKILLS, ONE AT A TIME (9 CARDS SECTION)
      ========================================================= */}
      <section className="bg-slate-50 py-16 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2
  className="text-2xl sm:text-4xl font-extrabold tracking-wide"
  style={{ color: "#000000", opacity: 1 }}
>
  The skills, one at a time
</h2>
          </div>

          {/* 9 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Attention and Focus */}
            <div className="bg-[#38959c] rounded-2xl p-8 text-white flex flex-col justify-between shadow-lg transition-transform hover:-translate-y-1">
              <div>
                <div className="w-28 h-28 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-inner">
                  <Brain className="w-14 h-14 text-gray-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-center text-lg font-bold uppercase tracking-wider mb-4">
                  Attention and Focus
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-white/95 text-center mb-8">
                  A child who can’t hold focus for two minutes isn’t being defiant – the skill hasn’t been built yet. We use structured tasks and reinforcement to stretch that window gradually, so a kid who could only manage a worksheet for ninety seconds can eventually sit through a full lesson.
                </p>
              </div>
              <div className="text-center">
                <a
                  href="/contact"
                  className="inline-block border border-white/80 hover:bg-white hover:text-[#38959c] text-white font-bold text-xs uppercase px-6 py-2.5 tracking-widest transition-all rounded"
                >
                  ENQUIRE NOW
                </a>
              </div>
            </div>

            {/* Card 2: Impulse Control */}
            <div className="bg-[#9b8ac4] rounded-2xl p-8 text-white flex flex-col justify-between shadow-lg transition-transform hover:-translate-y-1">
              <div>
                <div className="w-28 h-28 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-inner">
                  <HeartHandshake className="w-14 h-14 text-gray-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-center text-lg font-bold uppercase tracking-wider mb-4">
                  Impulse Control
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-white/95 text-center mb-8">
                  Waiting is a skill like any other, and it can be taught the same way you’d teach reading- in small steps, reinforced consistently, across settings so it actually generalizes instead of only showing up in the therapy room.
                </p>
              </div>
              <div className="text-center">
                <a
                  href="/contact"
                  className="inline-block border border-white/80 hover:bg-white hover:text-[#9b8ac4] text-white font-bold text-xs uppercase px-6 py-2.5 tracking-widest transition-all rounded"
                >
                  ENQUIRE NOW
                </a>
              </div>
            </div>

            {/* Card 3: Emotional Regulation */}
            <div className="bg-[#e95f58] rounded-2xl p-8 text-white flex flex-col justify-between shadow-lg transition-transform hover:-translate-y-1">
              <div>
                <div className="w-28 h-28 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-inner">
                  <BookOpen className="w-14 h-14 text-gray-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-center text-lg font-bold uppercase tracking-wider mb-4">
                  Emotional Regulation
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-white/95 text-center mb-8">
                  A lot of what looks like a “tantrum” is a kid who doesn’t yet have words for what they’re feeling, or a plan for what to do about it. We work on naming emotions, spotting the trigger before it escalates, and building a go-to coping response that isn’t just “calm down” (which, if you’ve ever tried to tell an eight-year-old that mid-meltdown, you’ll know doesn’t work).
                </p>
              </div>
              <div className="text-center">
                <a
                  href="/contact"
                  className="inline-block border border-white/80 hover:bg-white hover:text-[#e95f58] text-white font-bold text-xs uppercase px-6 py-2.5 tracking-widest transition-all rounded"
                >
                  ENQUIRE NOW
                </a>
              </div>
            </div>

            {/* Card 4: Behavior Support */}
            <div className="bg-[#f39c3f] rounded-2xl p-8 text-white flex flex-col justify-between shadow-lg transition-transform hover:-translate-y-1">
              <div>
                <div className="w-28 h-28 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-inner">
                  <Users className="w-14 h-14 text-gray-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-center text-lg font-bold uppercase tracking-wider mb-4">
                  Behavior Support
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-white/95 text-center mb-8">
                  For kids seeing us for behavioral therapy in Lahore  specifically around ADHD, the goal isn’t compliance for its own sake- it’s giving a child functional ways to get what they need (attention, a break, control) so the old, harder-to-manage behaviors stop being necessary.
                </p>
              </div>
              <div className="text-center">
                <a
                  href="/contact"
                  className="inline-block border border-white/80 hover:bg-white hover:text-[#f39c3f] text-white font-bold text-xs uppercase px-6 py-2.5 tracking-widest transition-all rounded"
                >
                  ENQUIRE NOW
                </a>
              </div>
            </div>

            {/* Card 5: Social Skills */}
            <div className="bg-[#5bc0de] rounded-2xl p-8 text-white flex flex-col justify-between shadow-lg transition-transform hover:-translate-y-1">
              <div>
                <div className="w-28 h-28 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-inner">
                  <Dumbbell className="w-14 h-14 text-gray-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-center text-lg font-bold uppercase tracking-wider mb-4">
                  Social Skills
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-white/95 text-center mb-8">
                  Turn-taking, listening in a conversation instead of just waiting to talk, reading when a peer’s had enough – these get practiced deliberately, because for a lot of kids with ADHD they don’t develop just from being around other kids.
                </p>
              </div>
              <div className="text-center">
                <a
                  href="/contact"
                  className="inline-block border border-white/80 hover:bg-white hover:text-[#5bc0de] text-white font-bold text-xs uppercase px-6 py-2.5 tracking-widest transition-all rounded"
                >
                  ENQUIRE NOW
                </a>
              </div>
            </div>

            {/* Card 6: Task Completion */}
            <div className="bg-[#38959c] rounded-2xl p-8 text-white flex flex-col justify-between shadow-lg transition-transform hover:-translate-y-1">
              <div>
                <div className="w-28 h-28 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-inner">
                  <ClipboardList className="w-14 h-14 text-gray-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-center text-lg font-bold uppercase tracking-wider mb-4">
                  Task Completion
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-white/95 text-center mb-8">
                  We break a task into pieces small enough that finishing feels achievable, then reinforce the finishing – not just the trying.
                </p>
              </div>
              <div className="text-center">
                <a
                  href="/contact"
                  className="inline-block border border-white/80 hover:bg-white hover:text-[#38959c] text-white font-bold text-xs uppercase px-6 py-2.5 tracking-widest transition-all rounded"
                >
                  ENQUIRE NOW
                </a>
              </div>
            </div>

            {/* Card 7: Following Instructions */}
            <div className="bg-[#9b8ac4] rounded-2xl p-8 text-white flex flex-col justify-between shadow-lg transition-transform hover:-translate-y-1">
              <div>
                <div className="w-28 h-28 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-inner">
                  <GraduationCap className="w-14 h-14 text-gray-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-center text-lg font-bold uppercase tracking-wider mb-4">
                  Following Instructions
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-white/95 text-center mb-8">
                  Multi-step directions (“get your shoes, grab your bag, and meet me at the door”) are genuinely hard for a lot of kids with ADHD. We build this up from single-step to multi-step, with enough repetition that it holds up outside the session room too.
                </p>
              </div>
              <div className="text-center">
                <a
                  href="/contact"
                  className="inline-block border border-white/80 hover:bg-white hover:text-[#9b8ac4] text-white font-bold text-xs uppercase px-6 py-2.5 tracking-widest transition-all rounded"
                >
                  ENQUIRE NOW
                </a>
              </div>
            </div>

            {/* Card 8: Independence and Daily Living */}
            <div className="bg-[#e95f58] rounded-2xl p-8 text-white flex flex-col justify-between shadow-lg transition-transform hover:-translate-y-1">
              <div>
                <div className="w-28 h-28 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-inner">
                  <Briefcase className="w-14 h-14 text-gray-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-center text-lg font-bold uppercase tracking-wider mb-4">
                  Independence &amp; Daily Living
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-white/95 text-center mb-8">
                  Depending on the child, this might mean organizing a school bag, getting through a morning routine without three reminders, dressing independently, or basic hygiene – the stuff that adds up to a parent’s morning being calm or chaotic.
                </p>
              </div>
              <div className="text-center">
                <a
                  href="/contact"
                  className="inline-block border border-white/80 hover:bg-white hover:text-[#e95f58] text-white font-bold text-xs uppercase px-6 py-2.5 tracking-widest transition-all rounded"
                >
                  ENQUIRE NOW
                </a>
              </div>
            </div>

            {/* Card 9: Academics */}
            <div className="bg-[#f39c3f] rounded-2xl p-8 text-white flex flex-col justify-between shadow-lg transition-transform hover:-translate-y-1">
              <div>
                <div className="w-28 h-28 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-inner">
                  <MessageSquareCode className="w-14 h-14 text-gray-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-center text-lg font-bold uppercase tracking-wider mb-4">
                  Academics
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-white/95 text-center mb-8">
                  Attention and task-completion struggles show up hardest in a classroom. We work on the readiness skills underneath academic performance; sitting, attending, participating- rather than tutoring subject content directly.
                </p>
              </div>
              <div className="text-center">
                <a
                  href="/contact"
                  className="inline-block border border-white/80 hover:bg-white hover:text-[#f39c3f] text-white font-bold text-xs uppercase px-6 py-2.5 tracking-widest transition-all rounded"
                >
                  ENQUIRE NOW
                </a>
              </div>
            </div>
 {/* Card 1: Attention and Focus */}
            <div className="bg-[#38959c] rounded-2xl p-8 text-white flex flex-col justify-between shadow-lg transition-transform hover:-translate-y-1">
              <div>
                <div className="w-28 h-28 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-inner">
                  <Brain className="w-14 h-14 text-gray-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-center text-lg font-bold uppercase tracking-wider mb-4">
                  Attention and Focus
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-white/95 text-center mb-8">
                  A child who can’t hold focus for two minutes isn’t being defiant – the skill hasn’t been built yet. We use structured tasks and reinforcement to stretch that window gradually, so a kid who could only manage a worksheet for ninety seconds can eventually sit through a full lesson.
                </p>
              </div>
              <div className="text-center">
                <a
                  href="/contact"
                  className="inline-block border border-white/80 hover:bg-white hover:text-[#38959c] text-white font-bold text-xs uppercase px-6 py-2.5 tracking-widest transition-all rounded"
                >
                  ENQUIRE NOW
                </a>
              </div>
            </div>
            {/* Card 4: Behavior Support */}
            <div className="bg-[#f39c3f] rounded-2xl p-8 text-white flex flex-col justify-between shadow-lg transition-transform hover:-translate-y-1">
              <div>
                <div className="w-28 h-28 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-inner">
                  <Users className="w-14 h-14 text-gray-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-center text-lg font-bold uppercase tracking-wider mb-4">
                  Behavior Support
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-white/95 text-center mb-8">
                  For kids seeing us for behavioral therapy in Lahore  specifically around ADHD, the goal isn’t compliance for its own sake- it’s giving a child functional ways to get what they need (attention, a break, control) so the old, harder-to-manage behaviors stop being necessary.
                </p>
              </div>
              <div className="text-center">
                <a
                  href="/contact"
                  className="inline-block border border-white/80 hover:bg-white hover:text-[#f39c3f] text-white font-bold text-xs uppercase px-6 py-2.5 tracking-widest transition-all rounded"
                >
                  ENQUIRE NOW
                </a>
              </div>
            </div>
         {/* Card 7: Following Instructions */}
            <div className="bg-[#9b8ac4] rounded-2xl p-8 text-white flex flex-col justify-between shadow-lg transition-transform hover:-translate-y-1">
              <div>
                <div className="w-28 h-28 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-inner">
                  <GraduationCap className="w-14 h-14 text-gray-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-center text-lg font-bold uppercase tracking-wider mb-4">
                  Following Instructions
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-white/95 text-center mb-8">
                  Multi-step directions (“get your shoes, grab your bag, and meet me at the door”) are genuinely hard for a lot of kids with ADHD. We build this up from single-step to multi-step, with enough repetition that it holds up outside the session room too.
                </p>
              </div>
              <div className="text-center">
                <a
                  href="/contact"
                  className="inline-block border border-white/80 hover:bg-white hover:text-[#9b8ac4] text-white font-bold text-xs uppercase px-6 py-2.5 tracking-widest transition-all rounded"
                >
                  ENQUIRE NOW
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================
          4. ABOUT ABC SECTION (MOVED UP)
      ========================================================= */}
      <section className="bg-white py-16 px-6 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#F97373] rounded-3xl p-8 sm:p-12 text-white shadow-lg text-center">
            
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-wide mb-6 uppercase">
              About ABC
            </h2>

            <div className="space-y-4 text-xs sm:text-sm md:text-base leading-relaxed text-white/95">
              <p>
                ABC works with children facing developmental, behavioral, learning, and attention-related challenges, using evidence-based ABA methods aimed at real independence and participation – not just compliance.
              </p>

              <p>
                We’ve been operating since 2020 and have worked with hundreds of families across Pakistan. Every ADHD program here is supervised by a Board Certified Behavior Analyst and built around that specific child’s goals, not a template.
              </p>

              <p>
                Our team is made up of trained therapists, supervisors, and BCBAs working together, with ongoing supervision and progress checks built into every case- not a one-off assessment followed by radio silence.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          5. QUESTIONS WE GET ASKED A LOT (FAQ SECTION - MOVED DOWN)
      ========================================================= */}
      <section className="bg-slate-50 py-16 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
  <h2
  className="text-2xl sm:text-4xl font-extrabold tracking-wide"
  style={{ color: "#000000", opacity: 1 }}
>
  Questions we get asked a lot
</h2>
          </div>

          <div className="flex flex-col gap-3">
            {faqData.map((faq, index) => {
              const isOpen = openFaq === index;
              const answerId = `faq-answer-${index}`;

              return (
                <article
                  key={faq.question}
                  className={`overflow-hidden rounded-lg border bg-white shadow-sm transition-all duration-300 ${
                    isOpen
                      ? 'border-[#38959c] shadow-md'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    className="flex w-full items-center justify-between px-5 py-4 text-left outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#38959c]"
                  >
                    <span className="text-sm font-semibold text-[#111111] sm:text-[15px]">
                      {faq.question}
                    </span>
                    <span className={`text-[#38959c] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                      <ChevronDown size={20} />
                    </span>
                  </button>

                  <div
                    id={answerId}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-slate-100 bg-slate-50/50 px-5 py-4 text-sm leading-6 text-slate-600">
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

    </div>
  );
};

export default ADHD;