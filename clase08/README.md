# Clase 08

## Eventos
### Notas

#### Nostros.jsx
Cuando colocamos un "return" dentro de un useEffect esto es lo que se ejacutara cuando el componente se desmonte

useEffect(() => {
        //Funcion x
        window.addEventListener("click", () => {
            console.log("Click")
        })

        return () => {
            //Funcion x1
            window.removeEventListener("click", () => {
                console.log("Click")
            })
        }
    }, [])

En este caso como es una funcion anonima (no declarada o referenciada) las toma como funciones distintas y por lo tanto no la elimina

#### ItemCount.jsx
<div className='item-count'>
    <button onClick={handleRestar}>-</button>
    <p>{cantidad}</p>
    <button onClick={handleSumar}>+</button>
</div>

<div className='item-count'>
    <button onClick={() => {cantidad > 1 && setCantidad(cantidad - 1)}}>-</button>
    <p>{cantidad}</p>
    <button onClick={() => {setCantidad(cantidad + 1)}}>+</button>
</div>

Se pueden crear funciones anonimas dentro del onClick

#### ItemDetail.jsx
Spread operatior
{...item, cantidad} --> {...item, quantity: cantidad} para asi llamar a la propiedad quantity pero dentro del codigo la seguimos trabajando como "cantidad"

Trae/Crea el objeto con todas sus propiedades y deja agregar propieades nuevas
