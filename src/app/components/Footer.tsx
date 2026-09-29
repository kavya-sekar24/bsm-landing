export function Footer() {
  const links = ["Features", "Solutions", "Pricing", "Contact", "Privacy Policy"];

  return (
    <footer className="bg-[#1E1B4B] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4F46E5] to-[#818CF8] flex items-center justify-center">
              <span className="text-white font-black text-sm">H</span>
            </div>
            <span className="text-white font-bold text-lg">Hackers Infotech</span>
          </div>
          <p className="text-[#818CF8] text-sm">Coimbatore, Tamil Nadu, India</p>
          <p className="text-[#475569] text-xs mt-1">
            © {new Date().getFullYear()} Hackers Infotech. All rights reserved.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-[#94A3B8] hover:text-white text-sm transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
