import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {



  constructor(private router: Router, elRef: ElementRef) {

  }



  formscomponentarray = [
    {id:1,name:"Input"},
    {id:2,name:"Checkbox"},
    {id:3,name:"Radio"},
    {id:4,name:"Selector"},
    {id:5,name:"Progressbar"},
    {id:6,name:"Date & Time Picker"},
    {id:7,name:"Multiselect"},
    {id:8,name:"Range"}

];

  
  backwindow(){
    this.router.navigate(['/modal']);
  }

  truncate =(str:any) => {
    return str.length > 10 ? str.substring(0, 95): str;
  };
  

}
