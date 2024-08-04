import Contacto from "./Contacto";
import Sliders from "./Sliders";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Inicio() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Ajusta la duración de la animación si es necesario
  }, []);

  return (
    <>
      <Sliders />
      <section
        id="empresa"
        className="h-auto py-10 md:py-[100px] md:h-[auto] w-full text-[#374649]"
      >
        <div className="flex flex-col items-center h-full gap-10 py-5 m-auto text-center md:flex-row w-90px">
          <div className="flex flex-col  h-full gap-10 m-auto text-center w-full md:w-[40%]">
            <span className="text-3xl font-bold md:text-3xl ">
              Impulsamos el Crecimiento Empresarial
            </span>
            <p className="px-0 font-medium md:px-10 md:text-[16px]">
              En AutoCoring, transformamos tus desafíos en oportunidades de
              crecimiento. Ofrecemos soluciones personalizadas diseñadas para
              fortalecer tu modelo de negocio, comprendiendo a fondo tus
              necesidades y capitalizando tus fortalezas. Nos especializamos en
              impulsar el potencial humano y crear sistemas de trabajo
              eficientes y simples.
            </p>
            <p className="px-0 font-medium md:px-10 md:text-[16px]">
              Descubre nuestras soluciones integrales en Management, Gestión,
              Tecnología y Liderazgo, y da el siguiente paso hacia la excelencia
              empresarial.
            </p>
          </div>
          <div className=" flex h-[100%] flex-col gap-10 m-auto w-full md:w-[40%]">
            <div className="flex flex-col gap-5 py-2 border-b-2 text-start">
              <div className="flex flex-row items-center justify-start gap-2 font-semibold group">
                
                <p>01 | Definición de Objetivos y Análisis de Requisitos</p>
              </div>
              <span className="hidden text-start ">
                Se identifican las necesidades y expectativas del negocio
                determinando los límites y objetivos del proyecto. Implica
                estudiar las fuentes de datos disponibles y la especificación de
                las necesidades técnicas, como almacenamiento, seguridad y
                rendimiento.
              </span>
            </div>
            <div className="flex flex-col gap-5 py-2 border-b-2 text-start">
              <div className="flex flex-row items-center justify-start gap-2 font-semibold group">
                
                <p>02 | Diseño de la solución</p>
              </div>
              <span className="hidden text-start ">
                Se identifican las necesidades y expectativas del negocio
                determinando los límites y objetivos del proyecto. Implica
                estudiar las fuentes de datos disponibles y la especificación de
                las necesidades técnicas, como almacenamiento, seguridad y
                rendimiento.
              </span>
            </div>
            <div className="flex flex-col gap-5 py-2 border-b-2 text-start">
              <div className="flex flex-row items-center justify-start gap-2 font-semibold group">
                
                <p>03 | Desarrollo e Implementación</p>
              </div>
              <span className="hidden text-start ">
                Se identifican las necesidades y expectativas del negocio
                determinando los límites y objetivos del proyecto. Implica
                estudiar las fuentes de datos disponibles y la especificación de
                las necesidades técnicas, como almacenamiento, seguridad y
                rendimiento.
              </span>
            </div>
            <div className="flex flex-col gap-5 py-2 border-b-2 text-start">
              <div className="flex flex-row items-center justify-start gap-2 font-semibold group">
                
                <p>04 | Pruebas, Mantenimiento y Mejora Continua</p>
              </div>
              <span className="hidden text-start ">
                Se identifican las necesidades y expectativas del negocio
                determinando los límites y objetivos del proyecto. Implica
                estudiar las fuentes de datos disponibles y la especificación de
                las necesidades técnicas, como almacenamiento, seguridad y
                rendimiento.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section
        id="FormadeTrabajo"
        className="relative h-auto w-full text-[#000] bg-no-repeat bg-top bg-[url('/action.webp')] bg-cover py-20 font-bold "
        style={{
          backgroundImage:
            "linear-gradient(to left, rgba(200, 200, 200, 0.2), rgba(200,200,200,0.9)), url('/home2.webp')",
        }}
      >
        <div className="flex flex-col items-start justify-center h-full m-auto font-normal w-90px">
          <h2 className="w-full md:w-[50%] text-start mb-4 text-2xl md:text-3xl leading-normal">
            Desarrollamos{" "}
            <strong className="bg-colorPrimario text-[#000] font-semibold leading-normal">
              estrategias inteligentes de gestión empresarial
            </strong>{" "}
            adaptadas a las necesidades específicas de tu compañía.
          </h2>
          <input
            type="button"
            className="bg-[#074CA6] text-[#000] h-auto w-auto p-3 cursor-pointer rounded-full hover:scale-105 hover:bg-[#374649] hover:text-[#f6f6f6]"
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
          <div
            data-aos="fade-up"
            className="w-full md:w-[25%] bg-[white] h-[350px] py-10 gap-x-12 md:gap-6 flex flex-col items-center border-2  px-3 text-center shadow-lg"
          >
            <h3 className="text-xl font-bold ">ISO 9001:2015</h3>
            <img src="/Innovadores.svg" alt="" />
            <span className="text-ellipsis">
              Estandarización y simplificación mediante la implementación de la
              norma ISO 9001:2015.
            </span>
          </div>
          <div
            data-aos="fade-up"
            className="w-full md:w-[25%] bg-white h-[350px] py-10 gap-6 flex flex-col items-center border-2  px-3 text-center shadow-lg"
          >
            <h3 className="text-xl font-bold ">100% Enfocados</h3>
            <img src="/Enfocados.svg" alt="" />
            <span>
              Enfocados en la optimización de procesos industriales y servicios,
              maximizando la rentabilidad de las empresas.
            </span>
          </div>
          <div
            data-aos="fade-up"
            className="w-full md:w-[25%] bg-white h-[350px] py-10 gap-6 flex flex-col items-center border-2  px-3 text-center shadow-lg"
          >
            <h3 className="text-xl font-bold ">Capacitación</h3>
            <img src="/Capacitados.svg" alt="" />
            <span>
              Capacitación sobre el desarrollo de herramientas y habilidades
              útiles para la producción, tecnologías IoT y robótica.
            </span>
          </div>
          <div
            data-aos="fade-up"
            className="w-full bg-white md:w-[25%] h-[350px] py-10 gap-6 flex flex-col items-center border-2  px-3 text-center shadow-lg"
          >
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
