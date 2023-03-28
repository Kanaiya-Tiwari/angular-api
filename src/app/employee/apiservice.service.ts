
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private HttpCLinet:HttpClient ) { }
  getPost(){
    return   this.HttpCLinet.get('http://localhost:3000/employee',{
      headers: new HttpHeaders({
        'custom-header':"pawan"
      })
    })
  }

  setPost(data:any){
  
    return this.HttpCLinet.post('http://localhost:3000/employee',data);
  }
  deeletePost(id:any)
  {
    return this.HttpCLinet.delete(`http://localhost:3000/employee/${id}`);
  }
  updatePost(data:any,id:any)
  {
    
    return this.HttpCLinet.put(`http://localhost:3000/employee/${id}`,
    data
    );
  }
}
