async function buscaAulaSala(diaSemana) {
  try {
    const res = await fetch(
      `https://6823c8c065ba05803397e110.mockapi.io/api/buscaSala`
    );
    
    // const res = await fetch('https://6823c8c065ba05803397e110.mockapi.io/api/buscaSala', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ dia: diaSemana }),
    // });

    if (!res.ok) {
      throw new Error(`Erro na requisição: ${res.status}`);
    }

    const dados = await res.json();
    // console.log(`Aulas do dia ${diaSemana}:`, dados);

    const tbody = document.getElementById('tbodyAulas');
    tbody.innerHTML = ''; // Limpa o conteúdo anterior da tabela

    if (dados.length === 0) {
      tbody.innerHTML = `<tr><td colspan="4">Nenhuma aula encontrada para este dia.</td></tr>`;
      return;
    }

    dados.forEach((aula) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${aula.turma}</td>
        <td>${aula.turno}</td>
        <td>${aula.disciplina}</td>
        <td>${aula.horario}</td>
      `;
      tbody.appendChild(tr);
    });
  } catch (erro) {
    console.error("Erro ao buscar os dados da API:", erro);
  }
}