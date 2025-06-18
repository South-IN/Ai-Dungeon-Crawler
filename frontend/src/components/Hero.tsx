import { Button } from "@/components/ui/button";

import { Sword, Map, Play } from "lucide-react";
import BGImage from "@/assets/images/dungeon-bg.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <main className=" relative min-h-screen text-white ">
      <div className="relative h-screen w-full flex items-center justify-center">
        <img
          src={BGImage}
          alt="Dungeon Background"
          className="absolute inset-0 w-full h-full object-cover z-0  blur-xs"
        />
        <div className="absolute bg-black z-10 w-full h-full opacity-70" />
        <section className="text-center max-w-3xl mx-auto relative z-20">
          <div className="flex justify-center">
            <Sword className=" size-20 text-red-400" />
            <Map className=" size-20 text-red-400" />
          </div>
          <h1 className="relative text-5xl font-bold mb-4 leading-tight bg-gradient-to-r from-red-400 to-pink-600 bg-clip-text text-transparent">
            AI Dungeon Crawler
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Embark on endless adventures, make choices, and battle foes in a
            world generated entirely by AI.
          </p>
          <Button
            variant="secondary"
            className="relative overflow-hidden group hover:bg-white/10 hover:text-red-400 text-white px-6 py-3 text-lg rounded-xl shadow-lg transition"
          >
            <Play className="mr-2 h-5 w-5 relative z-10" />
            <Link to={"start-game"}>
              <span className="relative z-10">Start Your Journey</span>
            </Link>
            <span className="absolute inset-0 bg-white/10 backdrop-blur-sm translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out rotate-12" />
          </Button>
        </section>
      </div>
    </main>
  );
};

export default Hero;
