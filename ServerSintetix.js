import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './Routes.js';

dotenv.config(); // Configura tus variables de entorno

const app = express();

app.use(cors()); // Permite que el servidor reciba peticiones de otros dominios
app.use(express.json()); // Permite que el servidor entienda los JSON

mongoose.connect(process.env.MONGODB_URI) // Conecta con tu base de datos
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.use('/', routes);

app.listen(3000, () => console.log('Server running on port 3000'));