import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    private router: Router
  ) {
    // Redirigir si ya está autenticado
    if (localStorage.getItem('token')) {
      this.router.navigate(['/app/cliente']);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {
    if (this.loginForm.invalid) {
      return;
    }

    // Simular un inicio de sesión exitoso
    const { username, password } = this.loginForm.value;
    console.log('Simulación de inicio de sesión exitoso', { username, password });

    // Aquí puedes agregar cualquier lógica adicional si es necesario
    // Simular una respuesta del servidor con código 200
    this.mensajeLogin = 'Inicio de sesión exitoso';
    localStorage.setItem('token', 'fake-jwt-token'); // Simular el almacenamiento de un token
    this.router.navigate(['/app/cliente']);
  }
}
