import { useState, useEffect } from "react";
import {
  Github,
  Twitter,
  Gitlab,
  Instagram,
  Linkedin,
  Menu,
  Mail,
  Phone,
  MapPin,
  Download,
} from "lucide-react";
import profile from "./assets/profile.jpg";
import bg from "./assets/bg.png";

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

  const services = [
    {
      title: "Full-Stack Web Development",
      description:
        "Building scalable and high-performance web applications using modern JavaScript frameworks and Golang.",
    },
    {
      title: "Frontend Development",
      description:
        "Crafting responsive and visually appealing user interfaces with React, Next.js, and Tailwind CSS.",
    },
    {
      title: "Backend Development",
      description:
        "Developing robust APIs and backend services with Node.js, Express, and Golang for seamless data processing.",
    },
    {
      title: "Database Management",
      description:
        "Designing and optimizing databases using PostgreSQL, MongoDB, and Firebase for efficient data storage and retrieval.",
    },
    {
      title: "API Development & Integration",
      description:
        "Creating RESTful and GraphQL APIs and integrating third-party services for enhanced application functionality.",
    },
    {
      title: "DevOps & Deployment",
      description:
        "Deploying applications using Docker, Kubernetes, and CI/CD pipelines for smooth and scalable deployments.",
    },
  ];

  // Navigation Components
  const DesktopNav = () => (
    <div className="hidden lg:flex fixed left-0 top-0 h-screen w-72 bg-black bg-opacity-95 text-white flex-col">
      <div className="p-8 text-center">
        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
          <img
            src={profile}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-2xl font-bold mb-8">Rizal Maulana</h2>
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
        <Linkedin
          size={20}
          className="text-gray-400 hover:text-white cursor-pointer"
        />
        <Twitter
          size={20}
          className="text-gray-400 hover:text-white cursor-pointer"
        />
        <Instagram
          size={20}
          className="text-gray-400 hover:text-white cursor-pointer"
        />
        <Gitlab
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
            <Linkedin size={18} className="text-gray-400" />
            <Twitter size={18} className="text-gray-400" />
            <Instagram size={18} className="text-gray-400" />
            <Gitlab size={18} className="text-gray-400" />
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

      <div className="lg:ml-72 relative">
        <div className="absolute inset-0 z-0">
          <img
            src={bg}
            alt="Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>{" "}
        {/* Main content area */}
        {/* Home Section */}
        <section
          id="home"
          className={`min-h-screen relative flex items-center transition-opacity duration-1000 ${
            visibleSections.home ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative z-10 container mx-auto px-6 py-24">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-4">Welcome</h1>
              <h2 className="text-6xl font-bold mb-6">
                I'm a Fullstack Web Developer
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                based in Malang, Indonesia.
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
          className={`min-h-screen relative flex items-center transition-all duration-1000 ${
            visibleSections.about
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed text-justify">
                  I’m a passionate Full-Stack Developer with 3 years of
                  experience building scalable and efficient web applications.
                  My expertise lies in working with end-to-end JavaScript
                  frameworks, including React, Node.js, and Express, along with
                  backend development using Golang.
                </p>
                <p className="text-gray-300 leading-relaxed text-justify">
                  I enjoy architecting solutions that balance performance,
                  maintainability, and scalability. Whether it's designing
                  robust APIs, optimizing databases, or creating seamless
                  front-end experiences, I thrive on solving complex problems
                  with clean and efficient code.
                </p>
                <p className="text-gray-300 leading-relaxed text-justify">
                  Always eager to learn and stay updated with the latest
                  industry trends, I take pride in writing high-quality,
                  well-documented code that drives business success.
                </p>
                <p className="text-gray-300 leading-relaxed text-justify">
                  Let me know if you want to tweak anything! 🚀
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-bold mb-2">Name:</h3>
                    <p className="text-gray-300">Rizal Alif Maulana</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Email:</h3>
                    <p className="text-gray-300">rizalmaulana28498@gmail.com</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Age:</h3>
                    <p className="text-gray-300">27</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">From:</h3>
                    <p className="text-gray-300">Malang, Indonesia</p>
                  </div>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 bg-emerald-400 text-white rounded-full hover:bg-emerald-500 transition-colors">
                  <Download size={20} />
                  Download CV
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-gray-800 rounded-lg">
                  <h3 className="text-4xl font-bold mb-2">3+</h3>
                  <p className="text-gray-300">Years of Experience</p>
                </div>
                <div className="p-6 bg-gray-800 rounded-lg">
                  <h3 className="text-4xl font-bold mb-2">6+</h3>
                  <p className="text-gray-300">Web Tech Frameworks</p>
                </div>
                <div className="p-6 bg-gray-800 rounded-lg">
                  <h3 className="text-4xl font-bold mb-2">20+</h3>
                  <p className="text-gray-300">Projects Completed</p>
                </div>
                <div className="p-6 bg-gray-800 rounded-lg">
                  <h3 className="text-4xl font-bold mb-2">10+</h3>
                  <p className="text-gray-300">Clients Served</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* What I Do Section */}
        <section
          id="what-i-do"
          className={`min-h-screen relative flex items-center transition-all duration-1000 ${
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
          className={`min-h-screen relative flex items-center transition-all duration-1000 ${
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
                    <div className="flex justify-between">
                      <span className="text-emerald-400">
                        September 2018 - December 2022
                      </span>
                      <span>
                        <p className="text-gray-300 text-sm">GPA: 3.80</p>
                      </span>
                    </div>
                    <h4 className="text-xl font-bold mt-2">
                      Informatics Engineering
                    </h4>
                    <p className="text-gray-300">
                      University of Muhammadiyah Malang
                    </p>
                  </div>
                  {/* Add more education items */}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">Experience</h3>
                <div className="space-y-6">
                  <div className="p-6 bg-gray-800 rounded-lg">
                    <span className="text-emerald-400">July 202 - Present</span>
                    <h4 className="text-xl font-bold mt-2">
                      Web Developer (Fulltime)
                    </h4>
                    <p className="text-gray-300">
                      VENTURO | Professional Programmer, Malang, East Java
                    </p>
                  </div>
                  <div className="p-6 bg-gray-800 rounded-lg">
                    <span className="text-emerald-400">
                      February 2022 - August 2024
                    </span>
                    <h4 className="text-xl font-bold mt-2">
                      Frontend Web Developer (Freelance)
                    </h4>
                    <p className="text-gray-300">
                      Jawa Timur Park Group, Malang, East Java
                    </p>
                  </div>
                  <div className="p-6 bg-gray-800 rounded-lg">
                    <span className="text-emerald-400">
                      November 2022 - October 2023
                    </span>
                    <h4 className="text-xl font-bold mt-2">
                      Fullstack Engineer (Fulltime)
                    </h4>
                    <p className="text-gray-300">
                      CV. Interlink Network Indonesia, Malang, East Java
                    </p>
                  </div>
                  <div className="p-6 bg-gray-800 rounded-lg">
                    <span className="text-emerald-400">
                      June 2022 - May 2023
                    </span>
                    <h4 className="text-xl font-bold mt-2">
                      Frontend Web Developer (Freelance)
                    </h4>
                    <p className="text-gray-300">vOffice, Jakarta</p>
                  </div>
                  <div className="p-6 bg-gray-800 rounded-lg">
                    <span className="text-emerald-400">
                      August 2021 - January 2022
                    </span>
                    <h4 className="text-xl font-bold mt-2">
                      Fullstack Engineer (Internship)
                    </h4>
                    <p className="text-gray-300">
                      Alterra Academy, Malang, East Java
                    </p>
                  </div>
                  <div className="p-6 bg-gray-800 rounded-lg">
                    <span className="text-emerald-400">
                      July 2021 - September 2021
                    </span>
                    <h4 className="text-xl font-bold mt-2">
                      Fullstack Engineer (Internship)
                    </h4>
                    <p className="text-gray-300">
                      CV. SanggarCorp, Malang, East Java
                    </p>
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
          className={`min-h-screen relative flex items-center transition-all duration-1000 ${
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
        {/* Contact Section */}
        <section
          id="contact"
          className={`min-h-screen relative flex items-center transition-all duration-1000 ${
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
                  <p className="text-gray-300">
                    Let me know if you want to tweak anything! 🚀
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="text-emerald-400" size={24} />
                    <div>
                      <h4 className="font-bold">Phone / Whatsapp</h4>
                      <p className="text-gray-300">+62-838-5484-1590</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="text-emerald-400" size={24} />
                    <div>
                      <h4 className="font-bold">Email</h4>
                      <p className="text-gray-300">
                        rizalmaulana28498@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="text-emerald-400" size={24} />
                    <div>
                      <h4 className="font-bold">Location</h4>
                      <p className="text-gray-300">Malang, Indonesia</p>
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
