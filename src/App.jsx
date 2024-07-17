import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="relative h-screen w-full text-[#f6f6f6] bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(to left, rgba(0,0,0,0.1), rgba(0,0,0,0.9)), url('/home2.jpg')",
        }}>
          <div className="flex flex-col items-start justify-center h-full m-auto text-left w-90px">
            <h1
              className="z-5 font-poppins h-auto text-white no-underline whitespace-nowrap w-[912px] min-h-0 min-w-0 max-h-none max-w-none text-left leading-[70px] tracking-normal font-bold text-[40px] origin-center opacity-100 visible"
              style={{ transform: "perspective(600px)" }}
            >
              Consultoría y servicios empresariales
            </h1>

            {/* <h2 class="elementor-heading-title elementor-size-default"><strong>Maximiza tu productividad</strong> automatizando los procesos de tu empresa</h2>	 */}
            <p className="text-xl w-[60%] font-medium text-white pt-14">
            Potenciamos tu empresa con asesoramiento especializado en estrategia, gestión, operaciones para optimizar tu rendimiento y eficiencia. 
            </p>
          </div>
        </div>
      <section id="empresa" className="h-[60vh] w-full text-[#374649]">
        <div className="flex flex-col items-center justify-center h-full m-auto text-center w-90px">
          <h2 className="text-4xl font-bold">AutoCoring</h2>
          <span className="my-10 text-3xl font-medium">
            Una empresa que ayuda a empresas
          </span>
          <p className="px-4 text-xl font-medium">
            Diseñamos soluciones a medida para fortalecer tu modelo de negocio. Nos enfocamos en comprender a fondo tus necesidades y fortalezas, impulsando el potencial humano y creando sistemas de trabajo simples y eficientes.
          </p>
        </div>
      </section>
      <section
        id="FormadeTrabajo"
        className="relative h-auto w-full text-[#f6f6f6] bg-no-repeat bg-center bg-cover py-20 font-bold"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(0,0,0,0.9), rgba(0,0,0,0.5)), url('/action.jpg')",
        }}
      >
        <div className="flex flex-col items-start justify-center h-full m-auto font-normal w-90px">
          <h2 className="w-[50%] text-start mb-4 text-3xl leading-normal">
            Desarrollamos{" "}
            <strong className="bg-[#cdc22a] font-normal text-[#374649]">
              estrategias inteligentes de gestión empresarial
            </strong>{" "}
            adaptadas a las necesidades específicas de tu compañía.
          </h2>
          <input
            type="button"
            className="bg-[#cdc22a] text-[#374649] h-auto w-auto p-3 cursor-pointer rounded-full hover:scale-105"
            value={"Agenda una llamada"}
          />
        </div>
      </section>
    </>
  );
}

export default App;
