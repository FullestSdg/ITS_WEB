import { useState } from "react";
/*
Crea un componente LoginForm.

Usa due useState separati per gestire i campi email e password.

Crea un form HTML con due input (uno per l'email, uno per la password) e un bottone "Login".

Collega il valore di ogni input alla rispettiva variabile di stato e aggiornalo mentre l'utente digita.

Quando il form viene inviato (al click del bottone), previeni il comportamento di default del form e mostra i valori di email e password in un alert.
*/

const LoginForm = () => {

    const [nome,setNome] = useState("")
    const [cognome,setCognome] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [persone,setPersone] = useState([])
        const gestioneDati =(e) =>{
            e.preventDefault();
            if(nome && cognome){
                setPersone([
                    ...persone,{
                       nome,
                       cognome
                    }
                ])
                setNome("")
                setCognome("")
            }else{
                alert("Inserisci tutti i dati")
            }

            console.log(e)
        };
    return (
    <div classname="container">
        <form className="row g-3" onSubmit={gestioneDati}>
            <div classname="col-md-6">
                <label htmlfor="nome">Nome</label>
                <input 
                    type="text" 
                    id="nome" 
                    className="form-control" 
                    required value={nome} 
                    onChange={(e) => setNome(e.target.value)}></input>
            </div>
            <div>
                <label htmlfor="cognome">Cognome</label>
                <input 
                    type="text"
                    id="nome" 
                    className="form-control" 
                    required value={cognome} 
                    onChange={(e) => setCognome(e.target.value)}></input>
            </div>

            <button className="btp btn-success">Login</button>
        </form>
        {email} {password}
    </div>);
};

export default LoginForm

/*

            <div>
                <label htmlfor="email">Email</label>
                <input type="email" required value={email} onChange={(event) => setEmail(event.target.value)}></input>
            </div>
            <div>
                <label htmlfor="password">Password</label>
                <input type="password" required value={password} onChange={(event) => setPassword(event.target.value)}></input>
            </div>

*/