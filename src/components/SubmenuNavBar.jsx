import React, { useState } from 'react';
import { NavDropdown, Nav } from 'react-bootstrap';
import '../css/components/TeamNavBar.css';
import LoginForm from './LoginForm'; // Asegúrate de importar tus componentes modales
import RegisterForm from './RegisterForm';

export default function Submenu() {
    const [showLogin, setShowLogin] = useState(false); // Nuevo estado para el modal de inicio de sesión
    const [showRegister, setShowRegister] = useState(false); // Nuevo estado para el modal de registro

    const onLoginClick = () => setShowLogin(true); // Nueva función para abrir el modal de inicio de sesión
    const onRegisterClick = () => setShowRegister(true); // Nueva función para abrir el modal de registro

    return (
        <>
            <NavDropdown title="RDX HUB" id="ButtonNavBar">
                <NavDropdown.Item onClick={onLoginClick}><i className="bi bi-box-arrow-in-right" ></i> Iniciar sesión</NavDropdown.Item>
                <NavDropdown.Item onClick={onRegisterClick}><i className="bi bi-person-plus"></i> Registrarse</NavDropdown.Item>

            </NavDropdown>
            
            <LoginForm show={showLogin} onHide={() => setShowLogin(false)} /> {/* Asegúrate de pasar las props correctas a tus componentes modales */}
            <RegisterForm show={showRegister} onHide={() => setShowRegister(false)} />
        </>
    );
}