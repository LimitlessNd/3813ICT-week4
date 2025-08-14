import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-root',
  standalone: true,     
  imports: [RouterOutlet, CommonModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week4';

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('currentUser');  // clear logged-in user
    this.router.navigate(['/login']);        // redirect to login page
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');  // true if user exists
  }
}
