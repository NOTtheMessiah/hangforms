

//  constructor() { }

//  ngOnInit() {
//  }

//}


import { Component } from '@angular/core';
//import { Component, OnInit } from '@angular/core';
import { MyUser }    from '../my-user';

@Component({
selector: 'app-user-form',
templateUrl: './user-form.component.html',
styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
//export class UserFormComponent implements OnInit {

//model = new MyUser('me@haystax.com', 'password', "Anon E. Moose", "555-555-5555");
model = new MyUser('', '', '', '');

submitted = false;

onSubmit() { this.submitted = true; }

newUser() {
  this.model = new MyUser('', '', '', '');
}

// TODO: Remove this when we're done
get diagnostic() { return JSON.stringify(this.model); }

//phoneNumberFormat(phone : String) { return phone.replace("/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"); } //Strips punctuation

//isValidNumber(phone : String) { return !isNaN(parseInt(this.phoneNumberFormat(phone)))}

get maybeName() { if (this.model.name==='') {return "Anonymous User"} else {return this.model.name} }
}
