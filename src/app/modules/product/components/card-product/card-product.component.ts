import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css'
})
export class CardProductComponent {
  @Input() description: string | undefined; 
  @Input() value: number | undefined; 
  @Input() weigth: number | undefined; 
  @Input() heigth: number | undefined; 
  @Input() completed_description: string | undefined; 
  @Input() image: string | undefined; 
  @Input() group: string | undefined; 
  @Input() category: string | undefined; 
}
