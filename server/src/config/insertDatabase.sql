-- Inserção de cursos
INSERT INTO Curso (idCurso, Nome) VALUES
('1', 'Desenvolvimento de Software Multiplataforma'),
('2', 'Meio Ambiente e Recursos Hídricos'),
('3', 'Geoprocessamento');

-- Inserção de turmas
INSERT INTO Turma (idTurma, Curso_idCurso, Turno) VALUES
-- Turmas for Desenvolvimento de Software Multiplataforma (idCurso 1)
('1DSM', '1', 'Noturno'),
('2DSM', '1', 'Noturno'),
('3DSM', '1', 'Noturno'),
('4DSM', '1', 'Noturno'),
('5DSM', '1', 'Noturno'),
('6DSM', '1', 'Noturno'),

-- Turmas for Meio Ambiente e Recursos Hídricos (idCurso 2)
('1MARH', '2', 'Noturno'),
('2MARH', '2', 'Noturno'),
('3MARH', '2', 'Noturno'),
('4MARH', '2', 'Noturno'),
('5MARH', '2', 'Diurno'),
('6MARH', '2', 'Diurno'),

-- Turmas for Geoprocessamento (idCurso 3)
('1GEO', '3', 'Noturno'),
('2GEO', '3', 'Noturno'),
('3GEO', '3', 'Noturno'),
('4GEO', '3', 'Noturno'),
('5GEO', '3', 'Noturno'),
('6GEO', '3', 'Noturno');

-- Inserção de professores
INSERT INTO Professor (idProfessor, Nome) VALUES
(1, 'Profa. a Definir'),
(2, 'Profa. Dra. Karen Espinosa'),
(3, 'Profa. Dra. Nanci de Oliveira'),
(4, 'Profa. Dra. Rita de Cássia von Randow'),
(5, 'Profa. Dra. Selma Candelária Genari'),
(6, 'Profa. Dra. Vivian Hyodo'),
(7, 'Profa. Esp. Joanize Aparecida dos Santos Mohallem Paiva'),
(8, 'Profa. Esp. Lucineide Nunes Pimenta'),
(9, 'Profa. Esp. Maria Lucia de Oliveira'),
(10, 'Profa. Esp. Mariana Timponi Rodrigues'),
(11, 'Profa. Ma. Adriana Antividad López Valverde'),
(12, 'Profa. Ma. Yara da Cruz Ferreira'),
(13, 'Profa. Msc. Jane Delane Verona'),
(14, 'Profa. Msc. Risleide Lucia dos Santos'),
(15, 'Profa. MSc. Fernanda da Silveira Bueno'),
(16, 'Prof. Dr. Arley Ferreira de Souza'),
(17, 'Prof. Dr. Daniel José de Andrade'),
(18, 'Prof. Dr. Érico Luciano Pagotto'),
(19, 'Prof. Dr. Fabrício Galende Marques de Carvalho'),
(20, 'Prof. Dr. Jorge Tadao Matsushima'),
(21, 'Prof. Dr. Nilton de Jesus'),
(22, 'Prof. Dr. Renato Mortin'),
(23, 'Prof. Dra. Sanzara Nhiaia J.C. Hassmann'),
(24, 'Prof. Esp. André Olímpio'),
(25, 'Prof. Esp. Henrique Duarte Borges Louro'),
(26, 'Prof. Esp. Marcelo Augusto Sudo'),
(27, 'Prof. Esp. Matheus de Oliveira Lorena'),
(28, 'Prof. Esp. Neymar Siqueira Dellareti'),
(29, 'Prof. M. Sc. Mario Sérgio Soléo Scalambrino'),
(30, 'Prof. M.Sc. Kenji Taniguchi'),
(31, 'Prof. M.Sc. Luiz Gustavo Galhardo Mendes'),
(32, 'Prof. MSc. Luiz Sérgio Gonçalves Aguiar'),
(33, 'Prof. Me. Adilson Rodolfo Neves'),
(34, 'Prof. Me. Antonio Egydio São Thiago Graça'),
(35, 'Prof. Me. Celso de Oliveira'),
(36, 'Prof. Me. Gerson Freitas Júnior'),
(37, 'Prof. Me. Paulo José Maria Filho'),
(38, 'Prof. Me. Rodrigo Monteiro de Barros Santana'),
(39, 'Prof. Me. Ronaldo Emerick Moreira'),
(40, 'Prof. Me. Wellington Rios'),
(41, 'Sem professor');

-- Inserção de disciplinas (DSM)
INSERT INTO Disciplina (idDisciplina, Nome) VALUES
(1, 'Algoritmos e Lógica de Programação'),
(2, 'Desenvolvimento Web I'),
(3, 'Design Digital'),
(4, 'Engenharia de Software I'),
(5, 'Modelagem de Banco de Dados'),
(6, 'Sistemas Operacionais e Redes de Comp.'),
(7, 'Técnicas de Programação I'),
(8, 'Desenvolvimento Web II'),
(9, 'Matemática para Computação'),
(10, 'Engenharia de Software II'),
(11, 'Banco de Dados – Relacional'),
(12, 'Estrutura de Dados'),
(13, 'Técnicas de Programação II'),
(14, 'Desenvolvimento Web III'),
(15, 'Álgebra Linear'),
(16, 'Gestão Ágil de Projetos de Software'),
(17, 'Banco de Dados - Não Relacional'),
(18, 'Interação Humano Computador'),
(19, 'Inglês I'),
(20, 'Computação em Nuvem I'),
(21, 'Aprendizagem de Máquina'),
(22, 'Lab. de Des. para Dispositivos Móveis'),
(23, 'Programação para Dispositivos Móveis II'),
(24, 'Segurança no Des. de Aplicações'),
(25, 'Fundamentos da Redação Técnica'),
(26, 'Inglês III'),
(27, 'Integração e Entrega Contínua'),
(28, 'Laboratório de Desenvolvimento Web'),
(29, 'Internet das Coisas e Aplicações'),
(30, 'Programação para Dispositivos Móveis I'),
(31, 'Estatística Aplicada'),
(32, 'Experiência do Usuário'),
(33, 'Inglês II'),
(34, 'Computação em Nuvem II'),
(35, 'Processamento de Linguagem Natural'),
(36, 'Laboratório de Des. Multiplataforma'),
(37, 'Mineração de Dados'),
(38, 'Qualidade e Testes de Software'),
(39, 'Ética Profissional e Patente'),
(40, 'Inglês IV');

-- Inserção de disciplinas (Meio Ambiente)
INSERT INTO Disciplina (idDisciplina, Nome) VALUES
(41, 'Ciências Ambientais e das Águas'),
(42, 'Biologia'),
(43, 'Sociologia Ambiental'),
(44, 'Matemática Aplicada'),
(45, 'Metodologia da Pesquisa Científico-Tecnológica'),
(46, 'Fundamentos da Comunicação Empresarial'),
(47, 'Química Geral'),
(48, 'Geociência Ambiental'),
(49, 'Inglês I'),
(50, 'Hidráulica Fluvial'),
(51, 'Limnologia'),
(52, 'Estatística'),
(53, 'Planejamento e Conservação Ambiental'),
(54, 'Interpretação e Processamento Digital de Imagens'),
(55, 'Gestão da Qualidade'),
(56, 'Saneamento Ambiental I'),
(57, 'Inglês III'),
(58, 'Hidrologia e Recursos Hídricos'),
(59, 'Ecologia'),
(60, 'Cartografia, Topografia e Batimetria'),
(61, 'Sensoriamento Remoto e Geoprocessamento'),
(62, 'Climatologia e Meteorologia'),
(63, 'Microbiologia Ambiental'),
(64, 'Físico Química Aplicada à Gestão Ambiental'),
(65, 'Inglês II'),
(66, 'Planejamento e Drenagem Urbana'),
(67, 'Gerenciamento de Resíduos'),
(68, 'Avaliação de Impactos Ambientais e Análise de Risco'),
(69, 'Projetos Ambientais I'),
(70, 'Legislação Ambiental'),
(71, 'Sistemas de Gestão e Auditorias Ambientais'),
(72, 'Águas Subterrâneas'),
(73, 'Economia do Meio Ambiente'),
(74, 'Uso e Conservação dos Solos'),
(75, 'Restauração Ecológica'),
(76, 'Geoprocessamento Aplicado a Análises Ambientais'),
(77, 'Saneamento Ambiental II'),
(78, 'Saúde e Segurança Ocupacional'),
(79, 'Educação Ambiental'),
(80, 'Inglês IV'),
(81, 'Energias Alternativas'),
(82, 'Projetos Ambientais II'),
(83, 'Revitalização de Rios e Recuperação de Áreas Degradadas'),
(84, 'Turismo, Meio Ambiente e Recursos Hídricos'),
(85, 'Planejamento Integrado de Bacias Hidrográficas'),
(86, 'Ecotecnologia'),
(87, 'Controle e Monitoramento da Poluição Atmosférica e Sonora');

-- Inserção de disciplinas (Geoprocessamento)
INSERT INTO Disciplina (idDisciplina, Nome) VALUES
(88, 'Introdução à Ciência da Geoinformação'),
(89, 'Linguagem de Programação I'),
(90, 'Linguagem de Programação II'),
(91, 'Projeto de Sistemas de Informação Geográfica'),
(92, 'Projetos em Geoprocessamento'),
(93, 'Projetos em Geoprocessamento II'),
(94, 'Geomarketing'),
(95, 'Desenho Técnico'),
(96, 'Sensoriamento Remoto e Interpretação'),
(97, 'Modelagem de Banco de Dados Espacial'),
(98, 'Sensoriamento Remoto e Clima'),
(99, 'Geoprocessamento e Sistemas de Informação Geográfica'),
(100, 'Geoprocessamento Aplicado à Infraestrutura Urbana'),
(101, 'Fotogrametria Analógica e Digital'),
(102, 'Posicionamento por Satélite'),
(103, 'Algoritmos e Lógica de Programação'),
(104, 'Banco de Dados Geográficos'),
(105, 'Topografia e Batimetria'),
(106, 'Cartografia Aplicada'),
(107, 'Tecnologias WEB Aplicadas a Sistemas de Informação Geográfica'),
(108, 'Geodesia'),
(109, 'Cartografia'),
(110, 'Processamento Digital de Imagens'),
(111, 'Saúde e Segurança Ocupacional'),
(112, 'Fundamentos de Gestão Empresarial'),
(113, 'Análise Espacial e Modelagem em Terrenos'),
(114, 'Cadastro Técnico Multifinalitário'),
(115, 'Integração e Análise de Dados Territoriais'),
(116, 'Padrões de Distribuição de Informações em SIG'),
(117, 'Georreferenciamento de Imóveis Rurais'),
(118, 'Metodologia da Pesquisa Científico-Tecnológica'),
(119, 'Fundamentos de Física'),
(120, 'Fundamentos de Óptica'),
(121, 'Cálculo'),
(122, 'Álgebra Linear e Geometria Analítica'),
(123, 'Estatística'),
(124, 'Geostatística'),
(125, 'Fundamentos da Comunicação Empresarial'),
(126, 'Inglês I'),
(127, 'Inglês II'),
(128, 'Inglês III'),
(129, 'Inglês IV');

-- Inserção de aulas (DSM)
INSERT INTO Aula (idAula, Turma_idTurma, Disciplina_idDisciplina, Professor_idProfessor) VALUES
(1, '1DSM', 4, 34), -- Engenharia de Software I, Prof. Antonio
(2, '1DSM', 5, 26), -- Modelagem de Banco de Dados, Prof. Marcelo
(3, '1DSM', 1, 16), -- Algoritmo, Prof. Arley
(4, '1DSM', 6, 34), -- Sistemas Operacionais e Redes de Comp., Prof. Antonio
(5, '1DSM', 2, 25), -- Desenvolvimento Web I, Prof. Henrique
(6, '1DSM', 3, 26), -- Design Digital, Prof. Marcelo
(7, '2DSM', 7, 25),   -- Técnicas de Programação I, Prof. Henrique
(8, '2DSM', 8, 16),   -- Desenvolvimento Web II, Prof. Arley
(9, '2DSM', 10, 24),  -- Engenharia de Software II, Prof. André
(10, '2DSM', 11, 8),  -- Banco de Dados – Relacional, Profa. Lucineide
(11, '2DSM', 12, 19), -- Estrutura de Dados, Prof. Fabrício
(12, '2DSM', 9, 19),  -- Matemática para Computação, Prof. Fabrício
(13, '3DSM', 17, 8),   -- BD não Relacional - Lucineide
(14, '3DSM', 16, 39),  -- Gestão Ágil de Projetos - Ronaldo
(15, '3DSM', 15, 4),   -- Álgebra Linear - Rita
(16, '3DSM', 13, 25),  -- Técnicas de Programação II - Henrique
(17, '3DSM', 14, 28),  -- Desenvolvimento Web III - Neymar
(18, '3DSM', 18, 11),   -- Interação Humano Computador - Adriana
(19, '3DSM', 19, 9),  -- Inglês I - Maria Lucia
(20, '4DSM', 30, 24),  -- Programação para Dispositivos Móveis I - André Olímpio
(21, '4DSM', 28, 28),  -- Laboratório de Desenvolvimento Web - Neymar
(22, '4DSM', 29, 38),  -- Internet das Coisas e Aplicações - Rodrigo
(23, '4DSM', 31, 4),   -- Estatística Aplicada - Rita
(24, '4DSM', 27, 8),   -- Integração e Entrega Contínua - Lucineide (changed from Rodrigo)
(25, '4DSM', 32, 8),   -- Experiência do Usuário - Lucineide
(26, '4DSM', 33, 9),   -- Inglês II - Maria
(27, '5DSM', 24, 41),   -- Segurança no Des. de Aplicações (A definir)
(28, '5DSM', 21, 41),   -- Aprendizagem de Máquina (A definir)
(29, '5DSM', 20, 41),   -- Computação em Nuvem I (A definir)
(30, '5DSM', 22, 41),   -- Lab. de Des. para Dispositivos Móveis (A definir)
(31, '5DSM', 23, 39),   -- Prog. para Dispositivos Móveis II (Prof. Ronaldo Emerick Moreira)
(32, '5DSM', 26, 7),    -- Inglês III (Profa. Joanize Aparecida)
(33, '5DSM', 25, 41);   -- Fundamentos da Redação Técnica (A definir)

-- Inserção de horários
INSERT INTO Horario (HoraInicial, HoraFinal) VALUES
('18:45:00', '19:35:00'),
('19:35:00', '20:25:00'),
('20:25:00', '21:25:00'),
('21:25:00', '22:15:00'),
('22:15:00', '23:05:00'),
('07:30:00', '08:20:00'),
('08:20:00', '09:10:00'),
('09:20:00', '10:10:00'),
('10:10:00', '11:00:00'),
('11:10:00', '12:00:00'),
('12:00:00', '12:50:00');

-- Inserção de dias da semana
INSERT INTO Semana (Dia) VALUES
('Segunda-feira'),
('Terça-feira'),
('Quarta-feira'),
('Quinta-feira'),
('Sexta-feira'),
('Sábado'),
('Domingo');