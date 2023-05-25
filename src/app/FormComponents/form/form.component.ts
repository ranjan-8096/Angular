import { Component, OnInit , EventEmitter , Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  submitted = false;
  registerForm: FormGroup;
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
      addbutton:['', [Validators.required]],
      buttons:[''],
      text1:[''],
      text2:[''],
      image:['',[Validators.required]],
      uploadimage:[''],
      cardwidth:['',[Validators.required]],
      theme:['',[Validators.required]],
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      welcome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]]
    });

    this.registerForm.get("buttons")?.valueChanges.subscribe((result)=>{

      console.log("vishnu",result);

      if(result == 1) {
        this.registerForm.get("text1")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      } 
       else if(result == 2) {
        this.registerForm.get("text1")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
        this.registerForm.get("text2")?.setValidators([Validators.required,Validators.minLength(3), Validators.maxLength(10)]);
      } 
      else {
        this.registerForm.get("text1")?.clearValidators();
        this.registerForm.get("text2")?.clearValidators();
      }
    })
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
      const data = {
        "text1":this.registerForm.value.text1,
        "text2":this.registerForm.value.text2,
        "theme":this.registerForm.value.theme,
        "image":this.registerForm.value.image,
        "title":this.registerForm.value['title'],
        "welcome":this.registerForm.value['welcome'],
        // "uploadimage": this.registerForm.value.uploadimage,
        "addbutton":this.registerForm.value.addbutton,
        "cardwidth":this.registerForm.value.cardwidth,
        "buttons":this.registerForm.value.buttons,
        // "imagename":this.storage,
        // "imageform":this.registerForm.value.imageform
      }
        
      console.log(">>>>>",this.registerForm.value);
      this.onclose.emit();
      localStorage.setItem("carddata",JSON.stringify(data));
        this.router.navigate(['/component/card']);
    }
  }

}


