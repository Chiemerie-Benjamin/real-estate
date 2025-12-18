import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import menu from '../assets/menu1.png';

import house1 from '../assets/house1.jpg';
import house2 from '../assets/house2.jpg';
import house3 from '../assets/house3.jpg';
import house4 from '../assets/house4.jpg';

const images = [house1, house2, house3, house4];

const Home = () => {
  const [activeBg, setActiveBg] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  /* 🔁 BACKGROUND CHANGE */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBg((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  /* 📱 HIDE / SHOW NAV ON SCROLL */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="relative w-screen">
      {/* ================= BACKGROUNDS ================= */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`
            fixed inset-0 bg-cover bg-center
            transition-all duration-[2000ms] ease-in-out
            ${activeBg === i ? 'opacity-100 scale-110' : 'opacity-0 scale-100'}
          `}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Overlay */}
      <div className="fixed inset-0 bg-black/60" />

      {/* ================= CONTENT ================= */}
      <div className="fixed inset-0 z-10 flex flex-col">
        {/* ================= NAVBAR ================= */}
        <header
          className={`
            mx-4 md:mx-20 mt-6 bg-[#131110] h-16 px-6 md:px-8
            flex items-center transition-transform duration-500
            ${showNav ? 'translate-y-0' : '-translate-y-24'}
          `}
        >
          <nav className="w-full flex items-center justify-between">
            {/* LOGO */}
            <img src={logo} alt="Logo" className="h-8 w-auto" />

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-10 text-[12px] text-gray-300">
              {['HOME', 'SERVICES', 'ABOUT'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="
                    relative pb-1 tracking-widest cursor-pointer
                    hover:text-white transition
                    after:content-['']
                    after:absolute after:left-0 after:-bottom-1
                    after:h-[2px] after:w-0
                    after:bg-[#9f7d32]
                    after:transition-all after:duration-300
                    hover:after:w-full
                  "
                >
                  {item}
                </a>
              ))}

              <div className="h-5 w-px bg-gray-500/40" />

              <span className="text-[#9f7d32] hover:text-white transition cursor-pointer">
                CONTACT US
              </span>
            </div>

            {/* MOBILE MENU ICON */}
            <button
              className="md:hidden cursor-pointer transition hover:opacity-80"
              onClick={() => setMenuOpen(true)}
            >
              <img src={menu} alt="Menu" className="h-6 w-6" />
            </button>
          </nav>
        </header>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`
            fixed inset-0 z-50 bg-black
            transition-all duration-500 ease-in-out
            ${
              menuOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-10 pointer-events-none'
            }
          `}
        >
          {/* TOP */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-white/10">
            <img src={logo} alt="Logo" className="h-8" />
            <button
              className="text-white text-3xl cursor-pointer hover:text-gray-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              ×
            </button>
          </div>

          {/* LINKS */}
          <div className="px-8 pt-12 space-y-6 text-white text-[18px] font-light">
            {['Home', 'Services', 'About', 'Contact'].map((item) => (
              <div key={item} className="border-b border-white/10 pb-4">
                <a
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-[#9f7d32] transition cursor-pointer"
                >
                  {item}
                </a>
              </div>
            ))}
          </div>

          {/* FOOTER */}
          <div className="absolute bottom-10 px-8 text-sm">
            <p className="text-[#9f7d32] uppercase tracking-widest text-[11px] mb-2">
              Inquiries
            </p>
            <p className="text-white/80 text-[13px]">
              thedailycohostltd@gmail.com
            </p>
          </div>
        </div>

        {/* ================= HERO ================= */}
        <div className="flex-1 flex items-center">
          <div className="ml-6 md:ml-40 max-w-3xl mt-24">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-1 bg-[#9f7d32]" />
              <p className="text-[12px] text-[#927337] tracking-widest">
                PREMIUM PROPERTY MANAGEMENT
              </p>
            </div>

            <h1 className="text-white text-[44px] md:text-[52px] font-light">
              Seamless Operations
            </h1>

            <h2 className="text-white text-[44px] md:text-[52px] font-light">
              For
            </h2>

            <h3 className="text-gray-400 text-[38px] md:text-[46px] italic font-light mt-1">
              Properties & Businesses.
            </h3>

            <div className="mt-10">
              <button className="px-16 py-4 text-[11px] uppercase tracking-[0.3em] text-white border border-white/20 hover:border-white hover:bg-white/5 transition">
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
