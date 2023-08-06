import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  total_num_fed: number = 0;
  total_kgs_fed: number = 0;
  total_locations: number = 0;
  total_volunteers: number = 0;

  constructor(private service: CommonService) { }

  ngOnInit(): void {
    this.getStats();
  }

  getStats() {
    this.service.getStats().then(
      (data: any) => {
        this.total_num_fed = data['total_num_fed'];
        this.total_kgs_fed = data['total_kgs_fed'];
        this.total_volunteers = data['total_volunteers'];
        this.total_locations = data['total_location'];
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
