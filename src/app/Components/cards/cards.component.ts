import { Component ,OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

carddata:any;
img:any;
defaultimage="https://azwelzdevappwbh.azurewebsites.net/assets/7FE422D6-6C37-4E3D-A5B7-8D1085281553";
cardwidth:any;
cardheight:any;
backgroundcard:any;
backgroundbtn:any;
cardcolor:any;
btncolor:any;
nodefaultimage:any;
description:any;
closeicon="../assets/images/close.png";

@ViewChild('myModalClose1') modalClose1:any;
constructor(private router : Router, private sanitizer: DomSanitizer){}

  
  ngOnInit() {
    if(localStorage.getItem("carddata")) {
      var data1:any =  localStorage.getItem("carddata");
      this.carddata = JSON.parse(data1);
    // console.log(">>>>>>>>>>>>>>>>>headerdata",this.carddata.uploadimage);
      if(this.carddata.cardwidth == "100%"){
        this.cardwidth = 100;
        this.cardheight=250;
      } else if(this.carddata.cardwidth == "25%"){
        this.cardwidth = 100;
        this.cardheight=150;
        const truncate =(str:any) => {
          return str.length > 10 ? str.substring(0, 65): str;
        };
        this.description= truncate(this.carddata.welcome) + "...";
      } else if(this.carddata.cardwidth == "75%"){
        this.cardwidth = 100;
        this.cardheight=250;
      } else if(this.carddata.cardwidth == "50%"){
        this.cardwidth = 100;
        this.cardheight=200;
        const truncate =(str:any) => {
          return str.length > 10 ? str.substring(0, 145): str;
        };
        this.description= truncate(this.carddata.welcome) + "...";
      }

      if(this.carddata.theme == "blue"){
        this.backgroundcard = "#0070ad";
        this.cardcolor="white";
        this.backgroundbtn = "white";
        this.btncolor="black";
      } else if(this.carddata.theme == "purple"){
        this.backgroundcard = "#2b0a3d";
        this.cardcolor="white";
        this.backgroundbtn = "white";
        this.btncolor="black";
      } else if(this.carddata.theme == "dark"){
        this.backgroundcard = "black";
        this.cardcolor="white";
        this.backgroundbtn = "white";
        this.btncolor="black";
      } else if(this.carddata.theme == "light"){
        this.backgroundcard = "transparent";
        this.cardcolor="black";
        this.backgroundbtn = "#0070ad";
        this.btncolor="white";
      }

    }
  }

  close(){
    this.modalClose1.nativeElement.click();
  }

  backwindow(){
    this.router.navigate(['/modal']);
  }
  


}

