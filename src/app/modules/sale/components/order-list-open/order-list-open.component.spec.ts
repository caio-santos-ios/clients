import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderListOpenComponent } from './order-list-open.component';

describe('OrderListOpenComponent', () => {
  let component: OrderListOpenComponent;
  let fixture: ComponentFixture<OrderListOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderListOpenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderListOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
