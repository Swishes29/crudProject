import { Component, ElementRef, ViewChild } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrl: './listar-usuario.component.css',
})
export class ListarUsuarioComponent {
  @ViewChild('ModalUsuario') modal: ElementRef | undefined;

  VectorUsuarios: Usuario[] = [
    { id: 1, nombre: 'Kevin', fechaRegistro: new Date() },
    { id: 2, nombre: 'Steven', fechaRegistro: new Date() },
  ];
  usuarioSeleccionado: Usuario | undefined = undefined;
  isNew: boolean = false;

  EditarUsuario(usuario: Usuario) {
    this.isNew = false;
    this.usuarioSeleccionado = usuario;
  }
  NuevoUsuario() {
    this.isNew = true;
    this.usuarioSeleccionado = { id: 0, fechaRegistro: new Date(), nombre: '' };
  }

  GuardarUsuario() {
    if (this.isNew) {
      this.VectorUsuarios.push(this.usuarioSeleccionado!); //Equivalente a llamar una API
      this.usuarioSeleccionado = undefined;
      this.CerrarModal(this.modal);
    } else {
      //Llamada a la API PUT
      this.usuarioSeleccionado = undefined;
      this.CerrarModal(this.modal)
    }
  }

  CerrarModal(modal: ElementRef | undefined) {
    if (modal) {
      let bsModal = Modal.getInstance(modal?.nativeElement);
      bsModal?.hide();

      let backdrop = document.querySelector('.modal-backdrop.fade.show');
      if (backdrop) {
        backdrop.parentNode?.removeChild(backdrop);
      }
      document.body.removeAttribute('style');
      document.body.removeAttribute('class');
    }
  }
}
