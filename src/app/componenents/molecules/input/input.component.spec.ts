import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputLabelComponent } from '../../atoms/input-label/input-label.component';

import { InputComponent } from './input.component';

@Component({
  selector: 'app-host',
  template: `<app-custom-input
    [formControl]="testControl"
    [label]="label"
    [isValid]="isvalid"
    [isInvalid]="isinvalid"
  ></app-custom-input>`,
})
class HostComponent {
  @ViewChild(InputComponent)
  public inputComponent!: InputComponent;
  public label: string = 'Por defecto';
  public isvalid: boolean = false;
  public isinvalid: boolean = false;
  testControl: FormControl = new FormControl('');
}

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputComponent, HostComponent, InputLabelComponent],
      imports: [FormsModule, ReactiveFormsModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
