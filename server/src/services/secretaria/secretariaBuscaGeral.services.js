const pool = require("../../config/db");



// Função para buscar disciplinas
exports.buscarDisciplinas = async (req, res) => {
  try {
    const result = await pool.query("SELECT idDisciplina, nome FROM Disciplina"); // Substitua 'disciplinas' pelo nome da sua tabela de disciplinas e 'nome' pelo nome da coluna
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Erro ao buscar disciplinas:", err);
    res.status(500).json({ message: "Erro interno do servidor ao buscar disciplinas." });
  }
};

// Função para buscar professores
exports.buscarProfessores = async (req, res) => {
  try {
    const result = await pool.query("SELECT idProfessor, nome FROM Professor"); 
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Erro ao buscar professores:", err);
    res.status(500).json({ message: "Erro interno do servidor ao buscar professores." });
  }
};

// Função para buscar salas
exports.buscarSalas = async (req, res) => {
  try {
    const result = await pool.query("SELECT numero, nome FROM Sala"); 
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Erro ao buscar salas:", err);
    res.status(500).json({ message: "Erro interno do servidor ao buscar salas." });
  }
};

// Função para buscar horários
exports.buscarHorarios = async (req, res) => {
  try {
    const result = await pool.query("SELECT idHorario, horainicial, horafinal FROM Horario"); 
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Erro ao buscar horários:", err);
    res.status(500).json({ message: "Erro interno do servidor ao buscar horários." });
  }
};

// Função para buscar turmas
exports.buscarTurmas = async (req, res) => {
  try {
    const result = await pool.query("SELECT idTurma, nome FROM Turma"); 
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Erro ao buscar turmas:", err);
    res.status(500).json({ message: "Erro interno do servidor ao buscar turmas." });
  }
};



// Função para criar uma nova aula
exports.criarAula = async (req, res) => {
  console.log("Dados recebidos:", req.body);
  try {
    const { Disciplina_idDisciplina, Professor_idProfessor, Sala_Numero, 
            Horario_idHorario, Turma_idTurma, Semana_idSemana } = req.body;
    
    // Validação básica
    if (!Disciplina_idDisciplina || !Professor_idProfessor || !Sala_Numero || 
        !Horario_idHorario || !Turma_idTurma || !Semana_idSemana) {
      return res.status(400).json({ message: "Todos os campos são obrigatórios." });
    }

    // Inserir no banco
    const result = await pool.query(
      `INSERT INTO Aula (Disciplina_idDisciplina, Professor_idProfessor, Sala_Numero, 
       Horario_idHorario, Turma_idTurma, Semana_idSemana) 
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [Disciplina_idDisciplina, Professor_idProfessor, Sala_Numero, 
       Horario_idHorario, Turma_idTurma, Semana_idSemana]
    );

    res.status(201).json({ 
      message: "Aula criada com sucesso!", 
      aula: result.rows[0] 
    });
  } catch (err) {
    console.error("Erro ao criar aula:", err);
    res.status(500).json({ 
      message: "Erro interno do servidor ao criar aula.",
      error: err.message 
    });
  }
};
