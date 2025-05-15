async function buscaTurma(turno, turma) {
  try {
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

    // if (dados.length === 0) {
    //   tbody.innerHTML = `<tr><td colspan="4">Nenhuma aula encontrada</td></tr>`;
    //   return;
    // }
    const dadosTeste = [
      {
        diaSemana: "Segunda",
        horario: "18:45 - 19:35",
        disciplina: "Engenharia de Software I",
      },
      {
        diaSemana: "Segunda",
        horario: "19:35 - 20:25",
        disciplina: "Engenharia de Software I",
      },
      {
        diaSemana: "Segunda",
        horario: "20:25 - 21:25",
        disciplina: "Engenharia de Software I",
      },
      {
        diaSemana: "Segunda",
        horario: "21:25 - 22:15",
        disciplina: "Engenharia de Software I",
      },
      {
        diaSemana: "Segunda",
        horario: "22:15 - 23:05",
        disciplina: "Sistemas Operacionais",
      },

      {
        diaSemana: "Terça",
        horario: "18:45 - 19:35",
        disciplina: "Banco de Dados I",
      },
      {
        diaSemana: "Terça",
        horario: "19:35 - 20:25",
        disciplina: "Banco de Dados I",
      },
      {
        diaSemana: "Terça",
        horario: "20:25 - 21:25",
        disciplina: "Banco de Dados I",
      },
      {
        diaSemana: "Terça",
        horario: "21:25 - 22:15",
        disciplina: "Design Digital",
      },
      {
        diaSemana: "Terça",
        horario: "22:15 - 23:05",
        disciplina: "Design Digital",
      },

      {
        diaSemana: "Quarta",
        horario: "18:45 - 19:35",
        disciplina: "Algoritmos",
      },
      {
        diaSemana: "Quarta",
        horario: "19:35 - 20:25",
        disciplina: "Algoritmos",
      },
      {
        diaSemana: "Quarta",
        horario: "20:25 - 21:25",
        disciplina: "Algoritmos",
      },
      {
        diaSemana: "Quarta",
        horario: "21:25 - 22:15",
        disciplina: "Algoritmos",
      },
      { diaSemana: "Quarta", horario: "22:15 - 23:05", disciplina: "-" },

      {
        diaSemana: "Quinta",
        horario: "18:45 - 19:35",
        disciplina: "Sistemas Operacionais",
      },
      {
        diaSemana: "Quinta",
        horario: "19:35 - 20:25",
        disciplina: "Sistemas Operacionais",
      },
      {
        diaSemana: "Quinta",
        horario: "20:25 - 21:25",
        disciplina: "Sistemas Operacionais",
      },
      {
        diaSemana: "Quinta",
        horario: "21:25 - 22:15",
        disciplina: "Design Digital",
      },
      {
        diaSemana: "Quinta",
        horario: "22:15 - 23:05",
        disciplina: "Design Digital",
      },

      {
        diaSemana: "Sexta",
        horario: "18:45 - 19:35",
        disciplina: "Desenvolvimento Web I",
      },
      {
        diaSemana: "Sexta",
        horario: "19:35 - 20:25",
        disciplina: "Desenvolvimento Web I",
      },
      {
        diaSemana: "Sexta",
        horario: "20:25 - 21:25",
        disciplina: "Desenvolvimento Web I",
      },
      {
        diaSemana: "Sexta",
        horario: "21:25 - 22:15",
        disciplina: "Desenvolvimento Web I",
      },
      {
        diaSemana: "Sexta",
        horario: "22:15 - 23:05",
        disciplina: "Banco de Dados I",
      },
    ];
    RenderTabela(dadosTeste);

    console.log("busca turma chamada");
  } catch (erro) {
    console.error("Erro ao buscar os dados da API:", erro);
  }
}

async function RenderTabela(dados) {
  document.querySelector("#grade").classList.remove("hidden");
  const thead = document.getElementById("theadTabela");
  const tbody = document.getElementById("tbodyDisciplinas");

  tbody.innerHTML = "";
  thead.innerHTML = `<th>Dia / Horário</th>`;

  // 1. Identificar horários únicos e ordená-los
  const horariosUnicos = [...new Set(dados.map((aula) => aula.horario))].sort();

  // 2. Montar cabeçalho dinâmico com os horários
  horariosUnicos.forEach((hora) => {
    const th = document.createElement("th");
    th.textContent = hora;
    thead.appendChild(th);
  });

  const diasSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];

  diasSemana.forEach((dia) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="dias">${dia}</td>`;

    horariosUnicos.forEach((horario) => {
      // Verifica se há aula nesse horário e dia
      const aula = dados.find(
        (item) => item.diaSemana === dia && item.horario === horario
      );

      const td = document.createElement("td");
      td.textContent = aula ? aula.disciplina : "-";
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });
}
