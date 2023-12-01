//Esto antes estaba en ItemlistContainer.jsx
import data from '../data/productos.json'; //Si se exporta con el modulo de Json no hace falta convertirlo con ningun metood (parse, tojson...)

export const pedirProductos = () => {
    return new Promise ((resolve, reject) => {
        resolve(data)
    })
}

export default pedirProductos;