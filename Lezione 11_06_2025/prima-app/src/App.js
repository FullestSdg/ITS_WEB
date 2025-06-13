import './App.css';
import Clock from './Clock';
import Componente1 from './Componente1';


function getDate(date){

  return date.toLocaleDateString() + " " + date.toLocaleTimeString()

}
function App() {

  let nome = "Sergio"

  return (
    <>
    <div className="App">
      <h1>Primo Elemento {nome} </h1>
      <Componente1> Sergio </Componente1>
      <Componente1/>
      <h2>
        {
          new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()

        }
      </h2>
      <h2>
      <Clock timezone="0" country="Italy"> </Clock>
      <Clock timezone="-6" country="USA"></Clock>
      <Clock timezone="7" country="Japan"></Clock>
    
      </h2>
          <h2>{getDate(new Date())}</h2>
    </div>
    <footer>

    </footer>
    </>
  );
}

export default App;
