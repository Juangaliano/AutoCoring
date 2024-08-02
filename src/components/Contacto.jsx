import Formulario from "./Formulario";

function Contacto() {
  return (  
    <section id="secContacto" className="bg-gray-200">
      <div className="flex flex-col md:flex-row h-auto md:h-[80vh] m-auto w-90px">
        <div className="w-full md:w-[40%] flex flex-col items-start gap-8 py-8 md:p-8">
          <h4 className="text-2xl md:text-3xl font-bold">Agenda una reunión</h4>
          <p>
            Completa el siguiente formulario de contacto y un miembro de nuestro
            equipo se pondrá en contacto contigo en breve para discutir cómo
            podemos ayudarte.
          </p>
          <img
            src="/logo.svg"
            alt=""
            className="block w-auto h-8 cursor-pointer"
          />
        </div>

        <div className="py-6 md:p-8 w-full md:w-[60%]">
          <Formulario />
        </div>
      </div>
    </section>
  );
}

export default Contacto;
