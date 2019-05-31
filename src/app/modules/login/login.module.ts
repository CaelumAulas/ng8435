import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { LoginRoutingModule } from './login-routing.module';
import { FormGroupModule } from 'src/app/components/form-group/form-group.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';
import { PageDataService } from 'src/app/services/page-data.service';

@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    LoginRoutingModule,
    FormGroupModule,
    FormsModule,
    HttpClientModule
  ]
  ,providers: [ 
    LoginService,
    PageDataService
  ]
})
export class LoginModule { }
