import PersonalInfo from '@/components/PersonalInfo';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Contenedor principal con máximo ancho y centrado */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Información personal - la primera impresión */}
        <PersonalInfo />
        
        {/* Separador visual */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent my-16"></div>
        
        {/* Skills técnicos - muestra tus habilidades */}
        <Skills />
        
        <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent my-16"></div>
        
        {/* Proyectos - tu trabajo en acción */}
        <Projects />
        
        <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent my-16"></div>
        
        {/* Experiencia profesional */}
        <Experience />
      </div>
    </main>
  );
}

// ==========================================
// ARCHIVO 2: src/components/PersonalInfo.tsx
// ==========================================
'use client';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

export default function PersonalInfo() {
  return (
    <section className="text-center py-20">
      {/* Animación de entrada suave */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* PERSONALIZABLE: Cambia estos datos por los tuyos */}
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 mx-auto mb-8 flex items-center justify-center text-4xl font-bold">
          {/* Puedes cambiar estas iniciales o añadir una foto real */}
          TU
        </div>
        
        {/* PERSONALIZABLE: Tu nombre y título */}
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Tu Nombre Aquí
        </h1>
        
        {/* PERSONALIZABLE: Tu especialidad o rol */}
        <h2 className="text-2xl text-slate-300 mb-6">
          Desarrollador Full Stack | Especialista en Linux
        </h2>
        
        {/* PERSONALIZABLE: Descripción personal */}
        <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8 leading-relaxed">
          Apasionado por la tecnología y el desarrollo de software. Especializado en crear 
          soluciones elegantes usando tecnologías modernas. Siempre aprendiendo y explorando 
          nuevas herramientas y metodologías.
        </p>
        
        {/* Enlaces de contacto */}
        <div className="flex justify-center space-x-6">
          {/* PERSONALIZABLE: Cambia estos enlaces por los tuyos */}
          <ContactLink 
            href="mailto:tu-email@ejemplo.com" 
            icon={<Mail size={24} />}
            label="Email"
          />
          <ContactLink 
            href="https://github.com/tu-usuario" 
            icon={<Github size={24} />}
            label="GitHub"
          />
          <ContactLink 
            href="https://linkedin.com/in/tu-perfil" 
            icon={<Linkedin size={24} />}
            label="LinkedIn"
          />
          <ContactLink 
            href="#" 
            icon={<MapPin size={24} />}
            label="Tu Ciudad, País"
          />
        </div>
      </motion.div>
    </section>
  );
}

// Componente auxiliar para los enlaces de contacto
function ContactLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href}
      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors duration-200"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}

// ==========================================
// ARCHIVO 3: src/components/Skills.tsx
// ==========================================
'use client';
import { motion } from 'framer-motion';

export default function Skills() {
  // PERSONALIZABLE: Añade tus propios skills aquí
  const skillCategories = [
    {
      title: "Lenguajes de Programación",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Java", level: 75 },
        { name: "C++", level: 70 }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Vue.js", level: 70 }
      ]
    },
    {
      title: "Backend & Sistemas",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Linux/Ubuntu", level: 90 },
        { name: "Git", level: 85 },
        { name: "Docker", level: 75 },
        { name: "PostgreSQL", level: 80 }
      ]
    }
  ];

  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-16">
          Habilidades Técnicas
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-slate-800 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-blue-400">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300">{skill.name}</span>
                      <span className="text-slate-400">{skill.level}%</span>
                    </div>
                    
                    {/* Barra de progreso animada */}
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

// ==========================================
// ARCHIVO 4: src/components/Projects.tsx
// ==========================================
'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  // PERSONALIZABLE: Añade tus propios proyectos aquí
  const projects = [
    {
      title: "E-commerce con Next.js",
      description: "Tienda online completa con carrito de compras, pagos integrados y panel de administración. Desarrollada con Next.js, Stripe y base de datos PostgreSQL.",
      technologies: ["Next.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      githubUrl: "https://github.com/tu-usuario/ecommerce-nextjs",
      liveUrl: "https://tu-ecommerce.vercel.app",
      image: "/placeholder-project1.jpg" // Añade tus capturas de pantalla
    },
    {
      title: "Sistema de Gestión de Tareas",
      description: "Aplicación web para gestionar proyectos con tableros Kanban, asignación de tareas y reportes de productividad. Incluye autenticación y roles de usuario.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubUrl: "https://github.com/tu-usuario/task-manager",
      liveUrl: "https://task-manager-demo.herokuapp.com",
      image: "/placeholder-project2.jpg"
    },
    {
      title: "Bot de Automatización Linux",
      description: "Script en Python que automatiza tareas del sistema, monitorea recursos y envía reportes. Implementado con cron jobs y notificaciones por email.",
      technologies: ["Python", "Linux", "Bash", "Cron"],
      githubUrl: "https://github.com/tu-usuario/linux-automation-bot",
      liveUrl: null, // Proyectos sin demo web
      image: "/placeholder-project3.jpg"
    }
  ];

  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-16">
          Proyectos Destacados
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-slate-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Imagen del proyecto */}
              <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">
                  {project.title}
                </span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">
                  {project.title}
                </h3>
                
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tecnologías usadas */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Enlaces del proyecto */}
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors duration-200"
                  >
                    <Github size={18} />
                    <span>Código</span>
                  </a>
                  
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors duration-200"
                    >
                      <ExternalLink size={18} />
                      <span>Ver Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

// ==========================================
// ARCHIVO 5: src/components/Experience.tsx
// ==========================================
'use client';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  // PERSONALIZABLE: Añade tu experiencia profesional aquí
  const experiences = [
    {
      title: "Desarrollador Full Stack Senior",
      company: "Tech Solutions Inc.",
      location: "Tu Ciudad, País",
      period: "2022 - Presente",
      description: "Liderazgo técnico en el desarrollo de aplicaciones web modernas. Implementación de arquitecturas escalables y mentoreo de desarrolladores junior.",
      achievements: [
        "Reduje el tiempo de carga de la aplicación principal en un 40%",
        "Implementé sistema de CI/CD que redujo deployments de 2 horas a 15 minutos",
        "Lideré equipo de 4 desarrolladores en proyecto crítico para la empresa"
      ]
    },
    {
      title: "Desarrollador Frontend",
      company: "StartupXYZ",
      location: "Tu Ciudad, País", 
      period: "2020 - 2022",
      description: "Desarrollo de interfaces de usuario modernas y responsivas para plataforma SaaS. Colaboración estrecha con equipos de diseño y backend.",
      achievements: [
        "Desarrollé componente library reutilizado en 5+ productos de la empresa",
        "Mejoré métricas de UX: bounce rate bajó 25%, time on page subió 60%",
        "Implementé testing automatizado que redujo bugs en producción 80%"
      ]
    },
    {
      title: "Desarrollador Junior",
      company: "Web Agency Pro",
      location: "Tu Ciudad, País",
      period: "2019 - 2020", 
      description: "Desarrollo de sitios web corporativos y tiendas online para clientes diversos. Aprendizaje acelerado en tecnologías modernas de desarrollo web.",
      achievements: [
        "Completé 20+ proyectos web con 100% satisfacción del cliente",
        "Implementé sistema de optimización SEO que mejoró rankings 300%",
        "Automaticé proceso de deployment reduciendo tiempo manual en 90%"
      ]
    }
  ];

  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-16">
          Experiencia Profesional
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Línea temporal */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-32 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              )}
              
              {/* Punto en la línea temporal */}
              <div className="absolute left-4 top-8 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900"></div>
              
              {/* Contenido de la experiencia */}
              <div className="ml-16 bg-slate-800 rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400 mb-1">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg font-medium text-slate-300 mb-2">
                      {exp.company}
                    </h4>
                  </div>
                  
                  <div className="flex flex-col md:text-right text-slate-400 text-sm">
                    <div className="flex items-center mb-1">
                      <Calendar size={16} className="mr-2 md:order-2 md:mr-0 md:ml-2" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2 md:order-2 md:mr-0 md:ml-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                {/* Logros principales */}
                <div className="space-y-2">
                  <h5 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    Logros Principales
                  </h5>
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
