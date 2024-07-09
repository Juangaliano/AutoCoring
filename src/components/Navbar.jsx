function Navbar() {
  return (
    <div className="relative flex items-center justify-between px-2 py-4 mx-auto bg-white h-28 max-full sm:px-6 lg:px-8">
      <div className="flex-shrink-0">
        <img className="block w-auto h-8 cursor-pointer" src="/logosvg.svg" alt="Logo"  />
      </div>
      <ul className="flex space-x-4">
        <li className="relative">
          <a
            href="#"
            className="font-roboto text-left leading-7 tracking-normal font-semibold text-[#b2b2b2] text-base opacity-100 visible transition-opacity duration-300 ease-in-out py-2 hover:text-[#91C4FE] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#91C4FE] after:transition-all after:duration-300 hover:after:w-full"
          >
            Inicio
          </a>
        </li>
        <li className="transition-all ease-in-out border-b-2 border-transparent duration-300 hover:border-[#91C4FE]">
          <a
            href="#"
            className="font-roboto font-semibold text-left leading-7 tracking-normal text-[#b2b2b2] text-base opacity-100 visible transition-opacity duration-300 ease-in-out py-2 hover:text-[#91C4FE]"
          >
            Nosotros
          </a>
        </li>
        <li className="transition-all ease-in-out border-b-2 border-transparent duration-300 hover:border-[#91C4FE]">
          <a
            href="#"
            className="font-roboto text-left leading-7 tracking-normal font-semibold text-[#b2b2b2] text-base opacity-100 visible transition-opacity duration-300 ease-in-out py-2 hover:text-[#91C4FE]"
          >
            Servicios
          </a>
        </li>
        <li className="transition-all ease-in-out border-b-2 border-transparent duration-300 hover:border-[#91C4FE]">
          <a
            href="#"
            className="font-roboto text-left leading-7 tracking-normal font-semibold text-[#b2b2b2] text-base opacity-100 visible transition-opacity duration-300 ease-in-out py-2 hover:text-[#91C4FE]"
          >
            Contacto
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
