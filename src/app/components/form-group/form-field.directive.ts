import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[cmailFormField]'
})
export class FormFieldDirective implements OnInit {

  constructor(private elemento: ElementRef) {}

  ngOnInit(){

    let campo:HTMLInputElement = this.elemento.nativeElement;

    if(!campo.name){
      throw new Error('Para usar a diretiva cmailFormField, um atributo name deve ser definido no campo.');
    }
    
    campo.placeholder = ' ';
    campo.classList.add('mdl-textfield__input');
    campo.id = campo.name;

  }
}
