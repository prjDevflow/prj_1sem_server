# ABP - 1º Semestre

![Preview-Screens](https://github.com/prjDevflow/Index/blob/main/Documentation/ModeloPaginas.png)

Caso deseje dar uma olhada no protótipo na versão Desktop, acesse [aqui](https://www.figma.com/design/H9ykp2tUglsJ3HM4xhpoqe/Untitled?node-id=0-1&t=hBgk1VTakJzf9dWQ-1).
Ou na versão Mobile, [aqui](https://www.figma.com/design/H9ykp2tUglsJ3HM4xhpoqe/Untitled?node-id=101-120&m=dev&t=hBgk1VTakJzf9dWQ-1).

## Sobre o Projeto

A ideia do projeto é:

_"Desenvolver um sistema web para que a comunidade acadêmica possa consultar os horários das aulas"._

A cada semestre, as coordenações de curso, juntamente com a secretaria acadêmica, montam os
horários de aula e alocam as aulas nos ambientes da faculdade, como salas de aula e laboratórios. 
Normalmente, são divulgados os horários de aula para a comunidade acadêmica por meio dos murais da
faculdade e e-mail. No entanto, a cada alteração no horário de professores, disciplinas ou
ambientes, é necessário refazer os informes impressos.

A partir dessa problemática, surgiu a necessidade de um sistema para a consulta dos horários das aulas por
curso, ambiente, turno (diurno e noturno) e turma.

## Colaboradores

| Colaborador                     | Cargo      | GitHub                                  |
|---------------------------------|------------|-----------------------------------------|
| Lucas Cauã Soares de Paiva | Product Owner | [Link](https://github.com/Lucaspaiva11) |
| Eduardo da Silva Machado | Scrum Master | [Link](https://github.com/EduMachado07) |
| Matheus da Cunha Soldesi | Developer | [Link](https://github.com/Soldesi) |
| Matheus Venancio Moreira Sales | Developer | [Link](https://github.com/MatheusSales95) |
| Pedro Henrique Bernardo Barbosa | Developer | [Link](https://github.com/P3droGs) |
| Rafael Vitor de Medeiros Costa| Developer | [Link](https://github.com/Raflael) |

## Sprints

| Sprint | Início     | Entrega     | Status | Trello |
|--------|------------|-------------|-----------------|--------|
| 01     | 18/03/2025 | 15/04/2025  |  Em andamento   | [Link](https://trello.com/b/qOWm2Dro/sprint-1) |
| 02     | 16/04/2025 | 15/05/2025  |  -     | - |
| 03     | 16/05/2025 | 10/06/2025  |  -     | - |

Para visualizar as informações das sprints do projeto, acesse o quadro do Trello [aqui](https://trello.com/invite/b/67cf74d4a47f8308a0bd9c9b/ATTI30ae049e04f5319833ecaf3ba7456af94CA286F4/projeto-abp-1-sprint).

## Product Backlog

- Requisitos Funcionais
   - RF01 – Fazer a ingestão de dados no sistema a partir de uma fonte tal como um arquivo CSV.
   - RF02 – (opcional) Fazer o gerenciamento dos dados do sistema (CRUD) através da interface da aplicação, permitindo que a secretaria acadêmica/coordenação altere os dados por meio de uma tela da aplicação
   - RF03 – Garantir que o cadastro ou a ingestão de dados satisfaça as regras básicas de alocação da faculdade (ex.: duas turmas diferentes não podem ser alocadas na mesma sala, e um professor não pode ter duas turmas no mesmo horário).
   - RF04 – Permitir que o sistema exporte relatórios/mapas de ambientes e horários em formato PDF.
   - RF05 – Permitir consultas no sistema (ex.: por turma, turno, professor, data) para apoiar a gestão da faculdade.

- Requisitos Não Funcionais
   - RNF01 – Exibir um mapa de salas com a opção interativa para visualizar a situação do ambiente (ex. aulas alocadas ao longo dos turnos do dia);
   - RNF02 – Garantir que o sistema seja responsivo, mantendo um layout consistente em dispositivos móveis e preservando a arquitetura de informação da interface.

- Restrições
   - R01 – O sistema deve ser prototipado e validado utilizando o Figma.
   - R02 – Deve seguir o catálogo de tecnologias do semestre:
      - Ser codificado usando HTML, CSS e JavaScript;
      - Utilizar o SGBD PostgreSQL;
      - Implementar o servidor utilizando JavaScript;
      - Manter a documentação e projeto em um repositório público do GitHub, e
      - Utilizar alguma ferramenta de controle de tarefas.

##  User Stories

| Id Requisito | Remetente    | Instrução                     | Finalidade  |
|--------------|--------------|-------------------------------|-------------|
| RF01         | 8 pts        | Protótipo das telas do Figma  | Rafael   |
 
## Sprint 01

Explicação da Sprint...

### Sprint Backlog
| Id Requisito  | Story Points  | Tarefa                        |
|---------------|---------------|-------------------------------|
| RF03          | 13 pts        | Criar modelo conceitual do banco de dados  |
| RF04          | 3 pts         | Criar botão para exportar mapa/relatório em pdf  |
| RF05          | 31 pts        | Criar página para consultar as aulas de cada curso  |
| RNF01         | 13 pts        | Criar mapas interativos das salas  |
| RNF02         | 5 pts         | Criar layout responsivo para aplicativos móveis  |
| R01           | 13 pts        | Prototipar as telas do sistema no Figma  |
| -             | 9 pts         | Criar página inicial  |
| -             | 5 pts         | Criar o banco de dados  |
| -             | 5 pts         | Criar modelo UML  |

### Burndown

![Preview-Screens](https://github.com/prjDevflow/Index/blob/main/Documentation/bourndown%20-%20Sprint%201.PNG)

### Sprint Retrospective

_**1. O que funcionou bem durante o sprint?**_
   Divisão de tarefas
   Interesse dos Dev´s
   Comunicação

_**2. O que não funcionou tão bem durante o sprint?**_
      Saída de um integrante da equipe
_**3. Quais ações podemos tomar para melhorar no próximo sprint?**_
   Organização 
      Melhor estabelecimento das Dailys
