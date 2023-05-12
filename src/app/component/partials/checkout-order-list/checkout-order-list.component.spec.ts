import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutOrderListComponent } from './checkout-order-list.component';

describe('CheckoutOrderListComponent', () => {
  let component: CheckoutOrderListComponent;
  let fixture: ComponentFixture<CheckoutOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutOrderListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
