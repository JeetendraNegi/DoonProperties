import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/authservice/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.Emulated // Default setting
})
export class LoginComponent implements OnInit {

  userId: string;
  password: string;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    localStorage.removeItem('authToken');
  }

  btnLoginClick() {
    console.log('User ID: ' + this.userId);
    console.log('Password: ' + this.password);
    this.authService.login(this.userId, this.password).subscribe(response => {
      if (response) {
        console.log('Login successful');
        this.router.navigate(['/dashboard']);
      } else {
        console.log('Login failed');
        alert('Login failed');
      }
    });
  }

}
