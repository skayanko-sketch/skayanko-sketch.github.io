import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  HardHat, 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  ArrowRight,
  ChevronDown,
  Mail,
  Phone,
  Award,
  ExternalLink
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-900 text-white">
        {/* Abstract Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.1),transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(37,99,235,0.1),transparent_50%)]" />
          {/* Engineering grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="container max-w-6xl mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="bg-primary/20 text-primary-foreground hover:bg-primary/30 border-primary/20 px-4 py-1.5 text-sm">
                Disponible pour opportunités
              </Badge>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              SOMA <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Kayanko</span>
            </motion.h1>
            
            <motion.h2 variants={fadeInUp} className="text-xl md:text-2xl text-slate-300 font-medium">
              Consultant Junior Capital Project | Ingénieur Génie Civil-BTP
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-lg text-slate-400 max-w-lg leading-relaxed">
              Pilotage de la performance, Immobilier durable et Stratégie de projets. 
              J'apporte une double compétence technique et managériale pour vos projets complexes.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Me contacter
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 rounded-full border-white/20 text-white hover:bg-white/10 bg-transparent backdrop-blur-sm"
                onClick={() => window.open('https://drive.google.com/file/d/15tKDOWyMl9o5DxE83AoE8weh471ydkZv/view?usp=drive_link', '_blank')}
              >
                Télécharger CV
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden md:block relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative elements behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-indigo-500/20 rounded-full blur-3xl" />
              
              {/* Geometric floating elements representing construction/structure */}
              <motion.div 
                animate={{ y: [0, -20, 0] }} 
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-6 bg-slate-900/90 backdrop-blur-md p-6 rounded-2xl border border-slate-700 shadow-xl z-20"
              >
                <Building2 className="w-8 h-8 text-blue-400 mb-2" />
                <div className="text-sm font-semibold text-white">Civil Engineer</div>
                <div className="text-xs text-slate-300">Génie Civil-BTP</div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 20, 0] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 left-0 bg-slate-900/90 backdrop-blur-md p-6 rounded-2xl border border-slate-700 shadow-xl z-20"
              >
                <HardHat className="w-8 h-8 text-indigo-400 mb-2" />
                <div className="text-sm font-semibold text-white">Project Manager Officer</div>
                <div className="text-xs text-slate-300">Manager de Portefeuille de Projets</div>
              </motion.div>

              {/* Main image placeholder - Using unsplash as placeholder for professional headshot */}
              {/* professional man in suit corporate portrait */}
              <img 
               // src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80" 
               src="/kayanko.jpg" 
               alt="SOMA Kayanko" 
                className="rounded-3xl object-cover w-full h-full shadow-2xl border-2 border-white/10 relative z-10"
              />
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <Section id="about" title="À propos de moi" subtitle="Un profil hybride technique et stratégique">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5 relative">
            {/* modern architecture building glass facade */}
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" 
              alt="Architecture moderne" 
              className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-[4/5]"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-lg hidden md:block max-w-xs">
              <p className="font-bold text-3xl mb-1">2+</p>
              <p className="text-sm opacity-90">Années d'expérience en promotion immobilière et pilotage de projets</p>
            </div>
          </div>
          <div className="md:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Ingénieur double diplômé avec une vision 360° du BTP
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ingénieur formé à l'INSA Lyon et 2iE, et titulaire d'un Mastère Spécialisé en Management de Portefeuille de Projets-Stratégie au CESI, j'ai acquis une solide expérience de 2 ans en promotion immobilière.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Proactif, rigoureux et habitué aux projets complexes, j'interviens sur des missions de maîtrise d'ouvrage, de pilotage de la performance et de reporting décisionnel. Mon objectif est d'allier performance économique et excellence technique pour livrer des projets durables et rentables.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                "Pilotage de la performance",
                "Maitrise d'Ouvrage (MOA)",
                "Immobilier Durable (RE2020)",
                "Reporting Décisionnel",
                "Gestion de Projets Complexes",
                "Stratégie & Analyse"
              ].map((skill, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg border border-border/50">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* EXPERIENCE SECTION */}
      <Section id="experience" title="Expérience Professionnelle" subtitle="Mon parcours dans le secteur du BTP et de l'immobilier" dark>
        <div className="relative border-l-2 border-primary/20 ml-4 md:ml-12 space-y-12 py-4">
          {[
            {
              company: "VINCI IMMOBILIER PROMOTION",
              role: "Responsable projet (Apprentissage)",
              date: "Oct 2024 – Oct 2025",
              location: "Annecy, France",
              desc: [
                "Réalisation de 7 chiffrages et études de faisabilité (50-100 logements, 8-20 M€ HT).",
                "Audit de conformité technique et environnementale.",
                "Coordination architectes/BET, conformité RE2020, NF Habitat.",
                "Analyse d'appels d'offres et pilotage TMA."
              ]
            },
            {
              company: "GROUPE GCC | EDELIS",
              role: "Responsable Technique",
              date: "Juil 2023 – Mai 2024",
              location: "Lyon, France",
              desc: [
                "Supervision projet Alma Petra (145 logements, 19.7 M€ HT).",
                "Optimisation de 10% du coût de construction.",
                "Coordination projet et certification NF Habitat."
              ]
            },
            {
              company: "LABORATOIRE NATIONAL DE BTP",
              role: "Ingénieur Travaux",
              date: "Mai 2022 – Oct 2022",
              location: "Ouagadougou, Burkina Faso",
              desc: [
                "Projet aéroport de DONSIN.",
                "Planification et coordination d'équipes (30 ouvriers).",
                "Contrôle qualité et suivi KPI."
              ]
            }
          ].map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-4 border-primary shadow-sm" />
              
              <div className="bg-card p-6 md:p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{job.company}</h3>
                    <p className="text-lg font-semibold">{job.role}</p>
                  </div>
                  <div className="text-right flex flex-col items-start md:items-end gap-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{job.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.desc.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <span className="mt-2 w-1.5 h-1.5 bg-primary/60 rounded-full flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* EDUCATION SECTION */}
      <Section id="education" title="Formation" subtitle="Un parcours académique d'excellence">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              school: "CESI LYON",
              year: "2024–2025",
              degree: "Mastère Spécialisé Manager de Portefeuille de Projets - Stratégie",
              image: "/cesi.jpeg"
            },
            {
              school: "INSA LYON",
              year: "2023–2024",
              degree: "Ingénieur Génie Civil et Urbanisme (Erasmus+)",
              image: "/insa.jpeg"
            },
            {
              school: "INSTITUT INTERNATIONAL 2iE",
              year: "2019–2024",
              degree: "Ingénieur Génie Civil BTP (Bourse d'Excellence)",
              image: "/2ie.jpeg"
            }
          ].map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 border-border/50">
                <CardHeader>
                  <div className="w-full h-20 bg-white rounded-xl flex items-center justify-center mb-4 p-4">
                    <img src={edu.image} alt={edu.school} className="max-w-full max-h-full object-contain" />
                  </div>
                  <CardTitle className="text-xl font-bold">{edu.school}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="mb-3">{edu.year}</Badge>
                  <p className="text-muted-foreground font-medium leading-snug">{edu.degree}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CERTIFICATIONS SECTION */}
      <Section id="certifications" title="Certifications" subtitle="Formation continue et développement professionnel" dark>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "McKinsey Forward Program",
              year: "2025",
              organization: "McKinsey & Company",
              description: "Développement de soft skills : adaptabilité, communication, relationnel client, problem-solving et travail en environnement digital.",
              link: "https://www.credly.com/badges/d766dbd4-3c9f-45e1-acf9-24c50d4edcfb/linked_in_profile"
            },
            {
              title: "PRINCE2® Foundation - Project Management",
              year: "2025",
              status: "En cours",
              organization: "AXELOS",
              description: "Méthodologie de gestion de projet, gouvernance, gestion des risques, pilotage par les livrables.",
              link: "https://lms.skills4all.com/mod/linkedincert/verify_certificate.php?code=bDtRZLa3Ae"
            }
          ].map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 border-border/50 bg-card flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="secondary">{cert.year}</Badge>
                      {cert.status && <Badge variant="outline" className="border-primary/50 text-primary">{cert.status}</Badge>}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold">{cert.title}</CardTitle>
                  <p className="text-sm text-muted-foreground font-medium">{cert.organization}</p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{cert.description}</p>
                  {cert.link && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full gap-2 mt-auto"
                      onClick={() => window.open(cert.link, '_blank')}
                    >
                      Voir le certificat
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* SKILLS SECTION */}
      <Section id="skills" title="Compétences" subtitle="Expertise technique et outils">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              category: "Management",
              skills: ["Gestion de projet", "Pilotage stratégique", "Lean management", "Reporting", "Planification"]
            },
            {
              category: "Technique",
              skills: ["Conception bâtiments", "Ouvrages d'art", "Droit construction", "Faisabilité", "Chiffrage"]
            },
            {
              category: "Outils",
              skills: ["MS Project", "Power BI", "AutoCAD", "Revit", "R", "Office 365"]
            },
            {
              category: "Langues",
              skills: ["Français (Maternel)", "Anglais (C1 - Professionnel)", "Communication technique"]
            }
          ].map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background rounded-2xl p-6 shadow-sm border border-border"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CONTACT SECTION */}
      <Section id="contact" title="Contact" subtitle="Discutons de votre prochain projet">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h3 className="text-3xl font-bold font-display leading-tight">
            Prêt à apporter de la valeur à votre entreprise ?
          </h3>
          <p className="text-lg text-muted-foreground">
            Je suis actuellement à la recherche de nouvelles opportunités en tant que Consultant ou Chef de Projet. N'hésitez pas à me contacter pour échanger sur vos besoins.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Email</p>
                <a href="mailto:skayanko@gmail.com" className="font-semibold text-lg hover:text-primary transition-colors">skayanko@gmail.com</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Téléphone</p>
                <a href="tel:+33745539236" className="font-semibold text-lg hover:text-primary transition-colors">+33 7 45 53 92 36</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Localisation</p>
                <p className="font-semibold text-lg">Île-de-France</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
