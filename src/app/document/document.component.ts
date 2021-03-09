import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { ScanDocument } from '../services/models/scan_docment'
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  documents: Object;

  constructor(private dataService: DataService) { }

  // LifeCycle - ngOnInit
  ngOnInit() {
    this.getScanDocuments();
  }

  // Get Scan Document Data From Database
  getScanDocuments() {
    this.dataService.getScanDocument().subscribe(data => {
      this.documents = data;
    })
  }
}
