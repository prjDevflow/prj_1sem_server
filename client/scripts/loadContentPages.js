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

      // Carrega os scripts necessários
      const scriptsToLoad = [
        "scripts/dialog.js",
        "scripts/accordion.js",
        "scripts/login.js",
        "scripts/btnFiltro.js"
      ];

      loadScriptsSequentially(scriptsToLoad, () => {
        // Após carregar os scripts, inicializa os eventos específicos da página
        if (urlPage.includes("dsm.html",)) {
          initCursoFilter();
        }
      });
      loadScriptsSequentially(scriptsToLoad, () => {
        // Após carregar os scripts, inicializa os eventos específicos da página
        if (urlPage.includes("rh.html",)) {
          initCursoFilter();
        }
      });
      loadScriptsSequentially(scriptsToLoad, () => {
        // Após carregar os scripts, inicializa os eventos específicos da página
        if (urlPage.includes("geo.html",)) {
          initCursoFilter();
        }
      });

      // Carrega os estilos CSS necessários
      const cssToLoad = [
        "styles/curso.css",
        "styles/maps.css",
        "styles/btnMaps.css",
        "styles/horarios.css",
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
      console.log("Erro ao carregar o conteúdo da página", error)
    );
}

function loadScriptsSequentially(scripts, callback, index = 0) {
  if (index >= scripts.length) {
    if (callback) callback();
    return;
  }
  const script = document.createElement("script");
  script.src = scripts[index];
  script.onload = () => loadScriptsSequentially(scripts, callback, index + 1);
  document.body.appendChild(script);
}

window.onload = function () {
  const lastPage = localStorage.getItem("lastPage") || "pages/main.html";
  loadContentPages(null, lastPage);
};
