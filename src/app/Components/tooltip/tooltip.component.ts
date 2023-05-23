import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common-service';


@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {

  closeicon = "../assets/images/close.png";

  bottomOptions = {
    'placement': 'bottom',
    'showDelay': 500
  }

tooltipcolor:any;
  tooltipdata: any;
  @ViewChild('myModalClose1') modalClose1: any;
  
  constructor(private router: Router, 
    private commonservice:CommonService, elRef: ElementRef) {
      this.elRef = elRef;
      // this.value = header.getHtmlContent();

  }

  @ViewChild("tooltip") elRef: ElementRef;


  
  ngOnInit() {  
    if (localStorage.getItem("tooltip")) {
      var data1: any = localStorage.getItem("tooltip");
      this.tooltipdata = JSON.parse(data1);
      this.tooltipcolorvalue();
      console.log(">>>>>>>>>>>>>>>>>headerdata",this.tooltipdata);

    }

      this.commonservice.tooltipstatusdata.subscribe((responsive)=>{

        if(responsive.length != 0) {
           this.tooltipdata = responsive;
           this.tooltipcolorvalue();
        }
      })
  }

  tooltipcolorvalue() {
    if(this.tooltipdata?.color == 'dark') {
      this.tooltipdata.class = "ngdark"
    } 
    if(this.tooltipdata?.color == 'light') {
      this.tooltipdata.class = "nglight"
    }
    if(this.tooltipdata?.color == 'blue') {
      this.tooltipdata.class = "ngblue"
    }
    if(this.tooltipdata?.color == 'purple') {
      this.tooltipdata.class = "ngpurple"
    }

  }

  close() {
    this.modalClose1.nativeElement.click();
  }

  backwindow() {
    localStorage.removeItem("tooltip");
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
