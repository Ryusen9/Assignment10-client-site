import { useLoaderData } from "react-router-dom";
import Hero from "../Components/Hero";
import MarqueeComponent from "../Components/Marquee";
import Purpose from "../Components/Purpose";
import Slider from "../Components/Slider";
import Trending from "../Components/Trending";

const HomeLayout = () => {
  const data = useLoaderData()
  console.log(data)
  return (
    <div>
      <div className="min-h-screen w-full">
        <div className="h-[80vh]">
          <Hero />
        </div>
        <div className="h-[20vh]">
          <MarqueeComponent />
        </div>
        <div className="p-5 overflow-hidden">
          <Slider />
        </div>
        <div className="p-8">
          <Trending data={data} />
        </div>
        <div>
          <Purpose />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
