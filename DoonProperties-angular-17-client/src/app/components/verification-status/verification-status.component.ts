import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { VerificationStatus } from 'app/models/verificationStatus.model';
import { VerificationStatusService } from 'app/services/verification-status/verification-status.service';
import { Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-verification-status',
  templateUrl: './verification-status.component.html',
  styleUrls: ['./verification-status.component.scss']
})
export class VerificationStatusComponent implements OnInit, AfterViewInit {

  verificationStatus: VerificationStatus[] = [];
  displayedColumns: string[] = ['sn', 'process', 'description', 'createdDate', 'status', 'actions'];
  dataSource = new MatTableDataSource<VerificationStatus>(this.verificationStatus);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private verificationService: VerificationStatusService,
    private router: Router) {
    this.getAllVerificationStatus();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getAllVerificationStatus() {
    this.verificationService.getVerificationStatus().subscribe({
      next: (data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.log(err);
        alert('An error occurred while fetching verification status.');
      }
    });
  }

  btnEditClick(id: string) {
    this.router.navigate(['add-verification-status', id]);
  }

  btnDeleteClick(id: string) {
    if (confirm('Are you sure to delete this ?')) {
      this.verificationService.deleteVerificationStatus(id).subscribe({
        next: (response) => {
          if (response) {
            alert('Verification status deleted successfully!');
            this.getAllVerificationStatus();
          } else {
            alert('An error occurred while deleting verification status.');
          }
        },
        error: (err) => alert('An error occurred while fetching verification status.' + err)
      })
    }
  }
}
