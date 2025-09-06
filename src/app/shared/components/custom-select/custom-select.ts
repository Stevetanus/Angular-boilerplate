import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-custom-select',
  imports: [TranslatePipe],
  templateUrl: './custom-select.html',
  styleUrl: './custom-select.scss',
})
export class CustomSelect {
  private translate = inject(TranslateService);
  @Input() options: { value: string; label: string }[] = [];
  @Input() selectedValue = '';
  @Output() selectedValueChange = new EventEmitter<string>();
  value: string | null = null;

  setValue(val: string) {
    this.value = val;
    this.selectedValueChange.emit(val);
  }
}
