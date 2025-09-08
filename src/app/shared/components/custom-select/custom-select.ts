import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { CustomOption } from '@core/models/interface';

@Component({
  selector: 'app-custom-select',
  imports: [TranslatePipe],
  templateUrl: './custom-select.html',
  styleUrl: './custom-select.css',
})
export class CustomSelect {
  private translate = inject(TranslateService);
  @Input() options: CustomOption[] = [];
  @Input() selectedValue = '';
  @Output() selectedValueChange = new EventEmitter<string>();
  value = '';

  setValue(value: string) {
    this.selectedValueChange.emit(value);
  }
}
