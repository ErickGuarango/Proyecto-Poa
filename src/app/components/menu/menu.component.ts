import { Component, Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  private activeButton: HTMLElement | null = null;

  constructor(private router: Router, private renderer: Renderer2) {}

  salir() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  activateButton(event: Event): void {
    const button = event.target as HTMLElement;
    if (this.activeButton) {
      this.renderer.removeClass(this.activeButton, 'active');
    }
    this.renderer.addClass(button, 'active');
    this.activeButton = button;
  }
}
