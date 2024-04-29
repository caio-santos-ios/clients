import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
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
  createOrder(ordersOpen: []) {
    this.ordersCreated.update((ordersCreated) => [...ordersCreated,  ...ordersOpen])
  }

  product(product: any) {
    console.log(product)
    this.selectedProduct.update((value) => [...value, product]);
  }
}
