import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PropertyDocumentType } from 'app/models/documentType.model';
import { environment } from 'environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentTypesService {

  private apiUrl = environment.apiUrl + 'PropertyDocumentType';

  constructor(private httpClient: HttpClient) { }

  getDocumentTypes(): Observable<PropertyDocumentType[]> {
    return this.httpClient.get<PropertyDocumentType[]>(this.apiUrl);
  }

  getDocumentTypeById(id: string): Observable<PropertyDocumentType> {
    return this.httpClient.get<PropertyDocumentType>(`${this.apiUrl}/${id}`);
  }

  addDocumentType(documentType: PropertyDocumentType): Observable<boolean> {
    return this.httpClient.post<boolean>(this.apiUrl, documentType, {observe: 'response'}).pipe(
      map(response => {
        if (response && response.status === 204) {
          return true;
        } else {
          return false;
        }
      })
    );
  }

  updateDocumentType(id: string, documentType: PropertyDocumentType): Observable<boolean> {
    return this.httpClient.put<boolean>(`${this.apiUrl}/${id}`, documentType, {observe: 'response'}).pipe(
      map(response => {
        if (response && response.status === 200) {
          return true;
        } else {
          return false;
        }
      })
    );
  }

  deleteDocumentType(id: string): Observable<boolean> {
    return this.httpClient.delete<boolean>(`${this.apiUrl}/${id}`, {observe: 'response'}).pipe(
      map(response => {
        if (response && response.status === 200) {
          return true;
        } else {
          return false;
        }
      })
    );
  }
}
