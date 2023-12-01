import { useEffect, useState } from 'react'
import { pedirProductos } from './pedirProductos'
import ItemList from './ItemList'

function ItemListContainer() {

    const [productos, setProductos] = useState([])

    useEffect(() => { 
        pedirProductos()
            .then((res) => {
                setProductos(res);
            })
    }, [])

    return (
        <ItemList productos={productos}></ItemList>
    )
}

export default ItemListContainer;

//let productos = []; //Esto no serviria ya que tiene que ser un estado

// const nombres = ["Carpi", "Matias", "Maria", "Jose"];
// //.map
// //Primer parameto reprenseta a cada elemento que recorremos
// const nombres2 = nombres.map((nombre => nombre + "1"))
// // const nombres2 = nombres.map((nombre => {return nombre + "1"}))
// console.log(nombres2);

// return (
//     <div>
//         productos.length > 0 &&
//         <div>
//             <img src={productos[0].image} alt={productos[0].title} />
//             <h2>{productos[0].title}</h2>
//             <p>${productos[0].price}</p>
//             <p>{productos[0].description}</p>
//             </div>
//     </div>
// )