CREATE TABLE CarreirasIA (
    id INT PRIMARY KEY IDENTITY(1,1),
    nome_cargo VARCHAR(100) NOT NULL,
    area_atuacao VARCHAR(100),
    competencia_chave VARCHAR(150),
    media_salarial DECIMAL(10, 2)
);