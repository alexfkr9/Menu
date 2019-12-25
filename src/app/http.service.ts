import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
   
@Injectable()
export class HttpService{
   
    constructor(private http: HttpClient){ }
       
    getUsers() : Observable<User[]> {
        return this.http.get('oderList.json').pipe(map(data=>{
            let oderList = data["oderList"];
            return oderList.map(function(user:any) {
                return {menuList: user.menuList, 
                		userList: user.userList                		
                		}; 
              });
        }));
    }
}