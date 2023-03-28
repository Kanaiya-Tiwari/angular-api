import { Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public page:number=1;
  public dataValueOfApi!:any;
  public totalRecord!:any;
  @Output() onClick= new EventEmitter<any>();
  constructor(
    private Service:ApiserviceService
  ) {
   
  }
  ngOnInit(): void {
    this.getPost();
    console.log("called of list");
  }


  getPost(){
    this.Service.getPost().subscribe(response=>{
     this.dataValueOfApi=response;
     this.totalRecord=this.dataValueOfApi.length;
 
    })
    }
    delete(id:any,event:Event)
  {
    event.preventDefault();
    this.Service.deeletePost(id).subscribe(response=>{
      this.getPost();
      alert("data deleted");
   });
    
  }

  
}
