import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Food';
  nav = false;

  @HostListener('document:scroll')
  onScroll() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 10
    ) {
      this.nav = true;
    } else {
      this.nav = false;
    }
  }
}
