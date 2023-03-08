import { FormControl, FormGroup } from '@angular/forms';
import { CustomValidators } from './custom-validators';

describe('Validator phoneNumber', () => {
  let form: FormGroup;

  beforeEach(() => {
    form = new FormGroup({
      concept: new FormControl('', [CustomValidators.phoneNumber()]),
    });
  });

  it('form should VALID with +593 code', () => {
    form.setValue({
      concept: '+593958778551',
    });

    expect(form.status).toEqual('VALID');
  });

  it('form should VALID with 09 at first', () => {
    form.setValue({
      concept: '0958778551',
    });

    expect(form.status).toEqual('VALID');
  });

  it('form should INVALID', () => {
    form.setValue({
      concept: '1230000000',
    });

    expect(form.status).toEqual('INVALID');
  });

  it('form should INVALID', () => {
    form.setValue({
      concept: '+2300000000000',
    });

    expect(form.status).toEqual('INVALID');
  });
});
