import { Component, OnInit , EventEmitter , Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common-service';

@Component({
  selector: 'app-breakpointlayoutform',
  templateUrl: './breakpointlayoutform.component.html',
  styleUrls: ['./breakpointlayoutform.component.scss']
})
export class BreakpointlayoutformComponent {


  
  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private commonservice:CommonService) {

  }


  ngOnInit() {


  }


 
};

