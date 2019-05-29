import { Component, OnInit } from '@angular/core';
import { Email } from '../../models/email';
import { NgForm } from '@angular/forms';
import { FormValidation } from 'src/app/utils/form-validation';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles: []
})
export class CaixaDeEntradaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private _isEmailOpen = false;
  email = new Email();
  listaEmails: Email[] = [];

  get isEmailOpen(){
    return this._isEmailOpen;
  }

  toggleEmailForm(){
    this._isEmailOpen = !this.isEmailOpen;
  }

  enviarEmail(formEmail: NgForm){
    
    if(formEmail.invalid){
      FormValidation.validaCampos(formEmail);
      return
    }

    this.listaEmails.push(this.email);
    this.email = new Email();
    formEmail.reset();
    this.toggleEmailForm();

  }

}
