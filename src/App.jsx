import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="w-full bg-no-repeat bg-center h-screen bg-cover bg-[url('/home2.jpg')] ">
        <div className="relative h-screen bg-black/50">
          <div className="flex flex-col h-full p-24 text-left items-start w-[70%]">
            <h1
              className="z-5 font-roboto h-auto text-white no-underline whitespace-nowrap w-[912px] min-h-0 min-w-0 max-h-none max-w-none text-left leading-[70px] tracking-normal font-bold text-[61px] origin-center opacity-100 visible"
              style={{ transform: "perspective(600px)" }}
            >
              Consultoría y servicios empresariales
            </h1>
            <p className="text-xl font-medium text-white pt-14">
              Asesoramiento y apoyo especializado en áreas como estrategia,
              gestión, operaciones, tecnología, recursos humanos y finanzas para
              mejorar el rendimiento y la eficiencia de una empresa.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
