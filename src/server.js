import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import produtoRoutes from './routes/produtoRoutes.js';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Registro das rotas principais
app.use('/produtos', produtoRoutes);

// Inicialização do servidor HTTP
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
