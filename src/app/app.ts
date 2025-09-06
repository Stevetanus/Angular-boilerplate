import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective,
} from '@ngx-translate/core';
import { Header } from './shared/components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, TranslatePipe, TranslateDirective],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('boilerplate');
  private translate = inject(TranslateService);

  constructor() {
    this.translate.addLangs(['zh-tw', 'en']);
  }
}
