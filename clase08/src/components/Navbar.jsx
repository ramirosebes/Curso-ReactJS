import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="#" className="logo"><h1>Carpishop</h1></Link>
            <ul className='menu'>
                <li><Link className="menu-link" to="/">Inicio</Link></li>
                <li><Link className="menu-link" to="/productos">Productos</Link></li>
                <li><Link className="menu-link" to="/productos/medias">Medias</Link></li>
                <li><Link className="menu-link" to="/productos/pantalones">Pantalones</Link></li>
                <li><Link className="menu-link" to="/productos/remeras">Remeras</Link></li>
                <li><Link className="menu-link" to="/productos/buzos">Buzos</Link></li>
                <li><Link className="menu-link" to="/nosotros">Nostros</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar