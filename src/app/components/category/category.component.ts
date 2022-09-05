import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  dataLoaded: boolean = false;
  Categories: Category[] = [];

  //tıkladığımız categoriyi currentCategory olarak set ediyoruz.
  currentCategory: Category | null;
  constructor(private categoriesService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoriesService.getCategories().subscribe(response => {
      this.Categories = response.data;
      this.dataLoaded = true;
    })
  }
  //categoriyi seçtiğimizde currentCategory'a set ediyoruz.
  setCurrentCategory(category: Category) {
    this.currentCategory = category;
  }

  getCurrrentCategoryClass(category: Category) {
    if (category == this.currentCategory) {
      return "list-group-item active";
    } else {
      return "list-group-item";
    }
  }

  getAllCategoryClass() {
    if (this.currentCategory == null) {
      return "list-group-item active";
    } else {
      return "list-group-item";
    }
  }
  setCategoryAllProduct() {
    this.currentCategory = null;
    return "list-group-item active";
  }
}
