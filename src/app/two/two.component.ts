import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from '../sharedservice.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
total : number;
  constructor(private sharedService: SharedserviceService) { }

  ngOnInit() {

    this.sharedService.$toggleObservable2.subscribe(
      data => {
        this.total = data;
        console.log(this.total);
      }
    )
  }

}
