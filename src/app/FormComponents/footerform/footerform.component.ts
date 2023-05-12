import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footerform',
  templateUrl: './footerform.component.html',
  styleUrls: ['./footerform.component.scss']
})
export class FooterformComponent {

  registerForm: FormGroup;
  submitted = false;
  @Output() onclose = new EventEmitter<any>;

  constructor( private router:Router,
    private formBuilder: FormBuilder
   ) {}

   ngOnInit() {

    this.registerForm = this.formBuilder.group({
      text: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      linkedln: ['', [Validators.required]],
      twitter:['', [Validators.required]],
      insta:['',[Validators.required]],
      facebook:['',Validators.required],
      youtube:['',Validators.required],
      glassdoor:['',[Validators.required]],
      color:['light',[Validators.required]]
    });
  
  };
  
    get f(){
      return this.registerForm.controls;
    }

  onSubmit(){
    console.log(">>>>>>",this.f);
    this.submitted = true;
    if(this.registerForm.invalid) { 
      return true;
      
    } else {
      if(this.registerForm.value.color == "light"){
        this.registerForm.value.color = "#F1F4F8";
      } else if(this.registerForm.value.color == "dark"){
        this.registerForm.value.color = "black"
      } else if(this.registerForm.value.color == "blue"){
        this.registerForm.value.color = "#0070ad"
      } else if(this.registerForm.value.color == "purple"){
        this.registerForm.value.color = "#2b0a3d"
      }
      this.onclose.emit();
      const data = {
        "text":this.registerForm.value.text,
        "linkedln":this.registerForm.value.linkedln,
        "twitter":this.registerForm.value.twitter,
        "insta":this.registerForm.value.insta,
        "facebook":this.registerForm.value.facebook,
        "youtube":this.registerForm.value.youtube,
        "glassdoor":this.registerForm.value.glassdoor,
        "color":this.registerForm.value.color
      }
      console.log(">>",data);


      localStorage.setItem("footerdata",JSON.stringify(data));
      this.router.navigate(['/component/footer']);
    }
  }
}
