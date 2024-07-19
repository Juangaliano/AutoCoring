import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className=" top-0 w-full z-50 bg-[#f6f6f6]  shadow-2xl fixed ">
      <div className="flex items-center justify-between h-24 px-2 py-2 m-auto mx-auto w-90px max-full sm:px-6 lg:px-8">
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              className="block w-auto h-8 cursor-pointer"
              src="/logosvg.svg"
              alt="Logo"
            />
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li className="relative">
            <Link
              to="/"
              className="font-roboto text-left leading-7 tracking-normal font-semibold  text-[#374649] text-base opacity-100 visible transition-opacity duration-300 ease-in-out py-2 hover:text-[#91C4FE] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#91C4FE] after:transition-all after:duration-300 hover:after:w-full"
            >
              Inicio
            </Link>
          </li>
          <li className="transition-all ease-in-out border-b-2 border-transparent duration-300 hover:border-[#91C4FE]">
            <Link
              to="/Nosotros"
              className="font-roboto font-semibold text-left leading-7 tracking-normal  text-[#374649] text-base opacity-100 visible transition-opacity duration-300 ease-in-out py-2 hover:text-[#91C4FE]"
            >
              Nosotros
            </Link>
          </li>
          <li className="transition-all ease-in-out border-b-2 border-transparent duration-300 hover:border-[#91C4FE]">
            <Link
              to="/Servicios"
              className="font-roboto text-left leading-7 tracking-normal font-semibold  text-[#374649] text-base opacity-100 visible transition-opacity duration-300 ease-in-out py-2 hover:text-[#91C4FE]"
            >
              Servicios
            </Link>
          </li>
          <li className="transition-all ease-in-out border-b-2 border-transparent duration-300 hover:border-[#91C4FE]">
            <Link
              to="/Contacto"
              className="font-roboto text-left leading-7 tracking-normal font-semibold  text-[#374649] text-base opacity-100 visible transition-opacity duration-300 ease-in-out py-2 hover:text-[#91C4FE]"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
