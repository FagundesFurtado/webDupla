
import {Aluno } from './aluno'

export class AlunoDisciplina extends Aluno {
    nota : number
    faltas : number   
    disciplina : string

    constructor(nota, falta, nome){
        super()
        this.nota = nota;
        this.faltas = falta
        this.nome = nome
    }


}