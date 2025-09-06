import { Component, inject } from '@angular/core';
import { CustomSelect } from '../custom-select/custom-select';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [CustomSelect, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private translate = inject(TranslateService);
  selectOptions = [
    { value: 'en', label: 'English' },
    { value: 'zh-tw', label: '繁體中文' },
  ];
  selectedValue = '';

  onLanguageChange(event: string) {
    this.selectedValue = event;
    this.translate.use(this.selectedValue);
  }
}
