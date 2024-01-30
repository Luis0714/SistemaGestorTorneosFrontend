import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [],
  imports: [
    LoadingComponent,
    ButtonComponent,
    HeaderComponent,
    CommonModule
  ],
  exports: [
    LoadingComponent,
    ButtonComponent,
    HeaderComponent,
  ]
})
export class SharedModule { }
