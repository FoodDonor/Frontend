import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Location } from '../models/location.model';
import { DataSource } from '@angular/cdk/table';

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
  // displayedColumns = ["l", "pf", "kg", "m"];
  // displayedColumns = ["m"];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  // dataSource = ELEMENT_DATA;
  dataSource: any = [];
  
  // @ViewChild(MatSort) sort: MatSort = new MatSort();

  constructor() {

    // const locations = [{
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
    const ELEMENT_DATA: PeriodicElement[] = [
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    ];

    this.dataSource = ELEMENT_DATA;
    // this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      zipcode: new FormControl('', Validators.required)
    });
  }

  ngAfterViewInit(): void {
    // this.dataSource.sort = this.sort;
  }

  submit() {
    if (this.form.valid) {
      console.log("Accepted input");
      console.log(this.form.value);
      console.log(this.form.controls['zipcode'].value);
    }
  }

}
