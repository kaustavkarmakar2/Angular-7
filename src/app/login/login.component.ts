import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
// import { AlertService, AuthenticationService } from '@/_services';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
