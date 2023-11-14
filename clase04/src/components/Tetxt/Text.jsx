import React, { useState } from 'react';
import { TextH2 } from '../TextH2/TextH2';

export const Text = () => {

    const [show, setShow] = useState(false);

    function handleShow() {
        setShow(!show); //Lo contrario a lo que vale. Si es true, lo vuelve false y viceversa
    }
    
    return (
        <div>
            <button onClick={handleShow}>{show ? "Ocultar" : "Mostrar"}</button>
            {/* {show === true ? <h2>Hola, mundo!</h2> : <h2>Adios, mundo cruel!</h2>} */}
            {/* {show === true && <h2>Hola, mundo!</h2>} */}
            {show && <TextH2></TextH2>}
        </div>
    )
};