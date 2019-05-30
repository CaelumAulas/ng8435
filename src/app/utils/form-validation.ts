import { HttpClient } from '@angular/common/http';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Injectable } from '@angular/core';
import { map, catchError } from "rxjs/operators";
import { Observable } from 'rxjs';


@Injectable()
export class FormValidation {

  constructor(private http: HttpClient){
  }
  
  //se retornar NULL, está válido. Se não, retornamos um objeto, que será do tipo ValidationErrors
  validaImagem(controle: AbstractControl): Observable<ValidationErrors | null> {
    
    const url = controle.value;
    
    console.log(this.http);


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

  static validaCampos(form) {
    for (let nomeControl in form.controls) {
      form.controls[nomeControl].markAsTouched();
    }
  }
  
}