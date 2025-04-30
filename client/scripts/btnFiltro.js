function togglePeriodoDropdown(periodo) {
  const dropdown = document.getElementById(`drop_${periodo}`);
  const isCurrentlyVisible = dropdown && dropdown.style.display === 'block';

  // Esconde todos os dropdowns
  const allDropdowns = document.querySelectorAll('.sub-sub-menu-curso');
  allDropdowns.forEach(d => d.style.display = 'none');

  // Se não estava visível, mostramos. Se já estava, deixamos fechado.
  if (!isCurrentlyVisible && dropdown) {
    dropdown.style.display = 'block';
  }
}

function initCursoFilter() {
  // Adiciona o evento ao botão "FILTRO"
  const btnMenu = document.querySelector('.btn-menu');
  if (btnMenu) {
    btnMenu.addEventListener('click', function () {
      const menuCurso = document.querySelector('.menu-curso');
      if (menuCurso) {
        menuCurso.style.display = (menuCurso.style.display === 'none' || menuCurso.style.display === '') ? 'block' : 'none';
      }
    });
  }

  // Adiciona eventos para os botões de "Diurno" e "Noturno"
  const periodoButtons = document.querySelectorAll('.btn-periodo');
  periodoButtons.forEach(button => {
    button.addEventListener('click', function () {
      const periodo = button.getAttribute('data-periodo');
      togglePeriodoDropdown(periodo);
    });
  });
}