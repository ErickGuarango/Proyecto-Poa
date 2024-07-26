import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuCarreraComponent } from './usu-carrera.component';

describe('UsuCarreraComponent', () => {
  let component: UsuCarreraComponent;
  let fixture: ComponentFixture<UsuCarreraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuCarreraComponent]
    });
    fixture = TestBed.createComponent(UsuCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
