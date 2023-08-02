import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerRegComponent } from './volunteer-reg.component';

describe('VolunteerRegComponent', () => {
  let component: VolunteerRegComponent;
  let fixture: ComponentFixture<VolunteerRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteerRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
