function loadContentPages(event, urlPage) {
  if (event) {
    event.preventDefault();
  }

  localStorage.setItem("lastPage", urlPage);

  fetch(urlPage)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load content");
      }
      return response.text();
    })
    .then((content) => {
      const main = document.getElementById("mainContent");
      main.innerHTML = content;

      const scriptsToLoad = [
        "scripts/dialog.js",
        // "../scripts/algumOutroScript.js",
        // "../scripts/outroAlemDaquele.js"
      ];
      
      scriptsToLoad.forEach(src => {
        const script = document.createElement("script");
        script.src = src;
        script.defer = true;
        document.body.appendChild(script);
      });
    })
    .catch((error) =>
      console.log("erro ao carregar o conteudo da pagina", error)
    );
}

window.onload = function () {
  const lastPage = localStorage.getItem("lastPage") || "pages/main.html";
  loadContentPages(null, lastPage);
};
