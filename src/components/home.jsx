import { useEffect, useRef, useState } from 'react';
import logo from '../assets/logo.png';

import house1 from '../assets/house1.jpg';
import house2 from '../assets/house2.jpg';
import house3 from '../assets/house3.jpg';
import house4 from '../assets/house4.jpg';

const images = [house1, house2, house3, house4];

const Home = () => {
  const [activeBg, setActiveBg] = useState(0);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveBg(Number(entry.target.dataset.index));
          }
        });
      },
      { threshold: 0.5 },
    );

    sectionsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-screen">
      {/* ================= BACKGROUNDS (STACKED) ================= */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`
            fixed inset-0 bg-cover bg-center
            transition-opacity duration-700
            ${activeBg === i ? 'opacity-100' : 'opacity-0'}
          `}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Overlay */}
      <div className="fixed inset-0 bg-black/60" />

      {/* ================= FIXED CONTENT ================= */}
      <div className="fixed inset-0 z-10 flex flex-col">
        {/* ================= NAVBAR ================= */}
        <header className="mx-20 mt-6 bg-[#131110] h-16 flex items-center px-8">
          <nav className="w-full flex items-center justify-between">
            {/* LOGO */}
            <img src={logo} alt="Logo" className="h-8 w-auto cursor-pointer" />

            {/* NAV LINKS */}
            <div className="flex items-center gap-10 text-[12px] text-gray-300">
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
          </nav>
        </header>

        {/* ================= HERO TEXT ================= */}
        <div className="flex-1 flex items-center">
          <div className="ml-40 max-w-3xl mt-24">
            {/* Subtitle */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10  h-1 bg-[#9f7d32]" />
              <p className="text-[12px] text-[#927337] tracking-widest">
                PREMIUM PROPERTY MANAGEMENT
              </p>
            </div>

            <h1 className="text-white text-[52px] font-light leading-tight">
              Seamless Operations
            </h1>

            <h2 className="text-white text-[52px] font-light">For</h2>

            <h3 className="text-gray-400 text-[46px] italic font-light mt-1">
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

      {/* ================= SCROLL TRIGGERS ================= */}
      <div>
        {images.map((_, i) => (
          <div
            key={i}
            ref={(el) => (sectionsRef.current[i] = el)}
            data-index={i}
            className="h-screen"
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
