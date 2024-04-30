import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  count = signal<number>(0);

  addCount(value: number) {
    return this.count.update((count: number) => count + value)
  }

  // LISTA DE PRODUTOS
  readonly listProducts = signal<any>([
    { id: 1, name: "Produto 1", price: 780.99 },
    { id: 2, name: "Produto 2", price: 300.99 },
  ])

  // PRODUTO SELECIONADO
  readonly selectedProduct = signal<any>([])

  // LISTA DE PEDIDOS EM ABERTO
  readonly ordersOpen = signal<any>([])

  // LISTA DE PEDIDOS CRIADOS
  readonly ordersCreated = signal<any>([])
  
  // adiciona produto na lista de pedidos
  addProductOrdersOpen(product: any) {
    this.ordersOpen.update((orders) => [...orders, product])
  }

  // cria o pedido com a lista de pedidos
  createOrder(orderOpen: any) {
    this.ordersCreated.update((ordersCreated) => [...ordersCreated,  orderOpen])
  }

  selectProduct(product: any) {
    this.selectedProduct.set(product);
  }
}