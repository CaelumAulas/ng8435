import { Component, Output, EventEmitter } from "@angular/core";
import { PageDataService } from 'src/app/services/page-data.service';

@Component({
  selector: 'cmail-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './header-search.css']
})
export class HeaderComponent {
  isMenuOpen = false;
  tituloDaPagina = "";
  @Output() filtro = new EventEmitter<string>(); //criei o evento (filtro)

  constructor(private pageService: PageDataService){
    this.pageService.titulo.subscribe((novoTitulo) => {
      this.tituloDaPagina = novoTitulo
    } );
  }

  toggleMenu(){
    this.isMenuOpen = ! this.isMenuOpen;
  }

  getFiltroDeBusca(textoDigitado){
    this.filtro.emit(textoDigitado)
  }
}