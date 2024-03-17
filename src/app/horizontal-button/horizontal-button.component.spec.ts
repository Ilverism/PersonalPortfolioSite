import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalButtonComponent } from './horizontal-button.component';

describe('HorizontalButtonComponent', () => {
  let component: HorizontalButtonComponent;
  let fixture: ComponentFixture<HorizontalButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorizontalButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HorizontalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
