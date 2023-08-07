import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-volunteer-reg',
  templateUrl: './volunteer-reg.component.html',
  styleUrls: ['./volunteer-reg.component.css']
})
export class VolunteerRegComponent implements OnInit {

  form!: FormGroup;
  error: string = "Invalid Inputs";

  constructor(private service: CommonService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      full_name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      zipcode: new FormControl('', Validators.required),
      who: new FormControl('', Validators.required)
    });
  }

  makeJson(){
    let details = {
      full_name: this.form.controls['full_name'].value,
      email: this.form.controls['email'].value,
      dob: this.form.controls['dob'].value,
      password: this.form.controls['password'].value,
      phone: this.form.controls['phone'].value,
      address: this.form.controls['address'].value,
      zipcode: this.form.controls['zipcode'].value,
      who: this.form.controls['who'].value
    }

    return details;
  }

  onSubmit() {
    if (this.form.valid) {
      let details = this.makeJson();
      console.log(details);

      this.service.register(details).then(
        (data: any) => {
          let status = data['status'];
          let message = data['message'];
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

}
