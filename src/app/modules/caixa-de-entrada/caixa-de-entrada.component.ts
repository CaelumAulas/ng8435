import { Component, OnInit } from '@angular/core';
import { Email } from '../../models/email';
import { NgForm } from '@angular/forms';

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

  validaCampos(form){
    for(let nomeControl in form.controls){
      form.controls[nomeControl].markAsTouched();
    }
  }

  enviarEmail(formEmail: NgForm){
    
    if(formEmail.invalid){
      this.validaCampos(formEmail);
      return
    }

    this.listaEmails.push(this.email);
    this.email = new Email();
    formEmail.reset();
    this.toggleEmailForm();

  }

}
