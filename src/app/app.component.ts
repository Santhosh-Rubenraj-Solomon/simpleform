import { Component } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';
 inputForm = this.fb.group({
    name: [''],
    age:  [''],
    gender: ['']
})
    
 onSubmit() {
  console.warn(this.inputForm.value);
} 
 constructor(private fb: FormBuilder){}
}
