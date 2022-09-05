import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  filterText: string = "";
  dataLoaded: boolean = false;


  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { }
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
}
