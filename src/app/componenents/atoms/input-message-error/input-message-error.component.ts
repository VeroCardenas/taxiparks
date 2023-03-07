import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-message-error',
  templateUrl: './input-message-error.component.html',
  styleUrls: ['./input-message-error.component.scss'],
})
export class InputMessageErrorComponent {
  @Input() errorMessage: string = 'error def';
}
