-- Script de criação da tabela e inserção de dados iniciais

-- 1. Remove a tabela antiga caso exista com estrutura diferente
DROP TABLE IF EXISTS produtos CASCADE;

-- 2. Criação da tabela 'produtos'
CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    categoria VARCHAR(100) NOT NULL,
    quantidade INTEGER NOT NULL,
    preco NUMERIC(10,2) NOT NULL
);

-- 3. Inserção de registros para testes
INSERT INTO produtos (nome, categoria, quantidade, preco) VALUES
('Teclado Mecânico', 'Periféricos', 15, 299.90),
('Mouse Gamer', 'Periféricos', 25, 149.90),
('Monitor 24"', 'Monitores', 10, 899.00),
('Notebook', 'Computadores', 5, 3500.00),
('Headset', 'Áudio', 20, 199.90);
