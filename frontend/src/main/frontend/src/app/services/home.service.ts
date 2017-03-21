import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HomeService {

  constructor(private http: Http) { }

  getContent(){
    	let url = "http://localhost:8080/homes";
    	return this.http.get(url);
  }
  
  goBack() {
    window.history.back();
  }
}
