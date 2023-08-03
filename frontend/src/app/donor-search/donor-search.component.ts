import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-donor-search',
  templateUrl: './donor-search.component.html',
  styleUrls: ['./donor-search.component.css']
})
export class DonorSearchComponent implements OnInit {

  form!: FormGroup;
  error: string = "Invalid Inputs";

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      pincode: new FormControl('', Validators.required)
    });
  }

  submit() {
    if (this.form.valid) {
      console.log("Accepted input");
      console.log(this.form.value);
      console.log(this.form.controls['pincode'].value);
    }
  }

}
