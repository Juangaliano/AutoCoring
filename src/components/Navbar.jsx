function Navbar() {
  return (
    <div className="relative flex items-center justify-between h-16 px-2 mx-auto bg-white max-w-7xl sm:px-6 lg:px-8">
      <div className="flex-shrink-0">
        <img className="block w-auto h-8" src="/logosvg.svg" alt="Logo" />
      </div>
      <ul className="flex space-x-4">
        <li className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900">
          Home
        </li>
        <li>Nosotros</li>
        <li>Servicios</li>
        <li>Contactanos</li>
      </ul>
    </div>
  );
}

export default Navbar;
