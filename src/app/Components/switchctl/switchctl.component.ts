import { Component ,ElementRef,OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-switchctl',
  templateUrl: './switchctl.component.html',
  styleUrls: ['./switchctl.component.scss']
})
export class SwitchctlComponent implements OnInit  {

  @ViewChild("switchctl") elRef: ElementRef;

  constructor(private router: Router, elRef: ElementRef) {
    this.elRef = elRef;
  } 

  switchdatas:any;

  closeicon="../assets/images/close.png";
 
  htmlcontent="active";
  csscontent:any;
  Copy="Copy";
  CSS=`
  .box_1{
    text-align: center;
  }
  
  input[type="checkbox"].switch_1{ 
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
    width: 3.5em;
    height: 1.5em;
    background: #ddd;
    border-radius: 3em;
    position: relative;
    cursor: pointer;
    outline: none;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    }
    input[type="checkbox"].switch_1.extralarge{
    font-size: 100px; 
    }
    input[type="checkbox"].switch_1.large{
    font-size: 75px; 
    }
    input[type="checkbox"].switch_1.medium{
    font-size: 50px; 
    }
    input[type="checkbox"].switch_1.small{
    font-size: 25px; 
    }
    .switch_box.box_1 h4 {
      font-size: 22px;
      margin-bottom: 20px;
  }
    input[type="checkbox"].switch_1.purplecolor:checked{
    background: #2b0a3d;
    }
    input[type="checkbox"].switch_1.darkcolor:checked{
    background: #000;
    }
    input[type="checkbox"].switch_1.bluecolor:checked{
    background: #0070ad;
    }
    input[type="checkbox"].switch_1.lightcolor:checked{
    background: #fff;
    }
    
    input[type="checkbox"].switch_1:after{
    position: absolute;
    content: "";
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    background: #fff;
    -webkit-box-shadow: 0 0 .25em rgba(0,0,0,.3);
            box-shadow: 0 0 .25em rgba(0,0,0,.3);
    -webkit-transform: scale(.7);
            transform: scale(.7);
    left: 0;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    }
    
    input[type="checkbox"].switch_1:checked:after{
    left: calc(100% - 1.5em);
    }
  
    .new {
      padding: 50px; 
    }
    
   
   
    .htmlelement {
      background-color: var(--color-white);
      overflow-y: scroll;
      width: 90%;
      height: 400px;
      margin: auto;
      margin-top: 30px;
    }
   
    .copybutton {
      text-align: end;
      margin-right: 40px;
      margin-top: 30px;
   
      button {
        border: 1.5px solid black;
        background: transparent;
        border-radius: 10px;
        padding: 5px 10px;
      }
   
      .copyicon {
        margin-right: 5px;
      }
    }
   
    .list-inline {
      padding-left: 0;
      list-style: none;
      display: flex;
      justify-content: center;
      margin-top: 30px;
   
      li:first-child {
        margin-right: 10px;
      }
   
      li {
        cursor: pointer;
   
        button {
          border: none;
          background: transparent;
          padding: 0px;
        }
      }
    }
   
    .active {
      border-bottom: 1px solid black !important;
      padding-bottom: 5px !important;
    }
   
   
    @media only screen and (max-width: 767px) {
      .width100 {
        width: 100% !important;
      }
   
      .top-header div:first-child {
        width: 50%;
      }
   
      .new {
        padding: 40px 15px;
      }
   
      h4.subheader {
        margin: 0px;
        font-size: 1.2rem;
      }
   
      section.main header {
        padding: 1rem .85rem;
      }
   
      .modaldialog-width {
        max-width: 100% !important;
      }
    }`

  @ViewChild ("myModalClose1") modalClose1:any;
  ngOnInit(){
    if(localStorage.getItem("switchdata")) {
      var data1:any =  localStorage.getItem("switchdata");
      this.switchdatas = JSON.parse(data1);
     
    }
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
  openhtml(){
    this.htmlcontent = "active";
    this.csscontent = "noactive";
  }
  
  opencss(){
    this.csscontent = "active";
    this.htmlcontent = "noactive";
  }
  
  copy(){
    this.Copy="copied!!";
    setTimeout(()=>{
        this.Copy="Copy";
    }, 2000);
  }
  close(){
    this.modalClose1.nativeElement.click();
  }
  backwindow(){
    this.router.navigate(['/component/forms']);
  } 

}
