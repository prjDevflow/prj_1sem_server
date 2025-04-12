CREATE TABLE Curso (
    idCurso VARCHAR PRIMARY KEY,
    Nome VARCHAR NOT NULL
);
CREATE TABLE Professor (
    idProfessor INTEGER PRIMARY KEY,
    Nome VARCHAR NOT NULL
);
CREATE TABLE Disciplina (
    idDisciplina INTEGER PRIMARY KEY,
    Nome VARCHAR NOT NULL
);
CREATE TABLE Turma (
    idTurma VARCHAR PRIMARY KEY,
    Curso_idCurso VARCHAR NOT NULL,
    Turno VARCHAR NOT NULL,
    FOREIGN KEY (Curso_idCurso) REFERENCES Curso(idCurso) ON DELETE CASCADE
);
CREATE TABLE Sala (
    Numero INTEGER PRIMARY KEY,
    Nome VARCHAR NOT NULL,
    Andar CHAR(1) NOT NULL
);
CREATE TABLE Aula (
    idAula SERIAL PRIMARY KEY,
    Turma_idTurma VARCHAR NOT NULL,
    Disciplina_idDisciplina INTEGER NOT NULL,
    Professor_idProfessor INTEGER NOT NULL,
    FOREIGN KEY (Turma_idTurma) REFERENCES Turma(idTurma) ON DELETE CASCADE,
    FOREIGN KEY (Disciplina_idDisciplina) REFERENCES Disciplina(idDisciplina) ON DELETE CASCADE,
    FOREIGN KEY (Professor_idProfessor) REFERENCES Professor(idProfessor) ON DELETE CASCADE
);
CREATE TABLE Reserva (
    idReserva SERIAL PRIMARY KEY,
    Aula_idAula INTEGER NOT NULL,
    Sala_Numero INTEGER NOT NULL,
    FOREIGN KEY (Aula_idAula) REFERENCES Aula(idAula) ON DELETE CASCADE,
    FOREIGN KEY (Sala_Numero) REFERENCES Sala(Numero) ON DELETE CASCADE
);
