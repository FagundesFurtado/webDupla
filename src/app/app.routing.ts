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


const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    { path: 'cursos', component: CursosComponent },
    { path: 'disciplinas', component: DisciplinasComponent },
    { path: 'departamentos', component: DepartamentosComponent },
    { path: 'universidades', component: UniversidadeComponent },
    { path: 'professores', component: ProfessoresComponent },
    { path: 'alunos', component: AlunosComponent },
    { path: 'alterarNotas', component: MudarNotasComponent },
    { path: 'presenca', component: PresencaComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
