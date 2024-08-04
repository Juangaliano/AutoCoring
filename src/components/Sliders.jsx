import { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

function Sliders() {
  const slides = [
    {
      url: "/home.webp",
      titulo: "Consultoría y servicios empresariales",
      descripcion:
        "Potenciamos tu empresa con asesoramiento especializado en estrategia, gestión y operaciones para optimizar tu rendimiento y eficiencia.",
    },
    {
      url: "/action.webp",
      titulo: "Estrategias de negocios",
      descripcion:
        "Desarrollamos estrategias inteligentes para impulsar el crecimiento y la eficiencia de tu organización.",
    },
    {
      url: "/imagen2.jpg ",
      titulo: "Servicios de tecnología",
      descripcion:
        "Ofrecemos soluciones tecnológicas innovadoras para transformar y automatizar tu empresa.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="h-[80vh] w-full sm:h-[60vh] md:h-screen text-[#f6f6f6] relative group ">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full  bg-no-repeat bg-center bg-cover transition-opacity duration-1000 ease-in-out ${
            currentIndex === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.1), rgba(200,200,200,1)), url(${slide.url})`,
            zIndex: currentIndex === index ? 1 : 0,
          }}
        >
          {currentIndex === index && (
            <div className="relative z-10 flex flex-col items-start justify-center w-full h-full p-4 text-left sm:p-6 md:w-90px md:m-auto">
              <h1 className="md:text-4xl sm:text-4xl font-extrabold text-[#374649] w-full sm:w-[60%]">
                {slide.titulo}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-[#374649] pt-4 sm:pt-10 w-full sm:w-[60%]">
                {slide.descripcion}
              </p>
              <input
                type="button"
                className="bg-[#074CA6] mt-4 sm:mt-6 text-[#f6f6f6] h-auto w-auto px-4 py-2 cursor-pointer rounded-full hover:scale-105 hover:bg-[#374649] hover:text-[#f6f6f6]"
                value="Contáctanos"
              />
            </div>
          )}
        </div>
      ))}
      {/* Left Arrow */}
      <div
        className="absolute z-20 hidden p-2 text-xl text-white -translate-y-1/2 rounded-full cursor-pointer sm:block top-1/2 left-2 sm:left-5 bg-black/20"
        onClick={prevSlide}
      >
        <BsChevronCompactLeft size={30} />
      </div>
      <div
        className="absolute z-20 hidden p-2 text-xl text-white -translate-y-1/2 rounded-full cursor-pointer sm:block top-1/2 right-2 sm:right-5 bg-black/20"
        onClick={nextSlide}
      >
        <BsChevronCompactRight size={30} />
      </div>
    </div>
  );
}

export default Sliders;
