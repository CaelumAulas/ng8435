import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class PageDataService {

  titulo = new Subject<string>()

  emitirNovoTitulo(novoTitulo) {
    document.title = `${novoTitulo} CMail`.trim();
    this.titulo.next(novoTitulo);
  }

}