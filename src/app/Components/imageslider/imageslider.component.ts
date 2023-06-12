import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common-service';

@Component({
  selector: 'app-imageslider',
  templateUrl: './imageslider.component.html',
  styleUrls: ['./imageslider.component.scss']
})
export class ImagesliderComponent {

  imagesliderdata:any;
  closeicon="../assets/images/close.png";
  @ViewChild('myModalClose10') ModalClose10:any;

  constructor(private router: Router, elRef: ElementRef, private commonservice:CommonService) {
    
  }


  ngOnInit() {
    if(localStorage.getItem("imagesliderdata")) {
      var data1:any =  localStorage.getItem("imagesliderdata");
      this.imagesliderdata = JSON.parse(data1);
      if(this.imagesliderdata.image == "Yes") {
        this.imagesliderdata.imagestatus = true;
      } else {
        this.imagesliderdata.imagestatus = false;
      }
    console.log(">>>>>>>>>>>>>>>>>get data",this.imagesliderdata);
  
    }

    
    this.commonservice.imagesliderstatusdata.subscribe((responsive) => {

      if (responsive.length != 0) {
        this.imagesliderdata = responsive;
        if(this.imagesliderdata.image == "Yes") {
          this.imagesliderdata.imagestatus = true;
        } else {
          this.imagesliderdata.imagestatus = false;
  
        }
      }
    })




  } 
  


  close(){
    this.ModalClose10.nativeElement.click();
  }

  
  backwindow(){
    this.router.navigate(['/modal']);
    localStorage.removeItem("imagesliderdata");

  }

}
