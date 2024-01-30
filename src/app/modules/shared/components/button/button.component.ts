import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input() text: string = 'Button';
  @Input() iconRute: string = '../../../../../assets/Images/copa.png';
  @Input() size: string = '40';
}
