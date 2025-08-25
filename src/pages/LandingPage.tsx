import About from "../components/landingpage/About";
import Games from "../components/landingpage/Games";
import Parterns from "../components/landingpage/Parterns";
import Build from "../components/landingpage/Build";
const LandingPage = () => {
  return (
    <div>
      <nav className="bg-[url('/assets/images/Hero.png')] bg-cover bg-center h-screen w-full rounded-br-[150px] rounded-bl-[150px]">
        <ul className="flex gap-13 justify-center pt-4 text-lg font-semibold">
          <li className="hover:scale-105 hover:text-gray-500">Menu</li>
          <li className="hover:scale-105 hover:text-gray-500">Games</li>
          <li className="hover:scale-105 hover:text-gray-500">Contact us</li>
        </ul>
        <button className="explore-btn mt-100 ml-140">Explore Games</button>
      </nav>
      <About />
      <Games />
      <Build />
      <Parterns />

      <footer className="bg-[url('/assets/images/Footer.png')] bg-cover bg-center h-screen w-full"></footer>
    </div>
  );
};

export default LandingPage;
