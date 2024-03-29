import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { error } from 'protractor';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

@Output () cancelRegister = new EventEmitter();
registerForm: FormGroup;
maxDate: Date;
validationError: string[] = [];

  constructor(private accountService: AccountService, private toastr: ToastrService,
    private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear()-18);
  } 

initializeForm(){
  this.registerForm = this.fb.group({
    username: ['',Validators.required],
    gender: ['male'],
    dateOfBirth: ['',Validators.required],
    knownAs: ['',Validators.required],
    city: ['',Validators.required],
    country: ['',Validators.required],
    password: ['',[Validators.required, Validators.minLength(4),
       Validators.maxLength(8)]],
    confirmPassword: ['',[Validators.required, this.matchValues("password")]]
  });

  this.registerForm.controls.password.valueChanges.subscribe(() => {
    this.registerForm.controls.confirmPassword.updateValueAndValidity();
  })
}

    // the 'return?.value' is the confirm password that 
    // we will match against the 'matchTo' which is the original password 
matchValues(matchTo: string): ValidatorFn{
  return (control: AbstractControl)=>{
    return control?.value === control?.parent?.controls[matchTo].value
    ? null : {isMatching:true}
  }
}

  register(){
    
     this.accountService.registerUser(this.registerForm.value).subscribe( response => {
       this.router.navigateByUrl("/members");
     }, error => {
       this.validationError =error;
     });
  }

  submit(registerForm: FormGroup){
    if (this.registerForm.valid){
      
    }
  }

  cancel(){
    this.cancelRegister.emit(false);
    this.registerForm.reset();
  }

}
