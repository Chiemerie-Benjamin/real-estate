import house3 from '../assets/house3.jpg';

const Home = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${house3})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content Wrapper */}
      <div className="relative z-10 h-full flex flex-col">
        {/* ================= NAVBAR ================= */}
        <header className="mx-20 mt-6 bg-[#131110] h-16 flex items-center px-8">
          <nav className="w-full flex items-center justify-end gap-10 text-[12px] text-gray-300">
            {/* HOME */}
            <a
              href="#"
              className="
                relative pb-1 tracking-widest
                hover:text-white transition-colors duration-300
                after:content-['']
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0
                after:bg-[#9f7d32]
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              HOME
            </a>

            {/* SERVICES */}
            <a
              href="#"
              className="
                relative pb-1 tracking-widest
                hover:text-white transition-colors duration-300
                after:content-['']
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0
                after:bg-[#9f7d32]
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              SERVICES
            </a>

            {/* ABOUT */}
            <a
              href="#"
              className="
                relative pb-1 tracking-widest
                hover:text-white transition-colors duration-300
                after:content-['']
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0
                after:bg-[#9f7d32]
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              ABOUT
            </a>

            {/* Divider */}
            <div className="h-5 w-px bg-gray-500/40" />

            {/* CONTACT */}
            <span
              className="
                cursor-pointer tracking-widest
                text-[#9f7d32]
                hover:text-white
                transition-colors duration-300
              "
            >
              CONTACT US
            </span>
          </nav>
        </header>

        {/* ================= HERO SECTION ================= */}
        <main className="flex-1 flex items-center">
          <div className="ml-40 max-w-3xl">
            {/* Subtitle */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-1 bg-[#9f7d32]" />
              <p className="text-[13px] text-[#927337] tracking-widest">
                PREMIUM PROPERTY MANAGEMENT
              </p>
            </div>

            {/* Headings */}
            <h1 className="text-white text-[60px] font-light leading-tight">
              Seamless Operations
            </h1>

            <h2 className="text-white text-[60px] font-light leading-tight">
              For
            </h2>

            <h3 className="text-gray-400 text-[54px] italic font-light mt-2">
              Properties & Businesses.
            </h3>

            {/* Button */}
            <div className="mt-12">
              <button
                className="
                  relative inline-flex items-center justify-center
                  px-20 py-5 text-[11px] uppercase tracking-[0.3em]
                  text-white border border-white/20
                  hover:border-white hover:bg-white/5
                  transition duration-300
                "
              >
                Start Your Journey
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
