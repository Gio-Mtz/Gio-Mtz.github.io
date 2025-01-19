import { Component, HostListener } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-header',
    imports: [MatButtonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
      console.log('scrolling');
      header?.classList.add('blur');
    } else {
      header?.classList.remove('blur');
    }
  }
}
