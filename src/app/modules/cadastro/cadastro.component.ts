import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { UserPost } from 'src/app/models/dto/user-post';
import { FormValidation } from 'src/app/utils/form-validation';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

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
  })

  mensagem = '';

  constructor(private http: HttpClient){}

  validaImagem(): Observable<ValidationErrors> {

    const url = this.avatar.value;

    return this.http
                .head(url,{observe: 'response'})
                .pipe(
                  map((response)=> {
                    return [response.ok]
                  })
                )
    
  }

  ngOnInit() {}

  cadastrarUsuario(){

    if(this.formCadastro.invalid) {
      FormValidation.validaCampos(this.formCadastro)
    }

    let userDataApi = new UserPost(this.formCadastro.value);
    
    this.http
        .post('http://localhost:3200/users',userDataApi)
        .subscribe(
          (response) => {
            console.log(response);
            this.mensagem = 'cadastrado com sucesso';
          }
          ,(error) => {
            console.log(error);
          }
          ,() => {
            //complete
            console.log('sucesso');
            
          }
        )
    
  }

}
