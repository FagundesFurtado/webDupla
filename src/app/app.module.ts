import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { TopoComponent } from './_components/topo/topo.component';
import { MudarNotasComponent } from './_components/conteudo/professor/mudar-notas/mudar-notas.component';
import { PresencaComponent } from './_components/conteudo/professor/presenca/presenca.component';
import { UniversidadeComponent } from './_components/conteudo/admin/universidade/universidade.component';
import { DepartamentosComponent } from './_components/conteudo/admin/departamentos/departamentos.component';
import { CursosComponent } from './_components/conteudo/admin/cursos/cursos.component';
import { DisciplinasComponent } from './_components/conteudo/admin/disciplinas/disciplinas.component';
import { ProfessoresComponent } from './_components/conteudo/admin/professores/professores.component';
import { AlunosComponent } from './_components/conteudo/admin/alunos/alunos.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxPaginationModule } from 'ngx-pagination';
import { BuscarPipe } from '../app/search.pipe';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NovoCursoComponent } from './_components/conteudo/admin/cursos/novo-curso/novo-curso.component';
import { NovaDisciplinaComponent } from './_components/conteudo/admin/disciplinas/nova-disciplina/nova-disciplina.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NovoDepartamentoComponent } from './_components/conteudo/admin/departamentos/novo-departamento/novo-departamento.component';
import { NovaUniversidadeComponent } from './_components/conteudo/admin/universidade/nova-universidade/nova-universidade.component';
import { NovoAlunoComponent } from './_components/conteudo/admin/alunos/novo-aluno/novo-aluno.component';
import { NgxMaskModule } from 'ngx-mask';
import { NovoProfessorComponent } from './_components/conteudo/admin/professores/novo-professor/novo-professor.component';
import { CadastrarAlunoComponent } from './_components/conteudo/admin/disciplinas/cadastrar-aluno/cadastrar-aluno.component';
import { ServidorService } from './_services/servidor.service';

import { AuthGuardService } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { RoleGuardService } from './auth/role-guard.service';
import { EditarProfessoresComponent } from './_components/conteudo/admin/professores/editar-professores/editar-professores.component';
import { EditarDisciplinasComponent } from './_components/conteudo/admin/disciplinas/editar-disciplinas/editar-disciplinas.component';
import { EditarUniversidadeComponent } from './_components/conteudo/admin/universidade/editar-universidade/editar-universidade.component';
import { EditarDepartamentoComponent } from './_components/conteudo/admin/departamentos/editar-departamento/editar-departamento.component';
import { EditarCursosComponent } from './_components/conteudo/admin/cursos/editar-cursos/editar-cursos.component';
import { DataService } from './_services/data.service';
import { EditarAlunosComponent } from './_components/conteudo/admin/alunos/editar-alunos/editar-alunos.component';
import { NotasAlunoComponent } from './_components/conteudo/aluno/notas-aluno/notas-aluno.component';
import { HashLocationStrategy, LocationStrategy} from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,
    HttpModule,
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ToastrModule.forRoot(),
    NgxMaskModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    TopoComponent,
    MudarNotasComponent,
    PresencaComponent,
    UniversidadeComponent,
    NovoProfessorComponent,
    DepartamentosComponent,
    CursosComponent,
    DisciplinasComponent,
    ProfessoresComponent,
    AlunosComponent,
    BuscarPipe,
    NovoCursoComponent,
    NovaDisciplinaComponent,
    NovoDepartamentoComponent,
    NovaUniversidadeComponent,
    NovoAlunoComponent,
    CadastrarAlunoComponent,
    EditarProfessoresComponent,
    EditarDisciplinasComponent,
    EditarUniversidadeComponent,
    EditarDepartamentoComponent,
    EditarAlunosComponent,
    EditarCursosComponent,
    NotasAlunoComponent,

  ],


  providers: [

    ServidorService,
    AuthGuardService,
    AuthService,
    DataService,
    RoleGuardService,
    { provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
