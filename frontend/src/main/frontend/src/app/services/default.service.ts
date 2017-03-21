import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DefaultService {

  constructor(private http: Http) { }
  
	getContent(){
    	let url = "http://localhost:8080/ims";
    	return this.http.get(url);
  	}
}
