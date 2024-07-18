// // import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
// // import { Carousel } from "react-responsive-carousel";

// // function Home() {
// //   return (
// //     <div className="h-screen w-full text-[#f6f6f6] bg-no-repeat bg-center bg-cover">
// //       <Carousel
// //         showArrows={true}
// //         infiniteLoop={true}
// //         showThumbs={false}
// //         showStatus={false}
// //         autoPlay={true}
// //         interval={4000}
// //       >
// //         <div
// //           className="h-screen w-full text-[#f6f6f6] bg-no-repeat bg-center bg-cover"
// //           style={{
// //             backgroundImage:
// //               "linear-gradient(to left, rgba(0, 0, 0, 0.2), rgba(0,0,0.9)), url('/home2.jpg')",
// //           }}
// //         >
// //           <div className="flex flex-col items-start justify-center h-full m-auto text-left w-90px">
// //             <h1 className="text-4xl w-[60%] font-bold text-[#f6f6f6]">
// //               Consultoría y servicios empresariales
// //             </h1>
// //             <p className="text-xl w-[60%] font-medium text-[#f6f6f6] pt-10">
// //               Potenciamos tu empresa con asesoramiento especializado en
// //               estrategia, gestión y operaciones para optimizar tu rendimiento y
// //               eficiencia.
// //             </p>
// //             <input
// //               type="button"
// //               className="bg-[#91C4FE] mt-6 text-[#374649] h-auto w-auto p-2 cursor-pointer rounded-full hover:scale-105 hover:bg-[#374649] hover:text-[#f6f6f6]"
// //               value={"Contactanos"}
// //             />
// //           </div>
// //         </div>

// //         <div
// //           className="h-screen w-full text-[#f6f6f6] bg-no-repeat bg-center bg-cover"
// //           style={{
// //             backgroundImage:
// //               "linear-gradient(to left, rgba(0, 0, 0, 0.2), rgba(0,0,0.9)), url('/home.jpg')",
// //           }}
// //         >
// //           <div className="flex flex-col items-start justify-center h-full m-auto text-left w-90px">
// //             <h1 className="text-4xl w-[60%] font-bold text-[#f6f6f6]">
// //               Servicios de Tecnología
// //             </h1>
// //             <p className="text-xl w-[60%] font-medium text-[#f6f6f6] pt-10">
// //               Ofrecemos soluciones tecnológicas innovadoras para transformar y
// //               digitalizar tu empresa.
// //             </p>
// //             <input
// //               type="button"
// //               className="bg-[#91C4FE] mt-6 text-[#374649] h-auto w-auto p-2 cursor-pointer rounded-full hover:scale-105 hover:bg-[#374649] hover:text-[#f6f6f6]"
// //               value={"Contactanos"}
// //             />
// //           </div>
// //         </div>

// //         <div
// //           className="h-screen w-full text-[#f6f6f6] bg-no-repeat bg-center bg-cover"
// //           style={{
// //             backgroundImage:
// //               "linear-gradient(to left, rgba(0, 0, 0, 0.2), rgba(0,0,0.9)), url('/action.jpg')",
// //           }}
// //         >
// //           <div className="flex flex-col items-start justify-center h-full m-auto text-left w-90px">
// //             <h1 className="text-4xl w-[60%] font-bold text-[#f6f6f6]">
// //               Estrategias de Negocios Inteligentes
// //             </h1>
// //             <p className="text-xl w-[60%] font-medium text-[#f6f6f6] pt-10">
// //               Desarrollamos estrategias inteligentes para impulsar el
// //               crecimiento y la eficiencia de tu negocio.
// //             </p>
// //             <input
// //               type="button"
// //               className="bg-[#91C4FE] mt-6 text-[#374649] h-auto w-auto p-2 cursor-pointer rounded-full hover:scale-105 hover:bg-[#374649] hover:text-[#f6f6f6]"
// //               value={"Contactanos"}
// //             />
// //           </div>
// //         </div>
// //         <div
// //           className="h-screen w-full text-[#f6f6f6] bg-no-repeat bg-center bg-cover"
// //           style={{
// //             backgroundImage:
// //               "linear-gradient(to left, rgba(0, 0, 0, 0.2), rgba(0,0,0.9)), url('/home2.jpg')",
// //           }}
// //         >
// //           <div className="flex flex-col items-start justify-center h-full m-auto text-left w-90px">
// //             <h1 className="text-4xl w-[60%] font-bold text-[#f6f6f6]">
// //               Consultoría y servicios empresariales
// //             </h1>
// //             <p className="text-xl w-[60%] font-medium text-[#f6f6f6] pt-10">
// //               Potenciamos tu empresa con asesoramiento especializado en
// //               estrategia, gestión y operaciones para optimizar tu rendimiento y
// //               eficiencia.
// //             </p>
// //             <input
// //               type="button"
// //               className="bg-[#91C4FE] mt-6 text-[#374649] h-auto w-auto p-2 cursor-pointer rounded-full hover:scale-105 hover:bg-[#374649] hover:text-[#f6f6f6]"
// //               value={"Contactanos"}
// //             />
// //           </div>
// //         </div>
// //       </Carousel>
// //     </div>
// //   );
// // }

// // export default Home;

// import { useState } from "react";

// function Home() {
//   const slides = [
//     { url: "/home2.jpg" },
//     { url: "/action.jpg" },
//     { url: "/home.jpg" },
//   ];

//   return (
//   <div className="h-screen w-full text-[#f6f6f6] bg-no-repeat bg-center bg-cover">
     
//         <div
//           className="h-screen w-full text-[#f6f6f6] bg-no-repeat bg-center bg-cover"
//           style={{
//             backgroundImage:
//               "linear-gradient(to left, rgba(0, 0, 0, 0.2), rgba(0,0,0.9)), url('/home2.jpg')",
//           }}
//         >
//           <div className="flex flex-col items-start justify-center h-full m-auto text-left w-90px">
//             <h1 className="text-4xl w-[60%] font-bold text-[#f6f6f6]">
//               Consultoría y servicios empresariales
//             </h1>
//             <p className="text-xl w-[60%] font-medium text-[#f6f6f6] pt-10">
//               Potenciamos tu empresa con asesoramiento especializado en
//               estrategia, gestión y operaciones para optimizar tu rendimiento y
//               eficiencia.
//             </p>
//             <input
//               type="button"
//               className="bg-[#91C4FE] mt-6 text-[#374649] h-auto w-auto p-2 cursor-pointer rounded-full hover:scale-105 hover:bg-[#374649] hover:text-[#f6f6f6]"
//               value={"Contactanos"}
//             />
//           </div>
//         </div>;
//       )}

// export default Home;
