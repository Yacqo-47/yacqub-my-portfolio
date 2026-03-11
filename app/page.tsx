'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useInView, AnimatePresence } from 'framer-motion';
import { FaFacebook, FaBehance, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import {
  Sparkles,
  MousePointer2,
  Code,
  Download,
  ArrowRight, Facebook,
  Calendar,
  GraduationCap,
  Award,
  BookOpen,
  Mail,
  ShieldCheck,
  MapPin,
  Zap,
  Briefcase,
  Users,
  Coffee,
  Palette,
  Globe,
  Play,
  Video,
  X,
  Phone,
  Heart,
  Plus,
  Send
} from 'lucide-react';
import {
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
  SiTypescript,
  SiAdobeillustrator
} from 'react-icons/si';

import { portfolioData } from './data/portfolio';


/* ---------------------------
   Helper: Animated Counter
   --------------------------- */
function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 60, stiffness: 45 });

  useEffect(() => {
    if (isInView) motionValue.set(value);
    else motionValue.set(0);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) ref.current.textContent = Math.round(latest).toString();
    });
    return unsubscribe;
  }, [springValue]);

  return <span ref={ref as any} />;
}

/* ---------------------------
   Static Data
   --------------------------- */
const stats = [
  { label: "Years Experience", value: 5, suffix: "+", icon: <Zap size={22} /> },
  { label: "Projects Completed", value: 120, suffix: "+", icon: <Briefcase size={22} /> },
  { label: "Happy Clients", value: 85, suffix: "", icon: <Users size={22} /> },
  { label: "Coffee Consumed", value: 450, suffix: "+", icon: <Coffee size={22} /> },
];

const clientLogos = [
  { id: 1, img: "/Logo.png", name: "Logo" },
  { id: 2, img: "/Agab.png", name: "Agab" },
  { id: 3, img: "/had.png", name: "Had" },
  { id: 4, img: "/One Logo.png", name: "One" },
  { id: 5, img: "/Dark.png", name: "Dark" },
  { id: 6, img: "/White.png", name: "White" },
  { id: 7, img: "/L10.png", name: "ABOOSTO" }, 
  { id: 8, img: "/Horyaal.png", name: "HH" },
];

const processSteps = [
  { number: "01", title: "IDEATION", description: "Brainstorming and gathering unique ideas to align with your business goals and vision.", imgPath: "/St1.svg" },
  { number: "02", title: "PROTOTYPING", description: "Creating visual drafts and interactive wireframes to bring the initial concept to life.", imgPath: "/St2.svg" },
  { number: "03", title: "REFINEMENT", description: "Polishing the design, fixing bugs, and ensuring high-end security and performance.", imgPath: "/St3.svg" },
  { number: "04", title: "DEPLOYMENT", description: "Final testing and launching your project to the world with full support and delivery.", imgPath: "/St4.svg" }
];

const education = [
  { degree: "MA Network Security", institution: "UNIVERSITY OF BURAO", duration: "2025 - 2027", status: "In Progress", description: "Specializing in software development, network systems, and digital innovation.", icon: <GraduationCap size={24} />, color: "#38bdf8" },
  { degree: "Bachelor of Information Technology", institution: "UNIVERSITY OF BURAO", duration: "2020 - 2024", status: "Completed", description: "Specializing in software development, network systems, and digital innovation.", icon: <GraduationCap size={24} />, color: "#38bdf8" },
  { degree: "Professional UX/UI Design", institution: "GOOGLE CERTIFICATION", duration: "2023 - 2024", status: "Completed", description: "Advanced training in user experience research, wireframing, and high-fidelity prototyping.", icon: <Award size={24} />, color: "#fbbf24" }
];

const techStack = [
  { name: "Photoshop", color: "#31A8FF" },
  { name: "Illustrator", color: "#FF9A00" },
  { name: "After Effects", color: "#9999FF" },
  { name: "Premiere Pro", color: "#EA77FF" },
  { name: "DaVinci", color: "#0055FF" },
  { name: "Adobe Audition", color: "#01EBAE" },
  { name: "Figma", color: "#F24E1E" },
  { name: "Visual Studio", color: "#007ACC" },
  { name: "Node JS", color: "#339933" },
  { name: "Tailwind CSS", color: "#06B6D4" },
  { name: "WordPress", color: "#21759B" },
  { name: "Higgsi AI", color: "#0EA5E9" }
];

const contactCards = [
  { title: "WhatsApp", info: "+252 63 644 6560", link: "https://wa.me/252636446560", color: "text-green-500 bg-green-500/10", icon: <FaWhatsapp className="w-6 h-6" /> },
  { title: "Email Me", info: "hello@yacqubali.com", link: "mailto:hello@yacqubali.com", color: "text-sky-500 bg-sky-500/10", icon: <Mail className="w-6 h-6" /> },
  { title: "Facebook Me", info: "Yacqub Ali", link: "#", color: "text-sky-500 bg-sky-500/10", icon: <FaFacebook className="w-6 h-6" /> },
  { title: "Location", info: "Hargeisa, SL", link: "#", color: "text-red-500 bg-red-500/10", icon: <MapPin className="w-6 h-6" /> }
];

const experiences = [
  { role: "Multimedia Officer", company: "UNIVERSITY OF BURAO", duration: "2023 - 2026", description: "Founded the Digital Marketing division and spearheaded the development of the university of Burao, also first official modern website. Currently leading digital transformation efforts.", skills: ["Leadership", "Web Design", "Strategic Planning", "Content Creator"] },
  { role: "Multimedia Specialist", company: "BIT ACADEMY", duration: "2025 - PRESENT", description: "Providing professional video editing, graphic design, and IT support services, including technical assistance and digital asset management.", skills: ["Video Editing", "Graphic Design", "IT Support"] },
  { role: "IT Support & Multimedia", company: "UMAHAATU KHAYRDOON", duration: "2024 - PRESENT", description: "Developed and launched the official website. Currently managing all digital needs and multimedia content both onsite and online.", skills: ["Web Development", "Content Strategy", "IT Management"] },
  { role: "Digital Marketing Manager", company: "ABOOSTO", duration: "2024 - 2025", description: "Led digital marketing campaigns across social media platforms and created high-impact digital content to drive engagement.", skills: ["Social Media", "Marketing", "Content Creation"] },
  { role: "Sales Marketing Specialist", company: "DEER GENERAL", duration: "2016 - 2022", description: "Gained over 6 years of deep experience in communication and consumer behavior, mastering market psychology and sales strategies.", skills: ["Market Research", "Consumer Behavior", "Sales"] }
];

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains('dark');
    setDarkMode(isDark);
  }, []);

  const toggleTheme = (e?: React.MouseEvent) => {
    e?.preventDefault?.();
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      setDarkMode(false);
    } else {
      html.classList.add('dark');
      setDarkMode(true);
    }
  };

  const trendingItems = [
    { id: 1, img: "/Yacqub.jpg", color: "bg-gray-800" },
    { id: 2, img: "/ME.jpg", color: "bg-emerald-900/30" },
    { id: 3, img: "/Ya.png", color: "bg-rose-900/30" },
    { id: 4, img: "/Yacqub.jpg", color: "bg-amber-900/30" },
  ];

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#Experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const steps = [
    { id: '01', title: 'Graphic Design', desc: 'Study Somali lessons at your own pace', icon: <Palette className="w-6 h-6" />, features: ['Logo Design', 'Branding', 'Social Media'] },
    { id: '02', title: 'Web Design', desc: 'Apply knowledge with real projects', icon: <Globe className="w-6 h-6" />, features: ['React & Next.js', 'Tailwind CSS', 'Responsive'] },
    { id: '03', title: 'Motion Graphic', desc: 'Weekly live sessions with mentors', icon: <Play className="w-6 h-6" />, features: ['2D Animation', 'After Effects', 'Explainer Videos'] },
    { id: '04', title: 'Video Editing', desc: 'Career support and job referrals', icon: <Video className="w-6 h-6" />, features: ['Color Grading', 'Sound Design', 'Short Films'] }
  ];

  const projects = [
    { title: "Premium Brand Identity", category: "Graphic Design", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop" },
    { title: "Modern SaaS Website", category: "Web Development", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" },
    { title: "3D Motion Graphics", category: "Animation", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop" }
  ];

  if (!mounted) return null;

  return (
    
    <div className="bg-white dark:bg-[#09090a] min-h-screen transition-colors duration-300 font-sans">
      <div className="relative isolate min-h-screen overflow-hidden">
        <header className="fixed top-0 w-full z-50 border-b border-gray-200/50 dark:border-white/5 transition-all">
          <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
            <div className="flex lg:flex-1">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight uppercase">Yacqub Ali</span>
              </Link>
            </div>
            

            <div className="hidden lg:flex lg:gap-x-10">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="relative group text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-white transition-colors">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500 transition-all group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-6 items-center">
              <Link href="/Yacqub-Ali-CV.pdf" download="Yacqub-Ali-CV.pdf" target="_blank" className="rounded-lg bg-sky-600 px-5 py-2 text-sm font-bold text-white hover:bg-sky-500 shadow-lg shadow-sky-600/20 transition-all active:scale-95 inline-flex items-center justify-center">
                Download My CV
              </Link>
            </div>
          </nav>
        </header>

        {/* Hero */}
        <div id="home" className="relative min-h-screen pt-15 w-full bg-[#05080a] text-white overflow-hidden font-sans flex flex-col items-center justify-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[200px] bg-sky-600/10 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-sky-600/5 blur-[150px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-sky-500/10 blur-[180px] rounded-full pointer-events-none"></div>

     <div className="relative z-20 max-w-7xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
  <motion.div 
    className="space-y-8 order-2 lg:order-1 text-center lg:text-left relative z-30"
  >
    <div className="space-y-4">
      {/* 1. WELCOME TAG - Out-motion reset ku daran */}
      <motion.div 
        initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={{ once: true, amount: 0.5 }} // Mar kasta oo aad ku soo laabato wuu soo blur-baxayaa
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-bold mb-4"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
        Welcome!
      </motion.div>

      {/* 2. MAIN TITLE - Smooth Blur Reset */}
      <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
        <motion.span
          initial={{ opacity: 0, filter: "blur(20px)", y: 30 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="block"
        >
          I am Senior
        </motion.span>
        
        <motion.span
          initial={{ opacity: 0, filter: "blur(20px)", y: 30 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-600 block"
        >
          Multimedia <span className="text-white">Expert</span>
        </motion.span>
      </h1>
    </div>

    {/* 3. PARAGRAPH - Reset Animation */}
    <motion.p 
      initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.5 }}
      className="text-gray-400 max-w-md mx-auto lg:mx-0 text-lg leading-relaxed"
    >
      I am a graphic designer and multimedia specialist focused on creating clear, purposeful visuals that communicate ideas and solve real problems.
    </motion.p>

    {/* 4. BUTTONS - Reset Animation */}
    <motion.div 
      initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.7 }}
      className="flex flex-wrap items-center justify-center lg:justify-start gap-4 relative z-50"
    >
      <motion.a 
        href="/Yacqub-Ali-CV.pdf" 
        download="Yacqub-Ali-CV.pdf" 
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }} 
        className="relative z-50 cursor-pointer pointer-events-auto bg-sky-500 hover:bg-sky-600 text-black px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 shadow-xl shadow-sky-500/20"
      >
        <Download size={18} />
        Download CV
      </motion.a>
    </motion.div>
  </motion.div>

  {/* Qaybtii Sawirka halkan ayay ka sii soconaysaa... */}

            <motion.div initial={{ opacity: 0,  y: 80, filter: "blur(5px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)"  }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 4.4, ease: [0.22, 1, 0.36, 1] }} className="relative order-1 lg:order-2 flex justify-center items-center z-10">
              <div className="absolute w-[80%] aspect-square rounded-full bg-sky-600/15 border border-sky-500/20 animate-pulse"></div>

              <div className="relative z-20 w-full max-w-[450px]">
                <motion.img animate={{ y: [0, 15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} src="/Ya.png" alt="Yacqub Multimedia" className="w-full h-auto object-contain drop-shadow-[0_0_40px_rgba(2,132,199,0.25)]" />

                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1, duration: 0.8 }} className="absolute bottom-20 left-[-30px] z-30">
                  <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-3 px-5 rounded-2xl shadow-[0_0_20px_rgba(14,165,233,0.15)] group hover:border-sky-500/50 transition-colors">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-white font-bold uppercase tracking-widest mb-1 opacity-70">Name</span>
                      <h3 className="text-[30px] font-black text-sky-400 tracking-tight flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" /> Yacqub Ali
                      </h3>
                    </div>
                    <div className="absolute -bottom-1 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 1 }} className="hidden lg:flex absolute left-[-5%] top-[15%] items-center gap-3 z-40 bg-black/40 backdrop-blur-md border border-white/10 p-3 rounded-2xl shadow-2xl">
                  <div className="bg-sky-600/20 p-2 rounded-xl text-sky-500">
                    <SiAdobeaftereffects className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sky-400 font-bold text-sm">Motion</p>
                    <p className="text-[9px] text-gray-500 uppercase">Graphics</p>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 1 }} className="hidden lg:flex absolute top-[75%] -right-4 bg-[#0a0f1e]/80 backdrop-blur-xl p-4 rounded-3xl shadow-2xl border border-white/10">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-500"><SiAdobeillustrator className="w-5 h-5" /></div>
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500"><SiAdobephotoshop className="w-5 h-5" /></div>
                    <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500"><Code className="w-5 h-5" /></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-0 w-full h-45 bg-gradient-to-t from-[#05080a] to-transparent z-18"></div>
        </div>

        {/* Stats */}
        <section className="py-24 bg-[#08080a] relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
              {stats.map((stat, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, delay: index * 0.15, ease: [0.215, 0.61, 0.355, 1] }} className="relative group flex items-center gap-6">
                  <div className="flex-shrink-0 relative">
                    <div className="absolute -inset-2 bg-sky-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative p-4 bg-[#061431] border border-white/5 rounded-2xl text-sky-400 group-hover:text-white group-hover:border-sky-500/50 transition-all duration-500">
                      {stat.icon}
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex items-baseline">
                      <h4 className="text-4xl md:text-5xl font-black text-white tracking-tighter"><Counter value={stat.value} /></h4>
                      <span className="text-sky-500 text-3xl font-bold ml-1">{stat.suffix}</span>
                    </div>

                    <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.25em] mt-1">{stat.label}</p>

                    <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: false }} transition={{ duration: 1, delay: 0.5 }} className="h-[1px] bg-gradient-to-r from-sky-500/50 to-transparent mt-2" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="relative py-24 lg:py-18 px-6 overflow-hidden dark:bg-[#09090a]">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-sky-500/10 via-transparent to-transparent opacity-30" />
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-sky-600/10 blur-[130px] rounded-full" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-sky-600/10 blur-[130px] rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: false, amount: 0.2 }} className="text-center mb-20">
              <h1 className="text-white text-3xl md:text-5xl font-medium tracking-tighter mb-6">My <span className="text-sky-500 ">Services</span></h1>
              <p className="text-gray-400 text-lg max-w-xl mx-auto">High-quality design and development solutions tailored to your needs.</p>
              <div className="h-1.5 w-24 bg-sky-500 mx-auto mt-6 rounded-full shadow-[0_0_20px_rgba(14,165,233,0.6)]" />
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: false, margin: "-50px" }} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((card) => (
                <motion.div key={card.id} variants={{ hidden: { opacity: 0, y: 40, scale: 0.9 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }, exit: { opacity: 0, y: -40, scale: 0.9, transition: { duration: 0.4 } } }} whileHover={{ y: -15, transition: { duration: 0.3 } }} className="group relative p-10 rounded-[1.5rem] border border-white/5 bg-sky-50 dark:bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-sky-500/40 hover:bg-white/[0.08]">
                  <div className="absolute -inset-20 dark:bg-sky-500/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  <span className="absolute top-8 right-10 text-7xl font-black text-sky-400/20 dark:text-white/[0.03] group-hover:text-sky-500/10 transition-colors duration-500">{card.id}</span>
                  <div className="relative z-10 h-20 w-20 rounded-[1rem] bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-3xl mb-12 text-sky-500 group-hover:bg-sky-500 group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-xl shadow-sky-500/5">
                    {card.icon}
                  </div>
                  <h3 className="relative z-10 text-2xl font-bold text-sky-400 dark:text-white mb-4 group-hover:text-sky-400 transition-colors">{card.title}</h3>
                  <p className="relative z-10 text-gray-400 text-sm leading-relaxed mb-8">{card.desc}</p>
                  <ul className="relative z-10 space-y-4">
                    {card.features?.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                        <div className="h-1.5 w-1.5 rounded-full bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.8)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-sky-400 to-blue-600 group-hover:w-full transition-all duration-700" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

      
<section className="py-10 bg-[#08090c] text-white relative overflow-hidden">
      
      {/* 1. STRONGER SIDE GLOWS (Iftiinka dhexda oo la xoojiyey) */}
      <div className="absolute left-[-5%] top-1/2 -translate-y-1/2 w-[20%] h-[500px] bg-[#26A0FF]/20 blur-[130px] rounded-full pointer-events-none opacity-80" />
      <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[30%] h-[500px] bg-[#26A0FF]/20 blur-[130px] rounded-full pointer-events-none opacity-80" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-48">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <h1 className="text-white text-4xl md:text-5xl font-medium tracking-tighter mb-6 uppercase">
              My strategic <span className="text-[#26A0FF]  font-medium">Process</span>
            </h1>
            <div className="h-1.5 w-24 bg-[#26A0FF] mx-auto mt-6 rounded-full shadow-[0_0_25px_#26A0FF]" />
          </motion.div>
        </div>

        <div className="relative">
          
          {/* DOTTED LINE - Continuous Flow (Ma istaagayso) */}
          <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 hidden md:block px-10">
            <svg width="100%" height="240" viewBox="0 0 1200 240" fill="none" preserveAspectRatio="none">
              <motion.path 
                d="M0 120C150 120 150 20 300 20C450 20 450 220 600 220C750 220 750 20 900 20C1050 20 1050 120 1200 120" 
                stroke="#26A0FF" 
                strokeWidth="3" 
                strokeDasharray="0 25" 
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ 
                  duration: 5, // Xawaare dhexdhexaad ah oo soconaya
                  ease: "linear", // Waxay ka dhigaysaa socodka mid siman
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              />
            </svg>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 relative z-10">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 1.2, duration: 0.8 }} 
                className={`flex flex-col items-center text-center ${index % 2 !== 0 ? 'md:mt-52' : 'md:-mt-24'}`}
              >
                
                {/* Illustration (Pop-up smoothly) */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: [0, 1.1, 1] }}
                  transition={{ delay: index * 1.2 + 0.3, duration: 0.6 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="mb-12"
                >
                  <img 
                    src={step.imgPath} 
                    alt={step.title} 
                    className="h-32 md:h-48 w-auto object-contain drop-shadow-[0_10px_40px_rgba(38,160,255,0.3)]"
                  />
                </motion.div>

                {/* Numbered Dot */}
                <div className="relative flex items-center justify-center mb-10">
                  <div className="w-12 h-12 rounded-full border-2 border-[#26A0FF] flex items-center justify-center z-20 bg-[#08090c] shadow-[0_0_20px_rgba(38,160,255,0.4)]">
                    <span className="text-xs font-black text-[#26A0FF]">{step.number}</span>
                  </div>
                </div>

                {/* Text Area */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 1.2 + 0.6 }}
                  className="bg-[#0c0e12]/30 backdrop-blur-sm p-6 rounded-2xl border border-white/5"
                >
                  <h3 className="text-xl font-medium uppercase text-white mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-[11px] leading-relaxed max-w-[180px]">
                    {step.description}
                  </p>
                </motion.div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>


<section className="relative py-24 px-6 bg-[#08090c] overflow-hidden">
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-sky-500/10 via-transparent to-transparent opacity-30" />
    
      {/* --- BACKGROUND SKY GRADIENT GLOW --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[sky-500/10] blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADING */}
        <div className="text-center mb-16">
          <p className="text-sky-400 text-[10px] font-black uppercase tracking-[0.5em] mb-4">
            Expertise & Tools
          </p>
          <h2 className="text-4xl md:text-6xl font-medium text-white   tracking-tighter">
            Technologies I <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Work With</span>
          </h2>
        </div>

        {/* TECH CARDS GRID */}
        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              // --- SMOOTH SIDE UP MOTION ---
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1, // Mid mid u soo bax
                ease: [0.22, 1, 0.36, 1] // Smooth easing
              }}
              whileHover={{ y: -5 }} // Hover motion
              className="group relative"
            >
              {/* Card Container */}
              <div className="px-6 py-3 bg-white/[0.03] border border-white/10 rounded-full flex items-center gap-3 backdrop-blur-md hover:border-sky-500/40 hover:bg-white/[0.06] transition-all duration-300">
                
                {/* Custom Icon (Simplified Logo Style) */}
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-[10px] shadow-lg transition-transform group-hover:scale-110"
                  style={{ 
                    backgroundColor: `${tech.color}15`, // Light background of original color
                    border: `1px solid ${tech.color}40`,
                    color: tech.color 
                  }}
                >
                  {/* Halkan waxaan ku qoray xarfaha hore ee Apps-ka (Sida Photoshop = Ps) */}
                  {tech.name === "Photoshop" ? "Ps" : 
                   tech.name === "Illustrator" ? "Ai" : 
                   tech.name === "After Effects" ? "Ae" : 
                   tech.name === "Premiere Pro" ? "Pr" : 
                   tech.name === "Adobe Audition" ? "Au" : 
                   tech.name.substring(0, 2).toUpperCase()}
                </div>

                <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors tracking-wide">
                  {tech.name}
                </span>

                {/* Sky Gradient Glow on Hover */}
                <div className="absolute inset-0 rounded-full bg-sky-500/0 group-hover:bg-sky-500/5 blur-md -z-10 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>

<section className="py-24 bg-[#05080a]">
  <div className="max-w-4xl mx-auto px-6">
    
    {/* --- CINWAANKA SARE (Header) --- */}
    <div className="text-center mb-16 space-y-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }} // Hal mar kaliya ayuu soo baxayaa
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/5 border border-sky-500/10 text-sky-400 text-[10px] font-black uppercase tracking-[0.3em]"
      >
        Recent Works
      </motion.div>
      
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }} // Animation-ku dib uma laabanayo (No motion out)
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-4xl md:text-3xl font-black text-white uppercase tracking-tighter"
      >
        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">Portfolio</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-gray-500 text-sm uppercase font-medium tracking-widest max-w-md mx-auto"
      >
        A collection of visual stories, branding excellence, and motion masterpieces.
      </motion.p>
    </div>

    {/* --- GRID-KA (4 Columns - No Motion Out) --- */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {portfolioData.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} // Tan ayaa hubinaysa in sawiradu aysan baaba'in markaad scroll-gareyso
          transition={{ 
            duration: 0.5, 
            delay: index * 0.03, // Stagger aad u yar si uu u smooth noqdo
            ease: "easeOut" 
          }}
          className={`relative group overflow-hidden rounded-xl bg-[#0c0e12] border border-white/5 
            ${item.type === 'video' ? 'col-span-2 aspect-video' : 'col-span-1 aspect-square'}`}
        >
          <div className="w-full h-full">
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            ) : (
              <video
                src={item.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            )}
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <span className="text-sky-400 text-[8px] font-black uppercase tracking-wider mb-0.5">
                {item.category}
              </span>
              <h3 className="text-white text-[11px] font-bold uppercase leading-tight italic">
                {item.title}
              </h3>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* --- BEHANCE BUTTON (Kii hore) --- */}
    <div className="mt-16 flex justify-center">
      <a 
        href="https://www.behance.net/yacqubaliahmed" 
        target="_blank"
        className="group relative inline-flex items-center gap-3 px-8 py-3 bg-white/[0.02] border border-white/10 rounded-full text-white transition-all hover:border-sky-500/50"
      >
        <span className="text-[10px] font-black uppercase tracking-widest">See More on Behance</span>
        <div className="p-2 bg-sky-500 rounded-full group-hover:rotate-45 transition-transform duration-500 flex items-center justify-center">
           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-black"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
        </div>
      </a>
    </div>

  </div>
</section>

 <section id='about'  className="relative py-24 px-6 bg-[#08090c] overflow-hidden">
      
     
      {/* --- BACKGROUND GLOWS --- */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-sky-500/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
       {/* --- DHINACA BIDIX: SAWIRKA SAMURAI-GA (image_9b6c98.png) --- */}
        <div className="relative flex justify-center items-center">
          {/* Main Container for Floating Images */}
          <div className="relative w-full max-w-[500px] aspect-square">
            
            {/* Sawirka weyn (Samurai) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-full rounded-[1.5rem] overflow-hidden border border-white/10 shadow-2xl"
            >
              <img 
                src="ME.png" // Halkan magaca sawirkaaga dhabta ah geli
                alt="Me"
                
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>

            {/* --- KAARARKA LUQADAHA (Floating & Resetting) --- */}
            {/* Arabic */}
            <motion.div 
              initial={{ opacity: 0, x: -50, filter: "blur(15px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: false }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="absolute -top-12 -left-12 w-48 p-4 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-2xl z-20 hidden md:block"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center text-xs font-black text-white">ي/A</div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-sky-400 font-black uppercase tracking-[0.2em]">Language</span>
                  <h4 className="text-[14px] text-white font-black uppercase italic leading-none">Arabic</h4>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "96%" }} transition={{ duration: 1, delay: 0.5 }} className="h-full bg-sky-500" />
                </div>
                <span className="text-[10px] text-sky-400 font-bold italic">96% Fluent</span>
              </div>
            </motion.div>

            {/* English */}
            <motion.div 
              initial={{ opacity: 0, x: 50, filter: "blur(15px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: false }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute top-16 -right-16 w-48 p-4 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-2xl z-20 hidden md:block"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-xs font-black text-white">EN</div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-blue-400 font-black uppercase tracking-[0.2em]">Language</span>
                  <h4 className="text-[14px] text-white font-black uppercase italic leading-none">English</h4>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "85%" }} transition={{ duration: 1, delay: 0.7 }} className="h-full bg-blue-500" />
                </div>
                <span className="text-[10px] text-blue-400 font-bold italic">85% Proficient</span>
              </div>
            </motion.div>

            {/* Somali */}
            <motion.div 
              initial={{ opacity: 0, y: 50, filter: "blur(15px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: false }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute -bottom-10 -left-6 w-48 p-4 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-2xl z-20 hidden md:block"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-sky-500 rounded-2xl flex items-center justify-center text-xs font-black text-white">SO</div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-cyan-400 font-black uppercase tracking-[0.2em]">Language</span>
                  <h4 className="text-[14px] text-white font-black uppercase italic leading-none">Somali</h4>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 1, delay: 0.9 }} className="h-full bg-cyan-400" />
                </div>
                <span className="text-[10px] text-cyan-400 font-bold italic">100% Native</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* --- DHINACA MIDIG: QORAALKA --- */}
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, x: 50, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
              <Sparkles size={14} /> Who We Are
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-6">
              Yacqub <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Ali</span>.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              Senior Creative with a multi-disciplinary skill set. My signature is high-quality craft and your ultimate satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {[
              { icon: <ShieldCheck />, title: "Premium Quality", text: "Delivering world-class design standards.", color: "sky" },
              { icon: <Heart />, title: "Total Satisfaction", text: "Ensuring your vision is brought to life.", color: "blue" },
              { icon: <Zap />, title: "Fast Delivery", text: "High-end results within tight deadlines.", color: "cyan" },
              { icon: <Sparkles />, title: "Unique Skills", text: "Rare blend of creative expertise.", color: "indigo" }
            ].map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: false }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-sky-500/30 transition-all group"
              >
                <div className={`p-3 bg-${f.color}-500/20 rounded-xl text-${f.color}-400 group-hover:scale-110 transition-transform`}>
                  {f.icon}
                </div>
                <div>
                  <h4 className="text-white font-black uppercase text-sm mb-1 tracking-tighter">{f.title}</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed uppercase font-medium">{f.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
    
<section className="py-24 bg-[#08090c] relative overflow-hidden">
      
      {/* SIDE GLOWS */}
    
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-gray-400 text-xs font-bold tracking-[0.4em] uppercase mb-4"
          >
            Trusted By Global Brands
          </motion.h2>
          <h3 className="text-white text-3xl md:text-5xl font-medium uppercase">
            Companies I've <span className="text-[#26A0FF]  font-bold">Partnered With</span>
          </h3>
          <div className="h-1.5 w-20 bg-[#26A0FF] mx-auto mt-6 rounded-full shadow-[0_0_20px_#26A0FF]" />
        </div>

        {/* Static Grid - Halkan ayaan ka dhignay kuwa taagan */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clientLogos.map((logo, index) => (
            <motion.div
              key={logo.id}
              // Fade In & Fade Out Animation
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1, // Mid mid u soo baxaya (Stagger)
                ease: "easeOut" 
              }}
              whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
              className="group relative flex items-center justify-center p-8 bg-white/5 border border-white/5 rounded-2xl backdrop-blur-sm hover:border-[#26A0FF]/30 transition-colors"
            >
              <img 
                src={logo.img} 
                alt={logo.name}
                className="h-10 md:h-12 w-auto object-contain opacity-50 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0" 
                onError={(e) => {
                  // Haddii sawirka la waayo, qoraal ayaan ku beddelaynaa
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent && !parent.querySelector('.fallback-text')) {
                    const span = document.createElement('span');
                    span.className = 'fallback-text text-[#26A0FF] font-black italic tracking-widest';
                    span.innerText = logo.name;
                    parent.appendChild(span);
                  }
                }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
{/*End Logo Section*/}



{/*Experience Section */}
  {/*Experience Section */}
<section id='Experience' className="py-24 px-4 bg-[#050608] overflow-hidden relative">
      
      {/* --- 1. GRADIENT BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-[-10%] w-[40%] h-[100%] bg-gradient-to-r from-sky-900/40 to-transparent blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-[-10%] w-[40%] h-[100%] bg-gradient-to-l from-sky-800/40 to-transparent blur-3xl opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.03)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italic"
          >
            Professional <span className="text-sky-500 not-italic font-light">Journey</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* LINE-KA DHEXDA */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                
                {/* 2. DHIBICDA (DOT) */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center z-20">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.8 }}
                    className="relative flex items-center justify-center"
                  >
                    <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-sky-400/40"></span>
                    <div className="relative w-3.5 h-3.5 rounded-full bg-sky-500 shadow-[0_0_15px_rgba(14,165,233,1)] border-[2px] border-[#050608]" />
                  </motion.div>
                </div>

                {/* 3. CARD-KA CONTENT-KA EE IFTIINKA LEH */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex flex-col md:flex-row items-center justify-between w-full ${
                    index % 2 !== 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-full md:w-[45%]">
                    <motion.div 
                      whileHover={{ y: -5 }}
                      className="group relative p-8 rounded-[1.5rem] bg-[#0c0e12]/60 border border-sky-500/20 backdrop-blur-2xl transition-all duration-500 shadow-2xl overflow-hidden"
                    >
                      {/* --- IFTIINKA GRADIENT-KA EE HOVER-KA --- */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-purple-500/10" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.1),transparent_70%)]" />
                      </div>

                      <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="p-2 bg-sky-500/10 rounded-xl text-sky-400">
                            <Calendar size={16} />
                          </div>
                          <span className="text-xs font-bold text-sky-400/80 tracking-widest uppercase italic">{exp.duration}</span>
                        </div>

                        <h3 className="text-2xl font-black text-white italic uppercase mb-2">
                          {exp.role}
                        </h3>
                        
                        <p className="text-sky-500 font-extrabold text-[10px] mb-4 uppercase tracking-[0.2em]">
                          {exp.company}
                        </p>

                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                          {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {exp.skills?.map((skill, i) => (
                            <span key={i} className="px-4 py-1.5 bg-sky-500 border border-sky-500/10 rounded-full text-[10px] text-white font-bold uppercase">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Meel banaan oo loogu talagalay dhinaca kale ee timeline-ka */}
                  <div className="hidden md:block w-[45%]" />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
{/*Experience Section End*/}


{/*Academic Background */}
<section className="py-12 px-4 bg-[#08090c] overflow-hidden relative">
      <div className="absolute top-1/2 -left-[5%] w-[250px] h-[400px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 -right-[5%] w-[250px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-3xl md:text-5xl font-Medium text-white  uppercase tracking-tighter"
          >
            Academic <span className="text-sky-400">Background</span>
          </motion.h2>
          <div className="h-1 w-16 bg-sky-500 mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(14,165,233,0.4)]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-[1.5rem] bg-[#0c0e12]/40 border border-white/5 backdrop-blur-xl hover:border-sky-500/30 transition-all relative overflow-hidden flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div 
                  className="p-3.5 rounded-2xl bg-white/5 border border-white/10"
                  style={{ color: edu.color }}
                >
                  {edu.icon}
                </div>
                <span className={`text-[9px] font-black px-3 py-1 rounded-full border ${
                  edu.status === "Completed" 
                  ? "bg-green-500/10 border-green-500/20 text-green-400" 
                  : "bg-sky-500/10 border-sky-500/20 text-sky-400"
                } uppercase italic`}>
                  {edu.status}
                </span>
              </div>

              <div className="space-y-3 flex-grow">
                <div className="flex items-center gap-2 text-gray-500">
                  <BookOpen size={12} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{edu.duration}</span>
                </div>
                
                {/* Qoraalka halkan ayaan ka dhigay font-medium sidii aad rabtay */}
                <h3 className="text-xl md:text-2xl font-medium text-white  uppercase leading-tight">
                  {edu.degree}
                </h3>
                
                <p className="text-sky-500/90 font-bold text-[11px] uppercase tracking-wider">
                  {edu.institution}
                </p>

                <p className="text-gray-400 text-xs leading-relaxed pt-2">
                  {edu.description}
                </p>
              </div>

              <div className="absolute -bottom-4 -right-4 opacity-0 group-hover:opacity-10 transition-opacity">
                <ShieldCheck size={100} className="text-white" />
              </div>

              <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>


      {/* --- WHATSAPP FLOATING BUTTON (Dhig halkan) --- */}
      <div className="fixed bottom-8 right-8 z-[9999]">
        <a 
          href="https://wa.me/252634076877" 
          target="_blank" 
          className="block w-16 h-16 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center group"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping"></span>
          <FaWhatsapp className="w-8 h-8 text-white relative z-10" />
        </a>
      </div>
      
<section className="py-24 bg-black relative overflow-hidden">
      {/* Background Ambient Glow - Asalkii Casaanka ahaa */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-sky-500/5 bg-pink-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[280px]">
          
          {/* 1. BRAND IDENTITY (Small Card) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="md:col-span-4 bg-[#0c0c0e] border border-white/5 rounded-[2.5rem] p-8 relative overflow-hidden group"
          >
            <div className="relative z-10 h-full flex flex-col justify-end">
              <div className="mb-auto">
                <div className="relative inline-block">
                  <div className="px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full text-[10px] font-bold text-white flex items-center gap-2 shadow-[0_0_20px_rgba(236,72,153,0.4)]">
                    <Palette size={12} /> Brand Design
                  </div>
                  <MousePointer2 className="absolute -bottom-4 -right-2 text-pink-500 fill-pink-500 rotate-[-15deg] group-hover:translate-x-2 transition-transform" size={20} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 italic">Visual Identity</h3>
              <p className="text-gray-500 text-[10px] leading-relaxed uppercase font-medium">
                Creating logos and brand systems that leave a lasting impression.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 blur-3xl" />
          </motion.div>

          {/* 2. MOTION GRAPHICS (Wide Card) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="md:col-span-8 bg-[#0c0c0e] border border-white/5 rounded-[2.5rem] p-10 relative overflow-hidden group"
          >
            <div className="relative z-10 h-full flex flex-col justify-center max-w-md">
              <h3 className="text-3xl font-bold text-white mb-4 italic uppercase">Motion & Animation</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light tracking-wide">
                From promo videos to dynamic ads, I bring your brand's story to life with professional motion design.
              </p>
            </div>
            
            {/* Planet/Sphere Design - Pink Style */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-gradient-to-tr from-pink-600/40 to-transparent rounded-full blur-2xl opacity-60 group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute right-10 bottom-10 w-48 h-48 border border-white/5 rounded-full rotate-45" />
          </motion.div>

          {/* 3. SOCIAL ADS (Medium Wide) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="md:col-span-7 bg-[#0c0c0e] border border-white/5 rounded-[2.5rem] p-10 relative overflow-hidden group"
          >
            <div className="relative z-10 h-full flex flex-col justify-end">
              <h3 className="text-2xl font-bold text-white mb-3 italic">Social Media Ads</h3>
              <p className="text-gray-500 text-sm max-w-sm">
                Custom-made visuals optimized for high engagement on Instagram, TikTok, and Facebook.
              </p>
            </div>
            {/* Background Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full opacity-20 group-hover:scale-125 transition-transform duration-1000" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-white/5 rounded-full opacity-10" />
          </motion.div>

          {/* 4. CREATIVE FOCUS (Square-ish) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="md:col-span-5 bg-[#0c0c0e] border border-white/5 rounded-[2.5rem] p-10 relative overflow-hidden group text-center flex flex-col items-center justify-center"
          >
            <div className="relative z-10">
              <Sparkles className="text-pink-500 mx-auto mb-4" size={40} />
              <h3 className="text-2xl font-bold text-white mb-3 italic uppercase">Creative Focus</h3>
              <p className="text-gray-500 text-xs tracking-widest uppercase">
                Obsessed with details, quality, and fast delivery.
              </p>
            </div>
            {/* Texture */}
            <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" 
                 style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }} />
            <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-pink-500/5 to-transparent" />
          </motion.div>

        </div>
      </div>
    </section>

    

{/* --- CONTACT SECTION --- */}
<section id="contact" className="relative py-24 px-6 text-white overflow-hidden bg-[#05080a]">
  {/* Background Glows */}
  <div className="absolute bottom-0 -left-[5%] w-[300px] h-[600px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
  <div className="absolute top-0 -right-[5%] w-[300px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

  <div className="max-w-7xl mx-auto relative z-10">
    
    {/* HEADING SECTION */}
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      className="text-center mb-20"
    >
      <h2 className="text-5xl lg:text-7xl font-bold mb-4 tracking-tighter">
        Let's <span className="text-sky-400">Work Together</span>
      </h2>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        Ready to elevate your brand? Let's discuss how we can bring your vision to life with strategic, impactful design.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      
      {/* LEFT SIDE: CONTACT INFORMATION */}
      <div className="space-y-12">
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-3xl font-bold mb-8 text-sky-50"
        >
          Contact Information
        </motion.h3>
        
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="space-y-6"
        >
          {[
            { icon: <Phone size={20} />, label: "Phone", val: "+252 63 4076877", color: "text-green-400" },
            { icon: <Mail size={20} />, label: "Email", val: "yacquubcali2019@gmail.com", color: "text-red-400" },
            { icon: <Facebook size={20} />, label: "Facebook", val: "Yacquub Cali", color: "text-blue-500" },
            { icon: <FaInstagram size={20} />, label: "Instagram", val: "@yacquub_ali", color: "text-pink-500" },
            { icon: <FaBehance size={20} />, label: "Behance", val: "Yacqub Ali Ahmed", color: "text-blue-400" },
            { icon: <MapPin size={20} />, label: "Location", val: "Tuurta, Burao, Somaliland", color: "text-orange-400" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              variants={{
                hidden: { opacity: 0, x: -30 },
                show: { opacity: 1, x: 0 }
              }}
              whileHover={{ x: 10 }}
              className="flex items-center gap-6 group cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${item.color} group-hover:bg-sky-500 group-hover:text-white transition-all duration-300 shadow-lg`}>
                {item.icon}
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">{item.label}</p>
                <p className="text-lg font-semibold group-hover:text-sky-400 transition-colors">{item.val}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* RIGHT SIDE: CONTACT FORM */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm"
      >
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-gray-400 text-sm ml-1 font-semibold">Your Name</label>
              <input 
                type="text" 
                placeholder="Yacqub Ali" 
                className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:border-sky-500 outline-none transition-all placeholder:text-gray-700"
              />
            </div>
            <div className="space-y-2">
              <label className="text-gray-400 text-sm ml-1 font-semibold">Email Address</label>
              <input 
                type="email" 
                placeholder="hello@example.com" 
                className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:border-sky-500 outline-none transition-all placeholder:text-gray-700"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-gray-400 text-sm ml-1 font-semibold">Your Message</label>
            <textarea 
              rows={5} 
              placeholder="Tell me about your project..." 
              className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:border-sky-500 outline-none transition-all resize-none placeholder:text-gray-700"
            />
          </div>

          <motion.button 
            whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(56,189,248,0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-5 bg-sky-500 text-black font-black rounded-2xl text-lg flex items-center justify-center gap-3 uppercase tracking-widest transition-all"
          >
            Send Message <Send size={20} />
          </motion.button>
        </form>
      </motion.div>

    </div>
  </div>
</section>

        {/* --- MODAL POP-UP --- */}
        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
            <div className="relative w-full max-w-4xl bg-white dark:bg-[#0a0f1e] rounded-[2rem] overflow-hidden border border-white/10 z-10 animate-in fade-in zoom-in duration-300">
              <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 z-20">
                <X className="w-6 h-6" />
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-[300px] md:h-[500px]">
                  <img src={selectedProject.image} className="w-full h-full object-cover" alt="" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <p className="text-sky-500 font-bold text-sm uppercase mb-2">{selectedProject.category}</p>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{selectedProject.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">{selectedProject.desc || "Waxaan macaamiishayada u fulinaa mashaariic tayo leh oo leh nashqad casri ah."}</p>
                  <button className="w-full py-4 bg-sky-600 text-white font-bold rounded-xl hover:bg-sky-500 transition-all">Visit Live Site</button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
