import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorLocComponent } from './donor-loc.component';

describe('DonorLocComponent', () => {
  let component: DonorLocComponent;
  let fixture: ComponentFixture<DonorLocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonorLocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonorLocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
