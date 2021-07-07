const { alunos } = require('./ex.js/alunosexp');
const estudantes = require('./ex.js/estudantes');


let novoEstudante = new estudantes(require = (alunos));
let media = novoEstudante.media(novoEstudante.notas)
let falta = novoEstudante.aumentarFalta(novoEstudante.faltas);

console.log(novoEstudante)
console.log(media)
console.log(falta)
