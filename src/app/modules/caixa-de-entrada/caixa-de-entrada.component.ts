import { Component, OnInit } from '@angular/core';
import { Email } from '../../models/email';
import { NgForm } from '@angular/forms';
import { FormValidation } from 'src/app/utils/form-validation';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles: []
})
export class CaixaDeEntradaComponent implements OnInit {

  private _isEmailOpen = false;
  email = new Email();
  listaEmails: Email[] = [];

  constructor(private servico: EmailService) { }

  ngOnInit() {
    this.servico.listar()
                .subscribe(
                  emailListApi => {
                    console.log(emailListApi);
                    this.listaEmails = emailListApi;
                    
                  }
                )
  }

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

    this.servico
        .enviar(this.email)
        .subscribe(
          emailApi => {
            this.listaEmails.push(emailApi);
            this.email = new Email();
            formEmail.reset();
            this.toggleEmailForm();

          }
        )

  }

}
