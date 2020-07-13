import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { VmessageModule } from '../shared/components/vmessage/vmessage.module' ;
import { SignInComponent } from './signin/signin.component';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    VmessageModule
  ]
})
export class HomeModule { }
