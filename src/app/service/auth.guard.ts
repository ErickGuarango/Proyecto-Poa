import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const user = this.authService.getCurrentUser();
    if (user) {
      const role = user.rol.nombre;
      const roles = next.data['roles'] as Array<string>;
      if (roles && roles.indexOf(role) === -1) {
        // Redirige si el rol del usuario no está autorizado para la ruta
        this.authService.redirectUser(role);
        return false;
      }
      return true;
    }
    // Redirige a la página de login si no hay usuario logueado
    this.router.navigate(['/login']);
    return false;
  }
}
