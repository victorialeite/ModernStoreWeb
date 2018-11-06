import { Injectable } from '@angular/core';
import { Observer, Observable } from 'rxjs';

@Injectable()
export class CartService {
    public items: any[] = [];
    cartChange: Observable<any>; // a mudança - observável
    cartChangeObserver: Observer<any>; // quem ve a mudança - observador

    constructor() {
        this.cartChange = new Observable((observer: Observer<any>) => {
            this.cartChangeObserver = observer;
        })
    }

    addItem(item){
        this.items.push(item);
        this.cartChangeObserver.next(this.items);
    }
}