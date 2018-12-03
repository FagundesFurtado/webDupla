import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { MudarNotasComponent } from './_components/conteudo/professor/mudar-notas/mudar-notas.component';
import { PresencaComponent } from './_components/conteudo/professor/presenca/presenca.component';

import { DisciplinasComponent } from './_components/conteudo/admin/disciplinas/disciplinas.component';
import { DepartamentosComponent } from './_components/conteudo/admin/departamentos/departamentos.component';
import { UniversidadeComponent } from './_components/conteudo/admin/universidade/universidade.component';
import { ProfessoresComponent } from './_components/conteudo/admin/professores/professores.component';
import { AlunosComponent } from './_components/conteudo/admin/alunos/alunos.component';
import { NovoCursoComponent } from './_components/conteudo/admin/cursos/novo-curso/novo-curso.component';
import { NovaDisciplinaComponent } from './_components/conteudo/admin/disciplinas/nova-disciplina/nova-disciplina.component';
import { NovoDepartamentoComponent } from './_components/conteudo/admin/departamentos/novo-departamento/novo-departamento.component';
import { NovaUniversidadeComponent } from './_components/conteudo/admin/universidade/nova-universidade/nova-universidade.component';
import { NovoProfessorComponent } from './_components/conteudo/admin/professores/novo-professor/novo-professor.component';
import { NovoAlunoComponent } from './_components/conteudo/admin/alunos/novo-aluno/novo-aluno.component';
import { CadastrarAlunoComponent } from './_components/conteudo/admin/disciplinas/cadastrar-aluno/cadastrar-aluno.component';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { RoleGuardService as RoleGuard } from './auth/role-guard.service';
import { EditarDepartamentoComponent } from './_components/conteudo/admin/departamentos/editar-departamento/editar-departamento.component';
import { EditarCursosComponent } from './_components/conteudo/admin/cursos/editar-cursos/editar-cursos.component';
import { EditarAlunosComponent } from './_components/conteudo/admin/alunos/editar-alunos/editar-alunos.component';
import { EditarUniversidadeComponent } from './_components/conteudo/admin/universidade/editar-universidade/editar-universidade.component';
import { EditarProfessoresComponent } from './_components/conteudo/admin/professores/editar-professores/editar-professores.component';
import { EditarDisciplinasComponent } from './_components/conteudo/admin/disciplinas/editar-disciplinas/editar-disciplinas.component';
import { NotasAlunoComponent } from './_components/conteudo/aluno/notas-aluno/notas-aluno.component';
import { CursosComponent } from './_components/conteudo/admin/cursos/cursos.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [RoleGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    { path: 'cursos', component: CursosComponent, canActivate: [RoleGuard], data: { admin : '1'}   },
    { path: 'novo-curso', component: NovoCursoComponent, canActivate: [RoleGuard], data: { admin : '1'}  },
    { path: 'editar-curso', component: EditarCursosComponent, canActivate: [RoleGuard], data: { admin : '1', caminho : '/cursos'}  },

    { path: 'disciplinas', component: DisciplinasComponent, canActivate: [RoleGuard], data: { admin : '1'}  },
    { path: 'nova-disciplina', component: NovaDisciplinaComponent, canActivate: [RoleGuard], data: { admin : '1'}  },
    { path: 'editar-disciplina', component: EditarDisciplinasComponent,
                canActivate: [RoleGuard], data: { admin : '1', caminho : '/disciplinas'}  },
    { path: 'cadastrar-aluno', component: CadastrarAlunoComponent, canActivate: [RoleGuard], data: { admin : '1'}   },

    { path: 'departamentos', component: DepartamentosComponent, canActivate: [RoleGuard], data: { admin : '1'}  },
    { path: 'novo-departamento', component: NovoDepartamentoComponent, canActivate: [RoleGuard], data: { admin : '1'}  },
    { path: 'editar-departamento', component: EditarDepartamentoComponent,
              canActivate: [RoleGuard], data: { admin : '1', caminho : '/departamentos'}  },

    { path: 'universidades', component: UniversidadeComponent, canActivate: [RoleGuard], data: { admin : '1'} },
    { path: 'nova-universidade', component: NovaUniversidadeComponent, canActivate: [RoleGuard], data: { admin : '1'}   },
    { path: 'editar-universidade', component: EditarUniversidadeComponent,
                                  canActivate: [RoleGuard], data: { admin : '1', caminho : '/universidades'}   },

    { path: 'professores', component: ProfessoresComponent, canActivate: [RoleGuard], data: { admin : '1'}    },
    { path: 'novo-professor', component: NovoProfessorComponent, canActivate: [RoleGuard], data: { admin : '1'}  },
    { path: 'editar-professor', component: EditarProfessoresComponent,
                                  canActivate: [RoleGuard], data: { admin : '1', caminho : '/professores'}  },

    { path: 'alunos', component: AlunosComponent, canActivate: [RoleGuard], data: { admin : '1'}   },
    { path: 'novo-aluno', component: NovoAlunoComponent, canActivate: [RoleGuard], data: { admin : '1'}    },
    { path: 'editar-aluno', component: EditarAlunosComponent, canActivate: [RoleGuard], data: { admin : '1', caminho : '/alunos'} },

    { path: 'editar-notas', component: MudarNotasComponent, canActivate: [RoleGuard], data: { professor : '1'}   },


    { path: 'notas', component: NotasAlunoComponent, canActivate: [RoleGuard], data: { aluno : '1'}   },

    { path: 'alterarNotas', component: MudarNotasComponent},
    { path: 'presenca', component: PresencaComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
