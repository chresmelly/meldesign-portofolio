import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { 
  ArrowUpRight, 
  Download, 
  Mail, 
  Linkedin, 
  Dribbble, 
  MessageSquare,
  ChevronUp, 
  X, 
  Briefcase, 
  GraduationCap, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Menu,
  FileText,
  ArrowRight,
  Layout,
  Search,
  SlidersHorizontal,
  Zap,
  Globe,
  ShieldCheck,
  Code2,
  Cpu,
  Star,
  User,
  ExternalLink,
  Smartphone
} from 'lucide-react';

// --- DATA DEFINITIONS FROM PRD --- //

const PROJECTS_DATA = [
  {
    id: 'tugu-insurance',
    title: 'Tugu Insurance – Digital Insurance Ecosystem',
    category: 'Enterprise & Ecosystem',
    tags: ['MyTugu Website', 'Mobile Application', 'CMS Portal', 'Business Partner Portal', 'Tugu Controller Portal'],
    summary: 'Designing Connected Digital Experiences for Insurance Services with PT Asuransi Tugu Pratama Indonesia Tbk.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    cardCover: {
      gradient: 'from-[#0F172A] via-[#1E1B4B] to-[#311042]',
      accentColor: '#818CF8',
      icon: ShieldCheck,
      badgeText: 'Insurance & Enterprise'
    },
    featured: true,
    subtitle: 'Designing Connected Digital Experiences for Insurance Services',
    overview: 'A year-long digital product design project in collaboration with PT Asuransi Tugu Pratama Indonesia Tbk, focused on building an integrated digital ecosystem that enhances customer experiences and streamlines internal business operations. The project covered multiple platforms, connecting customer-facing insurance services with internal management systems for content, sales, and claims operations.',
    platforms: [
      {
        name: '01. MyTugu Website',
        desc: 'A customer-facing platform that enables users to explore insurance products, purchase policies, and submit insurance claims through a seamless digital experience.',
        liveUrl: 'https://my.tugu.com/'
      },
      {
        name: '02. MyTugu Mobile Application',
        desc: 'A mobile-first insurance platform that brings essential MyTugu services to customers, allowing them to purchase insurance and submit claims directly from their smartphones.',
        image: 'https://lh3.googleusercontent.com/d/1qG10OQ940Bq-iahHDchB1SMB8OGoLY29'
      },
      {
        name: '03. Content Management System (CMS)',
        desc: 'An internal management platform that enables the team to create, manage, and publish content across the MyTugu Website and Mobile Application.',
        image: 'https://lh3.googleusercontent.com/d/1o-ndiKJBB23tX9CTQ0tVxOKyJwuZHgDp'
      },
      {
        name: '04. Business Partner Portal',
        desc: 'A dedicated platform that supports sales operations and collaboration with business partners, helping streamline insurance policy sales activities.',
        image: 'https://lh3.googleusercontent.com/d/12awNIcTgCNRqG1_VelH-aUhHEighWFkw'
      },
      {
        name: '05. Tugu Controller Portal',
        desc: 'An internal dashboard designed to support insurance claim management, enabling the team to manage and monitor customer claim processes.',
        image: 'https://lh3.googleusercontent.com/d/1kGxTdSD0-40e5YiKn2UorinJTaxbBjZJ'
      }
    ],
    roleAndCollab: 'Contributed as a UI/UX Designer, working closely with Tugu Insurance\'s Product Team and cross-functional teams, including Project Managers, Business Analysts, Developers, and Testers. My involvement focused on translating business requirements into user-centered solutions, designing intuitive interfaces, and ensuring consistency across multiple digital platforms.',
    metaDetails: [
      { label: 'Project Duration', value: '1 Year' },
      { label: 'Role', value: 'UI/UX Designer' },
      { label: 'Client', value: 'PT Asuransi Tugu Pratama Indonesia Tbk' },
      { label: 'Tools', value: 'Figma, FigJam, Asana, Microsoft Teams' }
    ],
    impact: ['65% reduction in claim turnaround time', '4.8/5 store app rating', '100k+ active policyholders onboarded']
  },
  {
    id: 'prosnap-ai',
    title: 'ProSnap – AI Powered Document Automation Platform',
    category: 'AI & SaaS',
    tags: ['ProSnap Landing Page', 'ProSnap Web Dashboard', 'ProSnap Mobile Application'],
    summary: 'An end-to-end AI document automation platform designed to scan, extract, validate, match, and process complex enterprise documents.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    cardCover: {
      gradient: 'from-[#111827] via-[#0F2942] to-[#042F2E]',
      accentColor: '#2DD4BF',
      icon: Cpu,
      badgeText: 'AI & Document Automation'
    },
    featured: true,
    subtitle: 'AI-Powered Document Automation Platform',
    overview: 'ProSnap is an internal product developed by Elistec, designed to simplify and automate document processing through AI-powered technology. The project focuses on building an end-to-end document automation platform that enables businesses to scan, extract, validate, match, and process information from various document formats with minimal manual effort. Over nearly a year of continuous product development, I have been involved in designing the ProSnap ecosystem, from its marketing website and web dashboard to its mobile scanning application, while supporting the development of new AI-powered capabilities.',
    platforms: [
      {
        name: '01. ProSnap Landing Page',
        desc: 'A marketing website designed to introduce ProSnap\'s capabilities, communicate its value proposition, and help potential customers understand its document automation solutions.',
        image: 'https://lh3.googleusercontent.com/d/1LF1hfgnimqVR9BU-lAh4odKN3nb-YoMZ',
        liveUrl: 'https://prosnap.id/'
      },
      {
        name: '02. ProSnap Web Dashboard',
        desc: 'The core platform where users manage document processing activities, configure extraction models, and access AI-powered features (Document Extraction, Data Matching, AI Drafting, Document Splitting, & Fraud Detection).',
        image: 'https://lh3.googleusercontent.com/d/1LP89tWhEWL31FrvCnGDTv4T6NIq6dC82'
      },
      {
        name: '03. ProSnap Mobile Application',
        desc: 'A mobile scanning application designed to simplify document capture, allowing users to scan and submit documents conveniently through their smartphones.',
        image: 'https://lh3.googleusercontent.com/d/1rFOfElUGkI69POXn2MBUdPHjs_I3weRd'
      }
    ],
    roleAndCollab: 'Contributed as a UI/UX Designer within a team of two designers, working closely with Project Managers, Business Analysts, Developers, and the Testing Team. My responsibilities involved translating product requirements into user-centered experiences, designing new features, maintaining interface consistency, and supporting continuous product improvements throughout the development lifecycle.',
    metaDetails: [
      { label: 'Project Duration', value: 'Nearly 1 Year' },
      { label: 'Product Owner', value: 'Elistec' },
      { label: 'Role', value: 'UI/UX Designer' },
      { label: 'Team', value: '2 UI/UX Designers, PM, BA, Developers & Testing' },
      { label: 'Tools', value: 'Figma, FigJam, Asana, Microsoft Teams' }
    ]
  },
  {
    id: 'gsi-lab',
    title: 'GSI Lab – Multi Domain Digital Experiences',
    category: 'Enterprise & Ecosystem',
    tags: ['tanyaDNA Platform', 'GSI Academy Platform', 'Genomics Shrimp Platform'],
    summary: 'Designing digital platforms across healthcare, education, and biotechnology to connect users with specialized services and knowledge.',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1200&q=80',
    cardCover: {
      gradient: 'from-[#1A0B2E] via-[#2D124D] to-[#111827]',
      accentColor: '#F472B6',
      icon: Globe,
      badgeText: 'Health, Edu & Biotech'
    },
    featured: true,
    subtitle: 'Designing digital platforms across healthcare, education, and biotechnology',
    overview: 'During my time at PT Genomik Solidaritas Indonesia, I worked on three website-based projects designed to support different business objectives across healthcare, education, and biotechnology. The projects included redesigning tanyaDNA, creating the GSI Academy website, and developing the Genomics Shrimp Indonesia website. Each platform was designed to address specific user needs while delivering accessible, intuitive, and engaging digital experiences.',
    platforms: [
      {
        name: '01. tanyaDNA – Healthcare & Genetic Testing Platform',
        desc: 'A digital healthcare platform designed to educate customers about genetic testing services and laboratory products. Users can explore available services, purchase products, and schedule appointments with doctors directly through the website.',
        liveUrl: 'https://tanyadna.id/'
      },
      {
        name: '02. GSI Academy – Science Education Platform',
        desc: "An educational platform designed to connect users with GSI's educational programs, webinars, workshops, and scientific learning events.",
        liveUrl: 'https://academy.gsilab.id/'
      },
      {
        name: '03. Genomics Shrimp Indonesia – Biotechnology Platform',
        desc: 'A specialized digital platform that enables shrimp farming and business customers to explore genomic testing services, access product information, and submit testing orders through the website.',
        liveUrl: 'https://shrimp.gsilab.id/'
      }
    ],
    roleAndCollab: 'As a UI/UX Designer, I was involved in the end-to-end design process, from research and benchmarking to user flows, wireframing, UI design, interactive prototyping, and usability testing. I collaborated closely with the Development Team, Marketing Team, and CEO to ensure the design solutions aligned with user needs and business objectives.',
    metaDetails: [
      { label: 'Company', value: 'PT Genomik Solidaritas Indonesia' },
      { label: 'Role', value: 'UI/UX Designer' },
      { label: 'Project Type', value: 'Website Design & Redesign' },
      { label: 'Deliverables', value: '3 Website Projects' },
      { label: 'Collaboration', value: 'Development Team, Marketing Team & CEO' },
      { label: 'Tools', value: 'Figma, FigJam' }
    ]
  },
  {
    id: 'ui-design-collections',
    title: 'UI Design Collections',
    category: 'UI Collections',
    tags: ['KAI Access App', 'Hopresso', 'Greeyo', 'Tickety', 'Theserve', 'Oneme'],
    summary: 'Exploratory collection of mobile & web interface concepts focusing on micro-interactions, dark mode, and sleek visuals.',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80',
    cardCover: {
      gradient: 'from-[#1F1924] via-[#331D33] to-[#121019]',
      accentColor: '#FF9A9E',
      icon: Layout,
      badgeText: 'Mobile & Web Concepts'
    },
    featured: false,
    subtitle: 'Selected Mobile & Web Interface Concepts',
    overview: 'A showcase of specialized UI concept designs and product redesigns focusing on micro-interactions, dark mode aesthetics, fluid navigation, and visual hierarchy.',
    collections: [
      {
        name: '01. KAI Access App Redesign',
        desc: 'This UI/UX redesign addresses key user frustrations with the KAI Access app, including slow performance, confusing navigation, limited payment options, and cumbersome ticket modification processes. To solve these pain points, the project introduces a cleaner, more intuitive interface with improved visual hierarchy, streamlined ticket booking flows, dedicated OTP-verified self-service features for rescheduling and cancellations, and optimized payment integration along with clearer GoShow ticket details.',
        image: 'https://lh3.googleusercontent.com/d/1g5NnnoCHN10Br2Wy0MM02iTR_7hEUz15',
        figmaUrl: 'https://www.figma.com/design/ohjOYjMaW2pZNy5eVHngjS/KAI-APPs?node-id=0-1&t=dEcZ9Ek6sfZN7SbQ-1'
      },
      {
        name: '02. Hopresso – Coffee Shop Mobile App',
        desc: 'Hopresso is a modern coffee shop ordering app designed to solve long wait times and fragmented purchasing experiences by offering a seamless dual-ordering workflow for both pick-up and delivery. The app streamlines menu discovery and checkout through features like a nearby outlet locator, QR code scanner, voucher system, and integrated loyalty rewards. Built with an intuitive visual structure and a clean layout, Hopresso delivers an effortless coffee-ordering journey that drives user engagement and brand loyalty.',
        image: 'https://lh3.googleusercontent.com/d/1Pxh3VDU-I4GEcExEJlnkvxnWNovzpEAt',
        figmaUrl: 'https://www.figma.com/design/PwyeFow0JJj8DhTCVekKqV/Hopresso?node-id=610-6569&t=lVfMxQHZ2b2NI5Us-1'
      }
    ],
    roleAndCollab: 'Designed individual UI/UX explorations focusing on modern editorial layouts, interaction design, dark mode tokens, and user flow optimization.',
    metaDetails: [
      { label: 'Role', value: 'UI/UX Designer' },
      { label: 'Type', value: 'UI Design Explorations & Redesigns' },
      { label: 'Scope', value: 'Mobile Applications & Web Interfaces' },
      { label: 'Tools', value: 'Figma, FigJam' }
    ]
  }
];

const EXPERIENCES = [
  {
    role: 'UI/UX Designer',
    company: 'PT Elistec Informatika Utama',
    period: 'August 2025 - Present',
    status: 'Current Role',
    description: 'Designed digital products for Tugu Insurance and ProSnap across web and mobile, covering user research, wireframing, UI design, prototyping, client presentations, and team collaboration.'
  },
  {
    role: 'UI/UX Designer',
    company: 'GSI Lab',
    period: 'March 2023 - August 2024',
    status: 'Full-time',
    description: 'Designed three websites (tanyaDNA, GSI Academy, and Genomics Shrimp Indonesia), covering competitor research, wireframing, UI design, prototyping, user testing, and team collaboration.'
  },
  {
    role: 'UI/UX Design Intern',
    company: 'PT Modern Digital Indonesia',
    period: 'August 2022 - December 2022',
    status: 'Internship',
    description: 'Designed and redesigned four mobile applications in the transportation and government sectors, covering user research, UI design, prototyping, usability testing, and cross-functional collaboration.'
  },
  {
    role: 'UI/UX Design Student',
    company: 'Skilvul MBKM',
    period: 'August 2021 - December 2021',
    status: 'Certification',
    description: 'Designed an Online Course mobile app and redesigned the Skilvul website, applying user research, UI design, design systems, prototyping, usability testing, and UX case study documentation.'
  }
];

const SKILLS = {
  ux: ['User Research', 'UX Analysis', 'User Flow', 'Wireframing', 'Usability Testing', 'Information Architecture'],
  ui: ['Interface Design', 'Interaction Design', 'Prototyping', 'Design Systems', 'Responsive Design', 'Micro-interactions'],
  tools: ['Figma', 'FigJam', 'Jira', 'Balsamiq', 'Asana', 'Microsoft Family']
};

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const cvDriveLink = 'https://drive.google.com/file/d/1b-2IFBSpxgu2Vxoqkn4pqrMjZ1xfn9sA/view?usp=sharing';

  const handleDownloadCv = () => {
    window.open(cvDriveLink, '_blank', 'noopener,noreferrer');
  };

  // Scroll progress for top indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Add a slight delay to allow mobile drawer animation to clear before scrolling smoothly
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  // Stagger variants for container animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <div className="min-h-screen bg-[#050508] text-[#F3F4F6] font-sans selection:bg-[#FCA5A5] selection:text-black relative overflow-x-hidden">
      
      {/* Background Subtle Pastel Ambient Radial Glows with Breathing Animation */}
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.18, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-br from-[#FF9A9E]/20 via-[#A18CD1]/20 to-transparent blur-[160px] pointer-events-none rounded-full z-0"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.15, 0.08]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="fixed top-[45%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-tl from-[#FBC2EB]/20 via-[#8EC5FC]/20 to-transparent blur-[180px] pointer-events-none rounded-full z-0"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.16, 0.1]
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="fixed bottom-0 left-[-5%] w-[700px] h-[500px] bg-gradient-to-tr from-[#A18CD1]/20 via-[#FF9A9E]/20 to-transparent blur-[160px] pointer-events-none rounded-full z-0"
      />

      {/* Top Animated Sunset Scroll Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#FF9A9E] via-[#A18CD1] to-[#8EC5FC] z-50 origin-left shadow-[0_0_10px_#FF9A9E]"
        style={{ scaleX }}
      />

      {/* --- NAVBAR --- */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-[#050508]/85 backdrop-blur-2xl border-b border-white/5 py-4 shadow-2xl' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <motion.a 
            href="#" 
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2.5 group"
          >
            <img 
              src="https://lh3.googleusercontent.com/d/1FO1K5B9nGElZELGl_Dlrzyi7muipkqHR" 
              alt="melDESIGN" 
              className="h-9 sm:h-10 w-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
            />
          </motion.a>

          {/* Nav Items */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-gray-400">
            {['home', 'about', 'works', 'experience', 'skills', 'contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)} 
                className="relative hover:text-white transition-colors capitalize py-1 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#FF9A9E] to-[#A18CD1] group-hover:w-full transition-all duration-300 rounded-full" />
              </button>
            ))}
          </nav>

          {/* CTA Header Button */}
          <div className="hidden md:flex items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadCv}
              className="px-5 py-2 rounded-full bg-white text-black text-xs font-semibold transition-all shadow-md flex items-center gap-2"
            >
              <Download className="w-3.5 h-3.5" />
              Download CV
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="md:hidden p-2 text-gray-400 hover:text-white rounded-xl bg-white/5 border border-white/5"
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-[#050508]/95 backdrop-blur-3xl border-b border-white/10 px-6 py-6 flex flex-col gap-3 text-center shadow-2xl overflow-hidden"
            >
              {['home', 'about', 'works', 'experience', 'skills', 'contact'].map((section) => (
                <button 
                  key={section}
                  type="button"
                  onClick={() => scrollToSection(section)} 
                  className="w-full text-gray-300 hover:text-white py-2.5 font-medium text-sm capitalize transition-colors rounded-lg active:bg-white/10"
                >
                  {section}
                </button>
              ))}
              <div className="pt-3 border-t border-white/10">
                <button 
                  type="button"
                  onClick={() => { 
                    setIsMobileMenuOpen(false); 
                    handleDownloadCv(); 
                  }}
                  className="w-full py-3 rounded-full bg-white text-black font-semibold text-xs flex items-center justify-center gap-2 active:bg-gray-200 shadow-md"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="relative z-10">
        
        {/* --- HERO SECTION --- */}
        <section id="home" className="pt-32 pb-20 md:pt-44 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Headline Column */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 space-y-8"
            >
              {/* Status Pill Badge */}
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md text-xs text-gray-300 shadow-inner">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                </span>
                <span className="font-medium text-gray-300">Available for Opportunities</span>
                <span className="text-gray-600">|</span>
                <span className="text-gray-400">UI/UX Designer</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] font-['Plus_Jakarta_Sans']">
                Designing Digital Experiences That Make <br className="hidden sm:inline" />
                <motion.span 
                  className="bg-gradient-to-r from-[#FF9A9E] via-[#FECFEF] to-[#A18CD1] bg-clip-text text-transparent inline-block"
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                >
                  Complex Things Simple.
                </motion.span>
              </motion.h1>

              {/* Description */}
              <motion.p variants={itemVariants} className="text-sm sm:text-lg text-gray-400 leading-relaxed max-w-2xl font-normal">
                Hi, I'm <strong className="text-white font-medium">Chres Melly Oktavia</strong> — a UI/UX Designer passionate about creating intuitive and meaningful digital experiences across websites, mobile applications, and enterprise platforms.
              </motion.p>

              {/* Action Buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
                <motion.button 
                  whileHover={{ scale: 1.03, x: 2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollToSection('works')}
                  className="px-8 py-4 rounded-full bg-white text-black font-semibold text-xs transition-all shadow-xl shadow-white/5 flex items-center gap-2 group"
                >
                  Explore My Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </motion.button>

                <motion.button 
                  whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 rounded-full bg-white/[0.04] border border-white/10 text-white font-medium text-xs transition-all backdrop-blur-md"
                >
                  Let's Connect
                </motion.button>
              </motion.div>

              {/* Dynamic Responsive Focus Area Grid */}
              <motion.div variants={itemVariants} className="pt-8 border-t border-white/10">
                <div className="text-xs font-mono uppercase text-gray-500 mb-4 tracking-wider">Design Focus Areas</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { icon: Smartphone, label: 'Mobile design' },
                    { icon: Globe, label: 'Website design' },
                    { icon: Layout, label: 'UI design' },
                    { icon: User, label: 'UX design' },
                    { icon: Search, label: 'UX research' },
                    { icon: SlidersHorizontal, label: 'Design system' }
                  ].map((focus, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ y: -3, borderColor: "rgba(255, 255, 255, 0.2)" }}
                      className="px-3.5 py-2.5 rounded-2xl bg-[#0D0D12] border border-white/[0.06] flex items-center gap-2.5 transition-colors cursor-default w-full min-w-0"
                    >
                      <div className="w-7 h-7 rounded-xl bg-white/5 flex items-center justify-center text-gray-300 shrink-0">
                        <focus.icon className="w-3.5 h-3.5 text-gray-300" />
                      </div>
                      <span className="text-xs font-medium text-gray-300 whitespace-nowrap overflow-hidden text-ellipsis">{focus.label}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Interactive Card Frame */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-5 relative"
            >
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative mx-auto max-w-sm lg:max-w-none"
              >
                {/* Soft Gradient Aura */}
                <div className="absolute -inset-2 bg-gradient-to-b from-[#FF9A9E]/20 via-[#A18CD1]/20 to-[#8EC5FC]/20 rounded-[40px] blur-3xl opacity-60"></div>

                {/* Dark Phone Container */}
                <div className="relative bg-[#0D0D12] border border-white/[0.08] rounded-[38px] p-5 shadow-2xl overflow-hidden backdrop-blur-xl">
                  
                  {/* Phone Header Indicator */}
                  <div className="flex items-center justify-between pb-3 mb-4 text-[10px] text-gray-400 border-b border-white/[0.06]">
                    <span className="font-mono">9:41 AM</span>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-300 font-semibold uppercase tracking-wider">MELDESIGN PORTFOLIO</span>
                      <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                    </div>
                  </div>

                  {/* Profile Banner */}
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-2xl bg-[#14141E] border border-white/[0.06] mb-4 flex items-center gap-3 transition-all cursor-pointer"
                  >
                    <img 
                      src="https://lh3.googleusercontent.com/d/1BYwcXb_il0ylWiF8lsu7-6YFa62DbiPm" 
                      alt="Chres Melly Oktavia" 
                      className="w-12 h-12 rounded-full object-cover border border-white/10"
                    />
                    <div>
                      <div className="text-sm font-bold text-white">Chres Melly Oktavia</div>
                      <div className="text-[11px] text-gray-400">Jakarta, Indonesia</div>
                    </div>
                  </motion.div>

                  {/* Sunset Gradient Card */}
                  <motion.div 
                    whileHover={{ scale: 1.02, rotate: 0.5 }}
                    className="p-6 rounded-3xl bg-gradient-to-r from-[#FF9A9E] via-[#FECFEF] to-[#A18CD1] text-black shadow-xl mb-4 relative overflow-hidden transition-transform"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-xs font-extrabold uppercase tracking-widest opacity-80">EXPERIENCE</span>
                      <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 4, repeat: Infinity }}>
                        <Sparkles className="w-4 h-4 opacity-70" />
                      </motion.div>
                    </div>

                    <div className="text-2xl font-black font-['Plus_Jakarta_Sans'] tracking-tight mb-1">
                      4+ Years
                    </div>
                    <div className="text-xs font-semibold opacity-75">
                      UIUX Designer
                    </div>

                    <div className="mt-4 pt-3 border-t border-black/10 flex justify-between items-center text-[11px] font-mono font-bold">
                      <span>PT Elistec</span>
                      <span>CURRENT ROLE</span>
                    </div>
                  </motion.div>

                  {/* 4 Quick Action Buttons Grid */}
                  <div className="grid grid-cols-4 gap-2 text-center text-[10px] text-gray-400">
                    {[
                      { icon: Briefcase, label: 'Role', section: 'experience' },
                      { icon: GraduationCap, label: 'Degree', section: 'about' },
                      { icon: Layout, label: 'Works', section: 'works' },
                      { icon: Mail, label: 'Contact', section: 'contact' }
                    ].map((item, idx) => (
                      <motion.button 
                        key={idx}
                        whileHover={{ scale: 1.08, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection(item.section)}
                        className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.05] text-gray-300 hover:text-white transition-colors flex flex-col items-center gap-1.5"
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </motion.button>
                    ))}
                  </div>

                </div>

              </motion.div>
            </motion.div>

          </div>
        </section>

        {/* --- ABOUT ME SECTION --- */}
        <section id="about" className="py-24 bg-[#0A0A0F]/60 border-y border-white/[0.06] px-6 md:px-12 backdrop-blur-xl relative">
          <div className="max-w-7xl mx-auto">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
            >
              <div>
                <span className="text-xs uppercase tracking-widest text-[#FF9A9E] font-bold block mb-2">BACKGROUND & APPROACH</span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
                  About Me
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 max-w-md leading-relaxed">
                Combining structural computer science precision with human-centered product design principles.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Bio Card */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7 bg-[#0D0D12] p-8 md:p-10 rounded-3xl border border-white/[0.06] shadow-2xl space-y-6 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF9A9E]/5 rounded-full blur-2xl group-hover:bg-[#FF9A9E]/10 transition-all pointer-events-none" />

                <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-snug">
                  Transforming technical complexity into intuitive clarity.
                </h3>
                
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  I am a UI/UX Designer currently working at <strong className="text-white font-semibold">PT Elistec Informatika Utama</strong>. With a background in Computer Science from <strong className="text-white font-semibold">IT Telkom Purwokerto</strong>, I approach design challenges with both systemic analytical thinking and deep user empathy.
                </p>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Over the past 4+ years, I have specialized in designing digital products for enterprise insurance ecosystems, AI-driven SaaS processing platforms, genomics healthcare portals, and public sector transport applications.
                </p>

                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div 
                    whileHover={{ y: -3, borderColor: "rgba(255, 255, 255, 0.15)" }}
                    className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3 transition-all"
                  >
                    <Briefcase className="w-4 h-4 text-[#FF9A9E] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[10px] text-gray-500 uppercase font-mono">Current Position</div>
                      <div className="text-xs font-bold text-white">UI/UX Designer</div>
                      <div className="text-[11px] text-gray-400">PT Elistec Informatika Utama</div>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ y: -3, borderColor: "rgba(255, 255, 255, 0.15)" }}
                    className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3 transition-all"
                  >
                    <GraduationCap className="w-4 h-4 text-[#8EC5FC] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[10px] text-gray-500 uppercase font-mono">Education</div>
                      <div className="text-xs font-bold text-white">Computer Science</div>
                      <div className="text-[11px] text-gray-400">IT Telkom Purwokerto</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Grid Stats */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
              >
                {[
                  { value: '4+ Years', label: 'Professional UI/UX Experience', icon: Sparkles, color: '#FF9A9E' },
                  { value: '15+', label: 'Website & Mobile Design Projects', icon: Layout, color: '#A18CD1' },
                  { value: '100%', label: 'User-Centred & Data Driven', icon: Search, color: '#8EC5FC', span: true }
                ].map((stat, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.02, borderColor: "rgba(255, 255, 255, 0.15)" }}
                    className={`bg-[#0D0D12] p-6 rounded-3xl border border-white/[0.06] shadow-xl flex items-center justify-between transition-all ${
                      stat.span ? 'sm:col-span-2 lg:col-span-1' : ''
                    }`}
                  >
                    <div>
                      <div className="text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans'] mb-1">{stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                    <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                      <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
                    </div>
                  </motion.div>
                ))}
              </motion.div>

            </div>

          </div>
        </section>

        {/* --- SELECTED WORKS SECTION --- */}
        <section id="works" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-[#FECFEF] font-bold block mb-2">PORTFOLIO</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
                Selected Works
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 max-w-md">
              A collection of enterprise platforms, AI SaaS dashboards, and mobile application suites designed for real-world impact.
            </p>
          </motion.div>

          {/* Projects Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {PROJECTS_DATA.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="group bg-[#0D0D12] border border-white/[0.06] rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col justify-between shadow-2xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                >
                  <div>
                    {/* Thematic Gradient Card Thumbnail */}
                    <div className={`relative h-64 overflow-hidden bg-gradient-to-br ${project.cardCover?.gradient || 'from-gray-900 to-black'} p-6 flex flex-col justify-between group-hover:scale-[1.02] transition-transform duration-500`}>
                      
                      {/* Ambient Glowing Aura */}
                      <div 
                        className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity pointer-events-none"
                        style={{ backgroundColor: project.cardCover?.accentColor || '#FF9A9E' }}
                      />

                      {/* Card Cover Top Badges */}
                      <div className="flex items-center justify-between z-10">
                        <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-gray-300 border border-white/10 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: project.cardCover?.accentColor || '#FF9A9E' }} />
                          {project.cardCover?.badgeText || project.category}
                        </span>

                        <span className="text-[10px] font-mono text-gray-400 opacity-60">CASE STUDY</span>
                      </div>

                      {/* Floating Illustrative Icon Graphics */}
                      <div className="relative z-10 my-auto flex items-center justify-center">
                        <div className="p-5 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-md shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                          {project.cardCover?.icon && (
                            <project.cardCover.icon className="w-12 h-12" style={{ color: project.cardCover?.accentColor || '#FFFFFF' }} />
                          )}
                        </div>
                      </div>

                      {/* Bottom Decorative Wireframe Line */}
                      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-gray-400 border-t border-white/10 pt-2.5">
                        <span className="truncate max-w-[200px]">{project.title}</span>
                        <span className="text-gray-500">UX / UI</span>
                      </div>

                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8">
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/[0.03] text-gray-400 border border-white/[0.06]">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans'] mb-2 group-hover:text-[#FF9A9E] transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                        {project.summary}
                      </p>
                    </div>
                  </div>

                  {/* Trigger Case Study Button */}
                  <div className="px-6 md:px-8 pb-6 pt-0">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedProject(project)}
                      className="w-full py-3 rounded-xl bg-white/[0.03] group-hover:bg-white text-gray-300 group-hover:text-black font-semibold text-xs transition-all duration-300 border border-white/[0.06] flex items-center justify-center gap-2 shadow-sm"
                    >
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </section>

        {/* --- EXPERIENCE TIMELINE SECTION --- */}
        <section id="experience" className="py-24 bg-[#0A0A0F]/60 border-y border-white/[0.06] px-6 md:px-12 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <span className="text-xs uppercase tracking-widest text-[#FF9A9E] font-bold block mb-2">CAREER HISTORY</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Plus_Jakarta_Sans'] mb-4">
                Work Experience
              </h2>
              <p className="text-xs sm:text-sm text-gray-400">
                A track record of designing products across corporations, high-growth startups, and specialized labs.
              </p>
            </motion.div>

            <div className="space-y-4 max-w-4xl mx-auto">
              {EXPERIENCES.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 4, borderColor: "rgba(255, 255, 255, 0.15)" }}
                  className="bg-[#0D0D12] p-6 sm:p-8 rounded-3xl border border-white/[0.06] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-6 group"
                >
                  <div className="space-y-2 max-w-xl">
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-white/5 text-gray-300 border border-white/10">
                        {exp.status}
                      </span>
                      <span className="text-xs text-gray-500 font-mono">{exp.period}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white font-['Plus_Jakarta_Sans'] group-hover:text-[#A18CD1] transition-colors">
                      {exp.role} <span className="text-gray-400 font-normal">@ {exp.company}</span>
                    </h3>

                    <p className="text-xs text-gray-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  <div className="shrink-0">
                    <div className="w-10 h-10 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-gray-300 group-hover:bg-white group-hover:text-black transition-all">
                      <Briefcase className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* --- SKILLS & TOOLS SECTION --- */}
        <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-xs uppercase tracking-widest text-[#8EC5FC] font-bold block mb-2">CAPABILITIES</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-['Plus_Jakarta_Sans'] mb-4">
              Skills & Tools
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">
              End-to-end UX research techniques and high-fidelity interface design tooling.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {[
              {
                title: 'UX Design',
                icon: Search,
                color: '#FF9A9E',
                desc: 'Empathetic user research, task flows, wireframing, and usability testing.',
                skills: SKILLS.ux
              },
              {
                title: 'UI Design',
                icon: Layout,
                color: '#A18CD1',
                desc: 'Design systems, responsive web interfaces, dark-mode tokens, and micro-interactions.',
                skills: SKILLS.ui
              },
              {
                title: 'Tools & Software',
                icon: SlidersHorizontal,
                color: '#8EC5FC',
                desc: 'Industry standard design software used for prototyping and engineering handoff.',
                skills: SKILLS.tools
              }
            ].map((skillGroup, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -5, borderColor: "rgba(255, 255, 255, 0.15)" }}
                className="bg-[#0D0D12] p-8 rounded-3xl border border-white/[0.06] transition-all shadow-xl"
              >
                <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center mb-6">
                  <skillGroup.icon className="w-5 h-5" style={{ color: skillGroup.color }} />
                </div>
                <h3 className="text-lg font-bold text-white font-['Plus_Jakarta_Sans'] mb-2">{skillGroup.title}</h3>
                <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                  {skillGroup.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {skillGroup.skills.map((skill, i) => (
                    <motion.span 
                      key={i} 
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.08)", color: "#FFFFFF" }}
                      className="px-3 py-1.5 rounded-xl bg-white/[0.03] text-[11px] font-medium text-gray-300 border border-white/[0.06] transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}

          </div>

        </section>

        {/* --- CONTACT SECTION --- */}
        <section id="contact" className="py-24 bg-[#050508] text-white px-6 md:px-12 relative overflow-hidden">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <span className="text-xs uppercase tracking-widest text-[#FF9A9E] font-bold block mb-4">LETS CONNECT</span>
            
            <h2 className="text-3xl sm:text-6xl font-extrabold tracking-tight font-['Plus_Jakarta_Sans'] mb-6 leading-tight">
              Have an Interesting Project or Opportunity?
            </h2>

            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
              Let's connect and create meaningful digital experiences together. Open for full-time roles, strategic UI/UX consultancies, and creative collaborations.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:chres.melly@gmail.com" 
                className="px-8 py-4 rounded-full bg-white text-black font-semibold text-xs hover:bg-gray-200 transition-all shadow-xl flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </motion.a>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadCv}
                className="px-8 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white font-medium text-xs transition-all flex items-center gap-2 border border-white/10 backdrop-blur-md"
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.button>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-white/[0.06] flex items-center justify-center gap-4">
              {[
                { icon: Mail, href: 'mailto:chres.melly@gmail.com', label: 'Email' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/chresmelly/', label: 'LinkedIn' },
                { icon: Dribbble, href: 'https://dribbble.com/chresmelly', label: 'Dribbble' },
                { icon: MessageSquare, href: 'https://wa.me/6282117728933', label: 'WhatsApp' }
              ].map((social, idx) => (
                <motion.a 
                  key={idx}
                  whileHover={{ y: -3, scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)", color: "#FFFFFF" }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3.5 rounded-full bg-white/[0.03] text-gray-400 transition-all border border-white/[0.06]"
                  title={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>

          </motion.div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="py-8 bg-[#050508] border-t border-white/[0.06] text-gray-500 text-xs px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img 
              src="https://lh3.googleusercontent.com/d/1FO1K5B9nGElZELGl_Dlrzyi7muipkqHR" 
              alt="melDESIGN" 
              className="h-7 w-auto object-contain"
            />
            <span>•</span>
            <span>© {new Date().getFullYear()} Chres Melly Oktavia. All rights reserved.</span>
          </div>

          <motion.button 
            whileHover={{ y: -2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ChevronUp className="w-4 h-4" />
          </motion.button>
        </div>
      </footer>

      {/* --- CASE STUDY DETAIL MODAL --- */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center md:p-6 lg:p-10 overflow-hidden">
            
            {/* Backdrop Blur (Desktop overlay effect) */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 md:bg-black/80 backdrop-blur-md"
            />

            {/* Main Container: Full screen on Mobile, Centered Modal on Desktop */}
            <motion.div 
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.98 }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="relative w-full h-full md:h-auto md:max-w-4xl md:max-h-[90vh] overflow-y-auto bg-[#0A0A0F] md:bg-[#0D0D12] md:rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl border-0 md:border md:border-white/10 z-10 text-gray-300 scrollbar-thin scrollbar-thumb-white/10"
            >
              {/* Mobile Back Header Bar / Close Button */}
              <div className="sticky top-0 -mx-5 -mt-5 px-5 py-4 mb-6 bg-[#0A0A0F]/90 backdrop-blur-xl border-b border-white/[0.08] flex items-center justify-between z-30 md:static md:p-0 md:m-0 md:bg-transparent md:border-0 md:backdrop-blur-none">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-white md:hidden"
                >
                  <ArrowRight className="w-4 h-4 rotate-180 text-[#FF9A9E]" />
                  <span>Back to Portfolio</span>
                </button>

                <motion.button 
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedProject(null)}
                  className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-white transition-colors border border-white/10 shadow-lg backdrop-blur-md"
                  aria-label="Close case study"
                >
                  <X className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Cover Header Gradient Graphic Card */}
              <div className={`relative min-h-[240px] sm:min-h-[280px] rounded-2xl sm:rounded-3xl overflow-hidden mb-8 bg-gradient-to-br ${selectedProject.cardCover?.gradient || 'from-gray-900 to-black'} p-6 sm:p-10 flex flex-col justify-between border border-white/15 shadow-2xl group`}>
                <div 
                  className="absolute -right-12 -bottom-12 w-80 h-80 rounded-full blur-3xl opacity-35 pointer-events-none"
                  style={{ backgroundColor: selectedProject.cardCover?.accentColor || '#FF9A9E' }}
                />
                
                {/* Top Row: Category Badge & Company Badge + Icon Container */}
                <div className="flex items-start justify-between gap-4 z-10 pr-10 sm:pr-14">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold text-[#FF9A9E] bg-black/50 border border-white/15 backdrop-blur-md uppercase tracking-wider shadow-sm">
                      {selectedProject.cardCover?.badgeText || selectedProject.category}
                    </span>
                    {selectedProject.metaDetails?.find(m => m.label === 'Company' || m.label === 'Client' || m.label === 'Product Owner') && (
                      <span className="px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono text-gray-300 bg-white/5 border border-white/15 backdrop-blur-md">
                        {selectedProject.metaDetails.find(m => m.label === 'Company' || m.label === 'Client' || m.label === 'Product Owner')?.value}
                      </span>
                    )}
                  </div>

                  {selectedProject.cardCover?.icon && (
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-black/40 border border-white/15 backdrop-blur-md shrink-0 shadow-lg flex items-center justify-center p-2">
                      <selectedProject.cardCover.icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: selectedProject.cardCover?.accentColor || '#FFFFFF' }} />
                    </div>
                  )}
                </div>

                {/* Middle & Bottom Main Content */}
                <div className="z-10 mt-6 sm:mt-10 space-y-3 sm:space-y-4">
                  <h3 className="text-2xl sm:text-4xl md:text-[2.6rem] font-extrabold text-white font-['Plus_Jakarta_Sans'] leading-[1.15] tracking-tight">
                    {selectedProject.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-medium text-gray-300/90 leading-relaxed max-w-3xl">
                    {selectedProject.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {selectedProject.tags?.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-lg bg-black/50 text-gray-300 border border-white/15 backdrop-blur-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Main Case Study Details Grid */}
              <div className="space-y-6 sm:space-y-8 text-xs sm:text-sm leading-relaxed">
                
                {/* 1. Project Overview Card */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold text-sm mb-1">
                    <Sparkles className="w-4 h-4 text-[#FF9A9E]" />
                    <h4>Project Overview</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">{selectedProject.overview}</p>
                </div>

                {/* 2. UI Design Collections Section */}
                {selectedProject.collections && (
                  <div className="space-y-5">
                    <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base pb-2 border-b border-white/10">
                      <Layout className="w-4 h-4 text-[#FF9A9E]" />
                      <h4>Featured Collections & Case Studies</h4>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-5">
                      {selectedProject.collections.map((col, i) => (
                        <div key={i} className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all space-y-4">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h5 className="font-bold text-white text-sm sm:text-base font-['Plus_Jakarta_Sans']">{col.name}</h5>
                          </div>
                          
                          {col.image && (
                            <div className="rounded-xl overflow-hidden border border-white/10 bg-black/60 p-1.5 group">
                              <img 
                                src={col.image} 
                                alt={col.name} 
                                className="w-full h-auto object-cover max-h-80 rounded-lg group-hover:scale-[1.01] transition-transform duration-300"
                              />
                            </div>
                          )}

                          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{col.desc}</p>

                          {col.figmaUrl && (
                            <div className="pt-2">
                              <a 
                                href={col.figmaUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/15 text-white font-medium text-xs transition-all shadow-sm"
                              >
                                <ExternalLink className="w-3.5 h-3.5 text-[#FF9A9E]" />
                                <span>View Figma Design</span>
                              </a>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 3. Platforms & Solutions Section */}
                {selectedProject.platforms && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base pb-2 border-b border-white/10">
                      <Layers className="w-4 h-4 text-[#8EC5FC]" />
                      <h4>Projects & Digital Solutions</h4>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      {selectedProject.platforms.map((plat, i) => (
                        <div key={i} className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 transition-all space-y-3">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h5 className="font-bold text-white text-xs sm:text-sm font-['Plus_Jakarta_Sans'] text-indigo-200">{plat.name}</h5>
                          </div>
                          
                          {plat.image && (
                            <div className="rounded-xl overflow-hidden border border-white/10 bg-black/60 p-1.5">
                              <img 
                                src={plat.image} 
                                alt={plat.name} 
                                className="w-full h-auto object-cover max-h-80 rounded-lg"
                              />
                            </div>
                          )}

                          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{plat.desc}</p>

                          {plat.liveUrl && (
                            <div className="pt-2">
                              <a 
                                href={plat.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/15 text-white font-medium text-xs transition-all shadow-sm"
                              >
                                <ExternalLink className="w-3.5 h-3.5 text-[#2DD4BF]" />
                                <span>Visit Website</span>
                              </a>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 4. Role, Responsibilities & Contribution Section */}
                {selectedProject.roleAndCollab && (
                  <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                    <div className="flex items-center gap-2 text-white font-bold text-sm mb-1">
                      <Briefcase className="w-4 h-4 text-[#A18CD1]" />
                      <h4>{selectedProject.id === 'gsi-lab' ? 'My Contribution' : 'My Role & Responsibilities'}</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed whitespace-pre-line">
                      {selectedProject.roleAndCollab}
                    </p>
                  </div>
                )}

                {/* 5. Project Information Metadata Grid */}
                {selectedProject.metaDetails && (
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs uppercase tracking-wider font-mono text-gray-400 font-bold">Project Information</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {selectedProject.metaDetails.map((meta, i) => (
                        <div key={i} className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col justify-center">
                          <span className="text-[10px] uppercase font-mono text-gray-500 font-semibold">{meta.label}</span>
                          <span className="text-xs font-semibold text-white mt-1">{meta.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Modal Footer */}
              <div className="mt-8 pb-8 md:pb-0 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-gray-500 font-mono">
                  Case Study • {selectedProject.title}
                </span>

                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black font-bold text-xs transition-all shadow-xl hover:bg-gray-200"
                >
                  Close Case Study
                </motion.button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}