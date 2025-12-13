import house3 from '../assets/house3.jpg';

const home = () => {
  return (
    <div id="root">
      <div
        id="main"
        className="relative h-screen w-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${house3})` }}
      >
        <div className=" absolute inset-0 bg-black/60">
          <div className="bg-[rgb(19,17,16)] min-h-25  mt-6 w-500 ml-20">
            <div className="mt-5">
              <ul className="text-[rgb(209,213,219)]  text-center justify-center text-[12px] items-center gap-10  flex">
                <li className="mt-10 ml-[800px]">
                  <a href="#">HOME</a>
                </li>
                <li className="mt-10">
                  <a href="#">SERVICES</a>
                </li>
                <li className="mt-10 mr-10">
                  <a href="#">ABOUT</a>
                </li>
                <div className="bg-[rgba(155,162,174,0.18)] h-5 w-[2px] mt-10"></div>
                <div className="mt-11">
                  <span className="mt-10 ml-8 text-[rgb(159,125,50)] text-[12px] cursor-pointer">
                    CONTACT US
                  </span>
                </div>
              </ul>
            </div>
          </div>

          {/* text in the home begins */}
          <div className="mt-[300px] ml-40 mb-40 mr-[40px]">
            <p className="text-[13px] text-[rgb(146,115,55)]">
              PREMIUM PROPERTY MANAGEMENT
            </p>
            <h1 className="text-[60px]  text-[rgb(255,255,255)] font-light ">
              Seamless Operations
            </h1>
            <p className="text-[60px] text-[rgb(255,255,255)] font-light">
              For
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
