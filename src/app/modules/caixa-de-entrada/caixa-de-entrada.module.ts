import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderModule } from 'src/app/components/header/header.module';

@NgModule({
  declarations: [
    CaixaDeEntradaComponent
  ],
  exports: [CaixaDeEntradaComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HeaderModule
  ]
})
export class CaixaDeEntradaModule { }
