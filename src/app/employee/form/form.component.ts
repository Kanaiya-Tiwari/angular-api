import { Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnChanges {
  @ViewChild('myDOMElement', { static: true })
  MyDOMElement!: ElementRef;
  @Input() idUpdated!:any;
  @Input() fnameUpdated!:any;
  @Input() lnameUpdated!:any;
  @Input() emailUpdated!:any;
  @Input() techUpdated!:any;
  
  public page:number=1;
 
  public totalRecord!:any;
  public fvalue!:any;
  public user!: any;
  public dataValue!: any;
  public editdata!:any;
  public disabledFlag1:boolean=false;

  public fname!:any;
  public lname!:any;
  public emailvalue!:any;
  public techvalue!:any;

public dataValueOfApi!:any;
  constructor(
    private formBuilder: FormBuilder,  private Service:ApiserviceService,private route:Router
  ) {
    
    this.user = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.email]],
      technology: ['', [Validators.required]],
      
    },{ updateOn: "blur" });
   
  }

ngOnChanges(): void {
  this.getPost();
  console.log(this.fnameUpdated);   
  if(this.idUpdated)
  {
    console.log(this.emailUpdated);
      this.MyDOMElement.nativeElement.innerText="Update";
      this.user.get('firstName').setValue(this.fnameUpdated);
      this.user.get('lastName').setValue(this.lnameUpdated);
        this.user.get('email').setValue(this.emailUpdated);
      this.user.get('technology').setValue(this.techUpdated);
  }
  else{
    this.MyDOMElement.nativeElement.innerText="Submit";
  }
  
    
  
  }

  get firstName() {
    return this.user.get('firstName');
  }
  get lastName() {
    return this.user.get('lastName');
  }
  get email() {
    return this.user.get('email');
  }

  get technology() {
    return this.user.get('technology');
  }
  loginUser() {
 
    if(this.idUpdated)
    {
      console.log("updated");

       this.editdata= {"firstName": this.user.value.firstName,"lastName":this.user.value.lastName,"email":this.user.value.email, "technology":this.user.value.technology};

       this.Service.updatePost(this.editdata,this.idUpdated).subscribe(response=>{
        this.idUpdated='';
        this.fnameUpdated='';
        this.lnameUpdated='';
        this.emailUpdated='';
        this.techUpdated='';
         this.getPost(); 
         this.user.get('firstName').setValue('');
         this.user.get('lastName').setValue('');
         this.user.get('email').setValue('');
         this.user.get('technology').setValue('');
         this.MyDOMElement.nativeElement.innerText="Submit";
         
        alert("data updated");
    })
    }
    else{
      console.log("inserted");
      this.Service.setPost(this.user.value).subscribe(response=>{
        this.getPost();
       
        this.idUpdated='';
        this.fnameUpdated='';
        this.lnameUpdated='';
        this.emailUpdated='';
        this.techUpdated='';
        alert(" data enter");
        this.user.get('firstName').setValue('');
       this.user.get('lastName').setValue('');
       this.user.get('email').setValue('');
       this.user.get('technology').setValue('');
        // this.route.navigate(['list'])
     });
    }
  
  }
  getPost(){
    this.Service.getPost().subscribe(response=>{
     this.dataValueOfApi=response;
     this.totalRecord=this.dataValueOfApi.length;
    })
    
    }
   
}
