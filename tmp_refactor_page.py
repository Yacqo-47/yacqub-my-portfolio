from pathlib import Path
path = Path('app/page.tsx')
text = path.read_text(encoding='utf-8')
text = text.replace(
    "import React, { useState, useEffect, useRef } from 'react';\nimport Link from 'next/link';\nimport { motion, useMotionValue, useSpring, useInView } from 'framer-motion';\n",
    "import React, { useState, useEffect, useRef } from 'react';\nimport Link from 'next/link';\n"
)
old_counter = "function Counter({ value }: { value: number }) {\n  const ref = useRef<HTMLSpanElement | null>(null);\n  const isInView = useInView(ref, { once: false, amount: 0.5 });\n  const motionValue = useMotionValue(0);\n  const springValue = useSpring(motionValue, { damping: 60, stiffness: 45 });\n\n  useEffect(() => {\n    motionValue.set(isInView ? value : 0);\n  }, [isInView, value, motionValue]);\n\n  useEffect(() => {\n    return springValue.on('change', (latest) => {\n      if (ref.current) ref.current.textContent = Math.round(latest).toString();\n    });\n  }, [springValue]);\n\n  return <span ref={ref} />;\n}\n"
text = text.replace(old_counter, "function Counter({ value }: { value: number }) {\n  return <span>{value}</span>;\n}\n")
for old, new in [
    ('<motion.div', '<div'),
    ('</motion.div>', '</div>'),
    ('<motion.img', '<img'),
    ('<motion.button', '<button'),
    ('</motion.button>', '</button>'),
    ('<motion.path', '<path'),
    ('<motion.span', '<span'),
    ('</motion.span>', '</span>'),
    ('<motion.video', '<video'),
    ('</motion.video>', '</video>'),
    ('<motion.h1', '<h1'),
    ('</motion.h1>', '</h1>'),
    ('<motion.p', '<p'),
    ('</motion.p>', '</p>'),
]:
    text = text.replace(old, new)
text = text.replace("  const [selectedProject, setSelectedProject] = useState<any | null>(null);\n\n", "")
text = text.replace("onClick={() => setSelectedProject(item)}", "")
marker = "  const navLinks = [\n    { name: 'Home', href: '#home' },\n    { name: 'Services', href: '#services' },\n    { name: 'About', href: '#about' },\n    { name: 'Experience', href: '#experience' },\n    { name: 'Contact', href: '#contact' },\n  ];\n\n"
insert = marker + "  const featuredPortfolio = portfolioData.filter((item: any) => item.type === 'image').slice(0, 8);\n\n"
text = text.replace(marker, insert)
old_block = "          <div className=\"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3\">\n            {portfolioData.map((item: any, i: number) => (\n              <motion.div\n                key={item.id}\n                initial={{ opacity: 0, y: 16 }}\n                whileInView={{ opacity: 1, y: 0 }}\n                viewport={{ once: true }}\n                transition={{ duration: 0.5, delay: i * 0.03 }}\n                onClick={() => setSelectedProject(item)}\n                className={`relative group overflow-hidden rounded-xl bg-[#0c0e12] border border-white/5 cursor-pointer\n                  ${item.type === 'video' ? 'col-span-2 aspect-video' : 'col-span-1 aspect-square'}`}\n              >\n                {item.type === 'image' ? (\n                  <img src={item.src} alt={item.title} className=\"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105\" />\n                ) : (\n                  <video src={item.src} autoPlay loop muted playsInline className=\"w-full h-full object-cover\" />\n                )}\n                <div className=\"absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4\">\n                  <span className=\"text-sky-400 text-[8px] font-black uppercase tracking-wider\">{item.category}</span>\n                  <h3 className=\"text-white text-[11px] font-bold uppercase\">{item.title}</h3>\n                </div>\n              </motion.div>\n            ))}\n          </div>\n"
new_block = "          <div className=\"overflow-x-auto pb-4 -mx-6 px-6\" style={{ WebkitOverflowScrolling: 'touch' }}>\n            <div className=\"flex gap-4 min-w-max snap-x snap-mandatory\">\n              {featuredPortfolio.map((item: any) => (\n                <div\n                  key={item.id}\n                  className=\"snap-start min-w-[240px] sm:min-w-[280px] bg-[#0c0e12] border border-white/5 rounded-3xl overflow-hidden shadow-xl shadow-sky-500/5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-sky-500/15\n                    cursor-grab active:cursor-grabbing\"\n                >\n                  <img src={item.src} alt={item.title} className=\"w-full h-56 object-cover\" />\n                  <div className=\"p-4 bg-[#05060b]\">\n                    <p className=\"text-[10px] uppercase tracking-[0.3em] text-sky-400 mb-2\">{item.category}</p>\n                    <h3 className=\"text-white text-lg font-bold leading-snug\">{item.title}</h3>\n                  </div>\n                </div>\n              ))}\n            </div>\n          </div>\n          <div className=\"mt-8 text-center text-xs uppercase tracking-[0.35em] text-gray-500\">Swipe left or right to explore featured work</div>\n"
if old_block in text:
    text = text.replace(old_block, new_block)
else:
    raise SystemExit('Portfolio block not found for replacement')
start_modal = "      {/* ============ PORTFOLIO MODAL ============ */}\n      {selectedProject && (\n        <div className=\"fixed inset-0 z-[100] flex items-center justify-center p-4\">"
end_modal = "        </div>\n      )}\n    </div>\n  );\n}"
if start_modal in text:
    text = text.replace(text[text.index(start_modal):text.index(end_modal)+len(end_modal)], "    </div>\n  );\n}\n")
for token in [' initial={{ opacity: 0, y: 20 }}', ' whileInView={{ opacity: 1, y: 0 }}', ' viewport={{ once: true }}', ' variants={fadeUp}', ' transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}', ' initial={{ opacity: 0, y: 24 }}', ' initial={{ opacity: 0, scale: 0.92 }}', ' initial={{ opacity: 0, x: 30 }}', ' initial={{ opacity: 0, scale: 0.95 }}', ' animate={{ opacity: 1, scale: 1 }}', ' exit={{ opacity: 0, scale: 0.95 }}', ' transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}', ' transition={{ delay: 1, duration: 0.8 }}', ' transition={{ delay: 0.8, duration: 0.8 }}', ' transition={{ delay: 0.6 + i * 0.1 }}', ' transition={{ duration: 1, delay: 0.6 + i * 0.1 }}', ' transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}', ' transition={{ duration: 0.6, delay: i * 0.15 }}', ' transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}', ' transition={{ delay: i * 0.03 }}', ' transition={{ duration: 0.5, delay: i * 0.07 }}', ' transition={{ duration: 0.5, delay: i * 0.05 }}', ' transition={{ duration: 0.5, delay: i * 0.06 }}', ' transition={{ duration: 0.5, delay: i * 0.08 }}', ' transition={{ duration: 0.6, delay: i * 0.1 }}', ' transition={{ delay: i * 0.1, duration: 0.5 }}', ' transition={{ duration: 0.5, delay: i * 0.07 }}', ' transition={{ duration: 0.5 }}', ' transition={{ delay: i * 0.08, duration: 0.5 }}', ' transition={{ duration: 0.7 }}', ' transition={{ duration: 0.5, delay: i * 0.03 }}']:
    text = text.replace(token, '')
if 'const fadeUp' in text:
    idx = text.index('const fadeUp')
    end = text.index('};', idx) + 3
    text = text[:idx] + text[end:]
if '<motion' in text or 'motion.' in text:
    print('WARNING: leftover framer motion use')
path.write_text(text, encoding='utf-8')
print('Updated app/page.tsx')
