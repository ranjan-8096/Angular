import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerdata:any;
  color:any;
  linkedln="../assets/images/Linkedin.webp";
  twitter="../assets/images/Twitter.webp";
  insta="../assets/images/Instagram.webp";
  facebook="../assets/images/Facebook.webp";
  youtube="../assets/images/YouTube.webp";
  glassdoor="../assets/images/Glassdoor.webp";
  @ViewChild('myModalClose1') modalClose3:any;
  constructor(private router : Router){}

  ngOnInit() {
    if(localStorage.getItem("footerdata")) {
      var data1:any =  localStorage.getItem("footerdata");
      this.footerdata = JSON.parse(data1);
      console.log(">>>>>",this.footerdata);
      if(this.footerdata.color == "#2b0a3d" || this.footerdata.color == "#0070ad" || this.footerdata.color == "dark"){
        this.color = "white";
      } else if(this.footerdata.color == "light"){
        this.color = "black";
      }
    }
  }

  close(){
    this.modalClose3.nativeElement.click();
  }
  backwindow(){
    this.router.navigate(['/modal']);
  }
}
