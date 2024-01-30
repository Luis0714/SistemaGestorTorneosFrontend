import { Component } from '@angular/core';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [NgxUiLoaderModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {

}
