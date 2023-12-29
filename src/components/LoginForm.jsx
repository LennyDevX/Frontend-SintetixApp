import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/components/ModalStyle.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginForm({ show, onHide }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        // Validación del formulario
        if (!email || !password) {
            setError('Todos los campos son obligatorios');
            return;
        }
    
        setLoading(true);
        setError(null);
    
        try {
            const response = await axios.post('http://localhost:3000/login', { email, password });
            if (response.data.error) {
                setError(response.data.error);
            } else {
                navigate('/welcome');
            }
        } catch (error) {
            setError('Ocurrió un error al iniciar sesión. Por favor, inténtalo de nuevo.');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header className='ModalStyle'>
                <Modal.Title className="ModalTitle">Iniciar sesión</Modal.Title>
            </Modal.Header>
            <Modal.Body className="GroundStyle">
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="GroundStyle" controlId="formBasicEmail">
                        <Form.Label></Form.Label>
                        <Form.Control type="email" placeholder="Introduce tu email" value={email} onChange={e => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="GroundStyle" controlId="formBasicPassword">
                        <Form.Label></Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} />
                    </Form.Group>

                    <Button className="btn-Registro" type="submit" disabled={loading}>
                        {loading ? 'Cargando...' : 'Iniciar sesión'}
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default LoginForm;