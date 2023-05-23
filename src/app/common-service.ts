import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';



@Injectable({
    providedIn: 'root'
  })

export class CommonService {



    private tooltipstatus = new BehaviorSubject<any>([]);
     tooltipstatusdata = this.tooltipstatus.asObservable();

     
    private footerstatus = new BehaviorSubject<any>([]);
    footerstatusdata = this.footerstatus.asObservable();



    footercompletedata(data:any) {
        this.footerstatus.next(data);
    }

     dashboardmatchjob(data:any){
        this.tooltipstatus.next(data);
      }


};