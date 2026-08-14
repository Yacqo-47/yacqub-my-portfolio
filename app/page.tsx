'use client';
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight, 
  Award,
  BookOpen,
  Briefcase,
  Code2,
  Download,
  GraduationCap,
  Mail,
  Moon,
  Palette,
  Sparkles,
  Sun,
} from 'lucide-react';
import { FaBehance, FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { portfolioData } from './data/portfolio';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'Journey', href: '#journey' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  {
    title: 'Brand Identity',
    description: 'Logos, visual systems, and polished direction built for clarity and memorability.',
    icon: Palette,
  },
  {
    title: 'Web & UI Design',
    description: 'Modern, responsive interfaces shaped to feel calm, useful, and premium.',
    icon: Code2,
  },
  {
    title: 'Motion & Content',
    description: 'Short-form motion, social assets, and story-led visuals crafted to engage.',
    icon: Sparkles,
  },
];

const stats = [
  { label: 'Projects', value: '50+' },
  { label: 'Years', value: '5+' },
  { label: 'Clients', value: '30+' },
];

const highlights = [
  'Clean, thoughtful interfaces that feel effortless to use.',
  'Design systems shaped for brands, startups, and personal products.',
  'A balance of strategy, visuals, and smooth execution.',
];

const experience = [
  {
    role: " Associated IT Department Staff",
    company: "University of Burao",
    period: "2023 – Present",
    description: "Started as a volunteer in 2023, later worked part-time, and became an official contract staff member in late 2025, contributing to the establishment and development of the Multimedia and IT Unit at the university.",
    points: [
      "Graphic design and branding materials",
      "Video editing and media production",
      "Social media management",
      "Website development and maintenance (Developed the official university website)",
      "IT support and technical assistance for staff and students",
      "Managing digital content and online platforms"
    ]
  },
  {
    role: "Part-time IT Support & Consultant",
    company: "Umahaatu Khayrdoon Charity",
    period: "2024 – 2025",
    description: "Worked as a part-time IT support, consultant, and technician, both onsite and online. Provided multimedia services including video editing and website design, and developed the official website for the organization."
  },
  {
    role: "Multimedia Specialist",
    company: "BIT Academy",
    period: "2025",
    description: "Worked part-time providing multimedia services, including video editing, graphic design, and website support. Also offered IT support and technical assistance when needed."
  },
  {
    role: "Video Editor",
    company: "Aboosto",
    period: "2024 – 2025 (Oct - Mar)",
    description: "Worked on digital marketing campaigns and promotional media production.",
    points: [
      "Advertising video production",
      "Social media marketing",
      "Brand promotion content",
      "Digital marketing support"
    ]
  },
  {
    role: "Multimedia & Web Developer",
    company: "Freelance / Remote",
    period: "2022 – Present",
    description: "Working independently on online and local projects in multimedia and digital services. Projects include graphic design, video editing, web development, UX/UI design, branding and marketing materials, social media management, and promotional videos."
  },
  {
    role: "Sales & Marketing Assistant",
    company: "Deer General",
    period: "2017 – 2022",
    description: "Worked in a local business during early years, gaining experience in sales and customer communication.",
    points: [
      "Product sales",
      "Customer service",
      "Basic marketing and promotion",
      "Assisting in business operations"
    ]
  }
];


const education = [
  {
    title: 'Master of Network Security',
    institution: 'University of Burao',
    period: '2025 — 2027',
    icon: GraduationCap,
  },
  {
    title: 'Bachelor of Information Technology',
    institution: 'University of Burao',
    period: '2020 — 2024',
    icon: BookOpen,
  },
  {
    title: 'Professional UX/UI Design',
    institution: 'Google Certification',
    period: '2023 — 2024',
    icon: Award,
  },
];

const contactCards = [
  {
    label: 'Email',
    value: 'yacquubcali2019@gmail.com',
    href: 'mailto:yacquubcali2019@gmail.com',
    icon: Mail,
    tint: 'from-sky-500/15 to-cyan-500/10',
  },
  {
    label: 'WhatsApp',
    value: '+252 63 407 6877',
    href: 'https://wa.me/252634076877',
    icon: FaWhatsapp,
    tint: 'from-emerald-500/15 to-lime-500/10',
  },
  {
    label: 'Behance',
    value: 'Yacqub Ali Ahmed',
    href: 'https://www.behance.net/yacqubaliahmed',
    icon: FaBehance,
    tint: 'from-blue-500/15 to-indigo-500/10',
  },
  {
    label: 'Facebook',
    value: 'Yacqub Ali Ahmed',
    href: 'https://www.facebook.com/share/1bKFN3ZJus/?mibextid=wwXIfr',
    icon: FaFacebookF,
    tint: 'from-blue-600/15 to-indigo-500/10',
  },
  {
    label: 'Instagram',
    value: '@aymani.47',
    href: 'https://www.instagram.com/aymani.47/',
    icon: FaInstagram,
    tint: 'from-pink-500/15 to-rose-500/10',
  },
  {
    label: 'LinkedIn',
    value: 'Yacqub Ali Ahmed',
    href: 'https://www.linkedin.com/in/yacqub-ali-ahmed-890016248/',
    icon: FaLinkedinIn,
    tint: 'from-sky-600/15 to-cyan-500/10',
  },
];

// sendEmail and form ref moved into component (hooks must not be called at top-level)

// Qeybaha saxda ah ee ku salaysan Branding, Post Design, Motion, iyo Color Grading
const categories = ['All', 'Brand Identity', 'Post Design', 'Motion Graphic', 'Color Grading', 'Web & App'];
const featuredWork = portfolioData;

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [activeCategory, setActiveCategory] = useState('All');

  // Contact form hooks (must be inside component)
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);
    setError('');

    // Replace with your EmailJS Service ID, Template ID and Public Key
    emailjs.send("service_lw0dkcv","template_se3idrq")
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          form.current?.reset();
          setTimeout(() => setSuccess(false), 5000);
        },
        (error) => {
          setLoading(false);
          setError('Waa awoodi waayay inuu diro fariinta, fadlan dib u dayso.');
          console.log('FAILED...', error?.text ?? error);
        }
      );
  };

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme') as 'dark' | 'light' | null;
    const preferredTheme = savedTheme ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const resolvedTheme = preferredTheme === 'dark' ? 'dark' : 'light';

    document.documentElement.classList.toggle('dark', resolvedTheme === 'dark');
    setTheme(resolvedTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
    window.localStorage.setItem('portfolio-theme', nextTheme);
    setTheme(nextTheme);
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (customDelay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: customDelay,
        ease: "easeOut",
      },
    }),
  };

  // Small animated section wrapper to apply smooth, modern entrance
  const AnimatedSection: React.FC<{
    children: React.ReactNode;
    className?: string;
    id?: string;
    delay?: number;
  }> = ({ children, className, id, delay = 0 }) => (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: { opacity: 0, y: 18 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.section>
  );

  // Habka Filter-ka oo si habsami leh u kala saaraya qaybaha
  const filteredWork = activeCategory === 'All'
    ? featuredWork
    : featuredWork.filter(item => 
        item.category.toLowerCase().includes(activeCategory.toLowerCase())
      );

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 transition-colors duration-300 dark:bg-[#05070b] dark:text-zinc-100">
     <header className="fixed inset-x-0 top-4 z-50 mx-auto max-w-5xl px-4">
  <nav className="flex items-center justify-between rounded-full border border-white/10 bg-[#0a0c10]/90 px-4 py-2.5 shadow-2xl backdrop-blur-xl">
    
    <Link href="#home" className="flex items-center gap-2 pl-2 text-sm font-semibold text-white">
      <img src="/ME.png" alt="Yacqub Ali" loading="lazy" decoding="async" className="h-7 w-7 rounded-full object-cover" />
      <span>Yacqub Ali</span>
    </Link>

    <div className="hidden items-center gap-6 md:flex">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="text-sm text-zinc-400 transition hover:text-white"
        >
          {link.name}
        </Link>
      ))}
    </div>

    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={toggleTheme}
        className="rounded-full p-2 text-zinc-400 transition hover:bg-white/5 hover:text-white"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      <a
        href="#contact"
        className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
      >
        Hire Me
      </a>
    </div>

  </nav>
</header>

<main>
  <div id="home" className="relative px-4 py-24 sm:px-6 lg:px-8 lg:py-32 overflow-hidden bg-transparent text-zinc-900 dark:text-white">
    {/* Top Rain-like Light Beams & Glow Effect */}
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Ambient top light source */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-blue-500/15 dark:bg-blue-500/20 blur-[150px] rounded-full" />
      
      {/* Vertical light rays/streaks coming down like rain from top */}
      <div className="absolute top-0 left-[15%] w-[1px] h-[320px] bg-gradient-to-b from-blue-400/50 via-blue-400/10 to-transparent blur-[0.5px]" />
      <div className="absolute top-0 left-[30%] w-[2px] h-[280px] bg-gradient-to-b from-sky-400/60 via-sky-400/15 to-transparent blur-[1px]" />
      <div className="absolute top-0 left-[50%] w-[1px] h-[380px] bg-gradient-to-b from-blue-300/50 via-blue-500/10 to-transparent blur-[0.5px]" />
      <div className="absolute top-0 left-[70%] w-[2px] h-[300px] bg-gradient-to-b from-sky-400/50 via-sky-400/10 to-transparent blur-[1px]" />
      <div className="absolute top-0 left-[85%] w-[1px] h-[260px] bg-gradient-to-b from-blue-400/40 via-blue-500/10 to-transparent blur-[0.5px]" />
    </div>

    <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-8 flex flex-col items-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-700 backdrop-blur-md dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300 shadow-sm"
        >
          <span className="h-2 w-2 rounded-full bg-blue-500 dark:bg-blue-400 animate-pulse" />
          Available for freelance & collaboration
        </motion.div>

        {/* Headings */}
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-6xl lg:text-7xl leading-[1.1]"
          >
            I create calm, <span className="text-blue-600 dark:text-blue-400">modern visuals</span> that feel clear.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400"
          >
            I&apos;m an IT specialist crafting fast websites and striking multimedia work — from Burao to the world, wherever the project takes me.
          </motion.p>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 shadow-lg shadow-blue-500/10"
          >
            View portfolio
            <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 dark:border-white/15 bg-transparent px-6 py-3.5 text-sm font-medium text-zinc-700 dark:text-zinc-200 backdrop-blur-md transition hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-300"
          >
            Let&apos;s talk
          </a>
        </motion.div>
      </motion.div>
    </div>
  </div>
</main>

      <div>
        <AnimatedSection id="home-intro" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1.5 text-sm font-medium text-sky-700 dark:text-sky-300">
                <Sparkles size={16} />
                Creative designer • multimedia specialist • storyteller
              </div>

              <div className="space-y-4">
                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-5xl lg:text-6xl">
                  I create calm, modern visuals that make brands feel instantly clearer.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                  From identity systems to polished digital experiences, I turn ideas into thoughtful design with a clean and human feel.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                >
                  View portfolio
                  <ArrowRight size={16} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-700 transition hover:border-sky-500 hover:text-sky-600 dark:border-white/10 dark:text-zinc-200"
                >
                  Let&apos;s talk
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5">
                    <p className="text-2xl font-semibold text-zinc-900 dark:text-white">{stat.value}</p>
                    <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="rounded-[2rem] border border-zinc-200 bg-white p-3 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.25)] transition hover:shadow-[0_25px_70px_-20px_rgba(14,165,233,0.25)] dark:border-white/10 dark:bg-zinc-900/80">
                <img src="/Ya.png" alt="Yacqub Ali" loading="lazy" decoding="async" className="h-[420px] w-full rounded-[1.4rem] object-cover object-top sm:h-[520px]" />
                <div className="mt-4 flex items-center justify-between rounded-[1.2rem] border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
                  <span>Available for freelance & collaboration</span>
                  <span className="font-medium text-sky-600 dark:text-sky-300">Worldwide</span>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="services" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-300">Services</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
                  Design that feels simple and intentional.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                I help brands and founders communicate with clarity through refined visuals, thoughtful UI, and modern motion.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.article
                    key={service.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -6, scale: 1.01 }}
                    className="group rounded-[1.6rem] border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="relative inline-flex rounded-2xl bg-sky-500/10 p-3 text-sky-600 transition group-hover:bg-sky-500/20 dark:text-sky-300">
                      <Icon size={20} />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-zinc-900 dark:text-white">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">{service.description}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Selected Work Section */}
        <AnimatedSection id="work" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-300">Selected work</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
                  A curated view of the work I&apos;ve developed.
                </h2>
              </div>
              <a href="#contact" className="text-sm font-medium text-zinc-600 transition hover:text-sky-600 dark:text-zinc-400 dark:hover:text-white">
                Start a project
              </a>
            </div>

            {/* Category Filter Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                    activeCategory === category
                      ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950'
                      : 'border border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 dark:border-white/10 dark:bg-white/5 dark:text-zinc-400 dark:hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredWork.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="group overflow-hidden rounded-[1.6rem] border border-zinc-200 bg-white shadow-sm transition hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="relative overflow-hidden">
                    <span className="absolute left-4 top-4 z-10 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-zinc-900 backdrop-blur-md dark:bg-zinc-900/80 dark:text-white">
                      {item.category}
                    </span>

                    {item.type === 'video' ? (
                      <video src={item.src} preload="none" loop muted playsInline className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                    ) : (
                      <img src={item.src} alt={item.title} loading="lazy" decoding="async" className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between px-5 py-4">
                    <div>
                      <p className="text-sm font-semibold text-zinc-900 dark:text-white">{item.title}</p>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.category}</p>
                    </div>
                    <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-300">
                      {item.type}
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </AnimatedSection>

  <AnimatedSection id="journey" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16 items-start">
          
          {/* Left Column: Header & Industries */}
          <div className="space-y-12 lg:sticky lg:top-24 lg:self-start">
            <div className="space-y-6">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-500">
                Experience
              </p>
              <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
                My Professional Journey
              </h2>
              <p className="max-w-md text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                Over 5 years of experience building technology solutions across various industries, from startups to enterprise clients.
              </p>
            </div>

            <div className="space-y-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                Industries Served
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Enterprise", "E-commerce", "Agency", 
                  "Markets", "Educations", "Logistics", 
                  "Real Estate", "Hospitality"
                ].map((industry) => (
                  <span 
                    key={industry} 
                    className="rounded-full border border-zinc-200 bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-200 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 dark:hover:bg-white/10"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Experience Timeline */}
          <div className="relative">
            
            {/* Continuous Vertical Line */}
            <div 
              className="absolute bottom-0 left-4 sm:left-5 top-6 w-[1px] bg-zinc-200 dark:bg-white/10" 
              aria-hidden="true"
            ></div>

            <div className="space-y-8">
              {experience.map((item, index) => (
                <div key={index} className="relative pl-10 sm:pl-12">
                  
                  {/* Timeline Dot */}
                  <div 
                    className="absolute left-4 sm:left-5 top-10 h-3 w-3 -translate-x-1/2 rounded-full bg-sky-500 ring-[5px] ring-white dark:ring-zinc-950"
                    aria-hidden="true"
                  ></div>

                  {/* Experience Card with Smooth Blue Gradient Hover */}
                  <div
                    className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-sky-500/50 hover:bg-gradient-to-b hover:from-white hover:to-sky-500/[0.04] hover:shadow-xl hover:shadow-sky-500/10 dark:border-white/5 dark:bg-white/[0.03] dark:hover:bg-gradient-to-b dark:hover:from-white/[0.03] dark:hover:to-sky-500/[0.08] sm:p-8"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="space-y-1.5">
                        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">{item.role}</h3>
                        <p className="text-sm font-medium text-sky-600 dark:text-sky-300">{item.company}</p>
                      </div>
                      
                      {/* Period Badge */}
                      <span className="inline-flex w-fit items-center rounded-full bg-sky-500/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                        {item.period}
                      </span>
                    </div>
                    
                    <p className="mt-6 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                      {item.description}
                    </p>

                    {/* Optional Points */}
                    {item.points && (
                      <ul className="mt-5 space-y-2">
                        {item.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sky-500/50"></span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </AnimatedSection>


{/* --- SKILLS & EXPERTISE SECTION --- */}
<AnimatedSection id="expertise" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
  <div className="mx-auto max-w-7xl">
    
    {/* Section Header */}
    <div className="mx-auto max-w-2xl text-center space-y-4 mb-16">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-400">
        Skills & Expertise
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl lg:text-5xl">
        Comprehensive Solutions
      </h2>
      <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
        From creative multimedia and digital design to robust systems, networking, and strategic consultancy.
      </p>
    </div>

    {/* Cards Grid */}
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      
      {/* 1. Multimedia */}
      <div className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-sky-500/50 hover:bg-gradient-to-b hover:from-white hover:to-sky-500/[0.04] hover:shadow-xl hover:shadow-sky-500/10 dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-gradient-to-b dark:hover:from-white/[0.03] dark:hover:to-sky-500/[0.08]">
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-600 transition-transform duration-500 group-hover:scale-110 dark:text-sky-400">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Multimedia Production</h3>
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 mb-6">
          High-quality visual content creation tailored to elevate your brand presence and storytelling.
        </p>
        <div className="flex flex-wrap gap-2">
          {["Graphic Design", "Video Editing", "Motion Graphics"].map((tag) => (
            <span key={tag} className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700 transition-colors group-hover:border-sky-500/30 group-hover:bg-sky-500/5 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* 2. UI/UX & Presentation Design */}
      <div className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-sky-500/50 hover:bg-gradient-to-b hover:from-white hover:to-sky-500/[0.04] hover:shadow-xl hover:shadow-sky-500/10 dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-gradient-to-b dark:hover:from-white/[0.03] dark:hover:to-sky-500/[0.08]">
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-600 transition-transform duration-500 group-hover:scale-110 dark:text-sky-400">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">UI/UX & Presentation</h3>
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 mb-6">
          Crafting intuitive user interfaces, engaging experiences, and professional pitch presentations.
        </p>
        <div className="flex flex-wrap gap-2">
          {["Presentation Design", "UI Design", "UX Experience"].map((tag) => (
            <span key={tag} className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700 transition-colors group-hover:border-sky-500/30 group-hover:bg-sky-500/5 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* 3. Websites & Systems */}
      <div className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-sky-500/50 hover:bg-gradient-to-b hover:from-white hover:to-sky-500/[0.04] hover:shadow-xl hover:shadow-sky-500/10 dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-gradient-to-b dark:hover:from-white/[0.03] dark:hover:to-sky-500/[0.08]">
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-600 transition-transform duration-500 group-hover:scale-110 dark:text-sky-400">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Websites & Systems</h3>
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 mb-6">
          Building high-performance, modern websites and custom software solutions for your business.
        </p>
        <div className="flex flex-wrap gap-2">
          {["Websites", "Custom Systems", "Frontend Architecture"].map((tag) => (
            <span key={tag} className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700 transition-colors group-hover:border-sky-500/30 group-hover:bg-sky-500/5 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* 4. Network Configuration */}
      <div className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-sky-500/50 hover:bg-gradient-to-b hover:from-white hover:to-sky-500/[0.04] hover:shadow-xl hover:shadow-sky-500/10 dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-gradient-to-b dark:hover:from-white/[0.03] dark:hover:to-sky-500/[0.08]">
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-600 transition-transform duration-500 group-hover:scale-110 dark:text-sky-400">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Network Configuration</h3>
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 mb-6">
          Setting up and configuring secure, reliable networking infrastructures for seamless operations.
        </p>
        <div className="flex flex-wrap gap-2">
          {["Network Setup", "Routing & Security", "Infrastructure"].map((tag) => (
            <span key={tag} className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700 transition-colors group-hover:border-sky-500/30 group-hover:bg-sky-500/5 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* 5. Consultancy & Social Ads */}
      <div className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-sky-500/50 hover:bg-gradient-to-b hover:from-white hover:to-sky-500/[0.04] hover:shadow-xl hover:shadow-sky-500/10 dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-gradient-to-b dark:hover:from-white/[0.03] dark:hover:to-sky-500/[0.08] sm:col-span-2 lg:col-span-2">
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-600 transition-transform duration-500 group-hover:scale-110 dark:text-sky-400">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Social Advertising & Consultancy</h3>
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 mb-6">
          Strategic digital marketing guidance and social advertisement consultancy to maximize your target reach and conversions.
        </p>
        <div className="flex flex-wrap gap-2">
          {["Social Ads Consultancy", "Digital Strategy", "Brand Growth"].map((tag) => (
            <span key={tag} className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700 transition-colors group-hover:border-sky-500/30 group-hover:bg-sky-500/5 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
              {tag}
            </span>
          ))}
        </div>
      </div>

    </div>
  </div>
</AnimatedSection>

     <AnimatedSection id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
  <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
    
    {/* Left Column: Info, Contact Cards & Socials */}
    <div className="space-y-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-500">Contact</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
          Let&apos;s build something calm and memorable.
        </h2>
        <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
          Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss how we can work together to bring your ideas to life.
        </p>
      </div>

      {/* Contact Details List */}
      <div className="grid gap-4 sm:grid-cols-2">
        {contactCards.map((card) => {
          const Icon = card.icon;

          return (
            <a
              key={card.label}
              href={card.href}
              target={card.href.startsWith('http') ? '_blank' : undefined}
              rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex items-start gap-4 rounded-2xl border border-zinc-200 bg-zinc-50/60 p-4 transition hover:-translate-y-0.5 hover:border-sky-500/40 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
            >
              <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${card.tint} text-zinc-800 dark:text-white`}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">{card.label}</p>
                <p className="mt-1 text-sm font-semibold text-zinc-900 break-words dark:text-white">{card.value}</p>
              </div>
            </a>
          );
        })}
      </div>

      {/* Connect With Me (Social Links) */}
      <div className="space-y-3 pt-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Connect With Me</p>
        <div className="flex items-center gap-3">
          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/yacqub-ali-ahmed-890016248/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50/60 text-zinc-700 transition hover:-translate-y-0.5 hover:border-sky-500/40 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>

          {/* GitHub */}
          <a 
            href="https://github.com/Yacqo-47" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50/60 text-zinc-700 transition hover:-translate-y-0.5 hover:border-sky-500/40 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 22v-4a4.8 4.8 0 00-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 004 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </a>

          {/* Twitter / X */}
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50/60 text-zinc-700 transition hover:-translate-y-0.5 hover:border-sky-500/40 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Status Box */}
      <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-white/10 dark:bg-zinc-900/50">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
          </span>
          <p className="text-sm font-semibold text-zinc-900 dark:text-white">Currently available</p>
        </div>
        <p className="mt-1.5 text-xs text-zinc-500 dark:text-zinc-400">
          Typically respond within 24 hours.
        </p>
      </div>
    </div>

    {/* Right Column: SaaS Style Form Card */}
    <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-xl shadow-zinc-900/5 dark:border-white/10 dark:bg-zinc-900 sm:p-10">
      <form ref={form} onSubmit={sendEmail} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Name</label>
            <input 
              type="text" 
              name="from_name"
              required
              placeholder="Your name" 
              className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20 dark:border-white/10 dark:bg-zinc-950/50 dark:text-white dark:focus:bg-zinc-950"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Email</label>
            <input 
              type="email" 
              name="user_email"
              required
              placeholder="your@email.com" 
              className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20 dark:border-white/10 dark:bg-zinc-950/50 dark:text-white dark:focus:bg-zinc-950"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Subject</label>
          <input 
            type="text" 
            name="subject"
            required
            placeholder="What&apos;s this about?" 
            className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20 dark:border-white/10 dark:bg-zinc-950/50 dark:text-white dark:focus:bg-zinc-950"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Message</label>
          <textarea 
            name="message"
            required
            rows={4}
            placeholder="Tell me about your project..." 
            className="w-full resize-none rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20 dark:border-white/10 dark:bg-zinc-950/50 dark:text-white dark:focus:bg-zinc-950"
          ></textarea>
        </div>

        {/* Budget Range Dropdown */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Budget Range <span className="text-zinc-400 font-normal">(Optional)</span></label>
          <select 
            name="budget"
            defaultValue=""
            className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20 dark:border-white/10 dark:bg-zinc-950/50 dark:text-white dark:focus:bg-zinc-950"
          >
            <option value="" disabled>Select budget range</option>
            <option value="1k-3k">$1,000 - $3,000</option>
            <option value="3k-6k">$3,000 - $6,000</option>
            <option value="6k+">$6,000+</option>
          </select>
        </div>

        {success && (
          <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
            Fariintaada si guul leh bay ku soo gaadhay! Waan soo jawaabi doonaa dhakhso.
          </p>
        )}

        {error && (
          <p className="text-sm font-medium text-red-600 dark:text-red-400">
            {error}
          </p>
        )}

        <button 
          type="submit" 
          disabled={loading}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-zinc-900/10 transition hover:bg-zinc-800 disabled:opacity-50 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
        >
          {loading ? 'Waa la dirayaa...' : 'Send Message'}
          {!loading && <ArrowRight size={16} />}
        </button>
      </form>
    </div>

  </div>
</AnimatedSection>
<footer className="border-t border-zinc-200 bg-white py-14 dark:border-white/10 dark:bg-zinc-950">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.9fr]">
      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <img
            src="/ME.png"
            alt="Yacqub Ali"
            className="h-10 w-10 rounded-full border border-zinc-200 object-cover dark:border-white/10"
          />
          <div>
            <p className="text-lg font-semibold text-zinc-900 dark:text-white">Yacqub Ali</p>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">Creative designer</p>
          </div>
        </div>

        <p className="max-w-md text-sm leading-7 text-zinc-600 dark:text-zinc-400">
          I design clear, modern visuals and digital experiences that help brands feel more confident, memorable, and easy to trust.
        </p>

        <div className="flex items-center gap-2.5">
          <a href="https://www.behance.net/yacqubaliahmed" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-700 transition hover:border-sky-500 hover:text-sky-500 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-300">
            <FaBehance className="h-4 w-4" />
          </a>
          <a href="https://www.facebook.com/share/1bKFN3ZJus/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-700 transition hover:border-sky-500 hover:text-sky-500 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-300">
            <FaFacebookF className="h-4 w-4" />
          </a>
          <a href="https://www.instagram.com/aymani.47/" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-700 transition hover:border-sky-500 hover:text-sky-500 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-300">
            <FaInstagram className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/in/yacqub-ali-ahmed-890016248/" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-700 transition hover:border-sky-500 hover:text-sky-500 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-300">
            <FaLinkedinIn className="h-4 w-4" />
          </a>
          <a href="mailto:yacquubcali2019@gmail.com" className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-700 transition hover:border-sky-500 hover:text-sky-500 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-300">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-900 dark:text-white">Navigate</p>
        <ul className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
          <li><a href="#home" className="transition hover:text-sky-500 dark:hover:text-sky-400">Home</a></li>
          <li><a href="#services" className="transition hover:text-sky-500 dark:hover:text-sky-400">Services</a></li>
          <li><a href="#work" className="transition hover:text-sky-500 dark:hover:text-sky-400">Work</a></li>
          <li><a href="#journey" className="transition hover:text-sky-500 dark:hover:text-sky-400">Journey</a></li>
          <li><a href="#contact" className="transition hover:text-sky-500 dark:hover:text-sky-400">Contact</a></li>
        </ul>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-900 dark:text-white">Contact</p>
        <ul className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
          <li><a href="mailto:yacquubcali2019@gmail.com" className="transition hover:text-sky-500 dark:hover:text-sky-400">yacquubcali2019@gmail.com</a></li>
          <li><a href="https://wa.me/252634076877" target="_blank" rel="noopener noreferrer" className="transition hover:text-sky-500 dark:hover:text-sky-400">+252 63 407 6877</a></li>
          <li className="text-zinc-500 dark:text-zinc-400">Available worldwide</li>
        </ul>
      </div>
    </div>

    <div className="mt-10 flex flex-col items-center justify-between border-t border-zinc-200 pt-6 text-center sm:flex-row sm:text-left dark:border-white/10">
      <p className="text-xs text-zinc-500 dark:text-zinc-400">
        © 2026 Yacqub Ali. All rights reserved.
      </p>
      <p className="mt-3 text-xs text-zinc-500 sm:mt-0 dark:text-zinc-400">
        Built with clarity, craft, and purpose.
      </p>
    </div>
  </div>
</footer>
      {/* Floating WhatsApp quick-connect button */}
      <a
        href="https://wa.me/252634076877"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-emerald-500 px-4 py-3 text-sm font-medium text-white shadow-lg hover:bg-emerald-600"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
        <span>WhatsApp</span>
      </a>

      </div>
    </div>
  );
}