import { Sparkles, Github, Linkedin, Twitter } from "lucide-react";

export function Hero({ darkMode }: { darkMode: boolean }) {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-5 h-5 text-blue-500" />
          <span className="text-sm font-medium text-blue-500">
            Available for hire
          </span>
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Building the future,
          <br />
          one commit at a time
        </h1>
        <p
          className={`text-xl sm:text-2xl mb-8 max-w-3xl ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Full-stack developer specializing in AI/ML, cloud infrastructure, and
          scalable web applications. Passionate about open source and building
          tools that make developers' lives easier.
        </p>
        <div className="flex gap-4">
          <a
            href="#contact"
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors shadow-lg shadow-blue-500/50"
          >
            Get in touch
          </a>
          <a
            href="#projects"
            className={`px-8 py-3 rounded-lg font-medium transition-colors border ${
              darkMode
                ? "border-gray-700 hover:bg-gray-800"
                : "border-gray-300 hover:bg-gray-100"
            }`}
          >
            View projects
          </a>
        </div>
        <div className="flex gap-4 mt-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-lg transition-colors ${
              darkMode ? "hover:bg-gray-800" : "hover:bg-gray-200"
            }`}
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-lg transition-colors ${
              darkMode ? "hover:bg-gray-800" : "hover:bg-gray-200"
            }`}
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-lg transition-colors ${
              darkMode ? "hover:bg-gray-800" : "hover:bg-gray-200"
            }`}
          >
            <Twitter className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
