import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { MudarNotasComponent } from './_components/conteudo/professor/mudar-notas/mudar-notas.component';
import { PresencaComponent } from './_components/conteudo/professor/presenca/presenca.component';
import { CursosComponent } from './_components/conteudo/cursos/cursos.component';
import { DisciplinasComponent } from './_components/conteudo/disciplinas/disciplinas.component';
import { DepartamentosComponent } from './_components/conteudo/departamentos/departamentos.component';
import { UniversidadeComponent } from './_components/conteudo/universidade/universidade.component';
import { ProfessoresComponent } from './_components/conteudo/professores/professores.component';
import { AlunosComponent } from './_components/conteudo/alunos/alunos.component';
import { NovoCursoComponent } from './_components/conteudo/cursos/novo-curso/novo-curso.component';
import { NovaDisciplinaComponent } from './_components/conteudo/disciplinas/nova-disciplina/nova-disciplina.component';
import { NovoDepartamentoComponent } from './_components/conteudo/departamentos/novo-departamento/novo-departamento.component';
import { NovaUniversidadeComponent } from './_components/conteudo/universidade/nova-universidade/nova-universidade.component';
import { NovoProfessorComponent } from './_components/conteudo/professores/novo-professor/novo-professor.component';
import { NovoAlunoComponent } from './_components/conteudo/alunos/novo-aluno/novo-aluno.component';
import { CadastrarAlunoComponent } from './_components/conteudo/disciplinas/cadastrar-aluno/cadastrar-aluno.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    { path: 'cursos', component: CursosComponent },
    { path: 'novo-curso', component: NovoCursoComponent },

    { path: 'disciplinas', component: DisciplinasComponent },
    { path: 'nova-disciplina', component: NovaDisciplinaComponent },
    { path: 'cadastrar-aluno', component: CadastrarAlunoComponent },

    { path: 'departamentos', component: DepartamentosComponent },
    { path: 'novo-departamento', component: NovoDepartamentoComponent },


    { path: 'universidades', component: UniversidadeComponent },
    { path: 'nova-universidade', component: NovaUniversidadeComponent },


    { path: 'professores', component: ProfessoresComponent },
    { path: 'novo-professor', component: NovoProfessorComponent },


    { path: 'alunos', component: AlunosComponent },
    { path: 'novo-aluno', component: NovoAlunoComponent },


    { path: 'alterarNotas', component: MudarNotasComponent },
    { path: 'presenca', component: PresencaComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
