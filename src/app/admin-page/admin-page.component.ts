import { Component } from '@angular/core';
// import {Subscription} from 'rxjs';

// import {PostsService} from '../shared/posts.service';
// import {Post} from '../shared/interfaces';

class Item {
    dish: string;
    category: string;    
    price: number;
    weight: number;
    unit: string
     
    constructor(dish: string, category: string, price: number, weight: number, unit: string) {
  
        this.dish = dish;
        this.category = category;
        this.price = price;
        this.weight = weight;
        this.unit = unit;
    }
}


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})

export class AdminPageComponent {    
     
    items: Item[] = 
    [
        { dish: "Хлеб", category: "first", price: 15.9, weight: 50, unit: "г" },
        { dish: "Масло", category: "first", price: 60, weight: 150, unit: "г" },
        { dish: "Картофель", category: "second", price: 22.6, weight: 70, unit: "г" },
        { dish: "Сыр", category: "second", price:310, weight: 120, unit: "г" },
    ];
    
    // Добавить блюдо
    addItem(dish: string, category: string, price: number, weight: number, unit: string): void {
         
        if(dish==null || dish.trim()=="" || price==null)
            return;
        this.items.push(new Item(dish, category, price, weight, unit));
        console.log(this.items)
    }

    // Удалить блюдо
    delItem(n: number): void {         
        this.items.splice(n, 1);
        console.log(n)
    }

}