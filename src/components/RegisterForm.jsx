import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/components/ModalStyle.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RegisterForm({ show, onHide }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profile, setProfile] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        // Validación del formulario
        if (!username || !email || !password || !profile) {
            setError('Todos los campos son obligatorios');
            return;
        }
    
        setLoading(true);
        setError(null);
    
        try {
            const response = await axios.post('http://localhost:3000/register', { username, email, password, profile });
            if (response.data.error) {
                setError(response.data.error);
            } else {
                navigate('/welcome');
            }
        } catch (error) {
            setError('Ocurrió un error al registrarse. Por favor, inténtalo de nuevo.');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header className='ModalStyle' closeButton>
                <Modal.Title className="ModalTitle">Registro</Modal.Title>
            </Modal.Header>
            <Modal.Body className="GroundStyle">
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="GroundStyle" controlId="formBasicName">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" placeholder="Introduce tu nombre" value={username} onChange={e => setUsername(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="GroundStyle" controlId="formBasicEmail">
                        <Form.Label></Form.Label>
                        <Form.Control type="email" placeholder="Introduce tu email" value={email} onChange={e => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="GroundStyle" controlId="formBasicPassword">
                        <Form.Label></Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicProfile">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" placeholder="Introduce tu perfil" value={profile} onChange={e => setProfile(e.target.value)} />
                    </Form.Group>

                    <Button className="btn-Registro" type="submit" disabled={loading}>
                        {loading ? 'Cargando...' : 'Registrarse'}
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default RegisterForm;