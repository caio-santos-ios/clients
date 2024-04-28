import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsClientPageComponent } from './details-client-page.component';

describe('DetailsClientPageComponent', () => {
  let component: DetailsClientPageComponent;
  let fixture: ComponentFixture<DetailsClientPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsClientPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsClientPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
