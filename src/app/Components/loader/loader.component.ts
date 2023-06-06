import { Component ,ElementRef,OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  @ViewChild("loader") elRef: ElementRef;

  constructor(private router: Router, elRef: ElementRef) {
    this.elRef = elRef;
  } 

  loaderdata:any;

  closeicon="../assets/images/close.png";
 
  htmlcontent="active";
  csscontent:any;
  Copy="Copy";
  CSS=`.loader {
    width: 100%;
    height: 4.8px;
    display: inline-block;
    position: relative;
    background: rgba(255, 255, 255, 0.15);
    overflow: hidden;
  }
  .loader::after {
    content: '';  
    box-sizing: border-box;
    width: 0;
    height: 4.8px;
    background: #FFF;
    position: absolute;
    top: 0;
    left: 0;
    animation: animFw 10s linear infinite;
  }
  
  @keyframes animFw {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }`

  @ViewChild ("myModalClose2") modalClose2:any;
  ngOnInit(){
    if(localStorage.getItem("loaderdata")) {
      var data1:any =  localStorage.getItem("loaderdata");
      this.loaderdata = JSON.parse(data1);
     
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
    this.modalClose2.nativeElement.click();
  }
  
  backwindow(){
    this.router.navigate(['/modal']);
  } 

}
