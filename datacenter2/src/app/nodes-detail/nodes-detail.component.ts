import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nodes-detail',
  templateUrl: './nodes-detail.component.html',
  styleUrls: ['./nodes-detail.component.css']
})
export class NodesDetailComponent implements OnInit {

  @Input() node:any;

  constructor(private modalService:NgbActiveModal) { }

  ngOnInit() {
  }



}
