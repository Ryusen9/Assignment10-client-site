import { Fade } from "react-awesome-reveal";
import Button from "./Button";
import { IoAlert } from "react-icons/io5";
import { Link } from "react-router-dom";

const Purpose = () => {
  return (
    <div className="h-full w-full p-4 md:p-8 overflow-hidden">
      <p className="text-center text-3xl md:text-4xl font-bold mb-2">
        How it Works?
      </p>
      <p className="text-gray-400 text-center text-sm md:text-base">
        Start your journey with us in just a few steps!
      </p>

      <div className="w-full md:w-[80%] mx-auto h-full mt-4 p-4 grid gap-7 grid-cols-1 md:grid-cols-6">
        <div id="card" className="col-span-1 md:col-span-4 relative">
          <Fade direction="left" triggerOnce={false}>
            <div className="p-4 bg-purple-200 flex flex-col rounded-lg md:flex-row gap-4 md:gap-3">
              <div className="flex justify-center md:block">
                <img
                  src="/public/Characters/woman-sitting-laptop.png"
                  alt=""
                  className="w-40 md:w-60"
                />
              </div>
              <div className="w-full md:pl-8">
                <p className="text-4xl md:text-6xl text-gray-500 opacity-30">
                  01
                </p>
                <h2 className="text-xl md:text-2xl font-semibold">
                  Create a Campaign
                </h2>
                <p className="mt-2 text-gray-700 text-sm md:text-base">
                  {`Start by creating a campaign that suits your project's needs.`}
                </p>
                <img
                  src="/public/UI Elements/comment-card.png"
                  alt=""
                  className="w-32 md:w-48 absolute right-4 bottom-4 hidden md:block"
                />
              </div>
            </div>
          </Fade>
        </div>

        <div id="card" className="col-span-1 md:col-span-2 relative">
          <Fade direction="right" triggerOnce={false}>
            <img
              src="/public/Example Scenes/example-scene-1.png"
              alt=""
              className="w-full h-auto rounded-lg"
            />
          </Fade>
        </div>

        <div
          id="card"
          className="col-span-1 md:col-span-6 relative overflow-hidden"
        >
          <Fade direction="up">
            <div
              id="clip-path-element1"
              className="bg-slate-600 p-4 md:p-8 rounded-2xl flex flex-col md:flex-row items-center md:items-center justify-center gap-4"
            >
              <p className="text-4xl md:text-6xl text-gray-500 opacity-30 z-10">
                02
              </p>
              <p className="text-slate-100 text-lg md:text-3xl z-[1] text-center md:text-left p-4 shadow-sm">
                Ready to Make a Difference? Start Your Campaign Today!
              </p>
              <img
                src="/public/Scene Elements/circle-bg.png"
                alt=""
                className="absolute -z-10 w-16 md:w-32 left-10 md:left-36"
              />
              <div className="text-center md:text-left">
                <Link>
                  <Button
                    text="Learn More"
                    rightIcon={<IoAlert />}
                    classList={
                      "flex items-center justify-center bg-purple-400 p-3 rounded-lg hover:bg-purple-500 duration-300"
                    }
                  />
                </Link>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Purpose;
