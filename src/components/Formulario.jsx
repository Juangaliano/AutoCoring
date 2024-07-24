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




  
  return (
    <form
      action=""
      className="w-full h-full bg-[#374649] rounded-2xl"
      onSubmit={handleSubmit}
    >
      <h4 className="text-[#f6f6f6] font-bold text-start pt-4 px-4">
        Dejanos tus datos:
      </h4>
      <div className="flex flex-col gap-5 p-4">
        <Input
          id="nombre"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <Input
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          id="telefono"
          placeholder="Telefono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
        <Input
          id="empresa"
          placeholder="Empresa"
          value={empresa}
          onChange={(e) => setEmpresa(e.target.value)}
        />
        <textarea
          id="mensaje"
          placeholder="Mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
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
