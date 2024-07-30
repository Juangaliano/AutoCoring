import Formulario from "./Formulario";

function Contacto() {
  return (
    <section id="secContacto">
      <div className="flex flex-row h-[80vh] m-auto w-90px">
        <div className="w-[40%] flex flex-col items-start gap-8 p-8">
          <h4 className="text-3xl font-bold">Agenda una reunión</h4>
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

        <div className="p-8 w-[60%]">
          <Formulario />
        </div>
      </div>
    </section>
  );
}

export default Contacto;
