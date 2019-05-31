import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from "@angular/forms";
import { FormValidation } from 'src/app/utils/form-validation';
import { Router } from '@angular/router';
import { CadastroService } from 'src/app/services/cadastro.service';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PageDataService } from 'src/app/services/page-data.service';

@Component({
  selector: 'cmail-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  nome = new FormControl('', Validators.required);
  username = new FormControl('', [Validators.required, Validators.minLength(3)]);
  senha = new FormControl('', Validators.required);
  telefone = new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}-?[0-9]{4}[0-9]?')]);
  avatar = new FormControl('',Validators.required,this.validaImagem.bind(this));

  formCadastro = new FormGroup({
    nome: this.nome,
    username: this.username,
    senha: this.senha,
    telefone: this.telefone,
    avatar:this.avatar
  }, {updateOn: 'blur'})

  mensagem = '';

  constructor(private servico: CadastroService,
              private http: HttpClient,
              private roteador: Router,
              private pageService: PageDataService){}

  ngOnInit() {
    this.pageService.emitirNovoTitulo('Cadastro');
  }

  validaImagem(controle: AbstractControl): Observable<ValidationErrors | null> {
    
    const url = controle.value;
    
    return this.http
                .head(url,{observe: 'response'})
                .pipe(
                  map((response) => {

                    if(response.ok){
                      console.warn('deu certo')
                      console.log(response);

                      return null
                    }
                    else {
                      console.warn('erro')
                      console.log(response);
                      
                      let erro = {
                        urlInvalida: "A url apresentou problemas",
                        status: response.status
                      }

                      return erro
                    }
                  })
                  ,catchError((response) => {

                    console.warn('Caiu no catchError');
                    console.log(response);

                    let erroMsg = {
                      urlInvalida: "Url com bloqueio de CORS",
                      status: response.status
                    }

                    return [erroMsg]
                  })
                )
  }

  cadastrarUsuario(){

    if(this.formCadastro.invalid) {
      FormValidation.validaCampos(this.formCadastro);
      return;
    }
    
    this.servico
        .cadastrar(this.formCadastro.value)
        .subscribe(
          () => this.roteador.navigate(['login', this.formCadastro.get('nome').value])
          ,error => console.log(error)
        )
    
  }

}
