import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Globals } from '../globals';

import { Login } from '../services/models/login';
import { ScanDocument } from './models/scan_docment';

const httpOptions = {
  headers: new HttpHeaders({
    'Accept':  'application/json',
    'access-token' : 'token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, public global: Globals) { }

  // For Login Data
  login() {
    return this.http.post(this.global.API_URL + 'token/authenticate', httpOptions);
  }

  // For Scan Data
  getScanDocument() {
    return this.http.get(this.global.API_URL + 'scans/scanDocByTenent');
  }

  // View Document
  viewScanDocument(id: number) {
    return this.http.get(this.global.API_URL + 'allScanByDocumentId/' + id);
  }

}
