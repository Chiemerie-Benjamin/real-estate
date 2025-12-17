import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import menu from '../assets/menu.png';

import house1 from '../assets/house1.jpg';
import house2 from '../assets/house2.jpg';
import house3 from '../assets/house3.jpg';
import house4 from '../assets/house4.jpg';

const images = [house1, house2, house3, house4];

const Home = () => {
  const [activeBg, setActiveBg] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔁 BACKGROUND CHANGE EVERY 6 SECONDS
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBg((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

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
        <header className="mx-4 md:mx-20 mt-6 bg-[#131110] h-16 flex items-center px-6 md:px-8">
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
                    relative pb-1 tracking-widest
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
            <button className="md:hidden" onClick={() => setMenuOpen(true)}>
              <img src={menu} alt="Menu" className="h-6 w-6" />
            </button>
          </nav>
        </header>

        {/* ================= MOBILE MENU ================= */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-black flex flex-col">
            <div className="flex items-center justify-between h-16 px-6">
              <img src={logo} alt="Logo" className="h-8" />
              <button
                className="text-white text-3xl"
                onClick={() => setMenuOpen(false)}
              >
                ×
              </button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center gap-10 text-white text-[14px] tracking-widest">
              {['HOME', 'SERVICES', 'ABOUT', 'CONTACT US'].map((item) => (
                <a
                  key={item}
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-[#9f7d32] transition"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* ================= HERO TEXT ================= */}
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
              <button
                className="
                  px-16 py-4 text-[11px] uppercase tracking-[0.3em]
                  text-white border border-white/20
                  hover:border-white hover:bg-white/5
                  transition
                "
              >
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
