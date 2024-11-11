import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VerificationStatus } from 'app/models/verificationStatus.model';
import { VerificationStatusService } from 'app/services/verification-status/verification-status.service';

@Component({
  selector: 'app-add-verification-status',
  templateUrl: './add-verification-status.component.html',
  styleUrl: './add-verification-status.component.scss'
})
export class AddVerificationStatusComponent {

  formText ='Add Verification Status';
  id: string;
  verificationStatus: VerificationStatus = { status: '', description: '', isActive: true, createdDate: new Date().toISOString(), id: '3fa85f64-5717-4562-b3fc-2c963f66afa6' };

  constructor(private route: ActivatedRoute,
    private verificationService: VerificationStatusService,
    private router: Router) {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    if (this.id !== '') {
      this.formText = 'Update Verification Status';
      this.getVerificationStatusById();
    }
  }

  btnResetClick() {
    this.verificationStatus = { status: '', description: '', isActive: true, createdDate: new Date().toISOString(), id: '3fa85f64-5717-4562-b3fc-2c963f66afa6' };
  }

  btnSaveVerificationStatusClick() {
    if (this.id === '') {
      this.addVerificationStatus();
    } else {
      this.updateVerificationStatus();
    }
  }

  private getVerificationStatusById() {
    this.verificationService.getVerificationStatusById(this.id).subscribe({
      next: (response)=> {
        if (response) {
          this.verificationStatus = response;
        }
      },
      error : (err) => alert('An error occurred while fetching verification status for edit.' + err)
    });
  }

  private addVerificationStatus() {
    this.verificationService.addVerificationStatus(this.verificationStatus).subscribe({
      next: (response) => {
        if (response) {
          alert('Verification status added successfully!');
          this.router.navigate(['verification-status']);
        } else {
          alert('An error occurred while saving verification status.')
        }
      },
      error: (err) => alert('An error occurred while saving verification status.' + err)
    })
  }

  private updateVerificationStatus() {
    this.verificationService.updateVerificationStatus(this.id, this.verificationStatus).subscribe({
      next: (response) => {
        if (response) {
          alert('Verification status update successfully!');
          this.router.navigate(['verification-status']);
        } else {
          alert('An error occurred while updating verification status.')
        }
      },
      error: (err) => alert('An error occurred while updating verification status.' + err)
    })
  }
}
