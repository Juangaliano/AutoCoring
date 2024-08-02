import Contacto from "./Contacto";
import Sliders from "./Sliders";

function Inicio() {
  return (
    <>
      <Sliders />
      <section id="empresa" className="h-auto py-8 md:h-[50vh] w-full text-[#374649]">
        <div className="flex flex-col items-center justify-center h-full gap-10 m-auto text-center w-90px">
          <span
            className="text-4xl font-medium md:text-5xl "
            style={{ fontFamily: "Dancing Script" }}
          >
            Una empresa que ayuda a empresas
          </span>
          <p className="px-0 font-medium md:px-10 md:text-xl">
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
            "linear-gradient(0deg, rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url('/action.webp')",
        }}
      >
        <div className="flex flex-col items-start justify-center h-full m-auto font-normal w-90px">
          <h2 className="w-full md:w-[50%] text-start mb-4 text-2xl md:text-3xl leading-normal">
            Desarrollamos{" "}
            <strong className="bg-colorPrimario text-[#f6f6f6] font-semibold">
              estrategias inteligentes de gestión empresarial
            </strong>{" "}
            adaptadas a las necesidades específicas de tu compañía.
          </h2>
          <input
            type="button"
            className="bg-[#074CA6] text-[#f6f6f6] h-auto w-auto p-3 cursor-pointer rounded-full hover:scale-105 hover:bg-[#374649] hover:text-[#f6f6f6]"
            value={"Agenda una llamada"}
          />
        </div>
      </section>
      <section className=" w-full h-auto md:h-[100vh] pt-0 py-8">
        <div className="bg-[#074CA6] w-full h-[15vh] flex flex-col items-center justify-center shadow-xl">
          <p className="text-2xl md:text-3xl w-90px md:w-[60%] m-auto font-bold text-[#f6f6f6] text-center">
            Descubre todo lo que AutoCoring tiene para ofrecer
          </p>
        </div>
        <div className="flex flex-col h-auto gap-4 m-auto mt-20 md:flex-row w-90px">
          <div className="w-full md:w-[25%] h-[350px] py-10 gap-x-12 md:gap-6 flex flex-col items-center border-2  px-3 text-center shadow-lg">
            <h3 className="text-xl font-bold ">ISO 9001:2015</h3>
            <img src="/Innovadores.svg" alt="" />
            <span className="text-ellipsis">
              Estandarización y simplificación mediante la implementación de la
              norma ISO 9001:2015.
            </span>
          </div>
          <div className="w-full md:w-[25%] h-[350px] py-10 gap-6 flex flex-col items-center border-2  px-3 text-center shadow-lg">
            <h3 className="text-xl font-bold ">100% Enfocados</h3>
            <img src="/Enfocados.svg" alt="" />
            <span>
              Enfocados en la optimización de procesos industriales y servicios,
              maximizando la rentabilidad de las empresas.
            </span>
          </div>
          <div className="w-full md:w-[25%] h-[350px] py-10 gap-6 flex flex-col items-center border-2  px-3 text-center shadow-lg">
            <h3 className="text-xl font-bold ">Capacitación</h3>
            <img src="/Capacitados.svg" alt="" />
            <span>
              Capacitación sobre el desarrollo de herramientas y habilidades
              útiles para la producción, tecnologías IoT y robótica.
            </span>
          </div>
          <div className="w-full md:w-[25%] h-[350px] py-10 gap-6 flex flex-col items-center border-2  px-3 text-center shadow-lg">
            <h3 className="text-xl font-bold ">Innovación</h3>
            <img src="/Estrategas.svg" alt="" />
            <span>
              Ofrecemos soluciones innovadoras para cualquier tipo de empresa u
              organización, sin importar cuál sea su rubro.
            </span>
          </div>
        </div>
      </section>
      <Contacto />
    </>
  );
}

export default Inicio;
