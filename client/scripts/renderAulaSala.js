async function buscaAulaSala(sala, diaSemana) {
  try {
    // const res = await fetch(
    //   `https://6823c8c065ba05803397e110.mockapi.io/api/buscaSala`
    // );
    // const res = await fetch('https://6823c8c065ba05803397e110.mockapi.io/api/buscaSala', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ dia: diaSemana }),
    // });

    // if (!res.ok) {
    //   throw new Error(`Erro na requisição: ${res.status}`);
    // }
    // const dados = await res.json();

    const dadosTeste = [
      {
        diaSemana: "segunda-feira",
        turma: "1DSM",
        turno: "diurno",
        disciplina: "Desenvolvimento Web",
        horario: "07:30 - 08:20",
        id: "1",
      },
      {
        diaSemana: "terça-feira",
        turma: "2DSM",
        turno: "diurno",
        disciplina: "Banco de Dados",
        horario: "13:00 - 13:50",
        id: "2",
      },
      {
        diaSemana: "quarta-feira",
        turma: "4GEO",
        turno: "diurno",
        disciplina: "Design Digital",
        horario: "08:20 - 09:10",
        id: "3",
      },
      {
        diaSemana: "quinta-feira",
        turma: "2RHMA",
        turno: "diurno",
        disciplina: "Algoritmos",
        horario: "14:00 - 14:50",
        id: "4",
      },
      {
        diaSemana: "sexta-feira",
        turma: "2GEO",
        turno: "diurno",
        disciplina: "Banco de Dados",
        horario: "09:10 - 10:00",
        id: "5",
      },
    ];

    RenderTabelaSala(dadosTeste);
  } catch (erro) {
    console.error("Erro ao buscar os dados da API:", erro);
  }
}

async function RenderTabelaSala(dados) {
  const tbody = document.getElementById("tbodyAulas");
  tbody.innerHTML = ""; // Limpa o conteúdo anterior da tabela

  if (dados.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4">Nenhuma aula encontrada.</td></tr>`;
    return;
  }

  dados.forEach((aula) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
          <td>${aula.turma}</td>
          <td>${aula.turno}</td>
          <td>${aula.disciplina}</td>
          <td>${aula.horario}</td>
        `;
    tbody.appendChild(tr);
  });
}
