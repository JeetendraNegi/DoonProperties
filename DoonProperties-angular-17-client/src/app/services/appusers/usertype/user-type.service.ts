import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserType } from 'app/models/userType.model';
import { environment } from 'environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {

  private apiUrl = environment.apiUrl + 'UserTypes';

  constructor(private httpClient: HttpClient) { }

  getUserTypes() : Observable<UserType []> {
    return this.httpClient.get<UserType[]>(this.apiUrl);
  }

  addUserTypes(userType: UserType): Observable<boolean> {
    console.log(userType);
    return this.httpClient.post<boolean>(this.apiUrl, userType, { observe: 'response' }).pipe(
      map(response => {
        console.log(response);
        if (response && response.status === 201) { // Check for status code 201 (Created)
          return true;
        } else {
          return false;
        }
      })
    );
  }

  getUserTypeById(id: string): Observable<UserType> {
    return this.httpClient.get<UserType>(`${this.apiUrl}/${id}`);
  }

  updateUserType(id: string, userType: UserType) : Observable<boolean> {
    return this.httpClient.put<boolean>(`${this.apiUrl}/${id}`, userType, {observe: 'response'}).pipe(
      map(response => {
        if (response && response.status === 200) {
          return true;
        } else {
          return false;
        }
      })
    );
  }

  deleteUserType(id: string): Observable<boolean> {
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
