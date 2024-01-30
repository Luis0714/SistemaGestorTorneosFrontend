import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { environment } from '../../environments/environment.local';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class AuthGoogleService {

  constructor(private oauthService: OAuthService) {
    this.initLoginInGoogle();
  }

  initLoginInGoogle(){
    const config = this.getconfigurations();
    this.oauthService.configure(config);
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  loginWithGoogle(){
   this.oauthService.initLoginFlow();
  }

  logout(){
    this.oauthService.logOut();
  }

  getProfile(){
    return JSON.stringify(this.oauthService.getIdentityClaims());
  }

  getconfigurations(): AuthConfig{
    let config:AuthConfig = {
      issuer: 'https://accounts.google.com',
      strictDiscoveryDocumentValidation: false,
      clientId: environment.googleClientId,
      redirectUri: window.location.origin+ '/website/home',
      responseType: 'id_token',
      scope: 'openid profile email',
    }
    return config;
  }
}
