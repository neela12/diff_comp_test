import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from '../sharedservice.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  status1: boolean;
  status2: boolean;
  data = [{ id: 1, name: "First", quantity: 1, price: 2 }, { id: 2, name: "Second", quantity: 1, price: 4 }];
  amount1: number = 0;
  amount2: number = 0;
  total: number = 0;

  constructor(private sharedService: SharedserviceService) {
    this.sharedService.click1.subscribe(
      data => {
        if (data == 'one') {
          this.addAmount(0, this.data[0].price);
        }
      }
    )
    this.sharedService.click2.subscribe(
      data => {
        if (data == 'two') {
          this.addAmount(1, this.data[1].price);
        }
      }
    )
  }

  ngOnInit() {
    this.sharedService.$toggleObservable.subscribe(
      data => {
        this.status1 = data;
        this.amount1 = this.data[0].price;
        this.total = this.amount1 + this.amount2;
        this.sharedService.toggleClicked2(this.total);
      }
    )
    this.sharedService.$toggleObservable1.subscribe(
      data => {
        this.status2 = data;
        this.amount2 = this.data[1].price;
        this.total = this.amount1 + this.amount2;
        this.sharedService.toggleClicked2(this.total);
      }
    )

  }
  addAmount(i, val) {
    this.data[i].quantity++;
    let value = this.data[i].price;
    if (i == 0) {
      this.amount1 = this.amount1 + value;
    } else if (i == 1) {
      this.amount2 = this.amount2 + value;
    }
    this.total = this.amount1 + this.amount2;
    this.sharedService.toggleClicked2(this.total);
  }
  reduceAmount(i, val) {
    let value = this.data[i].price;
    if (val > this.data[i].price) {
      this.data[i].quantity--;
      if (i == 0) {
        this.amount1 = this.amount1 - value;
      } else if (i == 1) {
        this.amount2 = this.amount2 - value;
      }
    }
    this.total = this.amount1 + this.amount2;
    this.sharedService.toggleClicked2(this.total);
  }



  // if(total > 0){
  //   console.log(total);

  // }

}
