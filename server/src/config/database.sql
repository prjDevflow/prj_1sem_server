
-- Tabela: Professor
CREATE TABLE Professor (
    idProfessor SERIAL PRIMARY KEY,
    Nome VARCHAR UNIQUE NOT NULL
);

-- Tabela: Disciplina
CREATE TABLE Disciplina (
    idDisciplina SERIAL PRIMARY KEY,
    Nome VARCHAR UNIQUE NOT NULL
);

-- Tabela: Semana
CREATE TABLE Semana (
    idSemana SERIAL PRIMARY KEY,
    Dia VARCHAR UNIQUE NOT NULL
);

-- Tabela: Sala
CREATE TABLE Sala (
    Numero SERIAL PRIMARY KEY,
    Nome VARCHAR UNIQUE NOT NULL,
    Andar CHAR
);

-- Tabela: Curso
CREATE TABLE Curso (
    idCurso SERIAL PRIMARY KEY,
    Nome VARCHAR UNIQUE NOT NULL
);

-- Tabela: Horario
CREATE TABLE Horario (
    idHorario SERIAL PRIMARY KEY,
    HoraInicial TIME,
    HoraFinal TIME
);

-- Tabela: Turma
CREATE TABLE Turma (
    idTurma SERIAL PRIMARY KEY,
    Nome VARCHAR(50) NOT NULL,
    Curso_idCurso INTEGER NOT NULL,
    Turno VARCHAR(20) NOT NULL,
    FOREIGN KEY (Curso_idCurso) REFERENCES Curso(idCurso)
);

-- Tabela: Aula
CREATE TABLE Aula (
    idAula SERIAL PRIMARY KEY,
    Turma_idTurma INTEGER NOT NULL,
    Horario_idHorario INTEGER NOT NULL,
    Sala_Numero INTEGER NOT NULL,
    Semana_idSemana INTEGER NOT NULL,
    Disciplina_idDisciplina INTEGER NOT NULL,
    Professor_idProfessor INTEGER NOT NULL,

    FOREIGN KEY (Turma_idTurma) REFERENCES Turma(idTurma),
    FOREIGN KEY (Horario_idHorario) REFERENCES Horario(idHorario),
    FOREIGN KEY (Sala_Numero) REFERENCES Sala(Numero),
    FOREIGN KEY (Semana_idSemana) REFERENCES Semana(idSemana),
    FOREIGN KEY (Disciplina_idDisciplina) REFERENCES Disciplina(idDisciplina),
    FOREIGN KEY (Professor_idProfessor) REFERENCES Professor(idProfessor)
);

-- Inserção de horários
INSERT INTO Horario (HoraInicial, HoraFinal) VALUES
('18:45:00', '19:35:00'),
('19:35:00', '20:25:00'),
('20:25:00', '21:25:00'),
('21:25:00', '22:15:00'),
('22:15:00', '23:05:00'),
('07:30:00', '08:20:00'),
('08:20:00', '09:10:00'),
('09:20:00', '10:10:00'),
('10:10:00', '11:00:00'),
('11:10:00', '12:00:00'),
('12:00:00', '12:50:00');

INSERT INTO Semana (Dia) VALUES
('Segunda-feira'),
('Terça-feira'),
('Quarta-feira'),
('Quinta-feira'),
('Sexta-feira'),
('Sábado'),
('Domingo');    
