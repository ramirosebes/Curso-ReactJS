import React, { useEffect, useState } from 'react'
import { pedirDatos } from '../helper/pedirDatos'
import ItemList from './ItemList'

function ItemListContainer() {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                setProductos(res)
            })
    }, [])

    return (
        <div>
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer