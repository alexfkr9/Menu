import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
   
@Injectable()
export class HttpService{
   
    constructor(private http: HttpClient){ }
       
    getUsers() : Observable<User[]> {
        return this.http.get('users.json').pipe(map(data=>{
            let usersList = data["userList"];
            return usersList.map(function(user:any) {
                return {dish: user.dish, quantity: user.quantity, price: user.price};
              });
        }));
    }
}