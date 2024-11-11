import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserType } from 'app/models/userType.model';
import { UserTypeService } from 'app/services/appusers/usertype/user-type.service';

@Component({
  selector: 'app-add-user-type',
  templateUrl: './add-user-type.component.html',
  styleUrl: './add-user-type.component.scss'
})
export class AddUserTypeComponent {

  formText ='Add User Type';
  id: string;
  userType: UserType = { type: '', description: '', isActive: true, createdDate: new Date().toISOString(), id: '3fa85f64-5717-4562-b3fc-2c963f66afa6' };

  constructor(private userTypeService: UserTypeService,
    private router: Router, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    if (this.id !== '') {
        this.getUserTypeForEdit(this.id);
        this.formText = 'Update User Type'
    }
  }

  btnSaveUserTypeClick() {
    console.log('User Type: ', this.userType);
    if (this.id === '') {
      this.AddNewUserType();
    } else {
      this.UpdateUserType();
    }
  }

  btnResetClick() {
    this.userType = { type: '', description: '', isActive: true, createdDate: new Date().toISOString(), id: '' };
  }

  getUserTypeForEdit(id: string) {
    this.userTypeService.getUserTypeById(id).subscribe({
      next: (response) => {
        if (response) {
          this.userType = response;
          console.log('userTypes ', this.userType);
        } else {
          alert('An error occurred while getting the user type.')
        }
      },
      error: (err) => {
        alert('An error occurred while getting the user type.' + err)
      }
    });
  }

  private AddNewUserType() {
    this.userTypeService.addUserTypes(this.userType).subscribe({
      next: (data) => {
        console.log('User Type added successfully.', data);
        alert('User Type added successfully.');
        this.router.navigate(['/user-types']);
      },
      error: (err) => {
        console.log('An error occurred while adding user type.', err);
        alert('An error occurred while adding user type.');
      }
    });
  }

  private UpdateUserType() {
    this.userTypeService.updateUserType(this.id, this.userType).subscribe({
      next: (response) => {
        if (response) {
          alert('User Type updated successfully!')
          this.router.navigate(['/user-types']);
        } else {
          alert ('An error occurred while updating the user type.')
        }
      }
    });
  }
}
