// WelcomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function WelcomePage() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/'); // Asume que la ruta de tu HomePage es '/home'
    };

    return (
        <div>
            <h1>Bienvenido</h1>
            <p>¡Gracias por registrarte!</p>
            <button onClick={handleButtonClick}>Ir a la página de inicio</button>
        </div>
    );
}

export default WelcomePage;