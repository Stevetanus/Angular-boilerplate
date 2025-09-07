import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Header } from './shared/components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private translate = inject(TranslateService);

  constructor() {
    this.translate.addLangs(['zh-tw', 'en']);
  }
}
