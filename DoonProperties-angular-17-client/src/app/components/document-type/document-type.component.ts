import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PropertyDocumentType } from 'app/models/documentType.model';
import { DocumentTypesService } from 'app/services/document-types/document-types.service';

@Component({
  selector: 'app-document-type',
  templateUrl: './document-type.component.html',
  styleUrls: ['./document-type.component.scss']
})
export class DocumentTypeComponent implements AfterViewInit {

  documentType: PropertyDocumentType[] = []
  displayedColumns: string[] = ['sn', 'document', 'description', 'createdDate', 'status', 'actions'];
  dataSource = new MatTableDataSource<PropertyDocumentType>(this.documentType);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private router: Router,
    private documentTypeService: DocumentTypesService) {
      this.getDocumentTypes();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  btnEditClick(id: string) {
    this.router.navigate(['add-document-types', id]);
  }

  btnDeleteClick(id: string) {
    if (confirm('Are you sure to delete this?')) {
      this.deleteDocumentType(id);
    }
  }

  private getDocumentTypes() {
    this.documentTypeService.getDocumentTypes().subscribe({
      next: (data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  private deleteDocumentType(id: string) {
    this.documentTypeService.deleteDocumentType(id).subscribe({
      next: (response) => {
        if (response) {
          alert('Document Type deleted successfully.');
          this.getDocumentTypes();
        } else {
          alert('An error occurred while deleting the document type.');
        }
      },
      error: (err) => alert('An error occurred while deleting the document type. ' + err)
    });
  }
}
