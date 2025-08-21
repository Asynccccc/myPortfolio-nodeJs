export default function Home() {
  return (
    <div className="min-h-screen animated-gradient text-white font-body select-none">
      <header className="fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-xl px-6 z-50">
        <nav className="glass-nav px-6 py-3 flex justify-center items-center rounded-2xl shadow-lg glass-border border border-white/10">
          <ul className="flex gap-6 font-heading">
            {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
              <li
                key={item}
                className="relative cursor-pointer px-4 py-2 overflow-hidden rounded-md
                before:content-[''] before:absolute before:inset-0 before:rounded-md
                before:scale-0 before:opacity-0 before:origin-center
                before:bg-gradient-to-r before:from-purple-600 before:to-pink-500
                before:bg-[length:200%_200%] before:animate-[gradientMove_3s_linear_infinite]
                before:transition-all before:duration-250
                hover:before:scale-110 hover:before:opacity-100"
              >
                <span className="relative z-10">{item}</span>
              </li>
            ))}
          </ul>
      </nav>
    </header>

      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
          Hi, I’m <span className="text-purple-400">Muhammad Dzaki Gunawan</span>
        </h2>
        <p className="text-lg md:text-xl max-w-4xl">
          I am an <span className="animated-aspiring-gradient font-semibold">aspiring</span> <span className="text-purple-400 font-semibold">fullstack developer </span> 
          with a deep passion for <span className="text-pink-400 font-semibold">computer science</span>.  
          For me, programming is more than just writing code it’s about understanding 
          how technology works at every level, from algorithms and data structures to 
          building real-world applications.
        </p>
      </section>

      <section id="about" className="py-20 px-6 text-center max-w-3xl mx-auto">
        <h3 className="text-3xl font-heading mb-6">About Me</h3>
        <p>
          I’m a self-taught developer from Bandung, Indonesia. I enjoy solving 
          problems and turning ideas into reality through code. My main focus 
          is building fast, accessible, and visually appealing web apps.
        </p>
      </section>

      <section id="projects" className="py-20 px-6 bg-white/5 rounded-2xl max-w-5xl mx-auto">
        <h3 className="text-3xl font-heading text-center mb-10">Projects</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {["Portfolio Website", "Todo App", "E-commerce Demo"].map((title, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-white/10 shadow-lg hover:scale-105 transition"
            >
              <div className="h-40 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg mb-4"></div>
              <h4 className="text-xl font-bold mb-2">{title}</h4>
              <p className="text-sm opacity-80">
                Short description of the project. Explain what tech stack you used.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-heading mb-10">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Next.js", "React", "TailwindCSS", "JavaScript", "Node.js", "Git", "Figma"].map(
            (skill, i) => (
              <div
                key={i}
                className="p-4 rounded-lg bg-white/10 shadow-md hover:bg-white/20 transition"
              >
                {skill}
              </div>
            )
          )}
        </div>
      </section>

      <section id="contact" className="py-20 px-6 text-center max-w-3xl mx-auto">
        <h3 className="text-3xl font-heading mb-6">Contact Me</h3>
        <p className="mb-6">
          Interested in working together? Reach out via email or socials below.
        </p>
        <a
          href="mailto:your@email.com"
          className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition shadow-lg"
        >
          Send me an Email
        </a>
        <div className="flex justify-center gap-6 mt-8">
          <a href="https://github.com" className="hover:text-purple-400">GitHub</a>
          <a href="https://linkedin.com" className="hover:text-purple-400">LinkedIn</a>
          <a href="https://instagram.com" className="hover:text-purple-400">Instagram</a>
        </div>
      </section>

      <footer className="py-6 text-center opacity-60">
        © {new Date().getFullYear()} Muhammad Dzaki Gunawan. All rights reserved.
      </footer>
    </div>
  );
}
