import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationPageComponent } from './components/authentication-page/authentication-page.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';

@NgModule({
  declarations: [AuthenticationPageComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
