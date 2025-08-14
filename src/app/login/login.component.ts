import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  onSubmit() {
    this.http.post<any>('http://localhost:3000/api/auth', {
      email: this.email,
      password: this.password
    }).subscribe(
      user => {
        if (user.valid) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.router.navigate(['/account']);  // navigate after successful login
        } else {
          this.errorMessage = 'Invalid email or password. Please try again.';
        }
      },
      error => {
        this.errorMessage = 'Server error. Please try again later.';
      }
    );
  }
}
