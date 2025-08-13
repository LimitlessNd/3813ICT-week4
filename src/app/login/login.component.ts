import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

 users = [
    { email: '1@test.com', password: '123' },
    { email: '2@test.com', password: '456' },
    { email: '3@test.com', password: '789' }
  ];

  constructor(private router: Router) {}

  onSubmit() {
    const matchedUser = this.users.find(
      user => user.email === this.email && user.password === this.password
    );

    if (matchedUser) {
      this.errorMessage = '';
      this.router.navigate(['/account']);
    } else {
      this.errorMessage = 'Invalid email or password. Please try again.';
    }
  }
}
