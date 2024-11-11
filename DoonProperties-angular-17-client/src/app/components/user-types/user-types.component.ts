import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { UserTypeService } from 'app/services/appusers/usertype/user-type.service';
import { UserType } from 'app/models/userType.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-types',
  templateUrl: './user-types.component.html',
  styleUrls: ['./user-types.component.scss']
})

export class UserTypesComponent implements AfterViewInit {

  userTypes: UserType[] = []
  displayedColumns: string[] = ['sn', 'type', 'description', 'createdDate', 'status', 'actions'];
  dataSource = new MatTableDataSource<UserType>(this.userTypes);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private userTypeService: UserTypeService,
    private router: Router) {
    this.getAllUserTypes();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  btnEditUserTypeClick(id: string) {
    this.router.navigate(['/add-userType', id]);
  }

  btnDeleteUserTypeClick(id: string) {
    if (confirm('Are you sure to delete this User Type?')) {
      this.userTypeService.deleteUserType(id).subscribe({
        next: (response) => {
          if (response) {
            alert('User Type deleted successfully!');
            this.getAllUserTypes();
          } else {
            alert('An error occurred while deleting user type.');
          }
        }
      });
    }
  }

  private getAllUserTypes() {
    this.userTypeService.getUserTypes().subscribe({
      next: (data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.log(err);
        alert('An error occurred while fetching user types' + err);
      }
    });
  }
}
