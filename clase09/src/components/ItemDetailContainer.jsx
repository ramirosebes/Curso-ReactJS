import React, { useState, useEffect } from 'react'
import { pedirItemPorId } from '../helper/pedirDatos';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;
    console.log(id)

    useEffect(() => {
        pedirItemPorId(Number(id))
            .then((res) => {
                setItem(res)
            })
    }, [id])


    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer