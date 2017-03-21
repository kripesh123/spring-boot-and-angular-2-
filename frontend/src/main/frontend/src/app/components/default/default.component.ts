import { Component, OnInit } from '@angular/core';
import { DefaultService } from '../../services/default.service';

@Component({
  selector: 'default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  content: string;
	
  constructor(private defaultService: DefaultService) {
  	this.defaultService.getContent().subscribe(
  	  data =>{
  	  	this.content=JSON.parse(JSON.stringify(data))._body;
  	  },
      error => console.log(error)
  	);
  	
  }

  ngOnInit() {
  }  

}
