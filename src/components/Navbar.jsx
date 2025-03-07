

// import { Link, useLocation } from "react-router-dom";
// import { useState } from "react";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   function handleOpen() {
//     setIsOpen(!isOpen);
//   }

//   const location = useLocation();
//   const { pathname } = location;

//   const isActive = (path) =>
//     pathname === path ? "text-[#074CA6] after:w-full" : "";

//   return (
//     <div className="top-0 w-full z-50 bg-[#f6f6f6] md:h-auto h-[80px] md:shadow-xl fixed">
//       <div className="flex items-center justify-between h-24 px-2 py-2 m-auto mx-auto md:w-90px max-full sm:px-6 ">
//         <Link to="/">
//           <img
//             className="block w-[80px] md:w-auto h-8 cursor-pointer"
//             src="/logosvg.svg"
//             alt="Logo"
//           />
//         </Link>
//         <button className="text-[#000] md:hidden z-20" onClick={handleOpen}>
//           {isOpen ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-6 h-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-6 h-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           )}
//         </button>
//         <ul
//           className={`flex flex-col text-[#f6f6f6] md:flex-row text-center md:font-semibold md:space-x-6 absolute md:static bg-[#000] md:bg-transparent w-[70%]  h-[100vh] gap-10 pt-[50%] md:pt-0 md:gap-0 md:h-auto md:items-center md:justify-center md:w-auto top-[0px] md:top-0 left-0 transition-transform transform ${
//             isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
//           }`}
//           style={{ zIndex: isOpen ? 40 : 10 }}
//         >
//           <li className="relative">
//             <Link
//               to="/"
//               className={`font-roboto text-left leading-7 tracking-normal md:font-semibold md:text-[#374649] text-base opacity-100 visible transition-opacity duration-300 ease-in-out py-2 hover:text-[#074CA6] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#074CA6] after:transition-all after:duration-300  ${isActive(
//                 "/"
//               )}`}
//               onClick={handleOpen}
//             >
//               Inicio
//             </Link>
//           </li>
//           <li className="relative">
//             <Link
//               to="/Nosotros"
//               className={`font-roboto text-left leading-7 tracking-normal md:font-semibold md:text-[#374649] text-base opacity-100 visible transition-opacity duration-300 ease-in-out py-2 hover:text-[#074CA6] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#074CA6] after:transition-all after:duration-300 ${isActive(
//                 "/Nosotros"
//               )}`}
//               onClick={handleOpen}
//             >
//               Nosotros
//             </Link>
//           </li>
//           <li className="relative">
//             <Link
//               to="/Servicios"
//               className={`font-roboto text-left leading-7 tracking-normal md:font-semibold md:text-[#374649] text-base opacity-100 visible transition-opacity duration-300 ease-in-out py-2 hover:text-[#074CA6] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#074CA6] after:transition-all after:duration-300 ${isActive(
//                 "/Servicios"
//               )}`}
//               onClick={handleOpen}
//             >
//               Servicios
//             </Link>
//           </li>
//           <li className="relative">
//             <Link
//               to="/Contacto"
//               className={`font-roboto text-left leading-7 tracking-normal md:font-semibold md:text-[#374649] text-base opacity-100 visible transition-opacity duration-300 ease-in-out py-2 hover:text-[#074CA6] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#074CA6] after:transition-all after:duration-300 ${isActive(
//                 "/Contacto"
//               )}`}
//               onClick={handleOpen}
//             >
//               Contacto
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Navbar;




import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(!isOpen);
  }

  function handleClose() {
    setIsOpen(false);
  }

  const location = useLocation();
  const { pathname } = location;

  const isActive = (path) =>
    pathname === path ? "text-[#074CA6] after:w-full" : "";

  return (
    <div className="top-0 w-full z-50 bg-[#f6f6f6] md:h-auto h-[80px] md:shadow-xl fixed">
      <div className="flex items-center justify-between h-24 px-2 py-2 m-auto mx-auto md:w-90px max-full sm:px-8 ">
        <Link to="/">
          <img
            className="block w-[80px] md:w-auto h-8 cursor-pointer"
            src="/logosvg.svg"
            alt="Logo"
          />
        </Link>
        <button className="text-[#000] md:hidden z-20" onClick={handleOpen}>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
        <ul
          className={`flex flex-col text-[#f6f6f6] md:flex-row text-center md:font-semibold md:space-x-6 absolute md:static bg-[#000] md:bg-transparent w-[70%]  h-[100vh] gap-10 pt-[50%] md:pt-0 md:gap-0 md:h-auto md:items-center md:justify-center md:w-auto top-[0px] md:top-0 left-0 transition-transform transform ${
            isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
          style={{ zIndex: isOpen ? 40 : 10 }}
        >
          <li className="relative">
            <Link
              to="/"
              className={`font-roboto text-left leading-7 tracking-normal md:font-semibold md:text-[#374649] text-base opacity-100 visible transition-opacity duration-300 ease-in-out py-2 hover:text-[#074CA6] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#074CA6] after:transition-all after:duration-300  ${isActive(
                "/"
              )}`}
              onClick={handleOpen}
            >
              Inicio
            </Link>
          </li>
          <li className="relative">
            <Link
              to="/Nosotros"
              className={`font-roboto text-left leading-7 tracking-normal md:font-semibold md:text-[#374649] text-base opacity-100 visible transition-opacity duration-300 ease-in-out py-2 hover:text-[#074CA6] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#074CA6] after:transition-all after:duration-300 ${isActive(
                "/Nosotros"
              )}`}
              onClick={handleOpen}
            >
              Nosotros
            </Link>
          </li>
          <li className="relative">
            <Link
              to="/Servicios"
              className={`font-roboto text-left leading-7 tracking-normal md:font-semibold md:text-[#374649] text-base opacity-100 visible transition-opacity duration-300 ease-in-out py-2 hover:text-[#074CA6] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#074CA6] after:transition-all after:duration-300 ${isActive(
                "/Servicios"
              )}`}
              onClick={handleOpen}
            >
              Servicios
            </Link>
          </li>
          <li className="relative">
            <Link
              to="/Contacto"
              className={`font-roboto text-left leading-7 tracking-normal md:font-semibold md:text-[#374649] text-base opacity-100 visible transition-opacity duration-300 ease-in-out py-2 hover:text-[#074CA6] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#074CA6] after:transition-all after:duration-300 ${isActive(
                "/Contacto"
              )}`}
              onClick={handleOpen}
            >
              Contacto
            </Link>
          </li>
        </ul>
        {/* Background overlay for mobile menu */}
        {isOpen && (
          <div
            className="fixed inset-0 z-30 bg-black opacity-50 md:hidden"
            onClick={handleClose}
          ></div>
        )}
      </div>
    </div>
  );
}

export default Navbar;





