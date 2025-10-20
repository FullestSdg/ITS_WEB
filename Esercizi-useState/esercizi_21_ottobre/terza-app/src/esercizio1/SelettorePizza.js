import { useState } from "react";

const SelettorePizza = () => {

    const [pizza, setPizza] = useState("")

    const CambioPizza = (e) => {
    setPizza(e.target.value);
  };

  return (

    <div className="d-flex flex-column align-items-center mt-5">
      <h1> Scegli il tipo di pizza: </h1>

      <select
        value={pizza}
        onChange={CambioPizza}
        style={{
          marginTop: "20px",
          padding: "10px 15px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "1rem",
        }}
      > 
        <option value = ""> Scegli la pizza: </option>
        <option value = "Margherita"> Margherita </option>
        <option value = "Diavola"> Diavola </option>
        <option value = "Capricciosa"> Bufalina </option>
        <option value = "Quattro Formaggi"> Boscaiola </option>
      </select>

      <h3 className="mt-4">
        {pizza}
      </h3>
    </div>
  );
};

export default SelettorePizza