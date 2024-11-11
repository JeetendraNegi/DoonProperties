import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from 'app/models/users.model';
import { environment } from 'environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = environment.apiUrl + 'AppUsers';
  
  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<Users[]> {
    return this.httpClient.get<Users[]>(this.apiUrl);
  }

  getUserById(id: string): Observable<Users> {
    return this.httpClient.get<Users>(`${this.apiUrl}/${id}`);
  }

  addNewUser(user: Users): Observable<boolean> {
    return this.httpClient.post<boolean>(this.apiUrl, user, { observe: 'response' }).pipe(
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

  updateUser(id: string, user: Users): Observable<boolean> {
    return this.httpClient.put<boolean>(`${this.apiUrl}/${id}`, user, { observe: 'response' }).pipe(
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

  deleteUser(id: string): Observable<boolean> {
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
