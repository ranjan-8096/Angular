import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tablecomponent',
  templateUrl: './tablecomponent.component.html',
  styleUrls: ['./tablecomponent.component.scss']
})
export class TablecomponentComponent {

  tabledata:any;
  closeicon="../assets/images/close.png";


  array = [
    {id:1,th:"Cell Heading",td0:"Cell Content",td1:"Cell Content",td2:"Cell Content",td3:"Cell Content",td4:"Cell Content"},
    {id:2,th:"Cell Heading",td0:"Cell Content",td1:"Cell Content",td2:"Cell Content",td3:"Cell Content",td4:"Cell Content"},
    {id:3,th:"Cell Heading",td0:"Cell Content",td1:"Cell Content",td2:"Cell Content",td3:"Cell Content",td4:"Cell Content"},
    {id:4,th:"Cell Heading",td0:"Cell Content",td1:"Cell Content",td2:"Cell Content",td3:"Cell Content",td4:"Cell Content"},
    {id:5,th:"Cell Heading",td0:"Cell Content",td1:"Cell Content",td2:"Cell Content",td3:"Cell Content",td4:"Cell Content"}
  ];

  @ViewChild('myModalClose') modalClose8:any;
  @ViewChild("myheader") elRef: ElementRef;

  constructor(private router: Router, elRef: ElementRef) {
    this.elRef = elRef;
  }

  ngOnInit() {
    if(localStorage.getItem("data")) {
      var data1:any =  localStorage.getItem("data");
      this.tabledata = JSON.parse(data1);
    // console.log(">>>>>>>>>>>>>>>>>headerdata",this.headerdata);

    }
  }

  close(){
    this.modalClose8.nativeElement.click();
  }


  backwindow(){
    this.router.navigate(['/modal']);
  }

  search(){
    // console.log("hvczhxgcjy",e);
  }

}
