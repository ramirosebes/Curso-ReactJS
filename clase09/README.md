# Clase 09

## Formularios

### Notas

#### Contacto.jsx
Nivel 1
```
const Contacto = () => {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviado", {nombre, email});
    }

    const handleNombre = (e) => {
        setNombre(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }


    return (
        <div className="container">
            <h1 className="main-title">Contacto</h1>
            <form className="formulario" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Ingresa tu nombre"
                    value={nombre}
                    onChange={handleNombre}
                />
                <input 
                    type="email" 
                    placeholder="Ingrese tu e-mail"
                    value={email}
                    onChange={handleEmail}
                />
                <button className="enviar" type="submit">Enviar</button>
            </form>
        </div>
    )
}
```

Nivel 2
```
const Contacto = () => {

    const [valores, setValores] = useState({
        nombre: "",
        email: "",
        telefono: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviado", valores);
    }

    const handleValores = (e) => {
        setValores({
            ...valores,
            [e.target.name]: e.target.value //Permite modificar el campo que se selecciona por el valor que se introduce. Por eso es importante colocar el name="" correcto detron del input que debe coindifir con el valores en el useState (ej nombre:"",)
        });
    }

    return (
        <div className="container">
            <h1 className="main-title">Contacto</h1>
            <form className="formulario" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Ingresa tu nombre"
                    value={valores.nombre}
                    onChange={handleValores}
                    name="nombre" //Debe coincidir con los valores del useState
                />
                <input 
                    type="email" 
                    placeholder="Ingrese tu e-mail"
                    value={valores.email}
                    onChange={handleValores}
                    name="email" //Debe coincidir con los valores del useState
                />
                <input 
                    type="phone" 
                    placeholder="Ingrese tu telefono"
                    value={valores.telefono}
                    onChange={handleValores}
                    name="telefono" //Debe coincidir con los valores del useState
                />
                <button className="enviar" type="submit">Enviar</button>
            </form>
        </div>
    )
}
```