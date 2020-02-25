import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder }  from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  newTaskForm: FormGroup;

  constructor(fb: FormBuilder) 
  {
      this.newTaskForm = fb.group({
          name: ["", Validators.required]
      });
  }

  createNewTask()
  {
      console.log(this.newTaskForm.value)
  }

  ngOnInit() {
  }

}
