import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || []; //Si no encuenta nada nos devuelve un array vacio

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState(carritoInicial);

    const agregarAlCarrito = (item, cantidad) => {
        const itemAgregado = { ...item, cantidad };
        const nuevoCarrito = [...carrito]; //Hace una copia de carrito para poder modificarlo, ya que es un estado carrito y se deberia modifciar con setCarrito
        const estaEnElCarrito = nuevoCarrito.find(
            (producto) => producto.id === itemAgregado.id
        ); //Esto antes estaba en el if ()

        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad += cantidad;
        } else {
            nuevoCarrito.push(itemAgregado);
        }
        setCarrito(nuevoCarrito);
    };

    const cantidadEnCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0); //acc es el acomulador y prod es una referencia a cada producto del array. Arranca en 0
    };

    const precioTotal = () => {
        return carrito.reduce(
            (acc, prod) => acc + prod.precio * prod.cantidad,
            0
        );
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito]);

    return (
        <CartContext.Provider value={ {
                carrito, 
                agregarAlCarrito, 
                cantidadEnCarrito, 
                precioTotal, 
                vaciarCarrito,
            } }>
            {children}
        </CartContext.Provider>
    )
};
