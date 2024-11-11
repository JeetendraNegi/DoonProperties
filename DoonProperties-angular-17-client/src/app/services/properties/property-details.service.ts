import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PropertyDetail } from 'app/models/propertyDetails.model';
import { environment } from 'environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyDetailsService {

  private apiUrl = environment.apiUrl + 'PropertyDetail';
  constructor(private httpClient: HttpClient) { }

  getPropertyDetails(): Observable<PropertyDetail[]> {
    return this.httpClient.get<PropertyDetail[]>(this.apiUrl);
  }

  getPropertyDetailById(id: string): Observable<PropertyDetail> {
    return this.httpClient.get<PropertyDetail>(`${this.apiUrl}/${id}`);
  }

  addNewPropertyDetail(propertyDetail: PropertyDetail): Observable<boolean> {
    return this.httpClient.post<boolean>(this.apiUrl, propertyDetail, { observe: 'response' }).pipe(
      map(response => {
        if (response.status === 204) {
          return true;
        }
        else {
          return false;
        }
      })
    );
  }

  updatePropertyDetail(id: string, propertyDetail: PropertyDetail): Observable<boolean> {
    return this.httpClient.put<boolean>(`${this.apiUrl}/${id}`, propertyDetail, { observe: 'response' }).pipe(
      map(response => {
        if (response.status === 200) {
          return true;
        }
        else {
          return false;
        }
      })
    );
  }

  deletePropertyDetail(id: string): Observable<boolean> {
    return this.httpClient.delete<boolean>(`${this.apiUrl}/${id}`, { observe: 'response' }).pipe(
      map(response => {
        if (response.status === 200) {
          return true;
        }
        else {
          return false;
        }
      })
    );
  }
}
