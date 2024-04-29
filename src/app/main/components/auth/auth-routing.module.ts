import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
    { path: 'reset_password', loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordModule) },
    { path: 'signin', loadChildren: () => import('./sign-in/sign-in.module').then(m => m.SignInModule) },
    { path: '**', redirectTo: '/notfound' }
  ])],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
