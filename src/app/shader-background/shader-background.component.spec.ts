import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShaderBackgroundComponent } from './shader-background.component';

describe('ShaderBackgroundComponent', () => {
  let component: ShaderBackgroundComponent;
  let fixture: ComponentFixture<ShaderBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShaderBackgroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShaderBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
