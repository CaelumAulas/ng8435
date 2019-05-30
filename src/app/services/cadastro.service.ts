import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserPost } from '../models/dto/user-post';

@Injectable()
export class CadastroService {
  
  private endpoint = 'users';

  constructor(private http: HttpClient){}

  cadastrar(dadosFormCadastro: {nome, username, senha, telefone, avatar}) {

    const dadosCadastroDto = new UserPost(dadosFormCadastro);

    return this.http.post(environment.cmailApi+this.endpoint, dadosCadastroDto)
  }

}