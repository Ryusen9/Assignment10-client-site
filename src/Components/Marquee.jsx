import Marquee from "react-fast-marquee";
import logoImage1 from "/Brands/logo-1.png";
import logoImage2 from "/Brands/logo-2.png";
import logoImage3 from "/Brands/logo-3.png";
import logoImage4 from "/Brands/logo-4.png";
import logoImage5 from "/Brands/logo-5.png";
import logoImage6 from "/Brands/logo-6.png";

const MarqueeComponent = () => {
  const marqueeAssets = [
    logoImage1,
    logoImage2,
    logoImage3,
    logoImage4,
    logoImage5,
    logoImage6,
  ];

  return (
    <div className="flex flex-col gap-4 w-full h-full" aria-label="Scrolling updates">
      <p className="text-center text-3xl mt-7 font-semibold">Our Partners</p>
      {marqueeAssets.length > 0 ? (
        <Marquee
        style={{marginTop: '12px'}} 
        autoFill={true}
        speed={60}
        pauseOnHover={true}
        >
          {marqueeAssets.map((asset, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-4"
            >
              <img
                src={asset}
                alt={`Partner logo ${index + 1}`}
                className="h-16 w-auto"
              />
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
