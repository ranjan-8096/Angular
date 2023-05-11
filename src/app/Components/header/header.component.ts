import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  title = "";
  img1="../assets/images/WellBeingHubLogo.png";
  img2="../assets/images/notify.png";
  img3="../assets/images/cg_logo.svg";
  img4="../assets/images/Capgemini white logo.png";
  whitewbh="../assets/images/WBH logo-on dark surface.png";
  closeicon="../assets/images/close.png";

  headerdata:any;
  @ViewChild('myModalClose1') modalClose1:any;

  constructor(private router : Router){}
  
  ngOnInit() {
    if(localStorage.getItem("data")) {
      var data1:any =  localStorage.getItem("data");
      this.headerdata = JSON.parse(data1);
    // console.log(">>>>>>>>>>>>>>>>>headerdata",this.headerdata);

    }
  }

  close(){
    this.modalClose1.nativeElement.click();
  }


  backwindow(){
    this.router.navigate(['/modal']);
  }
}

