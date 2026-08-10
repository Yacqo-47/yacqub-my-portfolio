'use client';
import React, { useEffect, useState } from 'react';
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
import { FaBehance, FaInstagram, FaWhatsapp } from 'react-icons/fa';
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
    role: 'Multimedia Officer',
    company: 'University of Burao',
    period: '2023 — 2026',
    description: 'Led visual storytelling, digital campaigns, and the university’s modern digital presence.',
  },
  {
    role: 'Multimedia Specialist',
    company: 'BIT Academy',
    period: '2025 — Present',
    description: 'Delivered branded content, editing, and technical support for creative learning initiatives.',
  },
  {
    role: 'Creative & Digital Lead',
    company: 'Various Brands',
    period: '2024 — Present',
    description: 'Supported business growth with branding, social content, and polished visual direction.',
  },
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

const partners = [
  { name: 'Dhool Digital', url: 'https://dhooldigital.com/', accent: 'from-sky-500 to-cyan-500', glow: 'shadow-sky-500/20' },
  { name: 'Dugsiiye', url: 'https://dugsiiye.com/', accent: 'from-amber-500 to-orange-500', glow: 'shadow-amber-500/20' },
  { name: 'Sobzy', url: 'https://www.sobzy.online/', accent: 'from-violet-500 to-fuchsia-500', glow: 'shadow-violet-500/20' },
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
    value: 'yacqub ali ahmed',
    href: 'https://www.behance.net/yacqubaliahmed',
    icon: FaBehance,
    tint: 'from-blue-500/15 to-indigo-500/10',
  },
  {
    label: 'Instagram',
    value: '@yacquub_ali',
    href: 'https://www.instagram.com/yacquub_ali',
    icon: FaInstagram,
    tint: 'from-pink-500/15 to-rose-500/10',
  },
];

const featuredWork = portfolioData;

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

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

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 transition-colors duration-300 dark:bg-[#05070b] dark:text-zinc-100">
     <header className="fixed inset-x-0 top-4 z-50 mx-auto max-w-5xl px-4">
  <nav className="flex items-center justify-between rounded-full border border-white/10 bg-[#0a0c10]/90 px-4 py-2.5 shadow-2xl backdrop-blur-xl">
    
    {/* Logo / Profile */}
    <Link href="#home" className="flex items-center gap-2 pl-2 text-sm font-semibold text-white">
      <img src="/ME.png" alt="Yacqub Ali" className="h-7 w-7 rounded-full object-cover" />
      <span>Yacqub Ali</span>
    </Link>

    {/* Nav Links */}
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

    {/* Right Actions */}
    <div className="flex items-center gap-2">
      {/* Theme Toggle Button */}
      <button
        type="button"
        onClick={toggleTheme}
        className="rounded-full p-2 text-zinc-400 transition hover:bg-white/5 hover:text-white"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      {/* Hire Me / CTA Button */}
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
  {/* Hero Section */}
  <section id="home" className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28 overflow-hidden">
    
    {/* Optional Dot Grid Background Pattern */}
    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-60" />

    <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-8 flex flex-col items-center"
      >
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-sm font-medium text-zinc-700 shadow-sm dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-300">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Available for freelance & collaboration
        </div>

        {/* Heading */}
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-6xl lg:text-7xl">
            I create calm, <span className="text-sky-600 dark:text-sky-400">modern visuals</span> that feel clear.
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Creative designer, multimedia specialist, and storyteller turning ideas into thoughtful design with a clean and human feel.
          </p>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            View portfolio
            <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-transparent px-6 py-3.5 text-sm font-medium text-zinc-700 transition hover:border-sky-500 hover:text-sky-600 dark:border-white/10 dark:text-zinc-200 dark:hover:border-sky-400"
          >
            Let&apos;s talk
          </a>
        </div>
      </motion.div>
    </div>
  </section>
</main>

      <main>
        <section id="home" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
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
                <img src="/Ya.png" alt="Yacqub Ali" className="h-[420px] w-full rounded-[1.4rem] object-cover object-top sm:h-[520px]" />
                <div className="mt-4 flex items-center justify-between rounded-[1.2rem] border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
                  <span>Available for freelance & collaboration</span>
                  <span className="font-medium text-sky-600 dark:text-sky-300">Worldwide</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="services" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
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
        </section>

       

        <section id="work" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
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

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {featuredWork.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="group overflow-hidden rounded-[1.6rem] border border-zinc-200 bg-white shadow-sm transition hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  {item.type === 'video' ? (
                    <video src={item.src} autoPlay loop muted playsInline className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                  ) : (
                    <img src={item.src} alt={item.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                  )}
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
        </section>

        <section id="journey" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-6xl rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-300">Experience</p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
                    A journey shaped by design, motion, and communication.
                  </h2>
                </div>

                <div className="space-y-4">
                  {experience.map((item, index) => (
                    <motion.div
                      key={item.role}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.35, delay: index * 0.05 }}
                      whileHover={{ y: -3, scale: 1.01 }}
                      className="rounded-[1.4rem] border border-zinc-200 bg-zinc-50 p-5 transition hover:shadow-md dark:border-white/10 dark:bg-white/5"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{item.role}</h3>
                        <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-300">
                          {item.period}
                        </span>
                      </div>
                      <p className="mt-2 text-sm font-medium text-sky-600 dark:text-sky-300">{item.company}</p>
                      <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-300">Academic background</p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
                    Learning shaped by curiosity and craft.
                  </h2>
                </div>

                <div className="space-y-4">
                  {education.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.35, delay: index * 0.05 }}
                        whileHover={{ y: -3, scale: 1.01 }}
                        className="rounded-[1.4rem] border border-zinc-200 bg-zinc-50 p-5 transition hover:shadow-md dark:border-white/10 dark:bg-white/5"
                      >
                        <div className="flex items-start gap-3">
                          <div className="rounded-2xl bg-sky-500/10 p-3 text-sky-600 dark:text-sky-300">
                            <Icon size={18} />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{item.title}</h3>
                            <p className="mt-1 text-sm font-medium text-sky-600 dark:text-sky-300">{item.institution}</p>
                            <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-400">{item.period}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-300">About</p>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
                Designing with clarity, not noise.
              </h2>
              <p className="text-base leading-8 text-zinc-600 dark:text-zinc-400">
                I am a creative professional with experience across brand design, UI, motion, and digital storytelling. I enjoy turning ideas into visuals that feel both polished and easy to understand.
              </p>
            </div>

            <div className="space-y-4">
              {highlights.map((item) => (
                <div key={item} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-700 transition hover:-translate-y-1 hover:shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-zinc-200 bg-zinc-950 p-8 text-white shadow-sm dark:border-white/10 dark:bg-zinc-900 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">Contact</p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Let&apos;s build something calm and memorable.</h2>
              <p className="max-w-xl text-base leading-8 text-zinc-400">
                If you want a refined brand presence, a thoughtful website, or strong visual content, I would love to hear from you.
              </p>

              <div className="grid gap-3 md:grid-cols-2">
                {contactCards.map((card, index) => {
                  const Icon = card.icon;
                  return (
                    <motion.a
                      key={card.label}
                      href={card.href}
                      target="_blank"
                      rel="noreferrer"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.35, delay: index * 0.05 }}
                      whileHover={{ y: -4, scale: 1.01 }}
                      className={`group rounded-[1.25rem] border border-white/10 bg-gradient-to-br ${card.tint} p-4 transition hover:border-sky-400/50`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="rounded-2xl bg-white/10 p-3 text-sky-300">
                          <Icon size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-zinc-300">{card.label}</p>
                          <p className="mt-1 text-sm text-white">{card.value}</p>
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-medium text-zinc-300">Quick intro</p>
              <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-400">
                <p>Available for select freelance projects, visual direction, and brand refreshes.</p>
                <p>Preferred response time: within 24 hours.</p>
              </div>
              <a href="mailto:yacquubcali2019@gmail.com" className="mt-6 inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 font-medium text-zinc-950 transition hover:bg-sky-400">
                Start a conversation
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
