import { Component ,OnInit, ViewChild} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common-service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {

  myDatePicker:any;
  time = { hour: 13, minute: 30 };
  hideTime:false;
  disableMinute:false;
  enableMeridian:true;
  color:any;
  stepMinute:any;
  stepSecond:any;
  stepHour:any;
  showSeconds:false;
  showSpinners:true;
  disabled:false;
  maxDate:any;
  minDate:any;
  dateControl:any;
  updatedropdown:boolean = true;
  calendardata:any;
  closeicon="../assets/images/close.png";
  @ViewChild('myModalClose5') modalClose5:any;

  constructor(private router: Router, private commonservice:CommonService) {


  }


  ngOnInit() {


    
    if(localStorage.getItem("calendardata")) {
      var calendardata:any =  localStorage.getItem("calendardata");
      this.calendardata = JSON.parse(calendardata);
      if(this.calendardata.theme == "dark" || this.calendardata.theme == "blue" || this.calendardata.theme == "purple"){
        this.color = "#fff";
      } else if(this.calendardata.theme == "light"){
        this.color = "#000";
      }
    
    }

    this.commonservice.calendarstatusdata.subscribe((responsive)=>{
      console.log("responsive",responsive);

      if(responsive.length != 0) {
      this.updatedropdown = false;
         this.calendardata = responsive;
         if(this.calendardata.theme == "dark" || this.calendardata.theme == "blue" || this.calendardata.theme == "purple"){
          this.color = "#fff";
        } else if(this.calendardata.theme == "light"){
          this.color = "#000";
        }
        
      setTimeout(() => {
        this.updatedropdown = true;
      }, 0);
      }
    })

  }
  
  backwindow(){
    this.router.navigate(['/component/forms']);
    localStorage.removeItem("calendardata");

  }

  close(){
    this.modalClose5.nativeElement.click();
  }

  dateUpdated(){

  }
  



}
