// Description: Rutas de la API
import express from 'express';
import User from './models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Ruta principal
router.get('/', (req, res) => {
  res.send('Bienvenido a la página principal de mi aplicación');
});

// Lista de Usuarios Base de Datos
router.get('/users', async (_, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Ocurrió un error al obtener los usuarios.' });
    }
});

// Registro de usuarios
router.post('/register', async (req, res) => {
    const { username, email, password, profile } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ error: 'Ya existe un usuario registrado con ese correo electrónico.' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, email, password: hashedPassword, profile });

    try {
        const savedUser = await newUser.save();
        res.json(savedUser);
    } catch (error) {
        res.status(500).json({ error: 'Ocurrió un error al registrarse. Por favor, inténtalo de nuevo.' });
    }
});

// Login de usuarios
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'No existe un usuario con ese correo electrónico.' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Contraseña incorrecta.' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, user });
});

export default router;