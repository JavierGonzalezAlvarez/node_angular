import { Component, OnInit } from '@angular/core';

//import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  //https://angular.io/api/common/DatePipe#description
  fecha = new Date();    


  ngOnInit(): void {    
  }

}
