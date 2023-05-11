import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent  implements OnInit {

  constructor(private router : Router){}
  buttondesign:any;
  
  closeicon="../assets/images/close.png";

  ngOnInit() {
  if(localStorage.getItem("button")) {
    var data1:any =  localStorage.getItem("button");
    this.buttondesign = JSON.parse(data1);
  console.log(">>>>>>>>>>>>>>>>>get data",this.buttondesign);

  }
}
close(){
  
}
backwindow(){
  this.router.navigate(['/modal']);
}



}
