import { Component,input,output} from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductItem } from '../../product-item/product-item';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.html',
  styleUrls:['./product-list.css'],
  standalone: true,
  imports:[ProductItem]
})
export class ProductListComponent{
  products = input<Product[]>([]);
  delete=output<number>();
  removeProduct(id: number) {
    this.delete.emit(id);
  }
}