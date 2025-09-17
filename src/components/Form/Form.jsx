import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const datosFormulario = {
      name,
      email,
      phone,
    };
    console.log(datosFormulario);

    setEmail("");
    setName("");
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="ingrese su nombre"
        value={name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="ingrese su mail"
        value={email}
        onChange={handleChange}
      />
      <input
        type="number"
        name="phone"
        placeholder="ingrese su telefono"
        value={phone}
        onChange={handleChange}
      />

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
