import { Injectable, signal } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly products = signal<IProduct[]>([
    { id: 1, description: 'Camisa Nike Preta', value: 350.99, weigth: 150, heigth: 104, completed_description: 'Camisa da nike de algodão', image: '', group: 'masculino', category: 'camisa' },
    { id: 2, description: 'Tenis adidas', value: 705.99, weigth: 320, heigth: 84, completed_description: 'Tenis da adidas bonito', image: '', group: 'feminino', category: 'sapato' },
    { id: 3, description: 'Camisa adidas', value: 2000, weigth: 320, heigth: 84, completed_description: 'Camisa da adidas bonito', image: '', group: 'masculino', category: 'camisa' }
  ])

  readonly listFilted = signal<IProduct[]>([]);

  readonly isListFiled = signal<boolean>(false);

  constructor() { }
}
