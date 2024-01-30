import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { SharedModule } from '../shared/shared.module';
import { OAuthModule } from 'angular-oauth2-oidc';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    WebsiteRoutingModule,
    OAuthModule.forRoot()
  ]
})
export class WebsiteModule { }
