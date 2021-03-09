import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { ScanDocument } from '../services/models/scan_docment'
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-document-view',
  templateUrl: './document-view.component.html',
  styleUrls: ['./document-view.component.css']
})
export class DocumentViewComponent implements OnInit {

  selectedDocument: ScanDocument;

  constructor(private dataService: DataService,
              private location: Location,
              private route: ActivatedRoute) { }

  // LifeCycle - ngOnInit
  ngOnInit() {

    // Get Document ID
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.viewScanDocument(id);
    });
  }

  // Get Document Data From Database
  viewScanDocument(id: number) {
    this.dataService.viewScanDocument(id).subscribe(data => {
      this.selectedDocument = data['results'];
    });
  }

  // Back to Location
  back() {
    this.location.back();
  }

}
