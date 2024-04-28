import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllershipPageComponent } from './controllership-page.component';

describe('ControllershipPageComponent', () => {
  let component: ControllershipPageComponent;
  let fixture: ComponentFixture<ControllershipPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControllershipPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControllershipPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
