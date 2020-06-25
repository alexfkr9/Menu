import {Component, OnDestroy, OnInit, AfterViewChecked} from '@angular/core';
import {Subscription} from 'rxjs';

import {PostsService} from '../shared/posts.service';
import {Post} from '../shared/interfaces';
  
   
@Component({
    selector: 'app-oder-page',
    templateUrl: './oder-page.component.html',
    styleUrls: ['./oder-page.component.scss']     
})

export class OderPageComponent implements OnInit { 
     
    totalValue: number;
    totalVal: any=[];
    oderVal: any;     
    userList: any=[];   
    // menuList: any=[];
    nUser: number = 0;
    nMenu: number;    
    userMenuArray: any =[];
    menuArray: any =[];
    userArray: any =[];        
    arrayDish: any =[];
    arrayPrice: any =[];
    arrayUnit: any =[];
    arrayWeight: any =[];    
    arraySum: any =[];
    sum: any =[];

    userSum: any =[];

    userQuantity: any =[];    
    disabled = false;

    oderData: any;

    userDataList: Post[] = []
    menuData: any = {};
    menuArrlength: number = 0;

    menuList: Post[] = []
    pSub: Subscription
    uSub: Subscription 
               
    
    constructor(private postsService: PostsService) {}  
      
    ngOnInit() {

    //получить меню:
    this.pSub = this.postsService.getAll().subscribe(menuList => {      
      this.menuData = menuList; 
           
      // create array of menuList: 
      this.menuArray = this.menuData[0].menuList.slice();  // copy data array of menuArray 
      console.log("this.menuArray"); console.log(this.menuArray)
      this.menuArrlength = this.menuArray.length;
      // this.createArr(this.menuArrlength);      
        
    })      
    
      //получить заказы пользователей:
      this.postsService.getAllUsers().subscribe(
        dataU => {
          this.userDataList = dataU;           
          // create array of user:
          this.userList = this.userDataList.slice();  // copy data array of userList
                             
          this.calcTabe(this.userList)
        }
         
      )
       
  }    
    // расчет данных таблицы:
    calcTabe(usList:any) {                                               
              
              for( let i = 0; i < usList.length; i++) { 
                this.userArray[i] = usList[i].user;
                
                // this.userQuantity[i] = this.userArray[0];    // create array of user name            
                // this.userMenuArray[i] = this.userList[i]; 
                           
                // this.totalValue = 0;

                  //   стоимость блюда с учетом количества:
                  for (var j=0; j < this.userArray[0].length; j++) {                    
                   
                    this.sum[j] = (this.menuArray[j].price*this.userArray[i][j]);
                    // this.totalValue[i] = this.totalValue + this.sum[j];                      
                  }

                this.arraySum[i] = this.sum.slice();

                //   стоимость заказа отдельного пользователя:
                this.userSum[i] = this.arraySum[i].reduce(function(sum: number, elem: number) { return sum + elem;}, 0);
                // this.totalVal[i] = this.totalValue;                                             
              }

              //   стоимость всего заказа:
              this.oderVal = this.userSum.reduce(function(sum: number, elem: number) { return sum + elem;}, 0);
        
    }

      // Расчет стоимости после редактирования заказа:
      changeHandler(a: number,b: number) {                
          this.arraySum[a][b] = this.userArray[a][b]*this.menuArray[b].price;
          this.userSum[a] = this.arraySum[a].reduce(function(sum: number, elem: number) { return sum + elem;}, 0);
          this.oderVal = this.userSum.reduce(function(sum: number, elem: number) { return sum + elem;}, 0);
      }

         

} 