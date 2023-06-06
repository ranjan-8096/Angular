import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edittableformcomponent',
  templateUrl: './edittableformcomponent.component.html',
  styleUrls: ['./edittableformcomponent.component.scss']
})
export class EdittableformcomponentComponent {

  registerForm:any;
  submitted = false;
  tabledata:any;

  @Output() onclose = new EventEmitter<any>;

  
  constructor( private router:Router,
     private formBuilder: FormBuilder
    ) {}

  ngOnInit() {

    if(localStorage.getItem("data")) {
      var data1:any =  localStorage.getItem("data");
      this.tabledata = JSON.parse(data1);
    // console.log(">>>>>>>>>>>>>>>>>headerdata",this.headerdata);

    }

  this.registerForm = this.formBuilder.group({
    title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    color:['light', [Validators.required]],
    tablestrip:['',[Validators.required]],
    pagination:['',Validators.required]
  });

};

  get f(){
    return this.registerForm.controls;
  }


  reloadComponent(self:boolean,urlToNavigateTo ?:string){
    //skipLocationChange:true means dont update the url to / when navigating
   const url=self ? this.router.url : "component/table";
   this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
     this.router.navigate([`/${url}`]).then(()=>{
      //  console.log(`After navigation I am on:${this.router.url}`)
     })
   })
  }

  onSubmit(){
    this.submitted = true;
    if(this.registerForm.invalid) { 
      return true;
      
    }
    else {
      console.log(">>>",this.registerForm.value);

      
      this.onclose.emit();
      const data = {
        "title":this.registerForm.value.title,
        "pagination":this.registerForm.value.pagination,
        "theme":this.registerForm.value.theme,
        "tablestrip":this.registerForm.value.tablestrip
      }
      console.log(">>",data);


      localStorage.setItem("data",JSON.stringify(data));
      this.router.navigate(['/component/table']);
      this.reloadComponent(true);
    }
  }

}
