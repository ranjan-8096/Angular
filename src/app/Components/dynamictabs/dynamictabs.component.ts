import { Component ,ElementRef,OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common-service';

@Component({
  selector: 'app-dynamictabs',
  templateUrl: './dynamictabs.component.html',
  styleUrls: ['./dynamictabs.component.scss']
})
export class DynamictabsComponent implements OnInit  {

  dynamictabsdata:any;
  color:any;
  dynamicdata:any = [];
  tabdata:any = []
  closeicon="../assets/images/close.png";
  updatedropdown:boolean = true;

  @ViewChild('myModalClose7') modalClose7:any;

  constructor(private router : Router, private commonservice:CommonService){

  }

  

  ngOnInit() {

    
    if(localStorage.getItem("dynamictabsdata")) {
      var data1:any =  localStorage.getItem("dynamictabsdata");
      this.dynamictabsdata = JSON.parse(data1);
      this.selectloaddata();
      // this.tabdata =  this.dynamictabsdata?.dynamicdata;
      // var uniqueSet = new Set();
    // console.log(">>>>>>>>>>>>>>>>>headerdata",this.carddata.uploadimage);
    this.tabdata.forEach((element:any) => {
      if(element.id == 1) {
        element.Isvisible = true;
        element.class = "Active";

      }
    });

    }

    this.commonservice.tabsstatusdata.subscribe((responsive)=>{

      if(responsive.length != 0) {
       this.updatedropdown = false;
      this.dynamictabsdata = responsive;
      this.selectloaddata();
      // this.tabdata =  responsive?.dynamicdata;
      // var uniqueSet = new Set();
    // console.log(">>>>>>>>>>>>>>>>>headerdata",this.carddata.uploadimage);
    
    setTimeout(() => {
      this.updatedropdown = true;
    }, 0);

    
    this.tabdata && this.tabdata.forEach((element:any) => {
      if(element.id == 1) {
        element.Isvisible = true;
        element.class = "Active";

      }
    });

  }

    });



  }


  selectloaddata(){
    this.dynamicdata = [];
    if(this.dynamictabsdata.helpertext1) {
      this.dynamicdata.push({id:1,Isvisible:false,class:"Inactive","label":this.dynamictabsdata.helpertext1,"description":this.dynamictabsdata.description1})
    } 
    if(this.dynamictabsdata.helpertext2) {
      this.dynamicdata.push({id:2,Isvisible:false,class:"Inactive","label":this.dynamictabsdata.helpertext2,"description":this.dynamictabsdata.description2})
    }
    if(this.dynamictabsdata.helpertext3) {
      this.dynamicdata.push({id:3,Isvisible:false,class:"Inactive","label":this.dynamictabsdata.helpertext3,"description":this.dynamictabsdata.description3})
    }
    if(this.dynamictabsdata.helpertext4) {
      this.dynamicdata.push({id:4,Isvisible:false,class:"Inactive","label":this.dynamictabsdata.helpertext4,"description":this.dynamictabsdata.description4})
    }


    const unique = [...new Map(this.dynamicdata.map((m:any) => [m.id, m])).values()];

    console.log(">>>>>>>>>>>>>>>>",unique);
    this.tabdata = unique;
  }

  
  close(){
    this.modalClose7.nativeElement.click();
  }

  onClick(tabid:any){
    
    this.tabdata.forEach((element:any) => {
      if(element.id == tabid) {
        element.Isvisible = true;
        element.class = "Active";
      } else {
        element.Isvisible = false;
        element.class = "Inactive";


      }
      
    });

  }


  backwindow(){
    this.router.navigate(['/modal']);
    localStorage.removeItem("dynamictabsdata");

  }

}
