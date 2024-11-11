import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyDocumentType } from 'app/models/documentType.model';
import { DocumentTypesService } from 'app/services/document-types/document-types.service';

@Component({
  selector: 'app-add-edit-document-type',
  templateUrl: './addedit-document-type.component.html',
  styleUrl: './addedit-document-type.component.scss'
})
export class AddEditDocumentTypeComponent {
  formText ='Add Document Type';
  id: string;
  documentType: PropertyDocumentType = { documentType: '', description: '', isActive: true, createdDate: new Date().toISOString(), id: '3fa85f64-5717-4562-b3fc-2c963f66afa6' };

  constructor(private documentTypeService: DocumentTypesService,
    private router: Router, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    if (this.id !== '') {
        this.getUserTypeForEdit();
        this.formText = 'Update Document Type'
    }
  }

  btnResetClick() {
    this.documentType = { documentType: '', description: '', isActive: true, createdDate: new Date().toISOString(), id: '3fa85f64-5717-4562-b3fc-2c963f66afa6' };
  }

  btnSaveClick() {
    if (this.id !== '') {
      this.updateDocumentType();
    } else {
      this.addDocumentType();
    }
  }

  private getUserTypeForEdit() {
    this.documentTypeService.getDocumentTypeById(this.id).subscribe({
      next: (data) => this.documentType = data,
      error: (err) => alert('An error occurred while getting document type for edit. ' + err)
    });
  }

  private addDocumentType() {
    this.documentTypeService.addDocumentType(this.documentType).subscribe({
      next: (response) => {
        if (response) {
          alert('Document Type saved successfully.');
          this.router.navigate(['/document-types']);
        } else {
          alert('An error occurred while saving the document type.');
        }
      },
      error: (err) => alert('An error occurred while saving the document type. ' + err)
    });
  }

  private updateDocumentType() {
    this.documentTypeService.updateDocumentType(this.id, this.documentType).subscribe({
      next: (response) => {
        if (response) {
          alert('Document Type update successfully.');
          this.router.navigate(['/document-types']);
        } else {
          alert('An error occurred while updating the document type.');
        }
      },
      error: (err) => alert('An error occurred while updating the document type. ' + err)
    });
  }
}
