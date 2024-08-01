function Servicios() {
  return (
    <div>
      <div className="mt-[96px] bg-colorPrimario text-center h-[100px] flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-white">Servicios</h1>
      </div>
      <div className="flex max-w-[1224px] flex-col items-center justify-center gap-5 py-20 px-5 m-auto text-center w-90px">
        <h2 className="text-[#374649] text-3xl font-bold">
          Potenciamos el crecimiento de tu empresa
        </h2>
        <p>
          Maximizamos tus ventajas, buscamos nuevas oportunidades, gestionamos
          riesgos y optimizamos tus debilidades.
        </p>
        <p>
          Explora cómo <strong>AutoCoring</strong> puede ayudarte con nuestros
          servicios especializados.
        </p>
      </div>

      <div className="flex  h-[100vh] my-10 flex-row flex-wrap items-center justify-center gap-5 ">
        <div className="flex flex-col gap-8 w-[25%] items-center justify-center text-center h-[250px] p-3 border rounded-xl bg-white shadow-xl">
          <img src="imagen1.svg" alt="" className="w-[80px]" />
          <p>
            Desarrollo, consultoría e implementación de sistema de gestión de
            calidad
          </p>
        </div>
        <div className="flex flex-col gap-8 w-[25%] items-center justify-center text-center h-[250px] p-3 border rounded-xl bg-white shadow-xl">
          <img src="imagen10.svg" alt="" className="w-[80px]" />
          <p>Acompañamiento en la certificación de normas ISO</p>
        </div>
        <div className="flex flex-col gap-8 w-[25%] items-center justify-center text-center h-[250px] p-3 border rounded-xl bg-white shadow-xl">
          <img src="imagen9.svg" alt="" className="w-[80px]" />
          <p>Auditorias internas de gestión de calidad</p>
        </div>
        <div className="flex flex-col gap-8 w-[25%] items-center justify-center text-center h-[250px] p-3 border rounded-xl bg-white shadow-xl">
          <img src="imagen3.svg" alt="" className="w-[80px]" />
          <p>Soporte en el mantenimiento del sistema de gestión</p>
        </div>
        <div className="flex flex-col gap-8 w-[25%] items-center justify-center text-center h-[250px] p-3 border rounded-xl bg-white shadow-xl">
          <img src="imagen4.svg" alt="" className="w-[80px]" />
          <p>Capacitación y talleres</p>
        </div>
        <div className="flex flex-col gap-8 w-[25%] items-center justify-center text-center h-[250px] p-3 border rounded-xl bg-white shadow-xl">
          <img src="imagen2.svg" alt="" className="w-[80px]" />
          <p>Mejora continua</p>
        </div>
      </div>
      <div>
        <div className="flex max-w-[1224px] flex-col items-center justify-center gap-5 py-20 px-5 m-auto text-center w-90px">
          <h2 className="text-[#374649] text-3xl font-bold">
            ¿Cómo te acompañamos?
          </h2>
          <p>
            En un mundo acelerado, nuestro equipo está listo para ayudarte a
            adaptar y optimizar tu empresa, mejorando procesos, la satisfacción
            de empleados y tu relación con los clientes.
          </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-5 m-auto my-5 w-90px ">
          <div className="flex flex-col gap-8 w-[25%] items-center justify-center text-center h-[350px] p-3  bg-white shadow-xl group hover:border-t-4 hover:border-t-[#074CA6]">
            <div className="w-[80px] font-bold text-4xl group-hover:hidden text-[#074CA6]">
              1
            </div>
            <p className="font-bold group-hover:text-2xl">Etapa de preparacion</p>
            <ul className="flex flex-col items-start pl-5 text-sm list-disc text-start">
              <li>Relevamiento  de los procesos de dirección</li>
              <li>
                Relevamiento de procesos operativos y de apoyo
              </li>
              <li>
                Capacitación de conceptos y herramientas normas ISO 9001:2015
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-8 w-[25%] items-center justify-center text-center h-[350px] p-3  bg-white shadow-xl group hover:border-t-4 hover:border-t-[#074CA6]">
            <div className="w-[80px] font-bold text-4xl group-hover:hidden text-[#074CA6]">
              2
            </div>
            <p className="font-bold group-hover:text-2xl">Etapa Implementación</p>
            <ul className="flex flex-col items-start pl-5 text-sm list-disc text-start">
              <li>Difusión</li>
              <li>Capacitación de los procesos</li>
              <li>Implementación</li>
            </ul>
          </div>
          <div className="flex flex-col gap-8 w-[25%] items-center justify-center text-center h-[350px] p-3  bg-white shadow-xl group hover:border-t-4 hover:border-t-[#074CA6]">
            <div className="w-[80px] font-bold text-4xl group-hover:hidden text-[#074CA6]">
              3
            </div>
            <p className="font-bold group-hover:text-2xl">Etapa Verificación</p>
            <ul className="flex flex-col items-start pl-5 text-sm list-disc text-start">
              <li>Auditorias internas</li>
              <li>Revisión por dirección</li>
              <li>Gestión de hallazgos</li>
            </ul>
          </div>
          <div className="flex flex-col gap-8 w-[25%] items-center justify-center text-center h-[350px] p-3  bg-white shadow-xl group hover:border-t-4 hover:border-t-[#074CA6]">
            <div className="w-[80px] font-bold text-4xl group-hover:hidden text-[#074CA6]">
              4
            </div>
            <p className="font-bold group-hover:text-2xl">Mejora Contínua</p>
            <ul className="flex flex-col items-start pl-5 text-sm list-disc text-start">
              <li>Soporte en el mantenimiento</li>
              <li>Auditoria interna</li>
              <li>Mejora del sistema de gestión</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicios;
