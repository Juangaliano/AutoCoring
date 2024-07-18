
import Navbar from "./components/Navbar";
import Sliders from "./components/Sliders";

function App() {
  return (
    <>
      <Navbar />
      <Sliders />
      <section id="empresa" className="h-[60vh] w-full text-[#374649]">
        <div className="flex flex-col items-center justify-center h-full gap-10 m-auto text-center w-90px">
          <span className="text-3xl font-medium ">
            Una empresa que ayuda a empresas
          </span>
          <p className="px-6 text-xl font-medium">
            Diseñamos soluciones a medida para fortalecer tu modelo de negocio.
            Nos enfocamos en comprender a fondo tus necesidades y fortalezas,
            impulsando el potencial humano y creando sistemas de trabajo simples
            y eficientes.
          </p>
        </div>
      </section>
      <section
        id="FormadeTrabajo"
        className="relative h-auto w-full text-[#f6f6f6] bg-no-repeat bg-center bg-cover py-20 font-bold "
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url('/action.jpg')",
        }}
      >
        <div className="flex flex-col items-start justify-center h-full m-auto font-normal w-90px">
          <h2 className="w-[50%] text-start mb-4 text-3xl leading-normal">
            Desarrollamos{" "}
            <strong className="bg-[#91C4FE] font-normal text-[#374649]">
              estrategias inteligentes de gestión empresarial
            </strong>{" "}
            adaptadas a las necesidades específicas de tu compañía.
          </h2>
          <input
            type="button"
            className="bg-[#91C4FE] text-[#374649] h-auto w-auto p-3 cursor-pointer rounded-full hover:scale-105 hover:bg-[#374649] hover:text-[#f6f6f6]"
            value={"Agenda una llamada"}
          />
        </div>
      </section>
      <section className=" w-full h-[100vh]">
        <div className="bg-[#91C4FE] w-full h-[25vh] flex flex-col items-center shadow-xl">
          <p className="text-3xl w-[60%] font-bold text-[#f6f6f6] pt-14 text-center">
            Descubre todo lo que AutoCoring tiene para ofrecer
          </p>
        </div>
      </section>
    </>
  );
}

export default App;
