import { useState } from "react";
import Input from "./Input";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("Telefono:", telefono);
    console.log("Empresa:", empresa);
    console.log("Mensaje:", mensaje);
  };

  const handleNombreChange = (e) => setNombre(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleTelefonoChange = (e) => setTelefono(e.target.value);
  const handleEmpresaChange = (e) => setEmpresa(e.target.value);
  const handleMensajeChange = (e) => setMensaje(e.target.value);

  return (
    <form
      action=""
      className="w-full h-full bg-[#374649] rounded-2xl"
      onSubmit={handleSubmit}
    >
      <h4 className="text-[#f6f6f6] font-bold text-start pt-4 px-4">
      Déjanos tus datos:
      </h4>
      <div className="flex flex-col gap-5 p-4">
        <Input
          id="nombre"
          placeholder="Nombre"
          value={nombre}
          onChange={handleNombreChange}
        />
        <Input
          id="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <Input
          id="telefono"
          placeholder="Teléfono"
          value={telefono}
          onChange={handleTelefonoChange}
        />
        <Input
          id="empresa"
          placeholder="Empresa"
          value={empresa}
          onChange={handleEmpresaChange}
        />
        <textarea
          id="mensaje"
          placeholder="Mensaje"
          value={mensaje}
          onChange={handleMensajeChange}
          className="px-3 py-2 h-[100px] rounded-xl text-[13px]"
        />
      </div>
      <button
        className="w-[100px] rounded-xl p-2 mx-4 font-bold bg-white"
        type="submit"
      >
        Enviar
      </button>
    </form>
  );
}

export default Formulario;

