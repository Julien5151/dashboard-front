import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationPageComponent } from './components/authentication-page/authentication-page.component';


const authRoutes: Routes = [
    {
      path: '',
      component: AuthenticationPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
