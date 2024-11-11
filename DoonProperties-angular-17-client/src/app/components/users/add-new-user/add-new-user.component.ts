import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'app/models/users.model';
import { UserType } from 'app/models/userType.model';
import { UsersService } from 'app/services/appusers/users/users.service';
import { UserTypeService } from 'app/services/appusers/usertype/user-type.service';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrl: './add-new-user.component.scss'
})
export class AddNewUserComponent {
  
  formText ='Add New User';
  id: string;
  appUser: Users = {id: '3fa85f64-5717-4562-b3fc-2c963f66afa6', firstName: '', middleName: '', lastName: '', email: [], address: {street: '', city: 'Dehradun', state: 'Uttarakhand', zipCode: '', country: 'India'}, contactDetails: [], userType: '', isActive: true, createdDate: new Date().toISOString()};
  userTypes: UserType[] = [];

  constructor(private usersService: UsersService, private userTypeService: UserTypeService,
    private router: Router, private route: ActivatedRoute) {
    this.getUserTypes();
    this.id = this.route.snapshot.paramMap.get('id') || '';
    if (this.id !== '') {
      this.getUserForEdit(this.id);
      this.formText = 'Update User'
    }
  }

  getUserTypes() {
    this.userTypeService.getUserTypes().subscribe({
      next: (response) => {
        if (response) {
          this.userTypes = response.filter((userType: any) => userType.isActive === true);
        } else {
          alert('An error occurred while getting the user types.')
        }
      },
      error: (err) => {
        alert('An error occurred while getting the user types.' + err)
      }
    });
  }

  btnSaveUserClick(){
    this.appUser.contactDetails = this.appUser.contactDetails.toString()?.split(',').map(contactDetails => contactDetails.trim()).filter(contactDetails => contactDetails !== '');
    this.appUser.email = this.appUser.email.toString()?.split(',').map(email => email.trim()).filter(email => email !== '');
    console.log('user ', this.appUser);
    if (this.id !== '') {
      this.updateUser();
    } else {
      this.addUser();
    }
  }

  btnResetClick() {
    this.appUser = { id: '3fa85f64-5717-4562-b3fc-2c963f66afa6', firstName: '', middleName: '', lastName: '', email: [], address: { street: '', city: 'Dehradoon', state: 'Uttarakhand', zipCode: '', country: 'India' }, contactDetails: [], userType: '', isActive: true, createdDate: new Date().toISOString() };
  }

  private getUserForEdit(id: string) {
    this.usersService.getUserById(id).subscribe({
      next: (response) => {
        if (response) {
          this.appUser = response;
        } else {
          alert('An error occurred while getting the user.')
        }
      },
      error: (err) => {
        alert('An error occurred while getting the user.' + err)
      }
    });
  }

  private addUser() {
    this.usersService.addNewUser(this.appUser).subscribe({
      next: (response) => {
        if (response) {
          alert('User added successfully.');
          this.router.navigate(['/users']);
        } else {
          alert('An error occurred while adding the user.');
        }
      },
      error: (err) => alert('An error occurred while adding the user. ' + err)
    });
  }

  private updateUser() {    
    this.usersService.updateUser(this.id, this.appUser).subscribe({
      next: (response) => {
        if (response) {
          alert('User updated successfully.');
          this.router.navigate(['/users']);
        } else {
          alert('An error occurred while updating the user.');
        }
      },
      error: (err) => alert('An error occurred while updating the user. ' + err)
    });
  }
}
