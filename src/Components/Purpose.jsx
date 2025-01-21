import { Fade } from "react-awesome-reveal";

const Purpose = () => {
  return (
    <div className="min-h-screen w-full p-8">
      <p className="text-center text-4xl font-bold mb-2">How it Works?</p>
      <p className="text-gray-400 text-center">
        Start your journey with us in just a few steps!
      </p>
      <div className="w-[80%] mx-auto h-[100%] mt-4 p-4 grid gap-7 grid-cols-6">
        <div id="card" className="col-span-4 relative">
          <Fade direction="left" triggerOnce={false}>
            <div className="p-4 bg-purple-200 flex flex-col rounded-lg md:flex-row gap-3">
              <div>
                <img
                  src="/public/Characters/woman-sitting-laptop.png"
                  alt=""
                  className="w-60"
                />
              </div>
              <div className="w-full pl-8">
                <p className="text-6xl text-gray-500 opacity-30">01</p>
                <h2 className="text-2xl font-semibold">
                  Create a Campaign
                </h2>
                <p className="mt-2 text-gray-700">
                  Start by creating a campaign that suits your projects needs.
                </p>
                <img src="/public/UI Elements/comment-card.png" alt="" className="w-48 absolute right-4 bottom-4" />
              </div>
            </div>
          </Fade>
        </div>

        <div id="card" className="col-span-2 relative">
            <Fade direction="right" triggerOnce={false}>
            <img src="/public/Example Scenes/example-scene-1.png" alt="" />
            </Fade>
        </div>

        <div id="card" className="col-span-6">
          <Fade>
            <div id="clip-path-element1" className="bg-slate-600 p-4 rounded-2xl flex items-center justify-center">
              <p className="text-slate-100 text-7xl p-11">Ready to Make a Difference? Start Your Campaign Today!</p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Purpose;
