import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaUniversidadeComponent } from './nova-universidade.component';

describe('NovaUniversidadeComponent', () => {
  let component: NovaUniversidadeComponent;
  let fixture: ComponentFixture<NovaUniversidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaUniversidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaUniversidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
