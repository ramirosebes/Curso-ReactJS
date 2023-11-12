import './App.css';

function App() {
  const nombre1 = "Carpi";
  const nombre = <h1>Carpi</h1>;
  const edad = <p>27</p>
  const email = <p>hola@carpicoder.com</p>
  const usuario = <div>{nombre} {edad} {email}</div>

  return (
    <div className="App">
      {/* Forma 1 */}
      {/* <h1>{nombre1}</h1> */}

      {/* Forma 2 */}
      {/* {nombre} */}

      {/* Forma 3 */}
      {/* <div>
        {nombre1}
        {edad}
        {email}
      </div> */}
      
      {/* Forma 4 */}
      {/* {usuario} */}

      {/* Forma 5 */}
      {/* <MostrarNombreComponente></MostrarNombreComponente> */}
      <MostrarNombreComponente/>
    </div>
  );
}

//Funcion normal de js
const MostrarNombre = () => {
  return "carpi"
}

//Componente
const MostrarNombreComponente = () => {
  return <h1>carpi</h1>
}

export default App;
