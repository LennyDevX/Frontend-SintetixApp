import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import '../css/components/ModalStyle.css';

export default function LoginForm({ show, onHide }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación de entrada
        if (!email || !password) {
            setError('Por favor, introduce tu correo electrónico y contraseña.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/login', { email, password });
            if (response.data.error) {
                setError(response.data.error);
            } else {
                alert('Inicio exitoso'); // Agrega esta línea
                onHide(); // Cierra la modal
                navigate('/homeLog');
            }
        } catch (error) {
            setError('Ocurrió un error al registrarse. Por favor, inténtalo de nuevo.');
            console.error(error);
        }
    };

    return (
        <div className="GroundStyle">
            <Modal show={show} onHide={onHide}>
                <Modal.Header className="ModalStyle" closeButton>
                    <Modal.Title className="ModalTitle">Bienvenido de nuevo!</Modal.Title>
                </Modal.Header>
                <Modal.Body className="GroundStyle">
                    {error && <p>{error}</p>} {/* Muestra el error si existe */}
                    <Form className="GroundStyle" onSubmit={handleSubmit}>
                        <Form.Group className="GroundStyle mb-3">
                            <Form.Control
                                className=""
                                type="email"
                                placeholder="Introduce tu correo"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="GroundStyle mb-3" controlId="formBasicPassword">
                            <Form.Control
                                className=""
                                type="password"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Button className="btn-login" type="submit">
                            Conectarme
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}