import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import {User} from './user';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
   
@Injectable()
export class HttpService {
   
    constructor(private http: HttpClient){ }

    getData() {
        return this.http.get('oderList.json')    
    }
       
            // getUsers() : Observable<User[]> {
            //     return this.http.get('oderList.json').pipe(map(data=>{
            //         let usersList = data["menuList"];
            //         return usersList.map(function(user:any) {
            //             return {user};
            //           });
            //     }));
            // }   

}