import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Location } from '../models/location.model';
import { DataSource } from '@angular/cdk/table';
import { MatSort } from '@angular/material/sort';
import { CommonService } from '../services/common.service';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-donor-search',
  templateUrl: './donor-search.component.html',
  styleUrls: ['./donor-search.component.css']
})
export class DonorSearchComponent implements OnInit, AfterViewInit {

  form!: FormGroup;
  error: string = "Invalid Inputs";
  displayedColumns = ["d", "l", "pf", "kg", "m"];
  showTable = false;

  dataSource: MatTableDataSource<Location> = new MatTableDataSource();
  
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  constructor(private service: CommonService) {

    // const locations: Location[] = [{
    //   "d": { // distributor
    //     "n": "Name 1", // name
    //     "c": { // contact
    //       "e": "n1@e.com",  // can be null // email
    //       "p": "9999988888" // phone
    //     }
    //   },
    //   "l": "l1", // location
    //   "t": "t1", // last known data timestamp
    //   "pf": 100, // people fed
    //   "kg": 50, // kgs food given
    //   "m": 2 // or 1 or 2 // manpower ENUM
    // }, {
    //   "d": { // distributor
    //     "n": "Name 2", // name
    //     "c": { // contact
    //       "e": "n2@e.com",  // can be null // email
    //       "p": "9999977777" // phone
    //     }
    //   },
    //   "l": "l2", // location
    //   "t": "t2", // last known data timestamp
    //   "pf": 200, // people fed
    //   "kg": 100, // kgs food given
    //   "m": 4 // or 1 or 2 // manpower ENUM
    // }];

    // this.dataSource = new MatTableDataSource(locations);
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      zipcode: new FormControl('', Validators.required)
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  async submit() {
    if (this.form.valid) {
      // let response = "";

      this.service.getLocationWithCode(this.form.controls['zipcode'].value).then(
        (data: any) => {
          let status = data["status"];
          let message = data["message"];
          let locations: Location[] = data["locations"];

          this.dataSource = new MatTableDataSource(locations);
          this.ngAfterViewInit();
        },

        (error) => {
          // do whatever you want with error
          console.log(error);
        }
      );
      this.showTable = true;
    }
  }

}
