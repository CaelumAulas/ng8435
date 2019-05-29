import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FormGroupModule } from 'src/app/components/form-group/form-group.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CadastroComponent
  ],
  exports: [CadastroComponent],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    FormGroupModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class CadastroModule { }
