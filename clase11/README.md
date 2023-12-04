# Clase 11

## Integrando Firebase

### Notas
ItemListContainer.jsx
Reemplazamos la funcion de solicitar los datos del JSON por la forma de solicitarlos a la db de Firebase

```
pedirDatos()
            .then((res) => {
                if (categoria) {
                    setProductos( res.filter((prod) => prod.categoria === categoria) );
                    setTitulo(categoria);
                } else {
                    setProductos(res);
                    setTitulo("Productos");
                }
            })
```