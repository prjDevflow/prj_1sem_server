function loadContentPages(event, urlPage) {
  if (event) {
    event.preventDefault();
  }

  fetch(urlPage)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load content");
      }
      return response.text();
    })
    .then((content) => {
      document.getElementById("mainContent").innerHTML = content;
    })
    .catch((error) =>
      console.log("erro ao carregar o conteudo da pagina", error)
    );
}

window.onload = function () {
  loadContentPages(event, "pages/main.html");
};
