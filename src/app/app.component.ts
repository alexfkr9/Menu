import { Component, OnInit} from '@angular/core';
import { HttpService} from './http.service';
import {User} from './user';
   
@Component({
    selector: 'my-app',
    template: `
   <h2>Menu</h2>
    <table class="table">
     <thead>
       
         <th>Блюдо</th>
         <th>Цена</th>
         <th>Размерность</th>
         <th>
            <div *ngFor="let user of users; let i = index;">
              <td *ngFor="let userList of users[i].userList; let j = index;">
              {{users[i].userList[j].name}}           
              </td>          
            </div>
          </th>
       
     </thead>

     <tbody>
        
       <td>        
        <div *ngFor="let user of users; let i = index;">          
          <tr *ngFor="let menuList of users[i].menuList; let j = index;">
              {{users[i].menuList[j].dish}}              
          </tr>          
        </div>
       </td>

       <td>
        <div *ngFor="let user of users; let i = index;">          
          <tr *ngFor="let menuList of users[i].menuList; let j = index;">
              {{users[i].menuList[j].prise}}              
          </tr>          
        </div>
       </td>

       <td>
        <div *ngFor="let user of users; let i = index;">          
          <tr *ngFor="let menuList of users[i].menuList; let j = index;">
              {{users[i].menuList[j].unit}}              
          </tr>          
        </div>
       </td>
    
     
        <div *ngFor="let user of users; let i = index;">          
          <td *ngFor="let userList of users[i].userList; let j = index;">
            <!-- {{users[i].userList[j].name}} -->
            <tr *ngFor="let menu of users[i].userList[j].menu; let l = index;">
              <input type="" name="" placeholder="{{users[i].userList[j].menu[l].quantity}}"> 
               
            </tr>        
          </td>          
        </div>
        

     </tbody>
  </table> 


  
 <!-- {{users[i].menuList[j].prise}} 
 {{users[0].menuList[1].dish}} <br>
 {{users[0].menuList[1].prise}} <br>
 {{users[0].menuList[1].unit}} <br>
 {{users[1].userList[1].name}} <br>
 {{users[1].userList[1].menu[0].dish}} <br>
 {{users[1].userList[1].menu[1].quantity}} <br>-->          
                
           `,
    providers: [HttpService]
})
export class AppComponent implements OnInit { 
   

    users: User[]=[];    
     
    constructor(private httpService: HttpService){}
      
    ngOnInit(){
          
        this.httpService.getUsers().subscribe(data => this.users=data);        
    };
}