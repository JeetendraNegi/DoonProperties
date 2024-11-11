import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VerificationStatus } from 'app/models/verificationStatus.model';
import { environment } from 'environments/environment';
import { response } from 'express';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerificationStatusService {

  private apiUrl = environment.apiUrl + 'VerificationStatus';

  constructor(private httpClient: HttpClient) { }

  getVerificationStatus(): Observable<VerificationStatus[]> {
    return this.httpClient.get<VerificationStatus[]>(this.apiUrl);
  }

  getVerificationStatusById(id: string): Observable<VerificationStatus> {
    return this.httpClient.get<VerificationStatus>(`${this.apiUrl}/${id}`);
  }

  addVerificationStatus(verificationStatus: VerificationStatus): Observable<boolean> {
    return this.httpClient.post<boolean>(this.apiUrl, verificationStatus, {observe: 'response'}).pipe(
      map(response => {
        if (response && response.status === 204) {
          return true;
        } else {
          return false;
        }
      })
    );
  }

  updateVerificationStatus(id: string, verificationStatus: VerificationStatus): Observable<boolean> {
    return this.httpClient.put<boolean>(`${this.apiUrl}/${id}`, verificationStatus, {observe: 'response'}).pipe(
      map(response => {
        if (response && response.status === 200) {
          return true;
        } else {
          return false;
        }
      })
    );
  }

  deleteVerificationStatus(id: string): Observable<boolean> {
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
