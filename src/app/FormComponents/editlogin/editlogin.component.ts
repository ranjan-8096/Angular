import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editlogin',
  templateUrl: './editlogin.component.html',
  styleUrls: ['./editlogin.component.scss']
})
export class EditloginComponent {
  submitted = false;
  registerForm: FormGroup;
  bgcolor: any;
  color: any;
  // alignverticle:any;
  theme:any;
  themecolor:any;
  timeoutvalue:any;
  @Output() onclose = new EventEmitter<any>;
  nodefaultimage:any;
  storage:any;
  imageform:any; 
  loginsignupdata:any;
  type:any;
  loaderwidth:any;
  loadercolor:any;
  loadertimeout:any;
  boxshadowchecked:any;
  noboxshadowchecked:any;
  constructor(private router: Router,
    private formBuilder: FormBuilder) {

  }


  
  ngOnInit() {

    if(localStorage.getItem("loginsignupdata")) {
      var data1:any =  localStorage.getItem("loginsignupdata");
      this.loginsignupdata = JSON.parse(data1);

      // console.log(">>>",this.loginsignupdata);
      this.type = this.loginsignupdata.typefields;
      this.loaderwidth = this.loginsignupdata.cardwidth;
      this.loadercolor = this.loginsignupdata.theme;
      this.loadertimeout =this.loginsignupdata.timeout;
    }

    this.registerForm = this.formBuilder.group({
      typefields:['',[Validators.required]],
      cardwidth:['',[Validators.required]],  
      validateforms:[this.boxshadowValue(),[Validators.required]],  
      validateforms2:[this.boxshadowValue1(),[Validators.required]],  
      color: ['', [Validators.required]],  
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]], 
      email: [''], 
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]], 
      minvalue: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(15)]], 
      maxvalue: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(15)]], 
    });

    this.registerForm.get("typefields")?.valueChanges.subscribe((result)=>{ 
      console.log("typefields",result); 
      if(result == "Sign Up") {
        this.registerForm.get("email")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]); 
      }  
      else if(result == "Log In"){
        this.registerForm.get("email")?.clearValidators(); 
        this.registerForm.get("email")?.setValue(""); 
      }
    })

  }
  boxshadowValue(){
    if(this.loginsignupdata.validateforms=="Yes"){
      this.boxshadowchecked="checked";
      return "Yes";
    }else if(this.loginsignupdata.validateforms=="No"){
      this.noboxshadowchecked="checked";
      return "No";
    }
  }
  handleChange(event:any){
    if(event.target.value=="Yes"){
      this.noboxshadowchecked="nochecked";
    }else if(event.target.value=="No"){
      this.boxshadowchecked="nochecked";
    }
    console.log(event.target.value,"Vishn")
  }
  
  boxshadowValue1(){
    if(this.loginsignupdata.validateforms2=="Yes"){
      this.boxshadowchecked="checked";
      return "Yes";
    }else if(this.loginsignupdata.validateforms2=="No"){
      this.noboxshadowchecked="checked";
      return "No";
    }
  }
  handleChange1(event:any){
    if(event.target.value=="Yes"){
      this.noboxshadowchecked="nochecked";
    }else if(event.target.value=="No"){
      this.boxshadowchecked="nochecked";
    }
    console.log(event.target.value,"Vishn")
  }

  get f(){
    return this.registerForm.controls;
  }

  reloadComponent(self:boolean,urlToNavigateTo ?:string){
    //skipLocationChange:true means dont update the url to / when navigating
   const url=self ? this.router.url : "component/login&signup";
   this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
     this.router.navigate([`/${url}`]).then(()=>{
      //  console.log(`After navigation I am on:${this.router.url}`)
     })
   })
  }
 
  onSubmit(){ 
    this.submitted = true;
    console.log("Checkbox registerForm",this.f);

    if(this.registerForm.invalid) {
      return true;
    } else { 

      if (this.registerForm.value['color'] == "blue") {
        this.bgcolor = "#0070ad";
        this.color = "white";
        this.theme="blue";
        this.themecolor = "#03A9F4";
      }
      if (this.registerForm.value['color'] == "purple") {
        this.bgcolor = "#2b0a3d";
        this.color = "white";
        this.theme="purple";
        this.themecolor = "#4c0f6c";

      }
      if (this.registerForm.value['color'] == "dark") {
        this.bgcolor = "black";
        this.color = "white";
        this.theme="dark";
        this.themecolor = "#2e2b2b";
      }
      if (this.registerForm.value['color'] == "light") {
        this.bgcolor = "#fff";
        this.color = "#000";
        this.theme="light";
        this.themecolor = "lightcolor";
      }
      const data = { 
        "bgcolor":this.bgcolor,  
        "color":this.color,  
        "themecolor":this.themecolor, 
        "theme":this.theme, 
        "typefields":this.registerForm.value.typefields, 
        "validateforms2":this.registerForm.value.validateforms2,  
        "validateforms":this.registerForm.value.validateforms,  
        "username":this.registerForm.value['username'], 
        "email":this.registerForm.value['email'], 
        "password":this.registerForm.value['password'],  
        "minvalue":this.registerForm.value['minvalue'],  
        "maxvalue":this.registerForm.value['maxvalue'],  
        "cardwidth":this.registerForm.value.cardwidth,
      }
      console.log(">>>>>",this.registerForm.value);
      this.onclose.emit();
      localStorage.setItem("loginsignupdata",JSON.stringify(data));
      this.router.navigate(['/component/login&signup']);
      this.reloadComponent(true);
    }
  }
}

