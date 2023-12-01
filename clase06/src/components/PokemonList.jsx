import React, { useEffect, useState } from 'react'

function PokemonList() {

    const [currentList, setCurrentList] = useState({});
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=5&offset=0");
    const [next, setNext] = useState("");
    const [previous, setPrevious] = useState("");
    
    const handlePrevious = () => {
        previous && setUrl(previous);
    }

    const handleNext = () => {
        setUrl(next);
    }

    useEffect(() => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                setCurrentList(data);
                setNext(data.next);
                setPrevious(data.previous);
            })
    }, [url]);

    return (
        <div>
            {
                currentList &&
                <div>
                    {currentList.results.map((pokemon) => {
                        return (
                            <div key={pokemon.name}>
                                <h2>{pokemon.name}</h2>
                            </div>
                        )
                    })}
                    <button onClick={handlePrevious}>Anterior</button>
                    <button onClick={handleNext}>Siguiente</button>
                </div>
            }
        </div>
    )
}

export default PokemonList