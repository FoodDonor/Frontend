import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerLocComponent } from './owner-loc.component';

describe('OwnerLocComponent', () => {
  let component: OwnerLocComponent;
  let fixture: ComponentFixture<OwnerLocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerLocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerLocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
