
import React from 'react';
import Layout from '@/components/Layout';
import { cn } from '@/lib/utils';

interface Skill {
  name: string;
  category: string;
}

const SKILLS: Skill[] = [
  { name: 'PHP', category: 'Backend' },
  { name: 'Laravel', category: 'Backend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'jQuery', category: 'Frontend' },
  { name: 'AJAX', category: 'Frontend' },
  { name: 'Angular', category: 'Frontend' },
  { name: 'HTML', category: 'Frontend' },
  { name: 'CSS', category: 'Frontend' },
  { name: 'Bootstrap', category: 'Frontend' },
  { name: 'MySQL', category: 'Database' },
  { name: 'GitHub', category: 'Tools' },
  { name: 'Logic Building', category: 'General' },
];

const EDUCATION = [
  {
    degree: 'Bachelor of Science in Software Engineering',
    institution: 'University of Management and Technology',
    location: 'Lahore, Pakistan',
    period: '11/10/2018 – 23/02/2022',
    website: 'umt.edu.pk'
  },
  {
    degree: 'Javascript Course',
    institution: 'Udemy',
    location: '',
    period: '',
    website: 'www.udemy.com'
  }
];

const About: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-radial from-white to-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg animate-fade-in">About Me</h1>
            <p className="mt-6 text-lg text-muted-foreground text-balance animate-fade-in" style={{ animationDelay: '0.2s' }}>
              A proficient web developer specializing in Laravel framework and core PHP with a passion for creating innovative web solutions.
            </p>
          </div>
        </div>
      </section>
      
      {/* About Me Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-md">Professional Summary</h2>
              <p className="mt-4 text-muted-foreground">
                I am a proficient web developer specializing in Laravel framework and core PHP, holding a Bachelor's degree in
                Software Engineering. With a focus on efficiency and collaboration, I excel in crafting innovative web solutions. Eager
                to contribute my skills and drive to your team's success.
              </p>
              <p className="mt-4 text-muted-foreground">
                My technical expertise spans both frontend and backend technologies, allowing me to create comprehensive web applications
                that deliver exceptional user experiences while maintaining robust performance.
              </p>
              <p className="mt-6 text-muted-foreground">
                <span className="font-medium">Languages:</span> Urdu (Native), English
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-glass">
                <img 
                  src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Professional developer at work"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-vibrant-blue/10 rounded-full backdrop-blur-md -z-10"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-vibrant-purple/10 rounded-full backdrop-blur-md -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="heading-md text-center mb-12">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {SKILLS.map((skill, index) => (
              <div 
                key={index} 
                className="glass-panel rounded-xl p-6 transition-all hover:translate-y-[-4px] flex flex-col items-center text-center"
              >
                <span className="text-lg font-bold">{skill.name}</span>
                <span className="text-sm text-muted-foreground mt-2">{skill.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="heading-md text-center mb-12">Education & Training</h2>
          <div className="max-w-3xl mx-auto">
            {EDUCATION.map((edu, index) => (
              <div 
                key={index} 
                className="glass-card rounded-xl overflow-hidden transition-all hover:shadow-glass mb-8"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <p className="text-vibrant-blue font-medium mt-1">{edu.institution}</p>
                  {edu.location && <p className="text-muted-foreground mt-1">{edu.location}</p>}
                  {edu.period && <p className="text-muted-foreground mt-1">{edu.period}</p>}
                  {edu.website && (
                    <a 
                      href={`https://${edu.website}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-vibrant-blue underline mt-2 inline-block hover:text-vibrant-purple"
                    >
                      {edu.website}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20 bg-gradient-radial from-white to-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md">Get In Touch</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Interested in working together? Let's discuss how my skills can contribute to your project's success.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="/contact"
                className="px-6 py-3 bg-black hover:bg-black/90 text-white rounded-full font-medium transition-colors shadow-soft"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
