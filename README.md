# 🚀 Guia do Aluno: Back-end REST API (Controle de Estoque) 📦

Olá, aluno! Seja bem-vindo ao projeto de **Back-end de Controle de Estoque**! 👋

Este projeto foi criado especialmente para você entender na prática como funciona uma **API RESTful** construída com **Node.js**, **Express** e **PostgreSQL**.

Aqui, você verá exatamente como o seu código recebe dados do Front-end (React), executa comandos SQL no banco de dados e devolve respostas no formato JSON.

---

## 🎯 O que você vai aprender neste projeto?

Neste projeto você vai acompanhar o caminho real da informação na web:

```text
React (Front-end)
       │
     HTTP (Requisição)
       ▼
Express (Servidor API)
       │
   Controller (Lógica de Negócio)
       ▼
  SQL (Queries parametrizadas)
       │
  PostgreSQL (Banco de Dados)
```

---

## 🛠️ Tecnologias que você vai utilizar

- **Node.js**: Ambiente que executa nosso código JavaScript no servidor.
- **Express**: Framework para criar as rotas e receber requisições HTTP.
- **PostgreSQL**: Nosso banco de dados relacional para armazenar os produtos.
- **pg (`Pool`)**: Driver para conectar o Node.js ao PostgreSQL usando SQL puro.
- **CORS**: Permite que o seu Front-end converse com este Back-end sem ser bloqueado.
- **dotenv**: Protege as senhas do banco usando variáveis de ambiente.
- **nodemon**: Reinicia o servidor automaticamente sempre que você altera o código.

---

## 📂 Estrutura de Pastas Explicada

Para facilitar o seu estudo, o código foi organizado de forma simples e sem complicações:

```text
backend/
│
├── src/
│   ├── controllers/
│   │   └── produtoController.js    # Aqui ficam as funções CRUD e comandos SQL
│   │
│   ├── routes/
│   │   └── produtoRoutes.js        # Aqui definimos as URLs (/produtos)
│   │
│   ├── database/
│   │   └── connection.js           # Aqui configuramos a conexão com o PostgreSQL
│   │
│   └── server.js                   # O ponto de partida onde o servidor liga
│
├── .env.example                    # Modelo para você criar seu arquivo .env
├── .env                            # Suas senhas locais (nunca envie para o Git)
├── .gitignore                      # Evita enviar pastas pesadas como node_modules
├── database.sql                    # Script SQL para você rodar no pgAdmin/DBeaver
├── package.json                    # Lista de dependências e scripts npm
└── README.md                       # Este guia que você está lendo!
```

---

## 📝 Passo a Passo de Configuração

### 1. Instalar as Dependências
Abra o terminal dentro da pasta `backend` e execute:

```bash
npm install
```

### 2. Configurar o Banco de Dados no PostgreSQL
1. Abra o seu **pgAdmin** ou **DBeaver**.
2. Crie um banco de dados chamado **`estoque`**.
3. Abra a ferramenta SQL (Query Tool) no banco `estoque` e rode o código do arquivo `database.sql`:

```sql
-- Apaga a tabela antiga se existir com estrutura incompatível
DROP TABLE IF EXISTS produtos CASCADE;

-- Cria a tabela 'produtos'
CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    categoria VARCHAR(100) NOT NULL,
    quantidade INTEGER NOT NULL,
    preco NUMERIC(10,2) NOT NULL
);

-- Insere 5 produtos de teste
INSERT INTO produtos (nome, categoria, quantidade, preco) VALUES
('Teclado Mecânico', 'Periféricos', 15, 299.90),
('Mouse Gamer', 'Periféricos', 25, 149.90),
('Monitor 24"', 'Monitores', 10, 899.00),
('Notebook', 'Computadores', 5, 3500.00),
('Headset', 'Áudio', 20, 199.90);
```

### 3. Configurar suas Variáveis de Ambiente
Copie o arquivo `.env.example` criando um novo arquivo chamado `.env`:

```bash
cp .env.example .env
```

Abra o `.env` e coloque a sua senha do PostgreSQL:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=sua_senha_do_postgres
DB_NAME=estoque

PORT=3000
```

---

## 🏃‍♂️ Como Executar o Back-end

Para ligar o servidor em modo de desenvolvimento (com auto-reload):

```bash
npm run dev
```

O seu Back-end ficará rodando em: **`http://localhost:3000`**

---

## 🌐 Portas da Aplicação (Back-end vs Front-end)

| Aplicação | Tecnologia | Porta | Endereço |
| :--- | :--- | :---: | :--- |
| **Back-end API** | Node.js / Express | **`3000`** | `http://localhost:3000/produtos` |
| **Front-end** | React / Vite | **`5173`** | `http://localhost:5173` |

> 📌 **Entenda a comunicação**: Você abre a tela no navegador pela porta **5173**. Ao clicar nos botões, o React envia os dados via HTTP para a sua API na porta **3000**.

---

## 📑 Rotas da API (Endpoints)

A URL base para os produtos é: **`http://localhost:3000/produtos`**

| Método HTTP | Rota / Endpoint | O que faz? | Resposta de Sucesso |
| :---: | :--- | :--- | :---: |
| **`GET`** | `/produtos` | Lista todos os produtos | `200 OK` (Array JSON) |
| **`GET`** | `/produtos/:id` | Busca um produto específico | `200 OK` (Objeto JSON) |
| **`POST`** | `/produtos` | Cadastra um novo produto | `201 Created` |
| **`PUT`** | `/produtos/:id` | Atualiza um produto existente | `200 OK` |
| **`DELETE`** | `/produtos/:id` | Apaga um produto | `204 No Content` |

---

## 🧪 Como Testar no Postman ou Insomnia

Aluno, siga estas etapas para testar sua API antes de conectar ao Front-end:

### 1️⃣ GET /produtos (Listar Todos)
- **Método**: `GET`
- **URL**: `http://localhost:3000/produtos`
- **Aba Body**: Vazia
- **Resultado**: Lista JSON com todos os produtos do banco.

---

### 2️⃣ GET /produtos/1 (Buscar por ID)
- **Método**: `GET`
- **URL**: `http://localhost:3000/produtos/1`
- **Resultado**: Dados do produto com ID 1.

---

### 3️⃣ POST /produtos (Criar Novo Produto)
- **Método**: `POST`
- **URL**: `http://localhost:3000/produtos`
- **Aba Body**: Marque **raw** ➔ Selecione **JSON**
- **Conteúdo JSON**:
```json
{
  "nome": "Webcam Full HD",
  "categoria": "Vídeo",
  "quantidade": 12,
  "preco": 249.90
}
```
- **Resultado**: Objeto do produto criado com seu novo `id`.

---

### 4️⃣ PUT /produtos/1 (Atualizar Produto)
- **Método**: `PUT`
- **URL**: `http://localhost:3000/produtos/1`
- **Aba Body**: **raw** ➔ **JSON**
- **Conteúdo JSON**:
```json
{
  "nome": "Teclado Mecânico RGB",
  "categoria": "Periféricos",
  "quantidade": 20,
  "preco": 349.90
}
```

---

### 5️⃣ DELETE /produtos/1 (Excluir Produto)
- **Método**: `DELETE`
- **URL**: `http://localhost:3000/produtos/1`
- **Resultado**: Status `204 No Content`.

---

## ❌ Tratamento de Erros Padronizado

Se algo der errado, a API responde de forma clara:
- **Produto não encontrado (`HTTP 404`)**:
```json
{
  "mensagem": "Produto não encontrado"
}
```
- **Erro no Servidor/Banco (`HTTP 500`)**:
```json
{
  "mensagem": "Erro interno do servidor"
}
```
