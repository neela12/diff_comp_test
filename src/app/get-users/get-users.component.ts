import { Component, OnInit , ViewChild, TemplateRef} from '@angular/core';
import { SharedserviceService } from '../sharedservice.service';
@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {

  // @ViewChild('defaultTabButtons')  defaultTabButtonsTpl: any;
  // @ViewChild('defaultTabButtons') table: any;
  // @ViewChild('defaultTabButtons') defaultTabButtons: ElementRef;
  // @ViewChild('defaultTabButtons', {static: true}) defaultTabButtonsTpl: TemplateRef<any>;
  constructor(private sharedService: SharedserviceService) { }
public status1 :boolean = false;
public status2 :boolean = false;
 
  ngOnInit() {

      // console.log(this.defaultTabButtonsTpl);
  }

  m1(){
    if(this.status1 == true){
      this.sharedService.oneclick();
    }else{
      this.status1 = true;
      this.sharedService.toggleClicked(this.status1);
    }

  }

  m2(){
    if(this.status2 == true){
      this.sharedService.twoclick();
    }else{
    this.status2 = true;
    this.sharedService.toggleClicked1(this.status2);
    }
  }
 
}
