import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private router: Router, private viewportScroller: ViewportScroller) {}
  
  ngOnInit(): void {
    // Écouter les événements de navigation
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        // Remonter en haut de la page
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
}
}
