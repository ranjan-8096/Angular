import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {

  constructor(private router: Router) {

  }

  closeicon="../assets/images/close.png";

  backwindow(){
    this.router.navigate(['/component/forms']);
  } 

}
