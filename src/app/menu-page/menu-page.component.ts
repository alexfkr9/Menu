import { Component, OnInit } from '@angular/core';
import { HttpService} from '../shared/http.service';

// import {Post} from '../shared/interfaces';
import {PostsService} from '../shared/posts.service';


@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss'],
  providers: [HttpService] 
})
export class MenuPageComponent implements OnInit {

    totalValue: number;
    totalVal: any=[];
    oderVal: any;     
    userList: any=[];   
    menuList: any=[];
    nUser: number;
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
    userQuantity: any =[];    
    disabled = false;

    oderData: any;
    
    priceGal: any=[];

    nDishGal: any=[];  
    
    
    constructor(private httpService: HttpService                 
      ){};

  
      
    ngOnInit(){
       // this.httpService.getUsers().subscribe(data => this.users=data);

       this.getData(1);
    };

 
    getData(event: any) {
      this.httpService.getData().subscribe(
        data => {  
 			this.oderData = data;      
          // console.log(this.oderData);
          // create array of menuList 
          this.menuArray = this.oderData.menuList.slice();  // copy data array of menuList
          this.nMenu = this.menuArray.length;

          // create array of user
          this.userList = this.oderData.userList.slice();   // copy data array of userList
          this.nUser = this.userList.length;

          this.calcTabe();
          
        } 
      ) 
    }

    

    calcTabe(increased?) {


          for( var i = 0; this.menuArray[i]; i++ ){
                this.arrayDish[i] = this.menuArray[i].dish;
                this.arrayPrice[i] = this.menuArray[i].price;
                this.arrayUnit[i] = this.menuArray[i].unit;
                this.arrayWeight[i] = this.menuArray[i].weight;
          }                                      
              
              for( var i = 0; i < this.nUser; i++) {
                this.userArray = this.userList[i].slice();
                this.userQuantity[i] = this.userArray[0].slice();    // create array of user name                          
                this.userMenuArray[i] = this.userList[i].slice();
                this.userMenuArray[i].shift(); // delete user name                                                      
                this.totalValue = 0;
                if (increased) {console.log("increased");
                  this.userMenuArray[1] = increased.slice();
                }
                  // counting of user menu cost
                  for (var j=0; j < this.nMenu; j++) { 
                    this.sum[j] = (this.arrayPrice[j]*this.userMenuArray[i][j]);
                    this.totalValue = this.totalValue + this.sum[j];
                  
                  }
             
                this.arraySum[i] = this.sum.slice();                
                this.totalVal[i] = this.totalValue;
                                           
              }

               // console.log("userMenuArray ");console.log(this.userMenuArray);
               this.nDishGal = this.userMenuArray.slice(1,2).shift(); //input для галлереи                   
               // console.log("nDishGal ");console.log(this.nDishGal);

              this.priceGal = this.arraySum.slice(1,2).shift(); //для галлереи
              // console.log("priceGal ");console.log(this.priceGal);

              this.oderVal = this.totalVal.reduce(function(sum: number, elem: number) { return sum + elem;}, 0);
                 
    }

      
      // Расчет стоимости
      changeHandler(a: number,b: number) {  

          this.arraySum[a][b] = this.userMenuArray[a][b]*this.arrayPrice[b];
          this.totalVal[a] = this.arraySum[a].reduce(function(sum: number, elem: number) { return sum + elem;}, 0);
          this.oderVal = this.totalVal.reduce(function(sum: number, elem: number) { return sum + elem;}, 0);
         
      }

      // Обращение из галлереи
      onChanged(increased:any ) {
        // console.log(increased);
        this.calcTabe(increased);        
      }

      activUser() {                
          console.log("Hello")
          this.disabled = true;
      }

                    

}
