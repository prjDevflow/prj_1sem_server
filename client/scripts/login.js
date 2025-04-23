document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    const toggleSenha = document.getElementById("toggleSenha");
    const senhaInput = document.getElementById("senha");
  
    // Mostrar/ocultar senha
    toggleSenha.addEventListener("click", () => {
      senhaInput.type = senhaInput.type === "password" ? "text" : "password";
      toggleSenha.classList.toggle("fa-eye-slash");
    });
  
    // Validação do formulário
    form.addEventListener("submit", function(e) {
      e.preventDefault();
  
      const usuario = document.getElementById("usuario").value.trim();
      const senha = document.getElementById("senha").value.trim();
  
      if (!usuario || !senha) {
        alert("Por favor, preencha todos os campos!");
        return;
      }
  
      // Simulação de login (substitua por autenticação real)
      if (usuario === "admin" && senha === "1234") {
        alert("Login realizado com sucesso! Redirecionando...");
        setTimeout(() => { window.location.href = "dashboard.html"; }, 1000);
      } else {
        alert("Usuário ou senha inválidos.");
      }
    });
  });