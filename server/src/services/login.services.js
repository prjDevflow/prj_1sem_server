async function login(req, res) {
  try {
    const { usuario, senha } = req.body;

    if (!usuario || !senha) {
      return res.status(400).json({ erro: "E-mail e senha são obrigatórios!" });
    }

    if (usuario.trim() !== process.env.EMAIL_SECRETARIA?.trim()) {
      return res.status(401).json({ erro: "Email incorreto." });
    }
    if (senha.trim() !== process.env.SENHA_SECRETARIA?.trim()) {
      return res.status(401).json({ erro: "Senha incorreta." });
    }

    return res.status(200).json({
      mensagem: "Login bem-sucedido!",
      usuario: {
        email: process.env.EMAIL_SECRETARIA,
        perfil: "secretaria",
      },
    });
  } catch (error) {
    console.error("Erro no servidor:", error);
    return res.status(500).json({ erro: "Erro interno do servidor" });
  }
}

module.exports = login;
