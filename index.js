import express from 'express';
import { dica } from './controller/dica.js';
const app = express();

app.use(express.json());

dica(app);

const porta = process.env.PORT || 3000;
app.listen(porta, console.log(`Iniciado na porta ${porta}`));