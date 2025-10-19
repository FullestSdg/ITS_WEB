import { useState } from "react";

const MostraNascondi = () => {

    const [valore, setValore] = useState(false);

    const CambiaBool = (valore) =>{
        setValore(valore)
    };

    const CheckBool = () =>{
        if (valore === true) {
            return<div> Speriamo che il codice funzioni! </div>
        }else{
            return<div> </div>
        };
    };

    return (
        <div> 
            {CheckBool()}
            <button className="btn btn-primary" onClick={()=>CambiaBool(true)}> Mostra </button>
            <button className="btn btn-secondary" onClick={()=>CambiaBool(false)}> Nascondi </button>

        </div>
    )
};

export default MostraNascondi