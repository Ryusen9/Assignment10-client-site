import Marquee from "react-fast-marquee";

const MarqueeComponent = () => {
  const marqueeAssets = ["John donated $500 to project: Adversie", "New post: Need backup with my plan regarding.."];

  return (
    <div className="flex items-center justify-center w-full h-full" aria-label="Scrolling updates">
      {marqueeAssets.length > 0 ? (
        <Marquee>
          {marqueeAssets.map((asset, index) => (
            <div
              key={index}
              className="flex items-center justify-center text-gray-600 mx-4 text-lg font-medium"
            >
              {asset}
            </div>
          ))}
        </Marquee>
      ) : (
        <p className="text-gray-500 text-lg">No updates available</p>
      )}
    </div>
  );
};

export default MarqueeComponent;
