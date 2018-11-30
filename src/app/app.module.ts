import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AlertComponent } from './_components';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { TopoComponent } from './_components/topo/topo.component';
import { MudarNotasComponent } from './_components/conteudo/professor/mudar-notas/mudar-notas.component';
import { PresencaComponent } from './_components/conteudo/professor/presenca/presenca.component';;
import { UniversidadeComponent } from './_components/conteudo/universidade/universidade.component';
import { DepartamentosComponent } from './_components/conteudo/departamentos/departamentos.component';
import { CursosComponent } from './_components/conteudo/cursos/cursos.component';
import { DisciplinasComponent } from './_components/conteudo/disciplinas/disciplinas.component';
import { ProfessoresComponent } from './_components/conteudo/professores/professores.component';
import { AlunosComponent } from './_components/conteudo/alunos/alunos.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import {NgxPaginationModule} from 'ngx-pagination';
import { BuscarPipe } from '../app/search.pipe';
import { AngularFontAwesomeModule } from 'angular-font-awesome';;
import { NovoCursoComponent } from './_components/conteudo/cursos/novo-curso/novo-curso.component';
import { NovaDisciplinaComponent } from './_components/conteudo/disciplinas/nova-disciplina/nova-disciplina.component'

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        FormsModule,
        NgxPaginationModule,
        AngularFontAwesomeModule,
        BsDropdownModule.forRoot(),
        TooltipModule.forRoot(),
        ModalModule.forRoot()
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        TopoComponent,
        MudarNotasComponent,
        PresencaComponent,
        UniversidadeComponent,
        DepartamentosComponent ,
        CursosComponent ,
        DisciplinasComponent ,
        ProfessoresComponent ,
        AlunosComponent,
        BuscarPipe,
        NovoCursoComponent,
        NovaDisciplinaComponent    ],


    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
