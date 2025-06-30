import React,{useEffect, useState} from 'react'

const EsempioUseEffect = () => {
    const [count, setCount] = useState(0);



    useEffect(() => {
        console.log("Ho chiamato useffect")
        if(count<1){
            document.title = "Nessun titolo"
        }else{
            document.title = "Ho trovato qualcosa"
        }
    },[count]);
    // console.log("Ho chiamato useffect")
  return (
    <>
    <div>EsempioUseEffect {count}</div>
    <button onClick={() => setCount(count + 1)}> Incrementa </button>;
    </>
  );
};

export default EsempioUseEffect