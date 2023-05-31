import { Component, ElementRef, ViewChild,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common-service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent  implements OnInit {


  color:any;
  closeicon="../assets/images/close.png";
  updatedropdown:boolean = true;
  @ViewChild('myModalClose6') ModalClose6:any;



  
  progressdata:any;

  constructor(private router: Router, elRef: ElementRef, private commonservice:CommonService) {

  }


  
  ngOnInit() {
    if(localStorage.getItem("progressdata")) {
      var data1:any =  localStorage.getItem("progressdata");
      this.progressdata = JSON.parse(data1);
      
      if(this.progressdata.theme == "dark" || this.progressdata.theme == "blue" || this.progressdata.theme == "purple"){
        this.color = "#fff";
      } else if(this.progressdata.theme == "light"){
        this.color = "#000";
      }   
    }

    this.commonservice.progressstatusdata.subscribe((responsive)=>{
      console.log("responsive",responsive);

      if(responsive.length != 0) {
      this.updatedropdown = false;
      this.progressdata = responsive; 
         if(this.progressdata.theme == "dark" || this.progressdata.theme == "blue" || this.progressdata.theme == "purple"){
          this.color = "#fff";
        } else if(this.progressdata.theme == "light"){
          this.color = "#000";
        }
        setTimeout(() => {
          this.updatedropdown = true;
        }, 0);
      }
    })


  }




  
  close(){
    this.ModalClose6.nativeElement.click();
  }



  backwindow(){
    this.router.navigate(['/component/forms']);
    localStorage.removeItem("progressdata");

  }




}
