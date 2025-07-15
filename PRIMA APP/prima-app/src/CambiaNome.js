import { useState } from "react";

const CambiaNome = () => {

    const[nome, setNome] = useState("Sergio")

    const cambia = () =>{
        if(nome === "Sergio"){
            setNome("Francesco Totti")
        }else{
            setNome("Sergio")
        }
    };
    return (<div> 

        <h3>{nome}</h3>
        <button className="btn btn-dark" onClick={cambia}> CambiaNome</button>
        
        </div>)
};

export default CambiaNome;