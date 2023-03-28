import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-api';
  public idUpdated:any;
  public fnameUpdated:any;
  public lnameUpdated:any;
  public emailUpdated:any;
  public techUpdated:any;
  public showdata:any;
  public data:boolean=false;
  show(){
    console.log("called");
    this.data=!this.data;
   
    if(this.idUpdated)
    {
      this.idUpdated='';
      this.fnameUpdated='';
        this.lnameUpdated='';
        this.emailUpdated='';
        this.techUpdated='';
        this.data=!this.data;
    }
   
  
  }
  public updateData(item:any){
//  if(this.data)
//  {
  // this.idUpdated='';
  //   this.fnameUpdated='';
  //   this.lnameUpdated='';
  //   this.emailUpdated='';
  //   this.techUpdated='';
    // this.data=!this.data;
//  }else{

 
    this.idUpdated=item.id;
    this.fnameUpdated=item.fname;
    this.lnameUpdated=item.lname;
    this.emailUpdated=item.email;
    this.techUpdated=item.tech;
    console.log(this.techUpdated);
   
//  }
 this.data=true;
  }

   
}
