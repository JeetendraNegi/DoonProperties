import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'app/models/users.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  userPassword: string = '';
  confirmPassword: string = '';
  appUser: Users = {id: '', firstName: '', middleName: '', lastName: '', email: [], address: {street: '', city: 'Dehradun', state: 'Uttarakhand', zipCode: '', country: 'India'}, contactDetails: [], userType: '', isActive: true, createdDate: new Date().toISOString()};

  constructor(private router: Router) { }

  btnSignUpClick() {
    console.log('user ', this.appUser);
  }
}
