import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {

  filedata:any;
  closeicon="../assets/images/close.png";
  color:any;
  htmlcontent="active";
  csscontent:any;
  Copy="Copy";
  CSS=`
.fileupload{
    width: 95%;
    margin: auto;
    text-align: center;
    margin-top: 70px;
    #myfile{
        border:2px solid black;
        padding: 10px;
    }
}
.filelabel{
    text-align: start;
    font-weight: 500;
    margin-bottom: 5px;
}`;

  @ViewChild("myModalCloseform1") ModalClose:any;

  @ViewChild("fileupload") elRef: ElementRef;
  constructor(private router: Router, elRef: ElementRef) {
    this.elRef = elRef;
  }

  ngOnInit(){
    if(localStorage.getItem("filedata")) {
      var data1:any =  localStorage.getItem("filedata");
      this.filedata = JSON.parse(data1);
    console.log(">>>>>>>>>>>>>>>>>headerdata",this.filedata);
    if(this.filedata.color == "light"){
      this.color="white";
    } else if(this.filedata.color == "dark"){
      this.color="black";
    } else if(this.filedata.color == "purple"){
      this.color="#2b0a3d";
    } else if(this.filedata.color == "blue"){
      this.color="#0070ad";
    }

    }
  }

  backwindow(){
    this.router.navigate(['/component/forms']);
  }

  close(){
    this.ModalClose.nativeElement.click();
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
}
