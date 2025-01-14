import { Component } from '@angular/core';
import { AppService } from '../../../app.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private appService: AppService) {}

  toggleTheme() {
    const activeTheme = this.appService.getActiveTheme();
    const newTheme =
      activeTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    this.appService.setActiveTheme(newTheme);
  }
}
