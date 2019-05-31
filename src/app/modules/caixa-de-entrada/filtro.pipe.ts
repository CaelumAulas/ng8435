import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'filtroPorTitulo'
})
export class Filtro implements PipeTransform {
    transform(lista:[], textoDigitado){
        return lista;
    }
}