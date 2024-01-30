import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { OAuthModule } from 'angular-oauth2-oidc';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    SharedModule,
    OAuthModule.forRoot(),
  ],
  exports: [
    OAuthModule
  ]
})
export class SecurityModule { }
