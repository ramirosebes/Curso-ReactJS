import React, { useState, useEffect } from 'react'

function Pokemon() {

    const [pokemon, setPokemon] = useState();
    const [id, setId] = useState(1);

    const handleAnterior = () => {
        //id >1 && setId(id - 1);
        if (id > 1 ) {
            setId(id - 1);
        }
    }

    const handleSiguiente = () => {
        setId(id + 1);
    }


    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) // o "https://pokeapi.co/api/v2/pokemon/" + id
        .then((resp) => resp.json())
        .then((data) => {
            setPokemon(data);
        });
    }, [id]);

    return (
        <div>{
                pokemon && 
                <div>
                    <h2>{pokemon.name}</h2>
                    <p>ID: {pokemon.id}</p>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <br />
                    {
                        id > 1 ? <button onClick={handleAnterior}>Anterior</button> : <button disabled>Anterior</button>
                    }
                    <button onClick={handleSiguiente}>Siguiente</button>
                </div>
            }
        </div>
    )
}

export default Pokemon

// fetch("https://pokeapi.co/api/v2/pokemon/1")
//         .then((resp) => {
//             // console.log(resp)
//             //console.log(resp.json()); //Esto devuelve una promesa en estado pendiente
//             return resp.json(); // Hay que colocar el return si la arrow function tiene llaves {}, si se escribe en una sola linea no es necesario
//         })

//El use effect solo se ejecutra cuando el componete se monta, NO cuando se actualiza el estado