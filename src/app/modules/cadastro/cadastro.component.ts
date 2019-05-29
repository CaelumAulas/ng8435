import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { UserPost } from 'src/app/models/dto/user-post';

@Component({
  selector: 'cmail-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  formCadastro = new FormGroup({
    nome: new FormControl(''),
    username: new FormControl(''),
    senha: new FormControl(''),
    telefone: new FormControl(''),
    avatar: new FormControl('')
  })

  mensagem = ''

  constructor(private http: HttpClient){}

  ngOnInit() {}

  cadastrarUsuario(){
    if(this.formCadastro.invalid) return

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
