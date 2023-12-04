# Clase 10

## Context y LocalStorage

### Notas
#### Context

App.jsx
```
const user = "Carpi";
const edad = 27;

return (
    <div>
      <CartContext.Provider value={ {user, edad} }>
      </CartContext.Provider>
    </div>
)
```

ItemDetail.jsx
```
//Opcion 1 - Desestructurar context
const {user , edad} = useContext(CartContext);
console.log(user, edad)

//Opcion 2 - Llamar a la propiedad
const user = useContext(CartContex).user;
console.log(user);

const [cantidad, setCantidad] = useState(1);
```

Esto nos permite pasarle objetos entre todos los archivos del programa