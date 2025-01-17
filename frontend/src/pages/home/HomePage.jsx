import Arrivals from "../../components/sections/Arrivals";
import Latest from "../../components/sections/Latest";
import Spotlight from "../../components/sections/Spotlight";
import Featured from "./Featured";
import Hero from "./Hero";

const HeroComponent = () => {

  return (
    <main className="md:mt-0 mt-9">
      <Hero />
      <Featured />
      <div className="padding-sm">
        <Arrivals />
        <Latest />
        <Spotlight />
      </div>
    </main>
  );
};

export default HeroComponent;
