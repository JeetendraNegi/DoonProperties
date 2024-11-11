import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl + 'Token/GenerateToken';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
    const body = {
      'loginID': username,
      'password': password
    }

    return this.http.post<{ token: string }>(this.apiUrl, body, { headers }).pipe(
      map(response => {
        if (response && response.token) {
          // Save the token in local storage
          localStorage.setItem('authToken', response.token);
          return true;
        } else {
          return false;
        }
      })
    );
  }

  logout(): void {
    // Remove the token from local storage when logging out
    localStorage.removeItem('authToken');
  }

  isLoggedIn(): boolean {
    // Check if the user is authenticated by verifying the token presence
    return !!localStorage.getItem('authToken');
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }
}
