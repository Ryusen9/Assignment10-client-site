import Hero from "../Components/Hero";
import MarqueeComponent from "../Components/Marquee";
import Purpose from "../Components/Purpose";

const HomeLayout = () => {
  return (
    <div>
      <div className="min-h-screen w-full">
        <div className="h-[80vh]">
          <Hero />
        </div>
        <div className="h-[20vh]">
            <MarqueeComponent/>
        </div>
        <div>
          <Purpose/>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
