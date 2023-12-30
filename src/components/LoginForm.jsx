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
    const [validationErrors, setValidationErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        const errors = {};
        if (!/\S+@\S+\.\S+/.test(email)) errors.email = 'El correo electrónico no es válido.';
        if (password.length < 8) errors.password = 'La contraseña debe tener al menos 8 caracteres.';
        return errors;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
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
            if (error.response && error.response.data) {
                if (error.response.data.error) {
                    setError(error.response.data.error);
                } else if (error.response.data.errors && error.response.data.errors.length > 0) {
                    setError(error.response.data.errors.map(err => err.msg).join(', '));
                }
            } else {
                setError('Ocurrió un error al iniciar sesión. Por favor, inténtalo de nuevo.');
            }
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
                        <Form.Control type="email" placeholder="Introduce tu email" value={email} onChange={e => setEmail(e.target.value)} isInvalid={validationErrors.email} />
                        <Form.Control.Feedback type="invalid">{validationErrors.email}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="GroundStyle" controlId="formBasicPassword">
                        <Form.Label></Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} isInvalid={validationErrors.password} />
                        <Form.Control.Feedback type="invalid">{validationErrors.password}</Form.Control.Feedback>
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