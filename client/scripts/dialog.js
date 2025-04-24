function openDialog(idDialog, idTitle, title) {
  const dialog = document.getElementById(idDialog);
  dialog.showModal();

  const titleElement = document.getElementById(idTitle);
  if (titleElement) titleElement.innerHTML = title;

  dialog.addEventListener(
    "click",
    function (event) {
      const rect = dialog.getBoundingClientRect();
      const isInDialog =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      if (!isInDialog) {
        dialog.close();
      }
    },
    { once: true }
  );
}

function closeDialog(idDialog) {
  const dialog = document.getElementById(idDialog);
  dialog.close();
}
