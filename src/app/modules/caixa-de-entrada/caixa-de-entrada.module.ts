import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CaixaDeEntradaComponent,
    HeaderComponent
  ],
  exports: [CaixaDeEntradaComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CaixaDeEntradaModule { }
