import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-owner-reg',
  templateUrl: './owner-reg.component.html',
  styleUrls: ['./owner-reg.component.css']
})
export class OwnerRegComponent implements OnInit {

  form!: FormGroup;
  error: string = "Invalid Inputs";

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      full_name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      pincode: new FormControl('', Validators.required)
    });
  }

  submit() {
    if (this.form.valid) {
      console.log("Accepted input");
      console.log(this.form.value);
    }
  }

}
