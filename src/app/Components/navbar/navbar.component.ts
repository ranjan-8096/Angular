import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit  {
  title = "";
  img1="../assets/images/WellBeingHubLogo.png";
  img2="../assets/images/notify.png";
  img3="../assets/images/cg_logo.svg";
  img4="../assets/images/Capgemini white logo.png";
  whitewbh="../assets/images/WBH logo-on dark surface.png";
  closeicon="../assets/images/close.png";

  navbardata:any;
  @ViewChild('myModalClose1') modalClose1:any;

  @ViewChild("navbar") elRef: ElementRef;

  constructor(private router: Router, elRef: ElementRef) {
    this.elRef = elRef;
    // this.value = header.getHtmlContent();
  }
  
  ngOnInit() {
    if(localStorage.getItem("navbar")) {
      var data1:any =  localStorage.getItem("navbar");
      this.navbardata = JSON.parse(data1);
      console.log("vishnu Data",this.navbardata);

    }
  }

  close(){
    this.modalClose1.nativeElement.click();
  }


  backwindow(){
    this.router.navigate(['/modal']);
  }

  isdropdownMenuOpen:boolean=false;

  dropdownMenu():void{
    this.isdropdownMenuOpen=!this.isdropdownMenuOpen; 
    this.isdropdownMenuOpen2=false;
    this.isdropdownMenuOpen3=false;
    this.isdropdownMenuOpen4=false; 
  }


  isdropdownMenuOpen2:boolean=false;

  dropdownMenu2():void{ 
    this.isdropdownMenuOpen2=!this.isdropdownMenuOpen2;
    this.isdropdownMenuOpen=false; 
    this.isdropdownMenuOpen3=false;
    this.isdropdownMenuOpen4=false;
  }


  isdropdownMenuOpen3:boolean=false;

  dropdownMenu3():void{
    this.isdropdownMenuOpen3=!this.isdropdownMenuOpen3;
    this.isdropdownMenuOpen=false; 
    this.isdropdownMenuOpen2=false;  
    this.isdropdownMenuOpen4=false; 
  }
  isdropdownMenuOpen4:boolean=false;

  dropdownMenu4():void{
    this.isdropdownMenuOpen4=!this.isdropdownMenuOpen4;
    this.isdropdownMenuOpen=false; 
    this.isdropdownMenuOpen2=false;
    this.isdropdownMenuOpen3=false;
  }

  isToggleMenuopen:boolean=false;

  ToggleMenuopen():void{
    this.isToggleMenuopen=!this.isToggleMenuopen;
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
