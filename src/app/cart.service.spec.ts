/* tslint:disable:no-unused-variable */
import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { products } from './products';
import { CartService } from './cart.service';

describe('CartService', () => {
  let product0 = products[0];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CartService]
    })
    .compileComponents();
  });

  it('should be initialized', inject([CartService], (cartService: CartService) => {
    expect(cartService).toBeTruthy();
  }));

  it('should add product to cart', inject([CartService], (cartService: CartService) => {
    expect(cartService.addToCart(product0)).toBeGreaterThan(0);
  }));

  it('should return items in cart', inject([CartService], (cartService: CartService) => {
    expect(cartService.addToCart(product0)).toBeGreaterThan(0);
    expect(cartService.getItems()).toEqual([product0]);
  }));

  it('should return shipping prices', inject([CartService], (cartService: CartService) => {
    expect(cartService.getShippingPrices()).toBeDefined();
  }));
});
