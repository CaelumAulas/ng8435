import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormValidation } from 'src/app/utils/form-validation';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { PageDataService } from 'src/app/services/page-data.service';

@Component({
  selector: 'cmail-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {
    email: '',
    senha: ''
  }

  constructor(private servico: LoginService
              ,private roteador: Router
              ,private pageService: PageDataService) {}

  ngOnInit() {
    this.pageService.emitirNovoTitulo('Login');
  }

  fazerLogin(formLogin: NgForm){
    
    if(formLogin.invalid) {
      FormValidation.validaCampos(formLogin)
      return;
    }

    this.servico
        .autenticar(this.login)
        .subscribe(
          () => {
            this.roteador.navigate(['inbox'])
          }
        ) 
        
  }

}
