import { useState } from "react";
import "./Form.css";


const Form = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: ""});



  const handleChange = (e) => {
    const { name, value } = e.target; 

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Gracias ${user.name}, te contactaremos cuanto antes vía mail`);
    setUser({name: "", email: "", phone: ""});
  };




  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="ingrese su nombre"
        value={user.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="ingrese su mail"
        value={user.email}
        onChange={handleChange}
      />
      <input
        type="number"
        name="phone"
        placeholder="ingrese su telefono"
        value={user.phone}
        onChange={handleChange}
      />

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
