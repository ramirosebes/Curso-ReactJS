import React, { useState } from 'react';

export const Counter = () => {
    
    const [number, setNumber] = useState(0);

    const sumar = () => {
        setNumber(number + 1);
    }

    const restar = () => {
        setNumber(number - 1);
    }
    
    return (
        <div>
            <button onClick={restar}>Restar</button>
            <h2>{number}</h2>
            <button onClick={sumar}>Sumar</button>
            <hr />
        </div>
    )
};

//setFunction
//Siempre la funcion se debe colocar set y el nombre de lo que estemos modificando

//useState() 
//Lo que va entre () es por defecto el valor inicial del state
//Si es un numero se coloca 0 si es un string se coloca '' si es un objeto se coloca {}
