import { Component, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [TranslatePipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly title = signal('boilerplate');
}
