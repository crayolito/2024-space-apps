import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-linea-tiempo',
  standalone: true,
  imports: [],
  templateUrl: './linea-tiempo.component.html',
  styleUrl: './linea-tiempo.component.css',
})
export default class LineaTiempoComponent {
  public router = inject(Router);

  irToCronologiaDetallada(): void {
    this.router.navigate(['/educativo']);
  }
}
