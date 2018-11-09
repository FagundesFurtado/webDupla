

export class AlunoNota {
    nota : number
    faltas : number   
    disciplina : string

    constructor(nota, falta, disciplina){
        this.disciplina = disciplina
        this.nota = nota
        this.faltas = falta
    }

}