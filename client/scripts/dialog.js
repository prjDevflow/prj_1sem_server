function openDialog(sala) {
  const dialog = document.getElementById("salaDialog");
  dialog.showModal();

  const idSala = document.getElementById("idSala");
  idSala.innerHTML = sala;

  dialog.addEventListener("click", function (event) {
    const rect = dialog.getBoundingClientRect();
    const isInDialog = (
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom
    );

    if (!isInDialog) {
      dialog.close();
    }
  }, { once: true });
}

// Para fechar o dialog ao clicar no botão de fechar
function closeDialog() {
  const dialog = document.getElementById("salaDialog");
  dialog.close(); // Fecha o dialog
}
