import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserModel } from '../../../../models/user.model';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup = new FormGroup('');

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router){
    this.buildForm();
  }

  buildForm(){
    this.registerForm = this.fb.group({
      name: ['Luis Andres', Validators.required],
      lastName: ['Martines Estremor', Validators.required],
      email: ['luian.me0714@gmail.com', [Validators.required, Validators.email]],
      password: ['Hola123*', Validators.required],
      phoneNumber: ['+57 3023776136'],
      rol: ['Super Administrador', Validators.required],
      agreeTerms: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {

      var user:UserModel = {
        ...this.registerForm.value,
      }
      this.userService.register(user).subscribe((response) => {
        console.log(response)
        console.log(response.status)
        if(response.status === 200) {
          this.router.navigate(['/login']);
        }
      });
    }
  }

}
