import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Login } from '../models/dto/login';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class LoginService {

  private endpoint = 'login';

  constructor(private http: HttpClient) { }

  autenticar({ email, senha }): Observable<Object> {

    const loginDto = new Login({ email, senha });
    
    return this.http
                .post(environment.cmailApi + this.endpoint, loginDto)
                .pipe(
                  map((response: any)=>{
                    localStorage.setItem('cmail-token', response.token);
                    return response;
                  })
                )

  }

}