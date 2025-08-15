export default function Home() {
  return (
    <div className="min-h-screen animated-gradient">
      <div className="flex items-start justify-center">
        <nav className="glass-nav fixed top-4 max-w-4xl mx-auto px-6 py-3 flex justify-between items-center rounded-2xl shadow-lg glass-border border border-white/10">
          <ul className="flex gap-6 text-white font-body">
            <li className="relative cursor-pointer px-4 py-2 overflow-hidden rounded-md
                before:content-[''] before:absolute before:inset-0 before:rounded-md
                before:scale-0 before:opacity-0 before:origin-center
                before:bg-gradient-to-r before:from-purple-600 before:to-pink-500
                before:bg-[length:200%_200%] before:animate-[gradientMove_3s_linear_infinite]
                before:transition-all before:duration-250
                hover:before:scale-110 hover:before:opacity-100">
              <span className="relative z-10 text-white">Home</span>
            </li>
            <li className="relative cursor-pointer px-4 py-2 overflow-hidden rounded-md
                before:content-[''] before:absolute before:inset-0 before:rounded-md
                before:scale-0 before:opacity-0 before:origin-center
                before:bg-gradient-to-r before:from-purple-600 before:to-pink-500
                before:bg-[length:200%_200%] before:animate-[gradientMove_3s_linear_infinite]
                before:transition-all before:duration-250
                hover:before:scale-110 hover:before:opacity-100">
              <span className="relative z-10 text-white">About</span>
            </li>
            <li className="relative cursor-pointer px-4 py-2 overflow-hidden rounded-md
                before:content-[''] before:absolute before:inset-0 before:rounded-md
                before:scale-0 before:opacity-0 before:origin-center
                before:bg-gradient-to-r before:from-purple-600 before:to-pink-500
                before:bg-[length:200%_200%] before:animate-[gradientMove_3s_linear_infinite]
                before:transition-all before:duration-250
                hover:before:scale-110 hover:before:opacity-100">
              <span className="relative z-10 text-white">Contact</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
