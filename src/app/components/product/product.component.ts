import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  box: Product[] = [];
  filterText: string = "";
  dataLoaded: boolean = false;


  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private toastr: ToastrService) { }
  //activated route aktif olan route'u alıyoruz.


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["categoryId"]) {
        this.getProductsByCategoryId(params["categoryId"]);
      } else {
        this.getProducts();
      }
    })
  }

  getProducts() {
    //async çalışıyor.
    this.productService.getProducts().subscribe(response => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }

  getProductsByCategoryId(categoryId: number) {
    this.productService.getProductsByCategoryId(categoryId).subscribe(response => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }

  addToCart(product: Product) {
    if (product.unitsInStock > 0) {
      this.box.push(product);
      this.toastr.success('Added to cart', 'Success!');
      product.unitsInStock--;
      console.log(this.box);
    } else {
      this.toastr.error('Not in stock', 'Error!');
    }

  }

}
