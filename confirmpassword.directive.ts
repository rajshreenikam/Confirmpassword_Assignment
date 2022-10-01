import { Directive,Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, } from '@angular/forms';

@Directive({
  selector: '[appConfirmpassword]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting: ConfirmpasswordDirective,
    multi:true

  }]
})
export class ConfirmpasswordDirective implements Validator{

  constructor() { }
  @Input() appConfirmpassword:string;
  validate(confirmPasswordField: AbstractControl): {[ key:string]:any} | null {
       const passwordfield= confirmPasswordField.parent.get(this.appConfirmpassword);
       if(passwordfield && passwordfield.value !== confirmPasswordField.value)
       {
         return {'notEqual':true}
       }
       return null;
    }
}
