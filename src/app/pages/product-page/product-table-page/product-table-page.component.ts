import { Component, signal } from '@angular/core';
import { AsideComponent } from "../../../components/aside/aside.component";
import { ProductTableComponent } from "../../../components/product/product-table/product-table.component";
import { ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../../interfaces/product.interface';

@Component({
    selector: 'app-product-table-page',
    standalone: true,
    templateUrl: './product-table-page.component.html',
    styleUrl: './product-table-page.component.css',
    imports: [AsideComponent, ProductTableComponent, ReactiveFormsModule, CommonModule]
})
export class ProductTablePageComponent {
   constructor(private productService: ProductService) {}

    readonly listFilted = signal<any>([]);
    readonly genereSelect = signal<any>('');
    readonly typeFilter = signal<string>('');

    openFilter(event: any) {
        const option = document.querySelectorAll('.option')
        const filters = document.querySelectorAll('.option_filter')
        .forEach((filter, i) => { 
            if(filter.id == event.target.id) {
                filter.classList.toggle('h-[6rem]')

                if(option[i].classList[1] == 'hidden') {
                    setTimeout(() => {
                        option[i].classList.remove('hidden')
                    }, 740)
                    return
                } 
                
                option[i].classList.add('hidden')
            } else {
               // filter.classList.remove('h-16')
            }
         })
    }

    addFilterGenere(e: any) {
        this.typeFilter.set("genere")
        const genere = e.target.value
        this.productService.isListFiled.set(true);
        this.genereSelect.set(e.target.value)

        if(this.productService.isListFiled()) {
            console.log(this.genereSelect())
            const list = this.productService.listFilted().filter((product: IProduct) => product.group == genere);

            if(list.length > 0) {
                return this.productService.listFilted.update((products: IProduct[]) => [...list]);
            }

            return this.productService.listFilted.update((products: IProduct[]) => [...list]);
        }

        const list = this.productService.products().filter((product: IProduct) => product.group == genere);
        this.productService.listFilted.update((products: IProduct[]) => [...list])
        this.productService.isListFiled.set(true);
        return
    }
    
    addFilterValue(e: any) {
        this.productService.isListFiled.set(true)
        // this.typeFilter.set('value')
        const porcetagem = e.target.value
        const value = (5000 * Number(porcetagem)) / 100;
        
        console.log(!this.genereSelect())

        if(this.productService.isListFiled() || !this.genereSelect()) {
            if(this.genereSelect()) {
                console.log(this.typeFilter())
                
                const listFiltedGenere = this.productService.products().filter((product: IProduct) => product.group == this.genereSelect());

                listFiltedGenere.map((product: IProduct) => {
                    const newList: IProduct[] = []; 

                    if(product.value >= value) {
                        newList.push(product)
                    }
                    console.log(newList)
                    return this.productService.listFilted.update((products: IProduct[]) => [...newList])
                    // return this.productService.listFilted.set(newList);
                })
            }
        }
        
        const newList: IProduct[] = [];

        this.productService.products()
        .map((product: IProduct) => {
            if(product.value >= value) {
                newList.push(product)
            }
        });

        if(newList.length > 0) {
            return this.productService.listFilted.set(newList) 
        }
        
        this.productService.listFilted.set(newList)
    }
}
