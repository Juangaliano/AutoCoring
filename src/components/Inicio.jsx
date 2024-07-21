import Sliders from "./Sliders";

function Inicio() {
  return (
    <>
      <Sliders />
      <section id="empresa" className="h-[100vh] w-full text-[#374649]">
        <div className="flex flex-col items-center justify-center h-full gap-10 m-auto text-center w-90px">
          <span
            className="text-5xl font-medium "
            style={{ fontFamily: "Dancing Script" }}
          >
            Una empresa que ayuda a empresas
          </span>
          <p className="px-10 text-xl font-medium">
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
      <section className=" w-full h-[100vh]">
        <div className="bg-[#074CA6] w-full h-[15vh] flex flex-col items-center justify-center shadow-xl">
          <p className="text-3xl w-[60%] font-bold text-[#f6f6f6] text-center">
            Descubre todo lo que AutoCoring tiene para ofrecer
          </p>
        </div>
        <div className="flex flex-row gap-3 m-auto mt-20 w-90px">
          <div className="w-[25%] h-[350px] py-10 gap-6 flex flex-col items-center border-2  px-3 text-center shadow-lg">
            <h3 className="text-xl font-bold ">ISO 9001/2015</h3>
            <img src="/Innovadores.svg" alt="" />
            <span className="text-ellipsis">
              Estandarizacion y simplificacion mediante la implementacion de
              calida ISO 9001/2015.
            </span>
          </div>
          <div className="w-[25%] h-[350px] py-10 gap-6 flex flex-col items-center border-2  px-3 text-center shadow-lg">
            <h3 className="text-xl font-bold ">100% Enfocados</h3>
            <img src="/Enfocados.svg" alt="" />
            <span>
              Enfocados en la obtimizacion de procesos industriales y servicios,
              maximizando la rentabilidad de las empresas.
            </span>
          </div>
          <div className="w-[25%] h-[350px] py-10 gap-6 flex flex-col items-center border-2  px-3 text-center shadow-lg">
            <h3 className="text-xl font-bold ">Capacitacion</h3>
            <img src="/Capacitados.svg" alt="" />
            <span>
              Capacitacion sobre el desarrollo de herraminetas y habilidades
              utiles para la produccion, tecnologias IoT y robotica.
            </span>
          </div>
          <div className="w-[25%] h-[350px] py-10 gap-6 flex flex-col items-center border-2  px-3 text-center shadow-lg">
            <h3 className="text-xl font-bold ">Innovadores</h3>
            <img src="/Estrategas.svg" alt="" />
            <span>
              Ofrecemos soluciones innovadoras para cualquier tipo de empresa u
              organización, no importa cuál sea su rubro.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Inicio;
