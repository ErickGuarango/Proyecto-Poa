import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService

 } from 'src/app/components/usuarios/usuario.service';
import { Usuarios } from 'src/app/components/usuarios/usuario';
import Swal from 'sweetalert2'; // Importa SweetAlert2

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mensajeLogin: string = '';
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usuarioService: UsuarioService // Asegúrate de que el servicio esté correctamente inyectado
  ) {
    if (localStorage.getItem('token')) {
      this.router.navigate(['/app/cliente']);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;
    const usuario = new Usuarios();
    usuario.correo = email;
    usuario.contrasena = password;

    this.usuarioService.login(usuario).subscribe(
      response => {
        // Mostrar alerta de éxito con SweetAlert2
        Swal.fire({
          title: 'Éxito!',
          text: 'Inicio de sesión exitoso',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        }).then(() => {
          localStorage.setItem('token', 'fake-jwt-token');
          this.router.navigate(['/app/cliente']);
        });
      },
      error => {
        // Mostrar alerta de error con SweetAlert2
        Swal.fire({
          title: 'Error!',
          text: 'Email o contraseña incorrectos',
          icon: 'error',
          confirmButtonText: 'Intentar de nuevo'
        });
      }
    );
  }
}
