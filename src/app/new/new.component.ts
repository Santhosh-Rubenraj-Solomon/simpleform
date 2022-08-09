import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(db: AngularFireDatabase) { }

  ngOnInit(): void {
  
  }
  add(){
   console.log("hello there") 
}
}
