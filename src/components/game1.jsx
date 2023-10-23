import {Link} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Game1 = () => {
  return (
  <div className="container">
      <div className="section px-4 py-6 bg-white">
        <div className="inner-section px-4 py-6">
          <p className="text-dark-blue text-bold sm:text-2xl xl:text-6xl">HOME</p>
        </div>
        <div className="inner-section px-4 py-6"></div>
        <div className="inner-section px-4 py-6">
        <div className="sm:text-md xl:text-2xl">
          Two Point Goals: 
          <br/>
          Three Point Goals:
        </div>
        </div>
      </div>
      <div className="section px-4 py-6 bg-dark-blue">
        <div className="inner-section px-4 py-6">
          <p className="mt-56 px-40 text-white sm:text-2xl xl:text-5xl text-center">GAME MODE</p>
          
        </div>
        <div className="inner-section px-4 py-6">
        <Link to="/FreeThrowMode" className="z-0">
          <button onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
            class="mb-16 rounded-3xl bg-white py-2 px-6 z-50 text-lg md text-dark-blue transition-all duration-300 ease-out hover:scale-[1] hover:font-bold mobile:text-sm">      
            Switch Mode
            </button>
        </Link>
        </div>
        <div className="inner-section px-4 py-6">
        <Link to="/" className="z-0">
          <button onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
            class="mt-4 rounded bg-red py-2 px-6 z-50 text-lg md text-white transition-all duration-300 ease-out hover:scale-[1] hover:font-bold mobile:text-sm">      
            STOP GAME
            </button>
        </Link>
        </div>
      </div>
      <div className="section bg-white">
        <div className="inner-section px-4 py-6">
          <p className="text-dark-blue sm:text-2xl xl:text-6xl">AWAY</p>
        </div>
        <div className="inner-section px-4 py-6"></div>
        <div className="inner-section px-4 py-6">
        <div className="sm:text-md xl:text-2xl">
          Two Point Goals: 
          <br/>
          Three Point Goals:
        </div>
        </div>
      </div>
    </div>
  );
};

export default Game1;