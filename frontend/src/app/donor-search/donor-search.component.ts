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
