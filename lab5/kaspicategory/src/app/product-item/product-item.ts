import { Component, input, output } from '@angular/core';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common'; // Импортируй CommonModule для фильтра number

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItem {
  product = input.required<Product>();
  delete = output<number>();

  like() {
    this.product().likes++;
  }

  remove() {
    this.delete.emit(this.product().id);
  }

  getWhatsAppLink(): string {
    return `https://wa.me/?text=${encodeURIComponent(
      `Check out this product: ${this.product().link}`
    )}`;
  }

  getTelegramLink(): string {
    return `https://t.me/share/url?url=${encodeURIComponent(
      this.product().link
    )}&text=${encodeURIComponent(this.product().name)}`;
  }
}
