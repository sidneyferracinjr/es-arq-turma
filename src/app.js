const Aluno = require('./Aluno');
const Turma = require('./Turma');
const TurmaPresencial = require('./TurmaPresencial');

// Crie instâncias dos objetos Aluno, Turma e TurmaPresencial
const aluno1 = new Aluno('João', 20);
const turma1 = new Turma('Turma A');
const turmaPresencial1 = new TurmaPresencial('Turma B', 'Sala 101');

// Faça chamadas de métodos e teste as funcionalidades dos objetos
aluno1.exibirDados();
turma1.adicionarAluno(aluno1);
turmaPresencial1.adicionarAluno(aluno1);

// Exiba informações sobre as turmas
console.log(turma1.obterAlunos());
console.log(turmaPresencial1.obterAlunos());