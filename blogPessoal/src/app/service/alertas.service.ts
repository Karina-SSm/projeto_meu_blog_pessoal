import { Injectable } from '@angular/core';
import {  BsModalRef, BsModalService } from 'ngx-bootstrap/modal'
import { AlertaComponent } from '../alerta/alerta.component';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(
    private bsModalService: BsModalService
  ) { }

  private showAlert(message: string,type: string){
    const bsModalRef: BsModalRef = this.bsModalService.show(AlertaComponent)
    bsModalRef.content.type = type
    bsModalRef.content.message = message
  }

  showAlertDanger(message:string){
  this.showAlert(message, 'danger')
  }

  showAlertInfo(message:string){
    this .showAlert(message, 'info')
  }

  showAlertSecondary(message:string){
    this.showAlert(message, 'secondary')
  }
}
