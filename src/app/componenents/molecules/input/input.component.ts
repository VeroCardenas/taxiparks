import { Component, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true,
    },
  ],
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() placeholder: string = '';
  @Input() isValid: boolean = false;
  @Input() isInvalid: boolean = false;
  @Input() label: string = '';
  value: string = '';

  onChange!: Function;
  onTouch!: Function;

  constructor() {}

  writeValue(obj: string): void {
    this.value = obj;
  }
  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: Function): void {
    this.onTouch = fn;
  }

  ngOnInit(): void {}
}
