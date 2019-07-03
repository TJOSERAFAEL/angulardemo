import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
    this.items = this.cartService.getItems();

    this.checkoutForm = this.formBuilder.group({
      name: ['Name...', Validators.required],
      address: ['Address...', Validators.required]
    });
  }

  get formFields() { 
    return this.checkoutForm.controls;
  }

  get formInvalid() {
    return this.checkoutForm.invalid;
  }

  onSubmit(customerData) {
    // stop here if form is invalid
    if (this.checkoutForm.invalid) {
      console.warn('Invalid form fields');
      return;
    }

    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  ngOnInit() {
    
  }

}