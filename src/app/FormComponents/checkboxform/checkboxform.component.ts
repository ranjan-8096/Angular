import { Component, OnInit , EventEmitter , Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkboxform',
  templateUrl: './checkboxform.component.html',
  styleUrls: ['./checkboxform.component.scss']
})
export class CheckboxformComponent implements OnInit{
  submitted = false;
  registerForm: FormGroup;
  bgcolor: any;
  color: any;

  @Output() onclose = new EventEmitter<any>;
  nodefaultimage:any;
  storage:any;
  imageform:any;

  // @Output() onLogin = new EventEmitter<boolean>();
  constructor(private router: Router,
    private formBuilder: FormBuilder) {

  }


  
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
    
      image:['',[Validators.required]],
      uploadimage:[''],
      cardwidth:['',[Validators.required]],
      // theme:['',[Validators.required]],
      color: ['', [Validators.required]], 
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      // welcome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]]
    });
 
   
  }

  get f(){
    return this.registerForm.controls;
  }
 
  

  onSubmit(){
    console.log(">>>>",this.f);
    this.submitted = true;
    console.log(">>>>>>>>this.registerForm",this.f);

    if(this.registerForm.invalid) {
      return true;
    } else { 

      if (this.registerForm.value['color'] == "blue") {
        this.bgcolor = "#0070ad";
        this.color = "white";
      }
      if (this.registerForm.value['color'] == "purple") {
        this.bgcolor = "#2b0a3d";
        this.color = "white";

      }
      if (this.registerForm.value['color'] == "dark") {
        this.bgcolor = "black";
        this.color = "white";
      }
      if (this.registerForm.value['color'] == "light") {
        this.bgcolor = "#F1F4F8";
        this.color = "#000";
      }
      const data = {
        // "text1":this.registerForm.value.text1,
        // "text2":this.registerForm.value.text2,
        "bgcolor":this.bgcolor,  
        "color":this.color,

        // "theme":this.registerForm.value.theme,
        "image":this.registerForm.value.image,
        "title":this.registerForm.value['title'],
        // "welcome":this.registerForm.value['welcome'],
        // "uploadimage": this.registerForm.value.uploadimage,
        // "addbutton":this.registerForm.value.addbutton,
        "cardwidth":this.registerForm.value.cardwidth,
        // "buttons":this.registerForm.value.buttons,
        // "imagename":this.storage,
        // "imageform":this.registerForm.value.imageform
      }
        
      console.log(">>>>>",this.registerForm.value);
      this.onclose.emit();
      localStorage.setItem("carddata",JSON.stringify(data));
        this.router.navigate(['/component/checkbox']);
    }
  }

}
