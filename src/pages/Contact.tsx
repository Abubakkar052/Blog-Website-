
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { cn } from '@/lib/utils';

const CONTACT_INFO = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Email',
    value: 'hello@vibrant3dblog.com'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Location',
    value: 'San Francisco, CA'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Office Hours',
    value: 'Mon-Fri: 9AM - 5PM PST'
  }
];

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formState.name || !formState.email || !formState.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please fill in all required fields.'
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please enter a valid email address.'
      });
      return;
    }
    
    // Simulating form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Your message has been sent successfully. We\'ll get back to you soon!'
      });
      
      // Reset form after successful submission
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }, 1000);
  };
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-radial from-white to-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg animate-fade-in">Contact Us</h1>
            <p className="mt-6 text-lg text-muted-foreground text-balance animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Have questions, feedback, or want to collaborate? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <h2 className="heading-md mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have a question or want to collaborate? Fill out the form and our team will get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                {CONTACT_INFO.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-vibrant-blue/10 flex items-center justify-center text-vibrant-blue mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <h3 className="font-medium mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-vibrant-blue/10 hover:text-vibrant-blue transition-colors"
                    aria-label="Twitter"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-vibrant-blue/10 hover:text-vibrant-blue transition-colors"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 6.5h11m-11 11h11M6.5 12h11" />
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-vibrant-blue/10 hover:text-vibrant-blue transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-vibrant-blue/10 hover:text-vibrant-blue transition-colors"
                    aria-label="GitHub"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="glass-panel rounded-xl p-8">
                <h2 className="heading-md mb-6">Send a Message</h2>
                
                {formStatus && (
                  <div className={cn(
                    "mb-6 p-4 rounded-md",
                    formStatus.success ? "bg-vibrant-green/10 text-vibrant-green" : "bg-vibrant-orange/10 text-vibrant-orange"
                  )}>
                    {formStatus.message}
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name <span className="text-vibrant-orange">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-vibrant-blue/20"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email <span className="text-vibrant-orange">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-vibrant-blue/20"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-vibrant-blue/20"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Write for Us">Write for Us</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message <span className="text-vibrant-orange">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-vibrant-blue/20"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="px-6 py-3 bg-vibrant-blue hover:bg-vibrant-blue/90 text-white rounded-md font-medium transition-colors shadow-soft"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="heading-md text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="glass-panel rounded-xl p-6">
                <h3 className="text-lg font-semibold">How can I contribute an article?</h3>
                <p className="mt-2 text-muted-foreground">
                  We welcome contributions from designers, developers, and creative professionals. Please fill out the contact form, selecting "Write for Us" as the subject, and we'll get back to you with our submission guidelines.
                </p>
              </div>
              
              <div className="glass-panel rounded-xl p-6">
                <h3 className="text-lg font-semibold">Do you offer sponsorship opportunities?</h3>
                <p className="mt-2 text-muted-foreground">
                  Yes, we offer various sponsorship and partnership opportunities for brands aligned with our values and audience. Contact us with "Partnership" as the subject to discuss potential collaborations.
                </p>
              </div>
              
              <div className="glass-panel rounded-xl p-6">
                <h3 className="text-lg font-semibold">How often do you publish new content?</h3>
                <p className="mt-2 text-muted-foreground">
                  We publish new articles 2-3 times per week. Subscribe to our newsletter to stay updated with our latest content and announcements.
                </p>
              </div>
              
              <div className="glass-panel rounded-xl p-6">
                <h3 className="text-lg font-semibold">Can I republish your articles on my website?</h3>
                <p className="mt-2 text-muted-foreground">
                  Our content is protected by copyright. However, we may grant permission for partial republication with proper attribution. Please contact us to discuss your specific request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
