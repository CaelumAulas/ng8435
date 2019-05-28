import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './modules/login/login.component';
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';

const rotasApp: Routes = [
  {path: '', component: LoginComponent},
  {path: 'inbox', component: CaixaDeEntradaComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: '**', redirectTo: ''}
]

export const ModuloRoteamento = RouterModule.forRoot(rotasApp);