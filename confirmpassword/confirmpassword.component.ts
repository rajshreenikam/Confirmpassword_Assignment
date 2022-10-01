import { Component, OnInit } from '@angular/core';
import { Validators,FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-confirmpassword',
  templateUrl: './confirmpassword.component.html',
  styleUrls: ['./confirmpassword.component.css']
})
export class ConfirmpasswordComponent implements OnInit {

  myReactiveForm: FormGroup;
  constructor() {
    this.createForm();
   }

  ngOnInit() {
  }
  createForm() {
    this.myReactiveForm = new FormGroup({
      'password': new FormControl(null,Validators.required),
      'confirmPassword': new FormControl(null,Validators.required)
    })
}
data: boolean = false;
  show() {
    this.data = true;
  }
}
