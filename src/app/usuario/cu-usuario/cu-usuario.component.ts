import { Component, Input } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { format } from 'date-fns-tz';

@Component({
  selector: 'app-cu-usuario',
  templateUrl: './cu-usuario.component.html',
  styleUrls: ['./cu-usuario.component.css']
})
export class CuUsuarioComponent {
  @Input() usuario: Usuario | undefined;

  formatDateTimeLocal(fecha: Date): string {
    const fechaFormateada = format(fecha, "yyyy-MM-dd'T'HH:mm", { timeZone: "America/Bogota" });
    return fechaFormateada;
  }

  updateDate(valor: string) {
    this.usuario!.fechaRegistro = new Date(valor);
  }
}
