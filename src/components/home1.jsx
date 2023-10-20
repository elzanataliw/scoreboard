import {Link} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Home1 = () => {
  return (
  <div className="container px-4 py-6 bg-dark-blue">
      <div className="section px-4 py-6">
        <div className="inner-section px-4 py-6">
          <p className="text-white text-bold sm:text-2xl xl:text-6xl">Camera View</p>
        </div>
        <div className="inner-section px-4 py-6"></div>
        <div className="inner-section px-4 py-6">
        <Link to="/Detect">
          <button onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
            class="mt-4 rounded-2xl bg-orange py-2 px-6 z-50 text-lg md text-white transition-all duration-300 ease-out hover:scale-[1] hover:font-bold mobile:text-sm">      
            Detect Three Point Line
            </button>
        </Link>
        </div>
      </div>
      <div className="section px-4 py-6">
        <div className="inner-section px-4 py-6"></div>
        <div className="inner-section px-4 py-6">
        <Link to="/GameMode">
          <button onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
            class="mt-4 rounded-2xl bg-white py-6 px-6 z-50 text-6xl md text-light-blue transition-all duration-300 ease-out hover:scale-[1] hover:font-bold mobile:text-sm">      
            Start Game! 
            </button>
        </Link>
        </div>
        <div className="inner-section px-4 py-6"></div>
      </div>
    </div>
  );
};

export default Home1;