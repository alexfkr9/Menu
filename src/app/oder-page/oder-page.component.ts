import {Component, OnDestroy, OnInit, AfterViewChecked} from '@angular/core'
import {interval, Subscription} from 'rxjs'

import {PostsService} from '../shared/posts.service'
import {Post} from '../shared/interfaces'

// для редактирования
// import {ActivatedRoute, Params} from '@angular/router';
// import {switchMap} from 'rxjs/operators'
// import {FormControl, FormGroup, Validators} from '@angular/forms'


@Component({
    selector: 'app-oder-page',
    templateUrl: './oder-page.component.html',
    styleUrls: ['./oder-page.component.scss']     
})

export class OderPageComponent implements OnInit { 
     
    oderVal: number = 0         
    
    menuArray: any =[]
    userArray: any =[]       
      
    arraySum: any =[]
    sum: any =[]

    userSum: any =[]
   
    userList: Post[] = []
    menuData: any = {}
    menuArrlength: number = 0

    menuList: Post[] = []
    pSub: Subscription
    uSub: Subscription
    dSub: Subscription
    sub: Subscription
               
    
    constructor(private postsService: PostsService) {
        // const intervalStream$ = interval(10000)

        // this.sub = intervalStream$.subscribe((value) => {            
        //     this.ngOnInit()
        // })
    }  
      
    ngOnInit() {

      //получить меню:
      this.pSub = this.postsService.getAll().subscribe(menuList => {      
        this.menuData = menuList 
             
        // create array of menuList: 
        this.menuArray = this.menuData[0].menuList.slice()  // copy data array of menuArray 
        
        this.menuArrlength = this.menuArray.length       
      })   
     

      //получить заказы пользователей:
      
        this.uSub = this.postsService.getAllUsers().subscribe(
          dataU => {
            this.userList = dataU        
            this.calcTabe(this.userList)            
          }         
        )
      }

      


    // расчет данных таблицы:
    calcTabe(usList:any) {                             

              for( let i = 0; i < usList.length; i++) { 
                this.userArray[i] = usList[i].user
                
                  //   стоимость блюда с учетом количества:
                  for (var j=0; j < this.userArray[0].length; j++) {                    
                   
                    this.sum[j] = (this.menuArray[j].price*this.userArray[i][j])
                                          
                  }

                this.arraySum[i] = this.sum.slice()

                //   стоимость заказа отдельного пользователя:
                this.userSum[i] = this.arraySum[i].reduce(function(sum: number, elem: number) { return sum + elem}, 0)
                                                             
              }

              //   стоимость всего заказа:
              this.oderVal = this.userSum.reduce(function(sum: number, elem: number) { return sum + elem;}, 0)
       
    }

      // Расчет стоимости после редактирования заказа:
      changeHandler(a: number,b: number) {  
          if (this.userArray[a][b] == undefined) 
                {this.userArray[a][b] = 0}         
          this.arraySum[a][b] = this.userArray[a][b]*this.menuArray[b].price
          this.userSum[a] = this.arraySum[a].reduce(function(sum: number, elem: number) { return sum + elem}, 0)
          this.oderVal = this.userSum.reduce(function(sum: number, elem: number) { return sum + elem;}, 0)
      

      }


      // Удалить пользователя
    remove(id?: string) {
          this.dSub = this.postsService.remove(id).subscribe(() => {
              this.userList = this.userList.filter(user => user.id !== id)              
              this.sum.length = 0              
              this.userSum.length = 0              
              this.calcTabe(this.userList)         
          })          
    }

    

    // Редактирование меню пользователей в базе (в разработке)
    update(post: any) {console.log("post"); console.log(post)
        this.postsService.update(post).subscribe()
    }


      // Отписаться
    ngOnDestroy() {
          if (this.pSub) {
              this.pSub.unsubscribe()
          }

          if (this.dSub) {
              this.dSub.unsubscribe()
          }
    }

         

} 