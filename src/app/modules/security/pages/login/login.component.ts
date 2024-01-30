import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserLoginModel } from '../../../../models/user.model';
import { AccountService } from '../../../../services/account.service';
import { AuthGoogleService } from '../../../../services/auth-google.service';
import { OAuthModule, OAuthService } from 'angular-oauth2-oidc';
import { StorageService } from '../../../../services/storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup('');
  constructor(private fb: FormBuilder,
              private router: Router,
              private accountService: AccountService,
              private storageService: StorageService,
              private authGoogleService: AuthGoogleService){
    this.buildForm();
  }

  buildForm(): void {
    this.loginForm = this.fb.group({
      email: ['luian.me0714@gmail.com', [Validators.required, Validators.email]],
      password: ['Hola123*', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }
  onSubmit() {
    const credentials:UserLoginModel = {
      ...this.loginForm.value,
    }
    this.accountService.login(credentials).subscribe(response => {
      if(response.status === 200 && response.data){
        this.router.navigate(['/website']);
      }
    });
  }

  loginWithGoogle(){
    this.authGoogleService.loginWithGoogle();
    this.getProfile();
  }

  getProfile(){
    const profile = this.authGoogleService.getProfile();
    console.log(profile);
  }
}
