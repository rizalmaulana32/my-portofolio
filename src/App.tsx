import React, { useState, useEffect } from "react";
import {
  Github,
  Twitter,
  Dribbble,
  Facebook,
  Menu,
  Settings,
  Mail,
  Phone,
  MapPin,
  Download,
} from "lucide-react";

const Portfolio = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [visibleSections, setVisibleSections] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: "-20% 0px -20% 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Update visible sections
        setVisibleSections((prev) => ({
          ...prev,
          [entry.target.id]: entry.isIntersecting,
        }));

        // Update active section for navigation
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "what-i-do", label: "What I Do" },
    { id: "resume", label: "Resume" },
    { id: "portfolio", label: "Portfolio" },
    { id: "testimonial", label: "Testimonial" },
    { id: "contact", label: "Contact" },
  ];

  // Sample portfolio items
  const portfolioItems = [
    {
      title: "Web Design",
      image: "/api/placeholder/400/300",
      category: "Design",
    },
    {
      title: "Mobile App",
      image: "/api/placeholder/400/300",
      category: "Development",
    },
    {
      title: "Brand Identity",
      image: "/api/placeholder/400/300",
      category: "Branding",
    },
  ];

  // Sample testimonials
  const testimonials = [
    {
      text: "Outstanding work and communication throughout the project.",
      author: "John Doe",
      position: "CEO, Tech Corp",
    },
    {
      text: "Delivered beyond our expectations. Highly recommended!",
      author: "Jane Smith",
      position: "Marketing Director",
    },
  ];

  const services = [
    {
      title: "Web Development",
      description:
        "Creating responsive and dynamic websites using modern technologies.",
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive and beautiful user interfaces.",
    },
    {
      title: "Mobile Development",
      description: "Building cross-platform mobile applications.",
    },
  ];

  // Navigation Components
  const DesktopNav = () => (
    <div className="hidden lg:flex fixed left-0 top-0 h-screen w-64 bg-black bg-opacity-95 text-white flex-col">
      <div className="p-8 text-center">
        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
          <img
            src="/api/placeholder/128/128"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-2xl font-bold mb-8">Your Name</h2>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2 px-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block px-6 py-2 transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-emerald-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-8 flex justify-center space-x-4">
        <Facebook
          size={20}
          className="text-gray-400 hover:text-white cursor-pointer"
        />
        <Twitter
          size={20}
          className="text-gray-400 hover:text-white cursor-pointer"
        />
        <Dribbble
          size={20}
          className="text-gray-400 hover:text-white cursor-pointer"
        />
        <Github
          size={20}
          className="text-gray-400 hover:text-white cursor-pointer"
        />
      </div>
    </div>
  );

  const MobileNav = () => (
    <div className="lg:hidden fixed top-0 left-0 right-0 z-50">
      <div className="bg-black bg-opacity-95 text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Your Name</h1>
          <div className="flex items-center space-x-4">
            <Facebook size={18} className="text-gray-400" />
            <Twitter size={18} className="text-gray-400" />
            <Dribbble size={18} className="text-gray-400" />
            <Github size={18} className="text-gray-400" />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              <Menu size={24} className="text-white" />
            </button>
          </div>
        </div>

        <nav
          className={`${
            isMobileMenuOpen ? "max-h-96" : "max-h-0"
          } overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <ul className="py-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 ${
                    activeSection === item.id
                      ? "text-emerald-400"
                      : "text-gray-300"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <DesktopNav />
      <MobileNav />

      {/* Settings Button */}
      <button className="fixed top-4 right-4 z-50 p-2 bg-gray-800 rounded-full">
        <Settings size={20} className="text-gray-400" />
      </button>

      <div className="lg:ml-64 relative">
        {" "}
        {/* Main content area */}
        {/* Home Section */}
        <section
          id="home"
          className={`min-h-screen relative flex items-center transition-opacity duration-1000 ${
            visibleSections.home ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 z-0">
            <img
              src="/api/placeholder/1920/1080"
              alt="Background"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="relative z-10 container mx-auto px-6 py-24">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-4">Welcome</h1>
              <h2 className="text-6xl font-bold mb-6">I'm a Freelancer.</h2>
              <p className="text-xl text-gray-300 mb-8">
                based in Los Angeles, California.
              </p>
              <button className="px-8 py-3 bg-transparent border-2 border-emerald-400 text-emerald-400 rounded-full hover:bg-emerald-400 hover:text-white transition-colors duration-300">
                Hire Me
              </button>
            </div>
          </div>
        </section>
        {/* About Section */}
        <section
          id="about"
          className={`min-h-screen flex items-center py-24 transition-all duration-1000 ${
            visibleSections.about
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  I'm a passionate freelance designer and developer with over 5
                  years of experience. I specialize in creating beautiful,
                  functional, and user-friendly digital experiences.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-bold mb-2">Name:</h3>
                    <p className="text-gray-300">Your Name</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Email:</h3>
                    <p className="text-gray-300">your@email.com</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Age:</h3>
                    <p className="text-gray-300">28</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">From:</h3>
                    <p className="text-gray-300">Los Angeles, CA</p>
                  </div>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 bg-emerald-400 text-white rounded-full hover:bg-emerald-500 transition-colors">
                  <Download size={20} />
                  Download CV
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-gray-800 rounded-lg">
                  <h3 className="text-4xl font-bold mb-2">5+</h3>
                  <p className="text-gray-300">Years of Experience</p>
                </div>
                <div className="p-6 bg-gray-800 rounded-lg">
                  <h3 className="text-4xl font-bold mb-2">100+</h3>
                  <p className="text-gray-300">Projects Completed</p>
                </div>
                <div className="p-6 bg-gray-800 rounded-lg">
                  <h3 className="text-4xl font-bold mb-2">50+</h3>
                  <p className="text-gray-300">Happy Clients</p>
                </div>
                <div className="p-6 bg-gray-800 rounded-lg">
                  <h3 className="text-4xl font-bold mb-2">10+</h3>
                  <p className="text-gray-300">Awards Won</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* What I Do Section */}
        <section
          id="what-i-do"
          className={`min-h-screen py-24 transition-all duration-1000 ${
            visibleSections["what-i-do"]
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12">What I Do</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Resume Section */}
        <section
          id="resume"
          className={`min-h-screen py-24 transition-all duration-1000 ${
            visibleSections.resume
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12">Resume</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Education</h3>
                <div className="space-y-6">
                  <div className="p-6 bg-gray-800 rounded-lg">
                    <span className="text-emerald-400">2015 - 2019</span>
                    <h4 className="text-xl font-bold mt-2">
                      Computer Science Degree
                    </h4>
                    <p className="text-gray-300">University Name</p>
                  </div>
                  {/* Add more education items */}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">Experience</h3>
                <div className="space-y-6">
                  <div className="p-6 bg-gray-800 rounded-lg">
                    <span className="text-emerald-400">2019 - Present</span>
                    <h4 className="text-xl font-bold mt-2">Senior Developer</h4>
                    <p className="text-gray-300">Company Name</p>
                  </div>
                  {/* Add more experience items */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Portfolio Section */}
        <section
          id="portfolio"
          className={`min-h-screen py-24 transition-all duration-1000 ${
            visibleSections.portfolio
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12">Portfolio</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-emerald-400">{item.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Testimonial Section */}
        <section
          id="testimonial"
          className={`min-h-screen py-24 transition-all duration-1000 ${
            visibleSections.testimonial
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12">Testimonials</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="p-8 bg-gray-800 rounded-lg">
                  <p className="text-gray-300 mb-6">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-emerald-400">{testimonial.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section
          id="contact"
          className={`min-h-screen py-24 transition-all duration-1000 ${
            visibleSections.contact
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12">Contact</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                  <p className="text-gray-300">
                    Feel free to reach out for collaborations or just a friendly
                    hello!
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="text-emerald-400" size={24} />
                    <div>
                      <h4 className="font-bold">Phone</h4>
                      <p className="text-gray-300">+1 234 567 890</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="text-emerald-400" size={24} />
                    <div>
                      <h4 className="font-bold">Email</h4>
                      <p className="text-gray-300">your@email.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="text-emerald-400" size={24} />
                    <div>
                      <h4 className="font-bold">Location</h4>
                      <p className="text-gray-300">Los Angeles, California</p>
                    </div>
                  </div>
                </div>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows={6}
                    className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  ></textarea>
                </div>
                <button className="px-8 py-3 bg-emerald-400 text-white rounded-full hover:bg-emerald-500 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
