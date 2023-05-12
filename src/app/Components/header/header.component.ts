import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  title = "";
  img1 = "../assets/images/WellBeingHubLogo.png";
  img2 = "../assets/images/notify.png";
  img3 = "../assets/images/cg_logo.svg";
  img4 = "../assets/images/Capgemini white logo.png";
  whitewbh = "../assets/images/WBH logo-on dark surface.png";
  closeicon = "../assets/images/close.png";

  headerdata: any;
  @ViewChild('myModalClose1') modalClose1: any;

  constructor(private router: Router, elRef: ElementRef) {
    this.elRef = elRef;
  }

  ngOnInit() {
    if (localStorage.getItem("data")) {
      var data1: any = localStorage.getItem("data");
      this.headerdata = JSON.parse(data1);
      // console.log(">>>>>>>>>>>>>>>>>headerdata",this.headerdata);

    }
  }

  close() {
    this.modalClose1.nativeElement.click();
  }


  backwindow() {
    this.router.navigate(['/modal']);
  }


  elRef: ElementRef

  getHtmlContent() {
    //This will return '<p> Text </p>' as a string
    const html = this.elRef.nativeElement.innerHTML;
    const lines = html.split('>');
    var indentSize = 2;
    for (let i = 0; i < lines.length - 1; i++) {
      if (i >= 1 && i < lines.length - 2) {
        lines[i] = ' '.repeat(indentSize) + lines[i].trim() + '>';
      } else {
        lines[i] = lines[i].trim() + '>';
      }
    }
    const formattedCode = lines.join('\n');
    console.log(formattedCode);
    return formattedCode;
  }
}

