// import { useState, useEffect } from "react";
// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

// function Sliders() {
//   const slides = [
//     {
//       url: "/home2.jpg",
//       titulo: "Consultoría y servicios empresariales",
//       descripcion:
//         "Potenciamos tu empresa con asesoramiento especializado en estrategia, gestión y operaciones para optimizar tu rendimiento y eficiencia.",
//     },
//     {
//       url: "/action.jpg",
//       titulo: "Estrategias de negocios inteligentes",
//       descripcion:
//         "Desarrollamos estrategias inteligentes para impulsar el crecimiento y la eficiencia de tu negocio.",
//     },
//     {
//       url: "/home.jpg",
//       titulo: "Servicios de tecnología",
//       descripcion:
//         "Ofrecemos soluciones tecnológicas innovadoras para transformar y automatizar tu empresa.",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const nextSlide = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 7000);

//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   return (
//     <div className="h-screen w-full text-[#f6f6f6] relative group transition-all duration-2000 ease-in-out">
//       <div
//         className="w-full h-full transition-all duration-1000 ease-in-out bg-center bg-cover"
//         style={{
//           backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.2), rgba(0,0,0.9)), url(${slides[currentIndex].url})`,
//         }}
//       >
//         <div className="flex flex-col items-start justify-center h-full p-6 m-auto text-left w-90px">
//           <h1 className="text-4xl w-[60%] font-bold text-[#f6f6f6]">
//             {slides[currentIndex].titulo}
//           </h1>
//           <p className="text-xl w-[60%] font-medium text-[#f6f6f6] pt-10">
//             {slides[currentIndex].descripcion}
//           </p>
//           <input
//             type="button"
//             className="bg-[#91C4FE] mt-6 text-[#374649] h-auto w-auto p-2 cursor-pointer rounded-full hover:scale-105 hover:bg-[#374649] hover:text-[#f6f6f6]"
//             value="Contáctanos"
//           />
//         </div>
//         {/* Left Arrow */}
//         <div
//           className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 cursor-pointer bg-black/20 text-white"
//           onClick={prevSlide}
//         >
//           <BsChevronCompactLeft size={30} />
//         </div>
//         {/* Right Arrow */}
//         <div
//           className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full p-2 cursor-pointer bg-black/20 text-white"
//           onClick={nextSlide}
//         >
//           <BsChevronCompactRight size={30} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sliders;

import { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

function Sliders() {
  const slides = [
    {
      url: "/home2.jpg",
      titulo: "Consultoría y servicios empresariales",
      descripcion:
        "Potenciamos tu empresa con asesoramiento especializado en estrategia, gestión y operaciones para optimizar tu rendimiento y eficiencia.",
    },
    {
      url: "/action.jpg",
      titulo: "Estrategias de negocios inteligentes",
      descripcion:
        "Desarrollamos estrategias inteligentes para impulsar el crecimiento y la eficiencia de tu negocio.",
    },
    {
      url: "/home.jpg",
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
    <div className="h-[calc(100vh+96px)] w-full text-[#f6f6f6] relative group ">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-center bg-cover transition-opacity duration-[2000ms] ease-in-out ${
            currentIndex === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.2), rgba(0,0,0.9)), url(${slide.url})`,
          }}
        >
          {currentIndex === index && (
            <div className="flex flex-col items-start justify-center h-full p-6 m-auto text-left w-90px">
              <h1 className="text-4xl w-[60%] font-bold text-[#f6f6f6]">
                {slide.titulo}
              </h1>
              <p className="text-xl w-[60%] font-medium text-[#f6f6f6] pt-10">
                {slide.descripcion}
              </p>
              <input
                type="button"
                className="bg-[#074CA6] mt-6 text-[#f6f6f6] h-auto w-auto p-2 cursor-pointer rounded-full hover:scale-105 hover:bg-[#374649] hover:text-[#f6f6f6]"
                value="Contáctanos"
              />
            </div>
          )}
        </div>
      ))}
      {/* Left Arrow */}
      <div
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 cursor-pointer bg-black/20 text-white"
        onClick={prevSlide}
      >
        <BsChevronCompactLeft size={30} />
      </div>
      {/* Right Arrow */}
      <div
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full p-2 cursor-pointer bg-black/20 text-white"
        onClick={nextSlide}
      >
        <BsChevronCompactRight size={30} />
      </div>
    </div>
  );
}

export default Sliders;
