import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Users } from 'app/models/users.model';
import { UsersService } from 'app/services/appusers/users/users.service';
import { UserTypeService } from 'app/services/appusers/usertype/user-type.service';
import { forkJoin, map, mergeMap, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements AfterViewInit, OnDestroy {

  appUsers: Users[] = []
  displayedColumns: string[] = ['sn', 'name', 'address', 'contactDetails', 'emails', 'userType', 'status', 'actions'];
  dataSource = new MatTableDataSource<Users>(this.appUsers);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  private unsubscribe$ = new Subject<void>(); // Subject to handle cancellation

  constructor(private usersService: UsersService,
    private router: Router, private userTypeService: UserTypeService) {
    this.getAllUsers();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  btnEditUserClick(id: string) {
    this.router.navigate(['add-users', id]);
  }

  btnDeleteUserClick(id: string) {
    if (confirm('Are you sure to delete this User?')) {
      this.deleteUser(id);
    }
  }

  private getAllUsers() {
    this.usersService.getAllUsers().pipe(
      takeUntil(this.unsubscribe$), // Cancel the observable on destroy
      mergeMap(users => {
        const userTypeRequest = users.map((user: any) =>
          this.userTypeService.getUserTypeById(user.userType).pipe(
            map(userTypes => ({ ...user, userType: userTypes?.type || '' }))
          )
        );
        return forkJoin(userTypeRequest); // Wait for all userType requests to finish
      })
    ).subscribe({
      next: (data) => {
        this.appUsers = data;
        this.updateDataSource(); // Update the table's data source
      },
      error: (err) => {
        console.error(err);
        alert('An error occurred while fetching users.');
      }
    });
  }

  ngOnDestroy(): void {
    // Trigger the cancellation of any ongoing requests
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private updateDataSource() {
    this.dataSource = new MatTableDataSource(this.appUsers); // Update the data source
    this.dataSource.sort = this.sort; // Reassign sorting
    this.dataSource.paginator = this.paginator; // Reassign paginator
  }

  private deleteUser(id: string) {
    this.usersService.deleteUser(id).subscribe({
      next: (response) => {
        if (response) {
          alert('User deleted successfully!');
          this.getAllUsers();
        } else {
          alert('An error occurred while deleting user.');
        }
      }
    });
  }
}
