import {Component} from '@angular/core';
import {ProductService} from './product.service';
import {Category} from './models/category.model';
import {Product} from './models/product.model';
import { ProductListComponent} from './components/product-list/product-list.component';
@Component({
  selector:'app-root',
  templateUrl:'./app.component.html',
  standalone:true,
  imports:[ProductListComponent]
})
export class AppComponent{
  categories:Category[]=[];
  selectedCategoryId:number| null=null;
  selectedProducts:Product[]=[];

  constructor(private productService:ProductService){
    this.categories=this.productService.categories;
  }
  selectCategory(categoryId:number){
    this.selectedCategoryId=categoryId;
    this.selectedProducts=this.productService.getProductByCategory(categoryId);
    console.log('ID:', categoryId);
    console.log('Found Products:',this.selectedProducts);
  }
  removeProductFromList(productId: number) {
    this.selectedProducts = this.selectedProducts.filter(p => p.id !== productId);
  }
}