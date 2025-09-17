import React from 'react'
import piatti from './piatti'

const MenuRistorante = () => {
    console.log(piatti)
  return (
    <div>
        {
            piatti.map((p)=>{
                    console.log(p);
               return (<p key={p.id}>{p.nome}</p>)
            })
        }
    </div>
  );
};

export default MenuRistorante