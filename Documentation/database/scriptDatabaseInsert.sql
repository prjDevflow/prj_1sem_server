INSERT INTO public.curso(
	idcurso, nome)
	VALUES (1, 'Desenvolvimento de Software Multiplataforma');
	
INSERT INTO public.curso(
	idcurso, nome)
	VALUES (2, 'Geoprocessamento');

INSERT INTO public.curso(
	idcurso, nome)
	VALUES (3, 'Meio Ambiente e Recursos Hídricos');





INSERT INTO public.professor(
	idprofessor, nome)
	VALUES (1, 'Marcelo Sudo');

INSERT INTO public.professor(
	idprofessor, nome)
	VALUES (2, 'Egydio');

INSERT INTO public.professor(
	idprofessor, nome)
	VALUES (3, 'Arley');




INSERT INTO public.sala(
	numero, nome, andar)
	VALUES (207, 'Lab. Informatica', 2);




INSERT INTO public.disciplina(
	iddisciplina, nome)
	VALUES (1, 'Algoritmos e Lógica de Programação');

INSERT INTO public.disciplina(
	iddisciplina, nome)
	VALUES (2, 'Modelagem de Banco de Dados');

INSERT INTO public.disciplina(
	iddisciplina, nome)
	VALUES (3, 'Engenharia de Software I');




INSERT INTO public.turma(
	idturma, curso_idcurso, turno)
	VALUES ('1DSM', 1, 'Noturno');





INSERT INTO public.aula(
	idaula, turma_idturma, disciplina_iddisciplina, professor_idprofessor)
	VALUES (1, '1DSM', 1, 3);


INSERT INTO public.reserva(
	idreserva, aula_idaula, sala_numero)
	VALUES (1, 1, 207);
