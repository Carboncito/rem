import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() type: HTMLInputElement['type'] = 'text';
  @Input() placeholder?: HTMLInputElement['placeholder'];
  @Input() required?: HTMLInputElement['required'];
  @Input() id?: HTMLInputElement['id'];
  @Input() error?: boolean = false;
  value: string = '';

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  // Registra una función de cambio que debe llamarse cuando el valor cambia en el modelo
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // Registra una función que debe llamarse cuando el input es tocado
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // Manejador del evento input en el HTML
  onInputChange(event: any): void {
    this.value = event.target.value;
    this.onChange(this.value);
    this.onTouched();
  }
}
