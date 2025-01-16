import Button from "./Button";
import heroImage from "/Images/pexels-mart-production-7230322.jpg";

const Hero = () => {
  return (
    <div className="w-full h-[80vh] flex flex-col lg:flex-row items-center justify-start overflow-x-hidden bg-center bg-cover  bg-no-repeat size-fit bg-gray-800">
      <div className="p-[10%]">
        <p className="text-4xl text-white md:text-7xl font-semibold">
          Welcome to <br /> <span className="text-purple-500 ">CrowdCube</span>
        </p>
        <p className="text-xs md:text-base w-[75%] md:w-[85%] text-gray-500">
          Where expectation meets success. We find the best funding for your
          next project. Explore to find new opportunity for your imagination!
        </p>
        <div>
          <Button text="Explore" classList="border-2 px-6 py-3 rounded-xl mt-3 text-white hover:bg-purple-500 duration-300 " />
        </div>
      </div>
      <div
        className="w-full h-full bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
    </div>
  );
};

export default Hero;
