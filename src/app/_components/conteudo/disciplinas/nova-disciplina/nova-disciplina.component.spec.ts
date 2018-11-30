import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaDisciplinaComponent } from './nova-disciplina.component';

describe('NovaDisciplinaComponent', () => {
  let component: NovaDisciplinaComponent;
  let fixture: ComponentFixture<NovaDisciplinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaDisciplinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
