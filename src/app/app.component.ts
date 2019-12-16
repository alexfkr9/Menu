import { Component } from '@angular/core';
     
class Item{
    purchase: string;
    quantity: number;
    price: number;
    done: boolean;
     
    constructor(purchase: string, quantity: number, price: number) {
  
        this.purchase = purchase;
        this.quantity = quantity;
        this.price = price;
        this.done = false;
    }
}
 
@Component({
    selector: 'purchase-app',
    template: `<div class="page-header">
        <h1> МЕНЮ </h1>
    </div>
    <div class="panel">
        <div class="form-inline">
            <div class="form-group">
                <div class="col-md-6">
                    <input class="form-control" [(ngModel)]="text" placeholder = "Название" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-2">
                    <input type="number" class="form-control" [(ngModel)]="quantity" placeholder="Количество" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-2">
                    <input type="number" class="form-control" [(ngModel)]="price" placeholder="Цена" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-offset-2 col-md-2">
                    <button class="btn btn-default" (click)="addItem(text, quantity, price)">Добавить</button>
                </div>
            </div>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Наименование блюда</th>
                    <th>Кол.</th>
                    <th>Цена</th>
                    <th>Заказать</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let item of items">
                    <td>{{item.purchase}}</td>
                    <td>{{item.quantity}}</td>
                    <td>{{item.price}}</td>
                    <td><input type="checkbox" [(ngModel)]="item.done" /></td>
                </tr>
            </tbody>
        </table>
    </div>`
})
export class AppComponent { 
    items: Item[] = 
    [
        { purchase: "Салат оливье", done: false, quantity: 50, price: 15 },
        { purchase: "Салат бабье лето", done: false, quantity: 150, price: 60 },
        { purchase: "Лечо", done: true, quantity: 200, price: 50 },
        { purchase: "Сыр", done: false, quantity: 150, price: 31 },
        { purchase: "Лечо", done: true, quantity: 150, price: 27.50 },
        { purchase: "Помидор", done: false, quantity: 200, price: 15 },
        { purchase: "Капуста", done: false, quantity: 100, price: 18 },
        { purchase: "Хлеб", done: true, quantity: 50, price: 1 },
    ];
    addItem(text: string, quantity: number, price: number): void {
         
        if(text==null || text.trim()=="" || quantity==null || price==null)
            return;
        this.items.push(new Item(text, quantity, price));
    }
}