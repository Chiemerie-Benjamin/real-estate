import house3 from '../assets/house3.jpg';
const home = () => {
  return (
    <div id="root">
      <div
        id="main"
        className="relative h-screen w-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${house3})` }}
      >


      </div>
    </div>
  );
};

export default home;
