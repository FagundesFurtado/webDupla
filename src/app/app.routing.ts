import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
//import { AuthGuard } from './_guards';
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
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { RoleGuardService as RoleGuard } from './auth/role-guard.service';
import { EditarDepartamentoComponent } from './_components/conteudo/departamentos/editar-departamento/editar-departamento.component';
import { EditarCursosComponent } from './_components/conteudo/cursos/editar-cursos/editar-cursos.component';
import { EditarAlunosComponent } from './_components/conteudo/alunos/editar-alunos/editar-alunos.component';
import { EditarUniversidadeComponent } from './_components/conteudo/universidade/editar-universidade/editar-universidade.component';
import { EditarProfessoresComponent } from './_components/conteudo/professores/editar-professores/editar-professores.component';
import { EditarDisciplinasComponent } from './_components/conteudo/disciplinas/editar-disciplinas/editar-disciplinas.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    { path: 'cursos', component: CursosComponent, canActivate: [AuthGuard]  },
    { path: 'novo-curso', component: NovoCursoComponent, canActivate: [AuthGuard] },
    { path: 'editar-curso', component: EditarCursosComponent, canActivate: [AuthGuard] },

    { path: 'disciplinas', component: DisciplinasComponent, canActivate: [AuthGuard]},
    { path: 'nova-disciplina', component: NovaDisciplinaComponent, canActivate: [AuthGuard] },
    { path: 'editar-disciplina', component: EditarDisciplinasComponent, canActivate: [AuthGuard] },
    { path: 'cadastrar-aluno', component: CadastrarAlunoComponent, canActivate: [AuthGuard]  },

    { path: 'departamentos', component: DepartamentosComponent, canActivate: [AuthGuard] },
    { path: 'novo-departamento', component: NovoDepartamentoComponent, canActivate: [AuthGuard] },
    { path: 'editar-departamento', component: EditarDepartamentoComponent, canActivate: [AuthGuard] },

    { path: 'universidades', component: UniversidadeComponent, canActivate: [AuthGuard]},
    { path: 'nova-universidade', component: NovaUniversidadeComponent, canActivate: [AuthGuard]  },
    { path: 'editar-universidade', component: EditarUniversidadeComponent, canActivate: [AuthGuard]  },

    { path: 'professores', component: ProfessoresComponent, canActivate: [AuthGuard]   },
    { path: 'novo-professor', component: NovoProfessorComponent, canActivate: [AuthGuard] },
    { path: 'editar-professor', component: EditarProfessoresComponent, canActivate: [AuthGuard] },

    { path: 'alunos', component: AlunosComponent, canActivate: [AuthGuard]  },
    { path: 'novo-aluno', component: NovoAlunoComponent, canActivate: [AuthGuard]   },
    { path: 'editar-aluno', component: EditarAlunosComponent, canActivate: [AuthGuard]  },


    // { path: 'cursos', component: CursosComponent, canActivate: [RoleGuard], data: { expectedRole: 'admin'}  },
    // { path: 'novo-curso', component: NovoCursoComponent, canActivate: [RoleGuard], data: { expectedRole: 'admin'}  },

    // { path: 'disciplinas', component: DisciplinasComponent, canActivate: [RoleGuard], data: { expectedRole: 'admin'}  },
    // { path: 'nova-disciplina', component: NovaDisciplinaComponent, canActivate: [RoleGuard], data: { expectedRole: 'admin'}  },
    // { path: 'cadastrar-aluno', component: CadastrarAlunoComponent, canActivate: [RoleGuard], data: { expectedRole: 'admin'}  },

    // { path: 'departamentos', component: DepartamentosComponent, canActivate: [RoleGuard], data: { expectedRole: 'admin'}  },
    // { path: 'novo-departamento', component: NovoDepartamentoComponent, canActivate: [RoleGuard], data: { expectedRole: 'admin'}  },


    // { path: 'universidades', component: UniversidadeComponent, canActivate: [RoleGuard], data: { expectedRole: 'admin'}  },
    // { path: 'nova-universidade', component: NovaUniversidadeComponent, canActivate: [RoleGuard], data: { expectedRole: 'admin'}  },


    // { path: 'professores', component: ProfessoresComponent, canActivate: [RoleGuard], data: { expectedRole: 'admin'}  },
    // { path: 'novo-professor', component: NovoProfessorComponent, canActivate: [RoleGuard], data: { expectedRole: 'admin'}  },


    // { path: 'alunos', component: AlunosComponent, canActivate: [AuthGuard]  },
    // { path: 'novo-aluno', component: NovoAlunoComponent, canActivate: [RoleGuard], data: { expectedRole: 'admin'}  },


    { path: 'alterarNotas', component: MudarNotasComponent },
    { path: 'presenca', component: PresencaComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
