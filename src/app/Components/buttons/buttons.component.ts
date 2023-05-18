import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent  implements OnInit {

  @ViewChild('myModalClose2') modalClose1:any;
  @ViewChild("buttons") elRef: ElementRef;

  constructor(private router: Router, elRef: ElementRef) {
    this.elRef = elRef;
    // this.value = header.getHtmlContent();
  }
  buttondesign:any;
  
  closeicon="../assets/images/close.png";

  ngOnInit() {
  if(localStorage.getItem("button")) {
    var data1:any =  localStorage.getItem("button");
    this.buttondesign = JSON.parse(data1);
  console.log(">>>>>>>>>>>>>>>>>get data",this.buttondesign);

  }
}
close(){
  this.modalClose1.nativeElement.click();
}
backwindow(){
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
