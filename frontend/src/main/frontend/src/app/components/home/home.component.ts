import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  content: string;
   
  constructor(private homeService: HomeService) {
  	this.homeService.getContent().subscribe(
  	  data =>{
  	  	this.content=JSON.parse(JSON.stringify(data))._body;
  	  },
      error => console.log(error)
  	);
  }

  ngOnInit() {
  }

}
