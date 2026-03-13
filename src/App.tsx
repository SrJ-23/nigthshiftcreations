/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Camera,
  Clapperboard,
  Monitor,
  ArrowRight,
  Quote,
  Mail,
  MapPin,
  Menu,
  X,
  MessageSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'INICIO', href: '#inicio' },
    { name: 'FILM & ART', href: '#servicios' },
    { name: 'GALLERÍA', href: '#portfolio' },
    { name: 'PROCESO', href: '#proceso' },
    { name: 'CONTACTO', href: '#contacto' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-dark/95 py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-serif tracking-widest uppercase">
          Nightshift<span className="text-accent italic font-normal">Creations</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-10 text-[10px] font-semibold tracking-[0.3em] uppercase">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="relative group py-2">
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-500 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-accent" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-dark border-t border-white/5 py-8 md:hidden"
          >
            <ul className="flex flex-col items-center space-y-6 text-[10px] font-semibold tracking-[0.3em] uppercase">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop"
          alt="Cinematic studio"
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/60 to-dark"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="block text-accent text-xs font-semibold tracking-[0.5em] uppercase mb-6"
        >
          Una Producción de Nightshift Creations
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl md:text-8xl font-serif mb-8"
        >
          Visiones <span className="italic text-accent">Cinematográficas</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-sm md:text-base text-gray-400 mb-12 max-w-xl mx-auto font-light leading-loose tracking-widest"
        >
          Transformamos marcas en historias visuales. Fotografía de autor y estrategias de marketing con alma artística.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <a href="#contacto" className="inline-block border border-accent/40 hover:border-accent text-accent px-12 py-5 text-xs font-bold uppercase tracking-[0.3em] transition-all duration-700 hover:bg-accent hover:text-dark">
            Empezar el Viaje
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-accent/50">
        <span className="text-[8px] uppercase tracking-[0.4em] [writing-mode:vertical-rl] mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-accent/20 relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full bg-accent origin-top"
          />
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section className="py-32 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-5/12 relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 border-l border-t border-accent/20"></div>
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop"
              alt="Artistic portrait"
              className="w-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-accent p-8 text-dark">
              <span className="block text-4xl font-serif font-bold">10+</span>
              <span className="text-[10px] uppercase tracking-widest font-bold">Años de Visión</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full lg:w-7/12"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-10 leading-tight italic text-accent">El Arte de la Perspectiva</h2>
            <p className="text-gray-400 font-light leading-loose text-lg mb-8">
              En el corazón de la penumbra digital, nace la claridad. No somos una agencia convencional; somos curadores de identidad. Fusionamos la estética del cine clásico con la potencia del código moderno.
            </p>
            <p className="text-gray-500 font-light leading-relaxed mb-10">
              Nuestra obsesión es la luz. Cómo cae sobre un producto, cómo ilumina una estrategia y cómo guía al usuario final a través de una experiencia inolvidable.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-10">
              <div>
                <span className="block text-white font-serif italic text-xl mb-2">Excelencia Visual</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">Fotografía de Autor</span>
              </div>
              <div>
                <span className="block text-white font-serif italic text-xl mb-2">Narrativa Digital</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">Marketing de Impacto</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Disciplines = () => {
  const disciplines = [
    {
      icon: <Camera className="w-12 h-12" />,
      title: "Fotografía de Autor",
      description: "Creación de piezas visuales que trascienden el tiempo. Editorial, producto y retrato con mirada cinematográfica."
    },
    {
      icon: <Clapperboard className="w-12 h-12" />,
      title: "Marketing Narrativo",
      description: "Estrategias basadas en storytelling. No vendemos productos, narramos soluciones que conectan emocionalmente."
    },
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "Galerías Digitales",
      description: "Desarrollo de ecosistemas web minimalistas y funcionales. Experiencias inmersivas optimizadas para conversión."
    }
  ];

  return (
    <section id="servicios" className="py-32 bg-mid relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-serif mb-6 uppercase tracking-tight">Nuestras <span className="text-accent italic">Disciplinas</span></h2>
            <p className="text-gray-500 tracking-widest text-xs uppercase">Especialistas en la creación de valor estético y comercial.</p>
          </div>
          <div className="hidden md:block h-[1px] flex-grow mx-12 bg-accent/20 mb-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {disciplines.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative bg-mid p-12 lg:p-16 transition-all duration-700 hover:bg-dark"
            >
              <div className="mb-12 text-accent opacity-50 group-hover:opacity-100 transition-opacity">
                {item.icon}
              </div>
              <h3 className="text-2xl font-serif mb-6 italic tracking-wide group-hover:text-accent transition-colors">{item.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed mb-10">{item.description}</p>
              <a href="#" className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent flex items-center group-hover:translate-x-2 transition-transform">
                Explorar Portafolio <ArrowRight className="ml-4 w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('Todo');
  const filters = ['Todo', 'Editorial', 'Comercial', 'Cine'];

  const images = [
    { src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop', title: 'The Obsidian Complex', category: 'Comercial', span: 'md:col-span-8' },
    { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop', title: 'Sombra & Alma', category: 'Editorial', span: 'md:col-span-4' },
    { src: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2070&auto=format&fit=crop', title: 'Pure Essence', category: 'Comercial', span: 'md:col-span-5' },
    { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1948&auto=format&fit=crop', title: 'Silent Frames', category: 'Cine', span: 'md:col-span-7' },
  ];

  const filteredImages = activeFilter === 'Todo' ? images : images.filter(img => img.category === activeFilter);

  return (
    <section id="portfolio" className="py-32 bg-dark">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl font-serif italic mb-8">Fragmentos de <span className="text-accent not-italic font-bold tracking-tighter">LUZ</span></h2>
          <div className="flex flex-wrap gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`transition-colors pb-1 border-b ${activeFilter === filter ? 'text-accent border-accent' : 'border-transparent hover:text-white'}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {filteredImages.map((img, index) => (
            <motion.div
              layout
              key={img.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`${img.span} group relative overflow-hidden aspect-video md:aspect-auto md:h-[400px]`}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-12">
                <span className="text-accent text-[10px] font-bold uppercase tracking-widest mb-2">{img.category}</span>
                <h4 className="text-3xl font-serif italic">{img.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Methodology = () => {
  const steps = [
    { num: '01', title: 'GÉNESIS', desc: 'Inmersión total en los valores y metas de tu marca.' },
    { num: '02', title: 'GUION', desc: 'Diseño de la estrategia visual y narrativa personalizada.' },
    { num: '03', title: 'RODAJE', desc: 'Producción técnica con los más altos estándares artísticos.' },
    { num: '04', title: 'ESTRENO', desc: 'Lanzamiento al mercado y análisis de impacto emocional.' },
  ];

  return (
    <section id="proceso" className="py-32 bg-mid text-white border-y border-white/5">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl font-serif mb-6 italic">Nuestra <span className="text-accent not-italic font-bold">METODOLOGÍA</span></h2>
          <p className="text-gray-500 text-sm tracking-widest uppercase">Un guion perfectamente ejecutado.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <span className="block text-accent text-5xl font-serif italic mb-6">{step.num}</span>
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-4">{step.title}</h4>
              <p className="text-gray-500 text-sm font-light leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Capturaron no solo la imagen de nuestro producto, sino el sentimiento que queríamos transmitir. Son verdaderos artistas de la luz.",
      author: "Carlos Ruiz",
      role: "TechBrands CEO",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
    },
    {
      quote: "El enfoque cinematográfico que aplicaron a nuestra web cambió por completo la percepción de nuestra marca de lujo.",
      author: "Elena Martínez",
      role: "LuxHome Director",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
    },
    {
      quote: "Expertos en el arte de vender sin gritar. Su marketing es elegante, inteligente y sobre todo, altamente efectivo.",
      author: "Javier Soto",
      role: "GastroArt Founder",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-32 bg-dark">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-16">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="text-accent mb-8"><Quote className="w-8 h-8 opacity-20" /></div>
              <p className="text-gray-400 font-serif italic text-lg leading-relaxed mb-10">"{t.quote}"</p>
              <div className="flex items-center">
                <img src={t.img} alt={t.author} className="w-10 h-10 rounded-full grayscale mr-4 object-cover" referrerPolicy="no-referrer" />
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-widest text-white">{t.author}</h5>
                  <span className="text-[10px] text-accent uppercase">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contacto" className="py-32 bg-mid">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl md:text-6xl font-serif italic mb-8 leading-tight">Escribe tu <br /><span className="text-accent not-italic font-bold">HISTORIA</span></h2>
              <p className="text-gray-500 font-light leading-loose mb-12">Estamos listos para el próximo desafío visual. Cuéntanos tu idea y juntos crearemos algo eterno.</p>
              <ul className="space-y-6 text-sm tracking-widest uppercase">
                <li className="flex items-center text-accent"><Mail className="w-4 h-4 mr-4" /> andrewjoa59@gmail.com</li>
                <li className="flex items-center text-gray-400"><MapPin className="w-4 h-4 mr-4" /> Lima · Studio Code</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="bg-dark/50 p-10"
            >
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Nombre completo"
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:border-accent focus:ring-0 transition-colors text-white placeholder-gray-600 outline-none"
                  />
                </div>
                <div className="relative group">
                  <input
                    type="email"
                    placeholder="Correo electrónico"
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:border-accent focus:ring-0 transition-colors text-white placeholder-gray-600 outline-none"
                  />
                </div>
                <div className="relative group">
                  <select className="w-full bg-transparent border-b border-white/10 py-4 focus:border-accent focus:ring-0 transition-colors text-gray-400 outline-none appearance-none">
                    <option className="bg-dark">Visión Fotográfica</option>
                    <option className="bg-dark">Campaña de Marketing</option>
                    <option className="bg-dark">Diseño Digital</option>
                    <option className="bg-dark">Proyecto Integral</option>
                  </select>
                </div>
                <div className="relative group">
                  <textarea
                    placeholder="Breve sinopsis del proyecto"
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:border-accent focus:ring-0 transition-colors text-white placeholder-gray-600 outline-none h-32 resize-none"
                  ></textarea>
                </div>
                <button className="w-full group relative overflow-hidden bg-accent text-dark font-bold py-5 uppercase tracking-[0.4em] text-[10px] transition-all duration-700">
                  <span className="relative z-10">Enviar Propuesta</span>
                  <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark text-gray-500 py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
          <div className="text-2xl font-serif tracking-widest uppercase text-white">
            Nightshift<span className="text-accent italic font-normal">Creations</span>
          </div>
          <div className="flex space-x-12 text-[10px] font-bold uppercase tracking-[0.3em]">
            <a href="#" className="hover:text-accent transition-colors">INSTAGRAM</a>
            <a href="#" className="hover:text-accent transition-colors">VIMEO</a>
            <a href="#" className="hover:text-accent transition-colors">BEHANCE</a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-gray-700 gap-4">
          <p>© 2024 Nightshift Creations. All images are part of a curated vision.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Art</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-dark selection:bg-accent selection:text-dark">
      <Navbar />
      <Hero />
      <About />
      <Disciplines />
      <Gallery />
      <Methodology />
      <Testimonials />
      <Contact />
      <Footer />

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/#"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-[100] group"
      >
        <div className="absolute inset-0 bg-accent rounded-full scale-0 group-hover:scale-110 transition-transform duration-500 opacity-20"></div>
        <div className="bg-dark border border-accent/30 text-accent p-5 rounded-full shadow-2xl relative transition-all duration-500 group-hover:bg-accent group-hover:text-dark">
          <MessageSquare size={24} />
        </div>
      </a>
    </div>
  );
}
