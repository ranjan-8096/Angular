import { Component ,ElementRef,OnInit, ViewChild } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common-service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  closeicon="../assets/images/close.png";
  color:any;
  selectdata:any;
  dropdownList:any = []; 
  selectedItems:any = [];
  updatedropdown:boolean = true;
  htmlcontent="active";
  csscontent:any;
  Copy="Copy";
  CSS=`.select_container {

    padding: 20px 20px;
    text-transform: capitalize;
}

.select_container label {
    padding: 5px 0px;
}

.list-inline {
    padding-left: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    margin-top: 30px;
    li:first-child{
        margin-right: 10px;
    }
    li{
        cursor: pointer;
        button{
            border: none;
            background: transparent;
            padding: 0px;
        }
    }
}`;

  @ViewChild('myModalClose3') modalClose3:any;
  @ViewChild("selector") elRef: ElementRef;

  dropdownSettings:IDropdownSettings={
    singleSelection:false,
    idField: 'id',
    textField: 'helpertext',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 10,
    allowSearchFilter: true
  };


  constructor(private router: Router, private commonservice:CommonService, elRef: ElementRef) {
    this.elRef = elRef;
  }


  
   
  ngOnInit() {


    if(localStorage.getItem("selectdata")) {
      var data1:any =  localStorage.getItem("selectdata");
      this.selectdata = JSON.parse(data1);
      this.dropdownSettings.singleSelection = this.selectdata.selector == "multiselect" ? false : true;
      // var uniqueSet = new Set();
      this.dropdownList = this.selectdata.selectordata;
    // console.log(">>>>>>>>>>>>>>>>>headerdata",this.carddata.uploadimage);
    if(this.selectdata.theme == "dark" || this.selectdata.theme == "blue" || this.selectdata.theme == "purple"){
      this.color = "#fff";
    } else if(this.selectdata.theme == "light"){
      this.color = "#000";
    }
    }

    this.commonservice.selectorstatusdata.subscribe((responsive)=>{
      if(responsive.length != 0) {
       this.updatedropdown = false;
        console.log("selectdata",responsive);
         this.selectdata = responsive;
         this.dropdownList = responsive.selectordata
         setTimeout(() => {
          this.dropdownSettings.singleSelection = responsive.selector == "multiselect" ? false : true;
        }, 0);


         if(this.selectdata.theme == "dark" || this.selectdata.theme == "blue" || this.selectdata.theme == "purple"){
          this.color = "#fff";
        } else if(this.selectdata.theme == "light"){
          this.color = "#000";
        }
        console.log("selectdata",this.dropdownSettings.singleSelection );

      setTimeout(() => {
        this.updatedropdown = true;
      }, 0);



      }
    })


    // this.dropdownList = [
    //   { item_id: 1, item_text: 'Mumbai' },
    //   { item_id: 2, item_text: 'Bangaluru' },
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' },
    //   { item_id: 5, item_text: 'New Delhi' }
    // ];

    // this.selectedItems = [
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' }
    // ];

  }

  changesetting(){
    // if(this.selectedItems && this.selectedItems.length > 0) {
    //   console.log(">>>>>>>>>>",this.selectedItems);
    //   // this.selectedItems = [[0]];
    // }
    // this.dropdownSettings.singleSelection = true;

    // setTimeout(() => {
    // }, 0);

  }

  close(){
    this.modalClose3.nativeElement.click();
  }

  backwindow(){
    localStorage.removeItem("selectdata");
    this.router.navigate(['/component/forms']);

  }



  onItemSelect(item: any) {
    console.log(item);
    console.log(">>>>>>>>>>>>>",this.selectedItems);


  }


  onSelectAll(items: any) {
    console.log(items);
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
