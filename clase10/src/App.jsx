import Contacto from './components/Contacto';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import Nosotros from './components/Nosotros';
import './main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {  CartProvider } from "./context/CartContext";
import Carrito from "./components/Carrito";

function App() {

  

  return (
    <div>
      <CartProvider>
        <BrowserRouter>

          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos/" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>

          {/* <Footer /> */}

        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;

//<Navbar /> --> Al no estar dentro de <Routes></Routes> se va a renderizar(mostrar) en todas las paginas
//path="" --> colocamos la ruta (url) que queremos que renderice / despues de mi dominio a que url corresponde esa ruta
//elemt={} --> colocamos cual es el componete que se va a renderizar en esa ruta (url)