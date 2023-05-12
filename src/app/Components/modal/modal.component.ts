import { Component,ElementRef,ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

constructor(private router: Router, elRef: ElementRef){
  this.elRef = elRef;
}

  @ViewChild('myModalClose') modalClose:any;
  @ViewChild('myModalClose1') modalClose1:any;
  @ViewChild('myModalClose2') modalClose2:any;
  @ViewChild('myModalClose3') modalClose3:any;


  array = [
    {id:1,name:"Headers"},
    {id:2,name:"Cards"},
    {id:3,name:"Buttons"},
    {id:4,name:"Footer"},
    {id:5,name:"Tooltip"},
    {id:6,name:"Navbar"}
];

subheading = "With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content.";
closeicon="../assets/images/close.png";

close(){

  this.modalClose.nativeElement.click();
  this.modalClose1.nativeElement.click();
  this.modalClose2.nativeElement.click();
  this.modalClose3.nativeElement.click();
  console.log(">>>>>>>>>>>>>>>>");
}

truncate =(str:any) => {
  return str.length > 10 ? str.substring(0, 95): str;
};

elRef: ElementRef     

  getHtmlContent() {
    //This will return '<p> Text </p>' as a string
    return this.elRef.nativeElement.innerHTML;
  }


}
