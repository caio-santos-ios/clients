import { Injectable, signal } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly productList = signal<IProduct[]>([
    { id: 1, description: "Produto 1", value: 140.99, weigth: 150, heigth: 105, image: '../../../../assets/foto-produto.png', category: 'camisa', completed_description: 'Descrição completa do produto', group: 'masculino' },
    { id: 2, description: "Produto2", value: 140.99, weigth: 150, heigth: 105, image: '../../../../assets/foto-produto.png', category: 'camisa', completed_description: 'Descrição completa do produto', group: 'masculino' },
    { id: 3, description: "Produto3", value: 140.99, weigth: 150, heigth: 105, image: '../../../../assets/foto-produto.png', category: 'camisa', completed_description: 'Descrição completa do produto', group: 'masculino' },
    { id: 4, description: "Produto4", value: 140.99, weigth: 150, heigth: 105, image: '../../../../assets/foto-produto.png', category: 'camisa', completed_description: 'Descrição completa do produto', group: 'masculino' },
    { id: 5, description: "Produto5", value: 140.99, weigth: 150, heigth: 105, image: '../../../../assets/foto-produto.png', category: 'camisa', completed_description: 'Descrição completa do produto', group: 'masculino' },
    { id: 6, description: "Produto6", value: 140.99, weigth: 150, heigth: 105, image: '../../../../assets/foto-produto.png', category: 'camisa', completed_description: 'Descrição completa do produto', group: 'masculino' },
    { id: 7, description: "Produto7", value: 140.99, weigth: 150, heigth: 105, image: '../../../../assets/foto-produto.png', category: 'camisa', completed_description: 'Descrição completa do produto', group: 'masculino' },
    { id: 8, description: "Produto8", value: 140.99, weigth: 150, heigth: 105, image: '../../../../assets/foto-produto.png', category: 'camisa', completed_description: 'Descrição completa do produto', group: 'masculino' },
    { id: 9, description: "Produto9", value: 140.99, weigth: 150, heigth: 105, image: '../../../../assets/foto-produto.png', category: 'camisa', completed_description: 'Descrição completa do produto', group: 'masculino' },
    { id: 10, description: "Produto10", value: 140.99, weigth: 150, heigth: 105, image: '../../../../assets/foto-produto.png', category: 'camisa', completed_description: 'Descrição completa do produto', group: 'masculino' },
    { id: 11, description: "Produto11", value: 140.99, weigth: 150, heigth: 105, image: '../../../../assets/foto-produto.png', category: 'camisa', completed_description: 'Descrição completa do produto', group: 'masculino' },
    { id: 12, description: "Produto12", value: 140.99, weigth: 150, heigth: 105, image: '../../../../assets/foto-produto.png', category: 'camisa', completed_description: 'Descrição completa do produto', group: 'masculino' },
    { id: 13, description: "Produto13", value: 140.99, weigth: 150, heigth: 105, image: '../../../../assets/foto-produto.png', category: 'camisa', completed_description: 'Descrição completa do produto', group: 'masculino' },
    { id: 14, description: "Produto14", value: 140.99, weigth: 150, heigth: 105, image: '../../../../assets/foto-produto.png', category: 'camisa', completed_description: 'Descrição completa do produto', group: 'masculino' },
    { id: 15, description: "Produto15", value: 140.99, weigth: 150, heigth: 105, image: '../../../../assets/foto-produto.png', category: 'camisa', completed_description: 'Descrição completa do produto', group: 'masculino' },
    { id: 16, description: "Produto16", value: 140.99, weigth: 150, heigth: 105, image: '../../../../assets/foto-produto.png', category: 'camisa', completed_description: 'Descrição completa do produto', group: 'masculino' },
    ])

  constructor() { }
}
