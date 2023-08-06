
import { Component, OnInit, NgModule } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  error: string = "Invalid Inputs";

  constructor(private service: CommonService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  makeJson() {
    let details = {
      access: this.form.controls['username'].value,
      password: this.form.controls['password'].value
    };

    return details;
  }

  submit() {
    if (this.form.valid) {
      let details = this.makeJson();

      this.service.login(details).then(
        (data: any) => {
          let status = data['status'];
          let message = data['message'];
        }
      );
    }
  }

}
