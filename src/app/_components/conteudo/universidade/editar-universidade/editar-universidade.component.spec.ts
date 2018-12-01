import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarUniversidadeComponent } from './editar-universidade.component';

describe('EditarUniversidadeComponent', () => {
  let component: EditarUniversidadeComponent;
  let fixture: ComponentFixture<EditarUniversidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarUniversidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarUniversidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
