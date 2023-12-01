//Esto estaba antes dentro del componentes de ItemList que anteriormente estaba en ItemListContainer
import React from 'react'

function Item( {producto} ) {
    return (
        <div>
            <img src={producto.image} alt={producto.title} />
            <h2>{producto.title}</h2>
            <p>${producto.price}</p>
            <p>{producto.description}</p>
        </div>
    )
}

export default Item