import { useState } from "react";

const EchoInput = () => {

    const [testo, setTesto] = useState("")

    return (
        <div>
            <h1 className="d-flex justify-content-center gap-3 mt-4"> Scrivi il tuo testo: </h1>
            <input 
                type = "text" 
                placeholder = "Scrivi il tuo testo" 
                value = {testo} onChange={(e) => setTesto(e.target.value)}
                style={{
                    padding: "8px 12px",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    outline: "none",
                }}/> 

                <h3 className="mt-4">
                    Stai scrivendo: <span style={{ color: "#007bff" }}>{testo}</span>
                </h3>
        </div>
    );
};

export default EchoInput