import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Location {

  "d": { // distributor
    "n": string, // name
    "c": { // contact
      "e": string,  // can be null // email
      "p": string // phone
    }
  }
  "l": string // location
  "t": string // last known data timestamp
  "pf": number // people fed
  "kg": number // kgs food given
  "m": number // or 1 or 2 // manpower ENUM

}
