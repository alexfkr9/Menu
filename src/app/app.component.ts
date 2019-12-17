import { Component, OnInit} from '@angular/core';
import { HttpService} from './http.service';
import {User} from './user';
   
@Component({
    selector: 'my-app',
    template: `<h2>Menu</h2>
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
                    <tr *ngFor="let user of users">
                        <td>{{user?.dish}}</td>
                        <td>{{user?.quantity}}</td>
                        <td>{{user?.price}}</td>
                        <td><input type="checkbox" /></td>             
                        </tr>
                </tbody>
            </table>`,
    providers: [HttpService]
})
export class AppComponent implements OnInit { 
   
    users: User[]=[];
     
    constructor(private httpService: HttpService){}
      
    ngOnInit(){
          
        this.httpService.getUsers().subscribe(data => this.users=data);
    }
}