import { Component, OnInit , EventEmitter , Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit{
  submitted = false;
  registerForm: FormGroup;
  bgcolor: any;
  color: any;
  // alignverticle:any;
  theme:any;
  themecolor:any; 
  @Output() onclose = new EventEmitter<any>;
  nodefaultimage:any;
  storage:any;
  imageform:any; 

  constructor(private router: Router,
    private formBuilder: FormBuilder) {

  }


  
  ngOnInit() {


    this.registerForm = this.formBuilder.group({
     
      uploadimage:[''], 
      typefields:['',[Validators.required]],
      cardwidth:['',[Validators.required]],  
      color: ['', [Validators.required]], 
      // title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]], 
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]], 
      email: [''], 
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]], 
    });

    this.registerForm.get("email")?.valueChanges.subscribe((result)=>{

      console.log("result",result);
  
      if(result == "Sign Up") {
        this.registerForm.get("email")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]); 
      } 
       
      else {
        this.registerForm.get("text1")?.clearValidators();
         
      }
    })

  }



  get f(){
    return this.registerForm.controls;
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
        // "text1":this.registerForm.value.text1,
        // "text2":this.registerForm.value.text2,
        // "text3":this.registerForm.value.text3,
        // "text4":this.registerForm.value.text4,
        "bgcolor":this.bgcolor,  
        "color":this.color,  
        "themecolor":this.themecolor, 
        "theme":this.theme, 
        "typefields":this.registerForm.value.typefields,
        // "buttons":this.registerForm.value.buttons,
        // "title":this.registerForm.value['title'], 
        "username":this.registerForm.value['username'], 
        "email":this.registerForm.value['email'], 
        "password":this.registerForm.value['password'], 
        // "addbutton":this.registerForm.value.addbutton,
        "cardwidth":this.registerForm.value.cardwidth,  
      }
        
      console.log(">>>>>",this.registerForm.value);
      this.onclose.emit();
      localStorage.setItem("loginsignupdata",JSON.stringify(data));
      this.router.navigate(['/component/login&signup']);
    }
  }

}
