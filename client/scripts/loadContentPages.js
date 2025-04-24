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

      const header = document.querySelector("header");
      const footer = document.querySelector("footer");

      const hideLayout = ["login.html", "secretary.html"];

      if (hideLayout.some((page) => urlPage.includes(page))) {
        header.style.display = "none";
        footer.style.display = "none";
      } else {
        header.style.display = "";
        footer.style.display = "";
      }

      const scriptsToLoad = [
        "scripts/dialog.js",
        "scripts/accordion.js",
        "scripts/loadContentPages.js",
        "scripts/login.js",
      ];

      scriptsToLoad.forEach((src) => {
        const script = document.createElement("script");
        script.src = src;
        script.defer = true;
        document.body.appendChild(script);
      });

      const cssToLoad = [
        // "styles/main.css",
        "styles/curso.css",
        "styles/maps.css",
        "styles/btnMaps.css",
        "styles/horarios.css",
        // "styles/login.css",
        "styles/secretary.css",
      ];
      
      cssToLoad.forEach((href) => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        document.head.appendChild(link);
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
