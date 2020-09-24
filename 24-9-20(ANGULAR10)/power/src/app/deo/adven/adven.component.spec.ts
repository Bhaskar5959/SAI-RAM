import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvenComponent } from './adven.component';

describe('AdvenComponent', () => {
  let component: AdvenComponent;
  let fixture: ComponentFixture<AdvenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
