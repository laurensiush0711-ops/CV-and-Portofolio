
import React, { useState, useEffect } from 'react';
import { CV_DATA, SKILLS, EXPERIENCES, PROJECTS, EDUCATION } from './constants';
import { Project } from './types';
import CareerBot from './components/CareerBot';
import SkillsChart from './components/SkillsChart';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Helper to format phone for WhatsApp: removes all non-digit characters
  const waNumber = CV_DATA.phone.replace(/[^0-9]/g, '');

  // Manual scroll function for consistent behavior
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false); 
    
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        setActiveSection(id);
      }
    }, 250);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = (id: string) => `
    transition-colors duration-300 mono text-[13px] flex items-center gap-1 cursor-pointer
    ${activeSection === id ? 'text-[#64ffda]' : 'text-[#ccd6f6] hover:text-[#64ffda]'}
  `;

  const resumeUrl = "#"; 

  return (
    <div className={`relative min-h-screen ${isMenuOpen || selectedProject ? 'overflow-hidden' : ''}`}>
      {/* Sidebars (Desktop only) */}
      <div className="fixed bottom-0 left-10 w-10 hidden xl:flex flex-col items-center gap-6 z-50">
        <div className="flex flex-col gap-6 mb-4 text-[#a8b2d1]">
          <a href={`https://${CV_DATA.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#64ffda] hover:-translate-y-1 transition-all"><i className="fab fa-github text-xl"></i></a>
          <a href={`https://${CV_DATA.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#64ffda] hover:-translate-y-1 transition-all"><i className="fab fa-linkedin text-xl"></i></a>
          <a href={`https://wa.me/${waNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#64ffda] hover:-translate-y-1 transition-all"><i className="fab fa-whatsapp text-xl"></i></a>
        </div>
        <div className="sidebar-line"></div>
      </div>

      <div className="fixed bottom-0 right-10 w-10 hidden xl:flex flex-col items-center gap-6 z-50">
        <div className="flex flex-col items-center gap-8 mb-4">
          <a href={`mailto:${CV_DATA.email}`} className="mono text-xs tracking-widest text-[#a8b2d1] hover:text-[#64ffda] hover:-translate-y-2 transition-all [writing-mode:vertical-rl]">{CV_DATA.email}</a>
          <span className="mono text-xs text-[#a8b2d1] opacity-50 [writing-mode:vertical-rl]">{CV_DATA.discord}</span>
        </div>
        <div className="sidebar-line"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[60] px-6 md:px-10 h-20 flex items-center justify-between backdrop-blur-md bg-[#0a192f]/85">
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-[#64ffda] text-2xl font-bold mono group cursor-pointer z-[70]"
        >
          LH.
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <ul className="flex gap-8 items-center">
            <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')} className={navLinkClass('about')}><span className="text-[#64ffda] text-[11px]">01.</span> About</a></li>
            <li><a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className={navLinkClass('skills')}><span className="text-[#64ffda] text-[11px]">02.</span> Skills</a></li>
            <li><a href="#experience" onClick={(e) => scrollToSection(e, 'experience')} className={navLinkClass('experience')}><span className="text-[#64ffda] text-[11px]">03.</span> Experience</a></li>
            <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className={navLinkClass('projects')}><span className="text-[#64ffda] text-[11px]">04.</span> Projects</a></li>
            <li><a href="#education" onClick={(e) => scrollToSection(e, 'education')} className={navLinkClass('education')}><span className="text-[#64ffda] text-[11px]">05.</span> Education</a></li>
          </ul>
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border border-[#64ffda] text-[#64ffda] mono text-[13px] rounded hover:bg-[#64ffda]/10 transition-colors ml-4">Resume</a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden text-[#64ffda] p-2 relative z-[70] transition-transform duration-300 focus:outline-none"
        >
          <div className="flex flex-col gap-1.5 w-8 items-end">
            <span className={`block h-0.5 bg-[#64ffda] transition-all duration-300 ${isMenuOpen ? 'w-8 rotate-45 translate-y-2' : 'w-8'}`}></span>
            <span className={`block h-0.5 bg-[#64ffda] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-6'}`}></span>
            <span className={`block h-0.5 bg-[#64ffda] transition-all duration-300 ${isMenuOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-4'}`}></span>
          </div>
        </button>

        {/* Mobile Menu Side-Drawer */}
        <aside className={`fixed top-0 right-0 h-screen w-[min(75vw,350px)] bg-[#112240] shadow-2xl z-[65] flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <nav className="w-full">
            <ol className="flex flex-col items-center gap-8 w-full">
              {[
                {id: 'about', label: 'about'}, 
                {id: 'skills', label: 'skills'}, 
                {id: 'experience', label: 'experience'}, 
                {id: 'projects', label: 'projects'}, 
                {id: 'education', label: 'education'}, 
                {id: 'contact', label: 'contact'}
              ].map((item, idx) => (
                <li key={item.id} className="w-full text-center">
                  <a href={`#${item.id}`} onClick={(e) => scrollToSection(e, item.id)} className="flex flex-col items-center gap-1 group">
                    <span className="mono text-[#64ffda] text-sm">0{idx + 1}.</span>
                    <span className="text-[#ccd6f6] text-xl group-hover:text-[#64ffda] transition-colors capitalize">{item.label}</span>
                  </a>
                </li>
              ))}
            </ol>
            <div className="mt-12 flex justify-center">
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="px-12 py-4 border border-[#64ffda] text-[#64ffda] mono text-base rounded hover:bg-[#64ffda]/10 transition-colors">Resume</a>
            </div>
          </nav>
        </aside>

        {/* Overlay Blur Background for Side-Drawer */}
        <div 
          onClick={() => setIsMenuOpen(false)}
          className={`fixed inset-0 bg-[#020c1b]/80 backdrop-blur-sm z-[60] transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        />
      </nav>

      {/* Content Sections */}
      <main className="max-w-screen-xl mx-auto px-6 md:px-24">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center pt-20 gap-12">
          <div className="flex-1">
            <p className="mono text-[#64ffda] mb-5 tracking-wide reveal text-sm md:text-base">Hi, my name is</p>
            <h1 className="text-3xl md:text-6xl font-bold text-[#ccd6f6] mb-4 reveal [animation-delay:0.1s] leading-tight">
              {CV_DATA.name}.
            </h1>
            <h2 className="text-2xl md:text-5xl font-bold text-[#8892b0] mb-8 reveal [animation-delay:0.2s] leading-tight">
              Designing intelligence, crafting stories.
            </h2>
            <p className="text-[#8892b0] max-w-xl leading-relaxed text-base md:text-lg mb-12 reveal [animation-delay:0.3s]">
              I'm a <span className="text-[#64ffda]">Game Designer & QA Junior</span> currently transitioning into <span className="text-[#64ffda]">Data Analytics</span>. 
              Leveraging a foundation in systematic testing and logical modeling, I transform complex datasets into clear, actionable insights for high-quality product stability.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="px-8 py-4 border border-[#64ffda] text-[#64ffda] mono text-sm rounded hover:bg-[#64ffda]/10 transition-colors reveal [animation-delay:0.4s]">See My Projects</a>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="px-8 py-4 text-[#8892b0] mono text-sm rounded hover:text-[#64ffda] transition-colors reveal [animation-delay:0.45s]">Get In Touch</a>
            </div>
          </div>

          <div className="hidden lg:block flex-shrink-0 reveal [animation-delay:0.5s]">
            <div className="relative group w-[300px] h-[300px]">
              <div className="absolute top-4 left-4 w-full h-full border-2 border-[#64ffda] rounded group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
              <div className="relative w-full h-full bg-[#112240] rounded overflow-hidden shadow-2xl border border-[#233554] flex items-center justify-center group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute inset-0 bg-[#64ffda]/10 mix-blend-multiply transition-opacity group-hover:opacity-0"></div>
                <div className="flex flex-col items-center gap-4 text-[#64ffda]/40 text-center p-6">
                  <i className="fas fa-chart-pie text-8xl mb-4"></i>
                  <span className="mono text-xs uppercase tracking-widest">Data Analyst Aspirant</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 scroll-mt-20">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-[#ccd6f6] text-2xl md:text-3xl font-bold whitespace-nowrap"><span className="mono text-[#64ffda] text-lg md:text-xl mr-2">01.</span> About</h2>
            <div className="h-[1px] bg-[#233554] w-full max-w-[300px]" />
          </div>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1 space-y-4 text-[#8892b0] text-sm md:text-base leading-relaxed">
              <p>
                I am a detail-oriented <span className="text-[#64ffda]">Data Analyst</span> with a strong background in game design and quality assurance. I have diverse experience in the gaming industry, including roles as a full-time Game Designer at Wisgame for 1 year and a QA Tester at Forgefun for over a year, supporting multiple in-development and live projects.
              </p>
              <p>
                As a <span className="text-[#64ffda]">QA Tester</span>, I ensured product quality through systematic testing and structured reporting, identifying over 120 bugs and significantly enhancing game stability. My analytical skills facilitated informed decision-making by employing data-driven approaches to detect patterns in bugs and inconsistencies.
              </p>
              <p>
                I am currently enhancing my skills in <span className="text-[#64ffda]">data cleaning, exploratory analysis, and data visualization</span> to transition effectively into data analytics. I am eager to leverage my unique experiences to drive reliable and high-quality outcomes in data analytics.
              </p>
              <div className="pt-4">
                <p className="mono text-[#64ffda] text-xs uppercase mb-3">Interests & Expertise:</p>
                <ul className="grid grid-cols-2 gap-2 text-xs opacity-80">
                  <li className="flex items-center gap-2">▹ Data-Driven Storytelling</li>
                  <li className="flex items-center gap-2">▹ Pattern Recognition</li>
                  <li className="flex items-center gap-2">▹ Game Economy Balancing</li>
                  <li className="flex items-center gap-2">▹ AI Behavior Logic</li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/3">
              <SkillsChart />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 scroll-mt-20">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-[#ccd6f6] text-2xl md:text-3xl font-bold whitespace-nowrap"><span className="mono text-[#64ffda] text-lg md:text-xl mr-2">02.</span> Skills</h2>
            <div className="h-[1px] bg-[#233554] w-full max-w-[300px]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Data', 'QA', 'Tools'].map((cat) => (
              <div key={cat} className="bg-[#112240] p-6 rounded-lg border border-[#233554] hover:border-[#64ffda]/30 transition-colors">
                <h3 className="mono text-[#64ffda] text-sm mb-6 flex items-center gap-2">
                  <i className={`fas ${cat === 'Data' ? 'fa-brain' : cat === 'QA' ? 'fa-shield-virus' : 'fa-code-branch'}`}></i>
                  {cat === 'Data' ? 'AI & Design' : cat === 'QA' ? 'Quality Assurance' : 'Core Tools'}
                </h3>
                <ul className="space-y-4">
                  {SKILLS.filter(s => s.category === cat).map((skill, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="text-[#64ffda] text-xs shrink-0">▹</span>
                      <span className="text-[#ccd6f6] text-sm md:text-[15px]">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 scroll-mt-20 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-[#ccd6f6] text-2xl md:text-3xl font-bold whitespace-nowrap"><span className="mono text-[#64ffda] text-lg md:text-xl mr-2">03.</span> Experience</h2>
            <div className="h-[1px] bg-[#233554] w-full" />
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 min-h-[300px]">
            <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b-2 md:border-b-0 md:border-l-2 border-[#233554] scrollbar-hide shrink-0">
              {EXPERIENCES.map((exp, idx) => (
                <button key={idx} onClick={() => setActiveTab(idx)} className={`px-5 py-3 text-left mono text-[12px] md:text-[13px] whitespace-nowrap transition-all border-b-2 md:border-b-0 md:border-l-2 -mb-[2px] md:-mb-0 md:-ml-[2px] ${activeTab === idx ? 'border-[#64ffda] text-[#64ffda] bg-[#112240]' : 'border-transparent text-[#8892b0] hover:text-[#64ffda] hover:bg-[#112240]'}`}>{exp.company}</button>
              ))}
            </div>
            <div className="flex-1 mt-4 md:mt-0">
              {EXPERIENCES.length > 0 ? (
                <>
                  <h3 className="text-lg md:text-xl font-bold text-[#ccd6f6]">{EXPERIENCES[activeTab].role} <span className="text-[#64ffda] block sm:inline">@ {EXPERIENCES[activeTab].company}</span></h3>
                  <p className="mono text-[12px] text-[#8892b0] mt-1 mb-2">{EXPERIENCES[activeTab].period}</p>
                  <p className="text-xs text-[#495670] mb-6 italic">{EXPERIENCES[activeTab].location}</p>
                  <ul className="space-y-4">
                    {EXPERIENCES[activeTab].description.map((desc, i) => (
                      <li key={i} className="flex gap-3 text-[#8892b0] text-sm md:text-[15px]"><span className="text-[#64ffda] text-xs mt-1 shrink-0">▹</span>{desc}</li>
                    ))}
                  </ul>
                </>
              ) : (
                <p className="text-[#8892b0] italic">Experience details loading or unavailable.</p>
              )}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 scroll-mt-20">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-[#ccd6f6] text-2xl md:text-3xl font-bold whitespace-nowrap"><span className="mono text-[#64ffda] text-lg md:text-xl mr-2">04.</span> Projects</h2>
            <div className="h-[1px] bg-[#233554] w-full" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedProject(project)}
                className="group relative bg-[#112240] rounded-lg p-8 border border-[#233554] hover:border-[#64ffda]/50 hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col justify-between h-80"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="text-[#64ffda] text-4xl">
                    <i className="fas fa-terminal"></i>
                  </div>
                  <div className="flex gap-4 text-[#ccd6f6] text-xl">
                    <i className="fab fa-github hover:text-[#64ffda] transition-colors"></i>
                    {project.link && <i className="fas fa-external-link-alt hover:text-[#64ffda] transition-colors"></i>}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-[#ccd6f6] mb-3 group-hover:text-[#64ffda] transition-colors">{project.title}</h3>
                  <p className="text-[#8892b0] text-sm line-clamp-3 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-[#233554]/50">
                    <div className="flex flex-wrap gap-2">
                       {project.tags.slice(0, 2).map((t, i) => (
                         <span key={i} className="mono text-[10px] text-[#8892b0]">{t}</span>
                       ))}
                    </div>
                    <div className="text-[#64ffda] mono text-sm font-bold">
                      {project.metricValue}{project.metricLabel.includes('Score') || project.metricLabel.includes('Rating') || project.metricLabel.includes('Consistency') ? '%' : ''}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-24 scroll-mt-20 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-[#ccd6f6] text-2xl md:text-3xl font-bold whitespace-nowrap"><span className="mono text-[#64ffda] text-lg md:text-xl mr-2">05.</span> Education</h2>
            <div className="h-[1px] bg-[#233554] w-full" />
          </div>
          <div className="grid gap-8">
            {EDUCATION.length > 0 ? (
              EDUCATION.map((edu, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-[#233554] py-2 group hover:border-[#64ffda] transition-colors">
                  <div className="absolute left-[-9px] top-6 w-4 h-4 rounded-full bg-[#0a192f] border-2 border-[#233554] group-hover:border-[#64ffda] transition-colors"></div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#ccd6f6]">{edu.institution}</h3>
                      <p className="text-[#64ffda] mono text-sm mt-1">{edu.degree}</p>
                    </div>
                    <div className="md:text-right">
                      <p className="mono text-xs text-[#8892b0] uppercase tracking-widest">{edu.period}</p>
                      <p className="text-xs text-[#495670] mt-1">{edu.location}</p>
                    </div>
                  </div>
                  {edu.highlights && (
                     <ul className="flex flex-wrap gap-x-6 gap-y-2 mt-2">
                       {edu.highlights.map((h, i) => (
                         <li key={i} className="flex items-center gap-2 text-[#8892b0] text-sm">
                           <span className="text-[#64ffda] text-[10px]">▹</span>{h}
                         </li>
                       ))}
                     </ul>
                  )}
                </div>
              ))
            ) : (
              <p className="text-[#8892b0] italic">Education history details available upon request.</p>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 md:py-48 text-center max-w-2xl mx-auto scroll-mt-20">
          <p className="mono text-[#64ffda] mb-4 text-sm tracking-widest uppercase">06. Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-6">Let's Connect</h2>
          <p className="text-[#8892b0] mb-12 text-sm md:text-base leading-relaxed">
            Whether you're looking to build an AI-driven experience or need someone with a 
            meticulous eye for product quality, I'm always open to discussing new opportunities.
          </p>
          <div className="flex flex-col gap-8 items-center">
            <div className="flex flex-col md:flex-row gap-6 justify-center w-full">
              <a href={`mailto:${CV_DATA.email}`} className="px-12 py-5 border border-[#64ffda] text-[#64ffda] mono text-sm rounded hover:bg-[#64ffda]/10 transition-colors flex-1 text-center">
                <i className="far fa-envelope mr-2"></i> {CV_DATA.email}
              </a>
              <a href={`https://wa.me/${waNumber}`} target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-[#112240] border border-[#233554] text-[#ccd6f6] mono text-sm rounded hover:bg-[#64ffda]/10 hover:text-[#64ffda] hover:border-[#64ffda] transition-all flex items-center justify-center gap-3 flex-1">
                <i className="fab fa-whatsapp text-[#64ffda] text-xl"></i> WhatsApp Me
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <a href={`https://wa.me/${waNumber}`} target="_blank" rel="noopener noreferrer" className="mono text-[#ccd6f6] hover:text-[#64ffda] transition-colors flex items-center gap-2">
                <i className="fab fa-whatsapp text-lg"></i> {CV_DATA.phone}
              </a>
              <div className="text-[#8892b0] mono text-xs opacity-50">
                <i className="fab fa-discord mr-1"></i> {CV_DATA.discord}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12">
          {/* Modal Backdrop */}
          <div 
            onClick={() => setSelectedProject(null)}
            className="absolute inset-0 bg-[#020c1b]/90 backdrop-blur-md transition-opacity duration-300"
          />
          
          {/* Modal Content */}
          <div className="relative bg-[#112240] w-full max-w-2xl rounded-lg shadow-2xl border border-[#233554] overflow-hidden reveal">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-[#8892b0] hover:text-[#64ffda] transition-colors text-xl p-2 z-10"
            >
              <i className="fas fa-times"></i>
            </button>
            
            <div className="p-8 sm:p-12">
              <p className="mono text-[#64ffda] text-xs mb-2 tracking-widest uppercase">Project Case Study</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#ccd6f6] mb-6">{selectedProject.title}</h2>
              
              <div className="flex flex-col sm:flex-row gap-8 mb-8">
                <div className="flex-1 space-y-4">
                  <h4 className="text-[#ccd6f6] font-semibold text-lg border-b border-[#233554] pb-2">Overview</h4>
                  <p className="text-[#8892b0] text-[15px] leading-relaxed">
                    {selectedProject.description}
                  </p>
                  {selectedProject.note && (
                    <div className="mt-4 p-4 bg-[#0a192f] rounded border-l-4 border-[#64ffda] text-xs italic text-[#ccd6f6]">
                      <i className="fas fa-info-circle mr-2"></i> {selectedProject.note}
                    </div>
                  )}
                </div>
                
                <div className="sm:w-48 shrink-0">
                  <div className="bg-[#0a192f] rounded-lg p-6 border border-[#233554] text-center mb-6">
                    <div className="text-[#64ffda] text-3xl font-bold mono mb-1">
                      {selectedProject.metricValue}{selectedProject.metricLabel.includes('Score') || selectedProject.metricLabel.includes('Rating') || selectedProject.metricLabel.includes('Consistency') ? '%' : ''}
                    </div>
                    <div className="mono text-[10px] text-[#8892b0] uppercase tracking-wider">
                      {selectedProject.metricLabel}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-[#ccd6f6] font-semibold text-sm uppercase tracking-widest">Technologies</h4>
                    <ul className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((t, i) => (
                        <li key={i} className="px-2 py-1 bg-[#233554] rounded mono text-[11px] text-[#64ffda]">{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-6 border-t border-[#233554] pt-8">
                {selectedProject.link && (
                  <a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 px-6 py-3 bg-[#64ffda]/5 border border-[#64ffda] text-[#64ffda] mono text-xs rounded hover:bg-[#64ffda]/10 transition-colors"
                  >
                    <i className="fas fa-external-link-alt text-lg"></i>
                    View Detail
                  </a>
                )}
                <a 
                  href={`https://${CV_DATA.github}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 px-6 py-3 text-[#ccd6f6] hover:text-[#64ffda] transition-colors mono text-xs"
                >
                  <i className="fab fa-github text-lg"></i>
                  Portfolio Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="py-8 text-center px-6">
        <div className="flex justify-center gap-8 text-[#a8b2d1] xl:hidden">
          <a href={`https://${CV_DATA.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#64ffda] transition-all"><i className="fab fa-github text-2xl"></i></a>
          <a href={`https://${CV_DATA.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#64ffda] transition-all"><i className="fab fa-linkedin text-2xl"></i></a>
          <a href={`https://wa.me/${waNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#64ffda] transition-all"><i className="fab fa-whatsapp text-2xl"></i></a>
        </div>
      </footer>

      <CareerBot />
    </div>
  );
};

export default App;
