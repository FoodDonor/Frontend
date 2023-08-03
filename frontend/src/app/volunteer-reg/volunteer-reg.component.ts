import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-volunteer-reg',
  templateUrl: './volunteer-reg.component.html',
  styleUrls: ['./volunteer-reg.component.css']
})
export class VolunteerRegComponent implements OnInit {

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
      zipcode: new FormControl('', Validators.required)
    });
  }

  submit() {
    if (this.form.valid) {
      console.log("Accepted input");
      console.log(this.form.value);
    }
  }

}
