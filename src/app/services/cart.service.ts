import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  constructor(private toastr: ToastrService) {
  }

  addToCart(product: Product) {
    let item = CartItems.find(c => c.product.productId === product.productId);
    if (item) {
      item.quantity += 1;
    } else {
      let cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity = 1;
      CartItems.push(cartItem);
      this.getTotalPrice();
    }
  }

  listToItems(): CartItem[] {
    return CartItems;
  }

  getTotalPrice() {
    let total = 0;
    CartItems.forEach(c => {
      total += c.product.unitPrice * c.quantity;
    });
    console.log(total)
    return total;
  }

  removeFromCart(product: Product) {
    let item: any = CartItems.find(c => c.product.productId === product.productId);
    if (item.quantity <= 1) {
      CartItems.splice(CartItems.indexOf(item), 1);
      this.toastr.info('Removed from cart', 'Success!');
    } else {
      item.quantity -= 1;
      this.toastr.warning('Removed Product Quality', 'Success!');
    }
  }
}
