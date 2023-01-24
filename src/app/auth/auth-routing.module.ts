import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { NoFoundComponent } from '../noFoundPages/no-found/no-found.component';

const routes: Routes = [
  //{path: '', component:AuthComponent},
  //Auth rutas
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path:'**',component: NoFoundComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class AuthRoutingModule { }
