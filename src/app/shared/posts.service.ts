import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FbCreateResponse, Post} from './interfaces';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PostsService {
  constructor(private http: HttpClient) {}

  create(post: Post): Observable<Post> {
    return this.http.post(`${environment.fbDbUrl}/users.json`, post)
      .pipe(map((response: FbCreateResponse) => {
        return {
          ...post,
          // id: response.name,
          date: new Date(post.date)
        }
      }))
  }

  // Получить меню из базы

  getAll(): Observable<Post[]> {
    return this.http.get(`${environment.fbDbUrl}/menuList.json`)
      .pipe(map((response: {[key: string]: any}) => {
        return Object
          .keys(response)
          .map(key => ({
            ...response[key],
            id: key,
            date: new Date(response[key].date)
          }))
      }))
  }

  /// Получить пользователей из базы
  getAllUsers(): Observable<Post[]> {
    return this.http.get(`${environment.fbDbUrl}/users.json`)
      .pipe(map((response: {[key: string]: any}) => {
        return Object
          .keys(response)
          .map(key => ({
            ...response[key],
            id: key,
            date: new Date(response[key].date)
          }))
      }))
  }

  // Редактирование меню пользователей в базе
  getById(id: string): Observable<Post> {
    return this.http.get<Post>(`${environment.fbDbUrl}/users/${id}.json`)
      .pipe(map((post: Post) => {
        return {
          ...post, id,
          date: new Date(post.date)
        }
      }))
  }


  // Удаление всех пользователей в базе
  // removeAll(): Observable<void> {
  //   return this.http.delete<void>(`${environment.fbDbUrl}/users.json`)
  // }

  // Удаление пользователя
  remove(id?: string): Observable<void> {
    return this.http.delete<void>(`${environment.fbDbUrl}/users/${id}.json`)
  }


// Редактирование меню пользователей в базе
// update(post: Post): Observable<Post> {
//     return this.http.patch<Post>(`${environment.fbDbUrl}/users/${post.id}.json`, post)
//   }

  
  update(post: any): Observable<any> {console.log("service_post"); console.log(post)
      return this.http.put(`${environment.fbDbUrl}/users/${post.id}.json`, post )
    }


}
