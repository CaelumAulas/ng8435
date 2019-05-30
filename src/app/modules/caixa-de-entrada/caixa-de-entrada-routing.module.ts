import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';

const rotasInbox: Routes = [
  {path: '', component: CaixaDeEntradaComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(rotasInbox)
  ],
  exports: [
    RouterModule
  ]
})
export class CaixaDeEntradaRoutingModule { }
