const alunos = require("./alunosexp");
let alunosConstrutor = function Aluno(nome, faltas, notas){
    this.notas = notas,
    this.nome = nome,
    this.faltas = faltas,
    this.media = function(array){
       let soma = array.reduce((a,b)=> {
            return a + b;
        })
        return soma / notas.length
    }
    this.aumentarFalta = function(faltas){
        return faltas + 1;
    }
}

module.exports = alunosConstrutor;

