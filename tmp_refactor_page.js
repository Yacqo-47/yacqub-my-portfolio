const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'app', 'page.tsx');
let text = fs.readFileSync(filePath, 'utf8');

text = text.replace("import { motion, useMotionValue, useSpring, useInView } from 'framer-motion';\n", '');
text = text.replace(/function Counter\(\{ value \}: \{ value: number \}\) \{[\s\S]*?return <span ref=\{ref\} \/>;[\s\S]*?\}\n/, 'function Counter({ value }: { value: number }) {\n  return <span>{value}</span>;\n}\n');
text = text.replace(/\/\* ---------------------------[\s\S]*?const fadeUp = \{[\s\S]*?\};\n\n/, '');

text = text.replace(/<motion\.(div|img|button|h1|p|span|path|video)/g, '<$1');
text = text.replace(/<\/motion\.(div|h1|p|span|button|video)>/g, '</$1>');
text = text.replace(/\s*(initial|animate|exit|whileInView|whileHover|whileTap|variants|transition|viewport)=\{[^\}]*\}/g, '');
text = text.replace(/\s*(initial|animate|exit|whileInView|whileHover|whileTap|variants|transition|viewport)=\"[^\"]*\"/g, '');
text = text.replace(/,\s*show:\s*\{[^\}]*\}\s*\}/g, '');
text = text.replace(/\}\s*\}\s*\}/g, '');
text = text.replace(/\}\s*\}/g, '');
text = text.replace(/\}\s*/g, '');

text = text.replace(/<<+/g, '<');
text = text.replace(/divclassName=/g, '<div className=');
text = text.replace(/buttonclassName=/g, '<button className=');
text = text.replace(/spanclassName=/g, '<span className=');
text = text.replace(/imgsrc=/g, '<img src=');
text = text.replace(/svgclassName=/g, '<svg className=');
text = text.replace(/pathclassName=/g, '<path className=');

text = text.replace(/const \[selectedProject, setSelectedProject\] = useState<any \| null>\(null\);\n/, '');
text = text.replace(/onClick=\{\(\) => setSelectedProject\(item\)\}/g, '');
text = text.replace(/\/\*\*\* ============ PORTFOLIO MODAL ============ \*\*\//g, '');
text = text.replace(/\{selectedProject && \([\s\S]*?\)\}/g, '');

text = text.replace(/(const navLinks = \[[\s\S]*?\];\n\n)/, '$1  const featuredPortfolio = portfolioData.filter((item: any) => item.type === "image").slice(0, 8);\n\n');

const newPortfolio = `          <div className="overflow-x-auto pb-4 -mx-6 px-6" style={{ WebkitOverflowScrolling: 'touch' }}>
            <div className="flex gap-4 min-w-max snap-x snap-mandatory">
              {featuredPortfolio.map((item: any) => (
                <div
                  key={item.id}
                  className="snap-start min-w-[240px] sm:min-w-[280px] bg-[#0c0e12] border border-white/5 rounded-3xl overflow-hidden shadow-xl shadow-sky-500/5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-sky-500/15 cursor-grab active:cursor-grabbing"
                >
                  <img src={item.src} alt={item.title} className="w-full h-56 object-cover" />
                  <div className="p-4 bg-[#05060b]">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-sky-400 mb-2">{item.category}</p>
                    <h3 className="text-white text-lg font-bold leading-snug">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 text-center text-xs uppercase tracking-[0.35em] text-gray-500">Swipe left or right to explore featured work</div>`;
text = text.replace(/\s*<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">[\s\S]*?<div className="mt-14 flex justify-center">/, newPortfolio + '\n          <div className="mt-14 flex justify-center">');

text = text.replace(/\nimport\s*\{\s*\}\s*from\s*'framer-motion';\n/, '\n');
fs.writeFileSync(filePath, text, 'utf8');
console.log('Refactor applied');
