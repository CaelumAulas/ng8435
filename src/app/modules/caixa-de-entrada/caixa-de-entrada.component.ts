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
    this.listarEmails();
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

  listarEmails(){
    this.servico.listar()
                .subscribe(
                  emailListApi => this.listaEmails = emailListApi
                  ,erro => console.log(erro)
                )
  }

  deletarEmail(id: string){
    console.log('apagou cx entrada');
    this.servico.deletar(id)
    .subscribe((res)=>{
      
      //alternativa caso queira pegar sempre do banco de dados;
      //this.listarEmails();
      
      this.listaEmails = this
                        .listaEmails
                        .filter(email => email.id != id)

    }
    ,erro => console.log(erro)
    )
    
    //remover o email da lista e da API (implementar um serviço de remoção)
  }
}
