import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuUnidadComponent } from './usu-unidad.component';

describe('UsuUnidadComponent', () => {
  let component: UsuUnidadComponent;
  let fixture: ComponentFixture<UsuUnidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuUnidadComponent]
    });
    fixture = TestBed.createComponent(UsuUnidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
