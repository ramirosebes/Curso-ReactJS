import { useState, useEffect } from "react"

export const TextH2 = () => {
    const [text, setText] = useState("");

    const handleText = (event) => {
        setText(event.target.value);
    }

    useEffect(() => {
        console.log("Componente montado");
        return () => {
            console.log("Componente desmontado");
        }
    }, []);

    useEffect(() => {
        console.log("Texto modificado");
    }, [text]);

    return (
        <div>
            <input type="text" onChange={handleText}/>
            <h2>{text}</h2>
        </div>
    )
}

// useEffect()
//Si no le colocamos un segundo paramentro, se ejecuta cada vez que se renderiza (actualiza) el componente
//Si le colocamos un segundo parametro, se ejecuta solo cuando el valor del segundo parametro cambia
//Si le colocamos un segundo parametro vacio, se ejecuta solo cuando se monta el componente
//Si le colocamos un return en el useEffect, se ejecuta cuando se desmonta el componente
//Si le colocamos un return en el useEffect y le colocamos un segundo parametro, se ejecuta cuando se desmonta el componente y cuando el valor del segundo parametro cambia
//Si le colocamos un return en el useEffect y le colocamos un segundo parametro vacio, se ejecuta cuando se desmonta el componente y cuando se monta el componente
