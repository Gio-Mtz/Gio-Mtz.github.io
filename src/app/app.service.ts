import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private activeTheme: 'light-theme' | 'dark-theme' = 'light-theme';

  constructor(private cookieService: CookieService) {
    const savedTheme = this.cookieService.get('theme');
    if (savedTheme) {
      this.activeTheme = savedTheme as 'light-theme' | 'dark-theme';
      document.body.className = this.activeTheme;
    }
  }

  setActiveTheme(theme: 'light-theme' | 'dark-theme') {
    this.activeTheme = theme;
    document.body.className = theme;
    this.cookieService.set('theme', theme);
  }

  getActiveTheme() {
    return this.activeTheme;
  }
}
