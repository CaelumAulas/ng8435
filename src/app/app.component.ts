import { Component } from '@angular/core';
import { Email } from './models/email';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
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

  }
  
}
