CREATE TABLE CarreirasIA (
    id INT IDENTITY(1,1) PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    area VARCHAR(100),
    nivel VARCHAR(50),
    descricao TEXT
);

CREATE TABLE CompetenciasIA (
    id INT IDENTITY(1,1) PRIMARY KEY,
    competencia VARCHAR(200),
    descricao TEXT
);
