const { Pool } = require('pg');

// Configuração da conexão com o banco de dados PostgreSQL
const pool = new Pool({
  host: "localhost",
  user: "postgres", // Altere conforme o seu usuário
  password: "123", // Altere conforme a sua senha
  database: "ABP", // Nome do banco criado no pgAdmin
  port: 5432, // Porta padrão do PostgreSQL
});

// Função para buscar disciplinas
exports.buscarDisciplinas = async (req, res) => {
  try {
    const result = await pool.query('SELECT nome FROM Disciplina'); // Substitua 'disciplinas' pelo nome da sua tabela de disciplinas e 'nome' pelo nome da coluna
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Erro ao buscar disciplinas:', err);
    res.status(500).json({ message: 'Erro interno do servidor ao buscar disciplinas.' });
  }
};

// Função para buscar professores
exports.buscarProfessores = async (req, res) => {
  try {
    const result = await pool.query('SELECT nome FROM Professor'); // Substitua 'professores' pelo nome da sua tabela de professores e 'nome' pelo nome da coluna
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Erro ao buscar professores:', err);
    res.status(500).json({ message: 'Erro interno do servidor ao buscar professores.' });
  }
};

// Função para buscar salas
exports.buscarSalas = async (req, res) => {
  try {
    const result = await pool.query('SELECT numero FROM Sala'); // Substitua 'salas' pelo nome da sua tabela de salas e 'numero' pelo nome da coluna
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Erro ao buscar salas:', err);
    res.status(500).json({ message: 'Erro interno do servidor ao buscar salas.' });
  }
};

// Função para buscar horários
exports.buscarHorarios = async (req, res) => {
  try {
    const result = await pool.query('SELECT horainicial, horafinal FROM Horario'); // Substitua 'horarios' pelo nome da sua tabela de horários e as colunas apropriadas
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Erro ao buscar horários:', err);
    res.status(500).json({ message: 'Erro interno do servidor ao buscar horários.' });
  }
};

// Função para buscar turmas
exports.buscarTurmas = async (req, res) => {
  try {
    const result = await pool.query('SELECT nome FROM Turma'); // Substitua 'turmas' pelo nome da sua tabela de turmas e 'nome' pelo nome da coluna
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Erro ao buscar turmas:', err);
    res.status(500).json({ message: 'Erro interno do servidor ao buscar turmas.' });
  }
};


