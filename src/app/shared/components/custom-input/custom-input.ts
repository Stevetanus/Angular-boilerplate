import { Component, forwardRef, Input } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  imports: [ReactiveFormsModule],
  templateUrl: './custom-input.html',
  styleUrl: './custom-input.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CustomInput),
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => CustomInput),
    },
  ],
})
export class CustomInput implements ControlValueAccessor, Validator {
  @Input() id = '';
  @Input() label = '';
  @Input() name = '';
  @Input() type = 'text';
  @Input() formControlName = ''; // 用於 reactive form
  @Input() placeholder = '';
  @Input() required = false;
  value = '';
  disabled = false;

  onChange: (value: string) => void = () => {
    /* empty */
  };
  onTouched: () => void = () => {
    /* empty */
  };

  // ================= ControlValueAccessor =================
  writeValue(value: string): void {
    console.log('write value: ', { value });

    this.value = value ?? '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  // ================= Validator =================
  validate(control: AbstractControl): ValidationErrors | null {
    console.log('in validate: ', { control });

    if (this.required && !this.value) {
      return { required: true };
    }
    return null;
  }

  // called when user types
  onInput(value: string) {
    console.log('onInput: ', { value });

    this.value = value;
    this.onChange(value);
    this.onTouched();
  }
}
