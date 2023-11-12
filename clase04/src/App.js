import './App.css';
import { Card } from './components/Card/Card';
import { Usuario } from './components/Usuario/Usuario';

function App() {
  return (
    <div>
      <Usuario nombre="Carpi" edad={27} nacionalidad="Argenitna"/>
      <Usuario nombre="Maria" edad={34} nacionalidad="Uruguay"/>
      <Card/>
    </div>
  );
}

export default App;
