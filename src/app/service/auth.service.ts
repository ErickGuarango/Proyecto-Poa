import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: any = null;

  constructor(private router: Router) { }

  login(user: any) {
    // Suponiendo que obtienes el usuario y su rol después de un inicio de sesión exitoso
    this.currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.redirectUser(user.rol.nombre);
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  getCurrentUser() {
    if (!this.currentUser) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    }
    return this.currentUser;
  }

  redirectUser(role: string) {
    switch (role) {
      case 'DOCENTE UNIDAD':
        this.router.navigate(['/app/unidad']);
        break;
      case 'DOCENTE CARRERA':
        this.router.navigate(['/app/carrera']);
        break;
      case 'EVALUADOR':
        this.router.navigate(['/app/evaluador']);
        break;
      case 'ADMINISTRADOR':
        this.router.navigate(['/app/admin']);
        break;
      default:
        this.router.navigate(['/']);
        break;
    }
  }
}
