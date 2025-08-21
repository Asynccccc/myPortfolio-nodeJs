'use client';
import { useState } from "react";
import Typewriter from 'typewriter-effect';
export default function Home() {
  const skills = [
  { name: "Next.js", rating: 55, description: "This is my first time actually using Next.js in a project. I kind of understand the basics of rendering methods ike SSR being server requests, SSG being pre-rendered at build time, and CSR… well, I still don’t fully get that one yet. Right now, I’m just applying what I learn from tutorials and documentation, so I’d say I’m still a beginner here.",
    next: "My next step is to build a project that mixes SSR and SSG, start learning how to fetch data the proper way with API routes, and eventually dive into middleware, authentication, and the newer App Router features." },
  { name: "Php", rating: 80, description: "I feel pretty confident with PHP. I’ve worked with variables, arrays, loops, and conditionals, and I even touched OOP a few times for assignments. I know how GET and POST requests work, and I’ve practiced RESTful APIs with Postman. I’ve also built projects with Laravel, including a CRUD app that used tables for teachers and students. Honestly, PHP was my main playground before I shifted more into JavaScript. I’d say I was a real PHP glazer back then.",
    next: "Next, I should go deeper into advanced Laravel concepts such as authentication, middleware, and API development, while also improving my database optimization skills with MySQL and exploring deployment strategies for real-world PHP applications." },
  { name: "JavaScript", rating: 40, description: "I know the basics like using var, let, and const, and I’ve done simple DOM manipulation before, like making a wardrobe feature for an assignment. I can debug with console logs and DevTools, but I haven’t really touched async/await, APIs, or advanced concepts yet. Honestly, I still think more in PHP terms when I code, so I’d say I’m still at a beginner level in JavaScript.",
    next: "My next step is to properly learn ES6+ features, practice fetching data with APIs, and get comfortable with promises and async/await. Once I get the fundamentals solid, I want to dive into OOP in JavaScript and explore closures and the event loop so I can think more natively in JS." },
  { name: "Luau", rating: 84, description: "I’ve built multiple systems in Roblox using Luau — from combat mechanics and shops to datastores for saving stats, currencies, and fighting styles. I regularly use RemoteEvents, RemoteFunctions, and ModuleScripts to keep my projects efficient and reusable, and I’ve even experimented with metatables. I’d say I’m very confident scripting in Roblox, though I still need to push into optimization and advanced CFrame/Vector3 math to reach the next level.",
    next: "My next step is to learn performance optimization with RunService, master OOP patterns using metatables, and improve my use of CFrame and Vector3 for advanced mechanics. I also want to strengthen security in client-server communication and build scalable multiplayer systems for larger games." },
  { name: "Git", rating: 65, description: "I’ve used Git a lot already — initializing repositories, cloning projects, and working with commits feel natural to me now. I’ve also created branches in team projects, though I still think of them more like backups than proper workflows. Collaborating with friends through GitHub (pushing, pulling, and merging) has given me hands-on experience, but I haven’t really dealt with merge conflicts or undo commands yet. I’d say I’m sitting at a beginner-intermediate level.",
    next: "My next step is to properly understand branching strategies and learn how to resolve merge conflicts. I also want to explore advanced workflows like rebasing, stashing, and squashing commits, as well as using Git in CI/CD pipelines to improve team collaboration." },
  { name: "MySQL", rating: 72, description: "I’ve built plenty of databases and tables, and I’m very comfortable with CRUD queries like SELECT, INSERT, UPDATE, and DELETE. I understand relationships with primary and foreign keys, and I’ve learned normalization from 1NF to 3NF to avoid redundancy. I’ve also experimented with stored procedures and functions, and I’ve connected MySQL with Laravel/PHP for CRUD apps. While I have strong fundamentals, I haven’t really explored indexes, optimization, or handling large datasets yet.",
    next: "My next step is to dive into optimization: using indexes effectively, analyzing queries with EXPLAIN, and working with larger datasets. I also want to deepen my understanding of transactions, isolation levels, and backups so I can move from database design into real-world scaling and performance tuning." },
  { name: "TailwindCSS", rating: 75, description: "I know how to use Tailwind for layouts, spacing, typography, and responsive design. I can style most UI elements, but I’m still missing some mastery with transitions, pseudo-states, arbitrary values, dark mode, and deeper Tailwind config customization.",
    next: "I’ll practice building real-world components like cards, dashboards, navbars, and hero sections. I’ll also work on responsive + interactive states (hover, focus, active) and start experimenting with dark mode and config customization to push myself toward advanced level." }
];


  type Skill = {
  name: string;
  rating: number;
  description: string;
  next: string;
};

const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);


  const overall = Math.round(skills.reduce((sum, s) => sum + s.rating, 0) / skills.length);

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

      <section id="skills" className="py-20 px-6 max-w-4xl mx-auto text-center relative">
  <h3 className="text-[37.5px] font-bold font-heading mb-10">Skills</h3>

  <div className="max-w-md mx-auto text-left space-y-2">
    {skills.map((skill, i) => (
      <button
        key={i}
        onClick={() => setSelectedSkill(skill)}
        className="w-full flex justify-between items-center px-4 py-2 
                   rounded-md bg-black/40 hover:bg-white/10 transition cursor-pointer"
      >
        <span className="text-yellow-300 text-[16px]">{skill.name}</span>
        <span className="bg-yellow-400 text-black font-bold px-3 py-1 rounded-md">
          {skill.rating}
        </span>
      </button>
    ))}
  </div>

  {/* Overall at the bottom */}
  <div className="mt-6 flex justify-between items-center px-4 py-2 
                  bg-purple-600 rounded-md shadow-lg">
    <span className="font-bold text-lg">Overall</span>
    <span className="bg-white text-black font-bold px-3 py-1 rounded-md">{overall}</span>
  </div>

  {/* Floating stat card */}
  {selectedSkill && (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50">
      <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl relative w-[360px]">
        {/* Close button */}
        <button
          onClick={() => setSelectedSkill(null)}
          className="absolute top-2 right-2 px-2 py-1 rounded bg-purple-600 hover:bg-purple-700 text-sm"
        >
          X
        </button>

        <h4 className="text-[23.4px] font-bold mb-4">
          {selectedSkill.name}
        </h4>

        <p className="text-[14.6px] opacity-80 mb-3">
          <span className="font-semibold text-purple-300">Mastered:</span> {selectedSkill.description}
        </p>
        <p className="text-[14.6px] opacity-80">
          <span className="font-semibold text-pink-300">Currently Learning:</span> {selectedSkill.next}
        </p>

        <hr className="my-4 border-white/20" />
        <p className="text-[20px] font-bold">Rating: {selectedSkill.rating}</p>
      </div>
    </div>
  )}
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
