import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { CartItems } from 'src/app/models/cartItems';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  cartItems: CartItem[] = [];
  total: number;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCart();
    this.getPrice();
  }

  getCart() {
    this.cartItems = this.cartService.listToItems();
  }

  getPrice() {
    this.total = this.cartService.getTotalPrice();
  }

}
