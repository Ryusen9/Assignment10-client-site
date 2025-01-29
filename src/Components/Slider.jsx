// Import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = () => {
  const slides = [
    {
      id: 1,
      title: "Discover New Horizons",
      description:
        "Explore breathtaking landscapes and immerse yourself in diverse cultures.",
      image: "/public/Example Scenes/example-scene-2.png",
      bgColor: "bg-blue-100",
    },
    {
      id: 2,
      title: "Adventure Awaits",
      description:
        "Unleash your adventurous side with thrilling outdoor activities.",
      image: "/public/Example Scenes/example-scene-3.png",
      bgColor: "bg-green-100",
    },
    {
      id: 3,
      title: "Capture Memories",
      description: "Create unforgettable moments with friends and family.",
      image: "/public/Example Scenes/advertising-5-18.png",
      bgColor: "bg-yellow-100",
    },
    {
      id: 4,
      title: "Relax and Unwind",
      description: "Find peace and tranquility in serene destinations.",
      image: "/public/Example Scenes/balloon-62.png",
      bgColor: "bg-purple-100",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-6">
      {" "}
      {/* Reduced vertical padding */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="rounded-lg"
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="flex items-center justify-center"
          >
            <div
              className={`flex flex-col md:flex-row gap-4 w-full h-[60%] rounded-lg shadow-md ${slide.bgColor}`}
            >
              <div className="flex-1 flex items-center justify-center">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-4 items-center justify-center gap-4 text-center">
                <h2 className="text-2xl font-bold text-gray-800">
                  {slide.title}
                </h2>
                <p className="text-gray-600">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
