import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShaderNubComponent } from './shader-nub.component';

describe('ShaderNubComponent', () => {
  let component: ShaderNubComponent;
  let fixture: ComponentFixture<ShaderNubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShaderNubComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShaderNubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
