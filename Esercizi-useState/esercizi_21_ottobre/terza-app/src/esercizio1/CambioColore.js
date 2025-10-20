import { useState } from "react";

const CambioColore = () => {

    const [colore, setColore] = useState("")

    const CambiaColore = (colore) =>{
        setColore(colore)
    }

    const checkColore = (colore) => {
        if (colore === "verde"){
            return <h1 style={{ color: "green" }}> Ciao Mondo </h1>
        }if (colore === "rosso") {
            return <h1 style={{ color: "red" }}> Ciao Mondo </h1>
        }if(colore === "blu") {
            return <h1 style={{ color: "blue" }}> Ciao Mondo </h1>
        }else{
            return <h1> Ciao Mondo </h1>
        }
    };
    
    return(
        <div >
        <h1 className="text-center mt-5"> {checkColore(colore)} </h1>
        <button className="btn px-4" style={{
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
            }} onClick={()=>CambiaColore("verde")}> Colore Verde </button>
        <button
            className="btn px-4"
            style={{
              backgroundColor: "#dc3545",
              color: "white",
              border: "none",
            }} onClick={()=>CambiaColore("rosso")}> Colore Rosso </button>
        <button
            className="btn px-4"
            style={{
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
            }} onClick={()=>CambiaColore("blu")}> Colore Blu </button>
        </div>
    );
};

export default CambioColore