'use client';
import Typewriter from 'typewriter-effect';
export default function Home() {
  return (
    <div className="min-h-screen animated-gradient text-white font-body select-none">
      <div className="blob blob1 -z-10"></div>
      <div className="blob blob2 -z-10"></div>
      <div className="blob blob3 -z-10"></div>
      
      <header className="fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-xl px-6 z-50">
        <nav className="glass-nav px-6 py-3 flex justify-center items-center rounded-2xl shadow-lg glass-border border border-white/10">
          <ul className="flex gap-6 font-heading text-base">
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

      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 z-10">
        <h2 className="text-8xl font-heading font-bold mb-4">
          Hi, I’m <span className="text-purple-400">Dzaki</span>.
        </h2>
        <p className="text-[37.5px] max-w-4xl leading-relaxed">Final-Year Student | Software Engineering @ SMKN 4 Bandung</p>
        <div className="text-[23.4px] font-mono">
        <Typewriter
        options={{
          strings: ['Aspiring Fullstack Developer.', 'I love music, and game the most.', 'I love making ROBLOX games too!', 'Always Learning 🚀'],
          autoStart: true,
          loop: true,
          delay: 60,
          }}
          />
        </div>
      </section>

      <section id="about" className="py-24 px-6 max-w-4xl mx-auto text-center space-y-8">
        <h3 className="text-[37.5px] font-heading font-bold mb-4">About <span className="text-purple-400">Me</span></h3>
        <p className="text-[23.4px] leading-relaxed text-gray-200">
          I am an
          <span className="animated-aspiring-gradient font-semibold"> aspiring</span>{" "}
          <span className="text-purple-400 font-semibold">fullstack developer</span>{" "}
          with a deep passion for{" "}
          <span className="text-pink-400 font-semibold">computer science</span>.  
          For me, programming is more than just writing code — it’s about understanding 
          technology at every level, from algorithms and data structures to creating 
          real-world applications.
        </p>

        <p className="text-[23.4px] leading-relaxed text-gray-300">
          I’m a self-taught developer from{" "}
          <span className="font-medium text-purple-300">Bandung, Indonesia</span>.  
          I enjoy solving problems and turning ideas into reality through code.  
          My focus is on building fast, accessible, and visually appealing apps that 
          bring value to users.
        </p>
      </section>


      <section id="projects" className="py-20 px-6 bg-white/5 rounded-2xl max-w-5xl mx-auto">
        <h3 className="text-[37.5px] font-heading text-center mb-10 font-bold">Projects</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {["Obama", "Have", "Dih"].map((title, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-white/10 shadow-lg hover:scale-105 transition"
            >
              <div className="h-40 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg mb-4"></div>
              <h4 className="text-[23.4px] font-bold mb-2">{title}</h4>
              <p className="text-[14.6px] opacity-80 leading-snug">
                Rapapaparaparapa
              </p>
            </div>
          ))}
        </div>
        <p className='text-center pt-1 text-[14.6px]'>All of my projects are unfinished bruh 😂</p>
      </section>

      <section id="skills" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h3 className="text-[37.5px] font-bold font-heading mb-10">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-base">
          {["Next.js", "React", "Php", "JavaScript", "Luau", "Git", "Figma"].map(
            (skill, i) => (
              <div
                key={i}
                className="p-4 rounded-lg bg-white/10 shadow-md hover:bg-white/20 transition text-[14.6px]"
              >
                {skill}
              </div>
            )
          )}
        </div>
      </section>

      <section id="contact" className="py-20 px-6 text-center max-w-3xl mx-auto">
        <h3 className="text-[37.5px] font-heading mb-6 font-bold">Contact Me</h3>
        <p className="text-[14.6px] mb-6 leading-relaxed">
          Interested in working together? Reach out via email or socials below.
        </p>
        <a
          href="mailto:dzakigunawan34@email.com"
          className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition shadow-lg text-base"
        >
          Send me an Email
        </a>

        <div className="flex justify-center gap-6 mt-8 text-base">
          <span className="[&>svg]:h-5 [&>svg]:w-5">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 640 512">
    <path
      d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
  </svg>
</span>
          <a href="https://github.com" className="hover:text-purple-400">GitHub</a>
          <a href="https://linkedin.com" className="hover:text-purple-400">LinkedIn</a>
          <a href="https://instagram.com" className="hover:text-purple-400">Instagram</a>
        </div>
      </section>

      <footer className="py-6 text-center opacity-60 text-sm">
        © {new Date().getFullYear()} Muhammad Dzaki Gunawan. All rights reserved.
      </footer>
    </div>
  );
}
