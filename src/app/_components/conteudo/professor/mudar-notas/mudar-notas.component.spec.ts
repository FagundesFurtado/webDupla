import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MudarNotasComponent } from './mudar-notas.component';

describe('MudarNotasComponent', () => {
  let component: MudarNotasComponent;
  let fixture: ComponentFixture<MudarNotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MudarNotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MudarNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
