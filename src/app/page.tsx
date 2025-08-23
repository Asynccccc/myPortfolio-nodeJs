'use client';
import { useState } from "react";
import Typewriter from 'typewriter-effect';
import Starfield from "../../components/Starfield";
export default function Home() {
  const skills = [
  { name: "Next.js", rating: 55, description: "This is my first time actually using Next.js in a project. I kind of understand the basics of rendering methods ike SSR being server requests, SSG being pre-rendered at build time, and CSR… well, I still don’t fully get that one yet. Right now, I’m just applying what I learn from tutorials and documentation, so I’d say I’m still a beginner here.",
    next: "My next step is to build a project that mixes SSR and SSG, start learning how to fetch data the proper way with API routes, and eventually dive into middleware, authentication, and the newer App Router features." },
  { name: "Php", rating: 80, description: "I feel pretty confident with PHP. I’ve worked with variables, arrays, loops, and conditionals, and I even touched OOP a few times for assignments. I know how GET and POST requests work, and I’ve practiced RESTful APIs with Postman. I’ve also built projects with Laravel, including a CRUD app that used tables for teachers and students. Honestly, PHP was my main playground before I shifted more into JavaScript. I’d say I was a real PHP glazer back then.",
    next: "Next, I should go deeper into advanced Laravel concepts such as authentication, middleware, and API development, while also improving my database optimization skills with MySQL and exploring deployment strategies for real-world PHP applications." },
  { name: "JavaScript", rating: 40, description: "I know the basics like using var, let, and const, and I’ve done simple DOM manipulation before, like making a wardrobe feature for an assignment. I can debug with console logs and DevTools, but I haven’t really touched async/await, APIs, or advanced concepts yet. Honestly, I still think more in PHP terms when I code, so I’d say I’m still at a beginner level in JavaScript.",
    next: "My next step is to properly learn ES6+ features, practice fetching data with APIs, and get comfortable with promises and async/await. Once I get the fundamentals solid, I want to dive into OOP in JavaScript and explore closures and the event loop so I can think more natively in JS." },
  { name: "Luau", rating: 84, description: "I’ve built multiple systems in Roblox using Luau from combat mechanics and shops to datastores for saving stats, currencies, and fighting styles. I regularly use RemoteEvents, RemoteFunctions, and ModuleScripts to keep my projects efficient and reusable, and I’ve even experimented with metatables. I’d say I’m very confident scripting in Roblox, though I still need to push into optimization and advanced CFrame/Vector3 math to reach the next level.",
    next: "My next step is to learn performance optimization with RunService, master OOP patterns using metatables, and improve my use of CFrame and Vector3 for advanced mechanics. I also want to strengthen security in client-server communication and build scalable multiplayer systems for larger games." },
  { name: "Git", rating: 65, description: "I’ve used Git a lot already  initializing repositories, cloning projects, and working with commits feel natural to me now. I’ve also created branches in team projects, though I still think of them more like backups than proper workflows. Collaborating with friends through GitHub (pushing, pulling, and merging) has given me hands-on experience, but I haven’t really dealt with merge conflicts or undo commands yet. I’d say I’m sitting at a beginner-intermediate level.",
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

  function getRatingColor(rating: number) {
  if (rating <= 70) return "bg-red-500 text-white";
  if (rating <= 80) return "bg-yellow-400 text-black";
  return "bg-green-500 text-black";
  }

  return (
    <div className="min-h-screen animated-gradient text-white font-body select-none">
      <Starfield />
      <div className="blob blob1 -z-10" id="home"></div>
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
                hover:before:scale-110 hover:before:opacity-100">
                <a href={`#${item.toLowerCase()}`} className="relative z-10">{item}</a>
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
          }}/>
        </div>
        <a target="_blank" href="https://github.com/Asynccccc"className="relative z-0 cursor-pointer mt-5 p-3
        before:content-[''] before:absolute before:inset-0
        before:rounded-full before:scale-0 before:opacity-0
        before:bg-[#000000] before:transition-all before:duration-300
        hover:before:scale-100 hover:before:opacity-100 before:-z-10">
          <span className="[&>svg]:h-10 [&>svg]:w-10">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 496 512">
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
          </span>
        </a>
      </section>

      <section id="about" className="py-24 px-6 max-w-4xl mx-auto text-center space-y-8">
        <h3 className="text-[37.5px] font-heading font-bold mb-4">About <span className="text-purple-400">Me</span></h3>
        <p className="text-[23.4px] leading-relaxed text-gray-200">
          I am an
          <span className="animated-aspiring-gradient font-semibold"> aspiring </span>
          <span className="text-purple-400 font-semibold">fullstack developer </span>
          with a deep passion for
          <span className="text-pink-400 font-semibold"> computer science</span>.  
          For me, programming is more than just writing code it’s about understanding 
          technology at every level, from algorithms and data structures to creating 
          real-world applications.
        </p>

        <p className="text-[23.4px] leading-relaxed text-gray-300">
          I’m a self-taught developer from
          <span className="font-medium text-purple-300"> Bandung, Indonesia</span>.  
          I enjoy solving problems and turning ideas into reality through code.  
          My focus is on building fast, accessible, and visually appealing apps that 
          bring value to users.
        </p>
      </section>

      <section id="projects" className="py-20 px-6 bg-white/5 rounded-2xl max-w-5xl mx-auto">
        <h3 className="text-[37.5px] font-heading text-center mb-10 font-bold">Projects</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { 
              title: "Obama", 
              desc: "A project about hope and change.", 
              github: "https://github.com/" 
            },
            { 
              title: "Have", 
              desc: "Something I started but never finished 😅.", 
              github: "https://github.com/" 
            },
            { 
              title: "Dih", 
              desc: "Just testing animations and layouts.", 
              github: "https://github.com/" 
            },
            ].map((project, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/10 shadow-lg hover:scale-105 transition">
                <div className="h-40 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg mb-4"></div>
                <h4 className="text-[23.4px] font-bold mb-2">{project.title}</h4>
              
                <a
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition mb-3">
                  <span className="[&>svg]:h-5 [&>svg]:w-5">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 496 512">
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                  </span>
                  <span>View on GitHub</span>
                </a>
                <p className="text-[14.6px] opacity-80 leading-snug">
                  {project.desc}
                </p>
              </div>
            ))}
        </div>
        <p className="text-center pt-1 text-[14.6px]">All of my projects are unfinished bruh 😂</p>
      </section>
      <section id="skills" className="py-20 px-6 max-w-4xl mx-auto text-center relative">
        <h3 className="text-[37.5px] font-bold font-heading mb-10">Skills</h3>
        <div className="max-w-md mx-auto text-left space-y-2">
          {skills.map((skill, i) => (
            <button
            key={i}
            onClick={() => setSelectedSkill(skill)}
            className="w-full flex justify-between items-center px-4 py-2 rounded-md bg-black/40 hover:bg-white/10 transition cursor-pointer">
              <span className="text-yellow-300 text-[16px]">{skill.name}</span>
              <span className={`${getRatingColor(skill.rating)} font-bold px-3 py-1 rounded-md`}>{skill.rating}</span>
            </button>
          ))}
        </div>

        <div className="mt-6 flex justify-between items-center px-4 py-2 bg-purple-600 rounded-md shadow-lg">
          <span className="font-bold text-lg">Overall</span>
          <span className="bg-white text-black font-bold px-3 py-1 rounded-md">{overall}</span>
        </div>

        {selectedSkill && (
          <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50">
            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl relative w-[360px]">
              <button
                onClick={() => setSelectedSkill(null)}
                className="absolute top-2 right-2 px-2 py-1 rounded bg-purple-600 hover:bg-purple-700 text-sm">X
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

              <hr className="my-4 border-white/20"/>
              <p className="text-[20px] font-bold">Rating: <span className={`${getRatingColor(selectedSkill.rating)} px-2 py-1 rounded-md`}>{selectedSkill.rating}</span></p>
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
          className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition shadow-lg text-base">Send me an Email</a>

        <p className="mt-10 text-[14.6px] font-bold">Or</p>

        <div className="flex justify-center gap-6 mt-8 text-base">
          <a target="_blank" href="https://discord.com/users/743068550918438982"className="relative z-0 cursor-pointer p-3
          before:content-[''] before:absolute before:inset-0
          before:rounded-full before:scale-0 before:opacity-0
          before:bg-[#7289DA] before:transition-all before:duration-300
          hover:before:scale-100 hover:before:opacity-100 before:-z-10">
            <span className="[&>svg]:h-5 [&>svg]:w-5 z-10">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 640 512">
                <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
              </svg>
            </span>
          </a>
          <a target="_blank" href="https://instagram.com/dzakgun_" className="relative z-0 cursor-pointer p-3
          before:content-[''] before:absolute before:inset-0
          before:rounded-full before:scale-0 before:opacity-0
          before:bg-gradient-to-br before:from-[#f9ce34] before:via-[#ee2a7b] before:to-[#6228d7] before:transition-all before:duration-300
          hover:before:scale-100 hover:before:opacity-100 before:-z-10">
            <span className="[&>svg]:h-5 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </span>
          </a>
        </div>
      </section>

      <footer className="py-6 text-center opacity-60 text-sm">
        © {new Date().getFullYear()} Muhammad Dzaki Gunawan. All rights reserved.
      </footer>
    </div>
  );
}
