import {
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';


export class CustomValidators {
  static phoneNumber(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      let value: string = control.value;
      if (value) {
        const valid = value.match(/^[+593]{4}[0-9]{9}/) || value.match(/^[09]{2}[0-9]{8}/);
        return valid ? null : { phoneNumber: true };
      }
      return null;
    };
  }

  static password(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      let value: string = control.value;
      if (value) {
        const valid = value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
        return valid ? null : { password: true };
      }
      return null;
    };
  }
}

