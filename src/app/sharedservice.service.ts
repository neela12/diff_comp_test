import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {

  constructor() { }

  private toggle = new Subject<any>();
	public $toggleObservable = this.toggle.asObservable();
 
  private toggle1 = new Subject<any>();
  public $toggleObservable1 = this.toggle1.asObservable();

  private toggle2 = new Subject<any>();
  public $toggleObservable2 = this.toggle2.asObservable();
  
  private one = new Subject<any>();
  public click1 = this.one.asObservable();

  private two = new Subject<any>();
  public click2 = this.two.asObservable();

	toggleClicked(status:boolean){
		this.toggle.next(status);	
  }
  
  toggleClicked1(status:boolean){
		this.toggle1.next(status);	
  }
  
  toggleClicked2(total:number){
		this.toggle2.next(total);	
  }
  oneclick(){
this.one.next('one');
  }

  twoclick(){
    this.two.next('two');
      }
}
