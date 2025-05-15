-- Criação das tabelas
CREATE TABLE Curso (
    idCurso SERIAL PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL
);
CREATE TABLE Turma (
    idTurma SERIAL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    curso_id INTEGER NOT NULL,
    turno VARCHAR(20) NOT NULL,
    FOREIGN KEY (curso_id) REFERENCES Curso(idCurso) ON DELETE CASCADE
);
CREATE TABLE Horario (
    idHorario SERIAL PRIMARY KEY,
    HoraInicial TIME NOT NULL,
    HoraFinal TIME NOT NULL
);
CREATE TABLE Semana (
    idSemana SERIAL PRIMARY KEY,
    Dia VARCHAR(20) NOT NULL
);
CREATE TABLE Professor (
    idProfessor SERIAL PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL
);
CREATE TABLE Disciplina (
    idDisciplina SERIAL PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL
);
CREATE TABLE Sala (
    idSala SERIAL PRIMARY KEY,
    Numero INTEGER NOT NULL,
    Nome VARCHAR(100) NOT NULL,
    Andar CHAR(1) NOT NULL
);
CREATE TABLE Aula (
    idAula SERIAL PRIMARY KEY,
    Turma_idTurma VARCHAR(10) NOT NULL,
    Disciplina_idDisciplina INTEGER NOT NULL,
    Professor_idProfessor INTEGER NOT NULL,
    FOREIGN KEY (Turma_idTurma) REFERENCES Turma(idTurma) ON DELETE CASCADE,
    FOREIGN KEY (Disciplina_idDisciplina) REFERENCES Disciplina(idDisciplina) ON DELETE CASCADE,
    FOREIGN KEY (Professor_idProfessor) REFERENCES Professor(idProfessor) ON DELETE CASCADE
);
CREATE TABLE Reserva (
    idReserva SERIAL PRIMARY KEY,
    Aula_idAula INTEGER NOT NULL,
    Sala_idSala INTEGER NOT NULL,
    Horario_IdHorario INTEGER NOT NULL,
    Semana_idSemana INTEGER NOT NULL,
    FOREIGN KEY (Aula_idAula) REFERENCES Aula(idAula) ON DELETE CASCADE,
    FOREIGN KEY (Sala_idSala) REFERENCES Sala(idSala) ON DELETE CASCADE,
    FOREIGN KEY (Horario_IdHorario) REFERENCES Horario(idHorario) ON DELETE CASCADE,
    FOREIGN KEY (Semana_idSemana) REFERENCES Semana(idSemana) ON DELETE CASCADE
);
