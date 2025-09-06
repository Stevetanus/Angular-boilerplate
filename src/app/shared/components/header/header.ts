import { Component, inject, OnDestroy } from '@angular/core';
import { CustomSelect } from '../custom-select/custom-select';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { CustomOption } from '@core/models/interface';

@Component({
  selector: 'app-header',
  imports: [CustomSelect, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnDestroy {
  private translate = inject(TranslateService);
  private sub = new Subscription();
  selectOptions: CustomOption[] = [];
  selectedValue = '';

  constructor() {
    this.buildOptions();

    this.sub.add(
      this.translate.onLangChange.subscribe(() => {
        this.buildOptions();
      }),
    );
  }

  private buildOptions() {
    this.translate.get('custom_select.default_language').subscribe((res) => {
      this.selectOptions = [
        { value: '', label: res, selected: this.selectedValue === '' },
        {
          value: 'en',
          label: 'English',
          selected: this.selectedValue === 'en',
        },
        {
          value: 'zh-tw',
          label: '繁體中文',
          selected: this.selectedValue === 'zh-tw',
        },
      ];
    });
  }

  onLanguageChange(event: string) {
    if (event) {
      this.selectedValue = event;
      this.translate.use(this.selectedValue);
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
