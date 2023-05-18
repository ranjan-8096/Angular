import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common-service';

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
  closeicon = "../assets/images/close.png";
  @ViewChild('myModalClose1') modalClose3:any;

  @ViewChild("footer") elRef: ElementRef;

  constructor(private router: Router,private commonservice:CommonService, elRef: ElementRef) {
    this.elRef = elRef;
  }

  ngOnInit() {
    if(localStorage.getItem("footerdata")) {
      var data1:any =  localStorage.getItem("footerdata");
      this.footerdata = JSON.parse(data1);
      console.log(">>>>>",this.footerdata);
      if(this.footerdata.color == "#2b0a3d" || this.footerdata.color == "#0070ad" || this.footerdata.color == "black"){
        this.color = "white";
      } else if(this.footerdata.color == "#F1F4F8"){
        this.color = "black";
      }
    }

    
    this.commonservice.footerstatusdata.subscribe((responsive)=>{

      if(responsive.length != 0) {
         this.footerdata = responsive;
         if(this.footerdata.color == "#2b0a3d" || this.footerdata.color == "#0070ad" || this.footerdata.color == "black"){
          this.color = "white";
        } else if(this.footerdata.color == "#F1F4F8"){
          this.color = "black";
        }
      }
    })




  }

  close(){
    this.modalClose3.nativeElement.click();
  }
  backwindow(){
    localStorage.removeItem("footerdata");
    this.router.navigate(['/modal']);
  }

  getHtmlContent() {
    //This will return '<p> Text </p>' as a string
    const html = this.elRef.nativeElement.innerHTML;
    const lines = html.split('>');
    var indentSize = 2;
    for (let i = 0; i < lines.length - 1; i++) {
      if (i >= 1 && i < lines.length - 2) {
        // indentSize++;
        // lines[i] = ' '.startsWith('</')
        lines[i] = ' '.repeat(indentSize) + lines[i].trim() + '>';
      } else {
        lines[i] = lines[i].trim() + '>';
      }
    }
    const formattedCode = lines.join('\n');
    // console.log(formattedCode);
    return formattedCode;
  }
}
