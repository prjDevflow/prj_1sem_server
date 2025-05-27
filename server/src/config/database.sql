-- Tabela: Professor
CREATE TABLE Professor (
    idProfessor SERIAL PRIMARY KEY,
    Nome VARCHAR(100) UNIQUE NOT NULL
);

-- Tabela: Disciplina
CREATE TABLE Disciplina (
    idDisciplina SERIAL PRIMARY KEY,
    Nome VARCHAR(100) UNIQUE NOT NULL
);

-- Tabela: Semana (Dias da Semana)
CREATE TABLE Semana (
    idSemana SERIAL PRIMARY KEY,
    Dia VARCHAR(20) UNIQUE NOT NULL
);

-- Tabela: Sala
CREATE TABLE Sala (
    Numero SERIAL PRIMARY KEY,
    Nome VARCHAR(50) NOT NULL,
    Andar CHAR(2)
);

-- Tabela: Curso
CREATE TABLE Curso (
    idCurso SERIAL PRIMARY KEY,
    Nome VARCHAR(100) UNIQUE NOT NULL
);

-- Tabela: Horario
CREATE TABLE Horario (
    idHorario SERIAL PRIMARY KEY,
    HoraInicial TIME NOT NULL,
    HoraFinal TIME NOT NULL,
    UNIQUE (HoraInicial, HoraFinal) -- evita duplicidade no mesmo horário
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
