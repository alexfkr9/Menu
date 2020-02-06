import { Component, OnInit} from '@angular/core';
import { HttpService} from './http.service';
// import {User} from './user';

   
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [HttpService] 
})
export class AppComponent implements OnInit { 
    
        
    menuList: any;    
    userList: any;
    nUser: number;
    nMenu: number;    
    userMenuArray: any =[];
    menuArray: any =[];
    userArray: any =[];        
    arrayDish: any =[];
    arrayPrice: any =[];
    arrayUnit: any =[];    
    arraySum: any =[];
    sum: any =[];
    userMenu: any =[];    
    userQuantity: any =[];
    userArrayshift: any =[];   
    //users: User[]=[];
    
    constructor(private httpService: HttpService){};
      
    ngOnInit(){
       // this.httpService.getUsers().subscribe(data => this.users=data);
       this.getBooksAndMovies();       
    };

    getBooksAndMovies() {
      this.httpService.getBooksAndMovies().subscribe(
        data => {  

          // create array of menuList
          this.menuArray = data.menuList;
          this.nMenu = this.menuArray.length;

          for( var i = 0; this.menuArray[i]; i++ ){
            this.arrayDish[i] = this.menuArray[i].dish;
            this.arrayPrice[i] = this.menuArray[i].prise;
            this.arrayUnit[i] = this.menuArray[i].unit;
          }
          
          // create array of user
          this.userList = data.userList.slice();
          this.nUser = this.userList.length;                       
          
          for( var i = 0; i < this.nUser; i++) {
            this.userArray = this.userList[i].slice();
            this.userQuantity[i] = this.userArray[0];    // create array of user name            
            this.userArrayshift[i] = this.userList[i].slice();
            this.userArrayshift[i].shift();              // delete user name
            this.userMenu = this.userArrayshift[i];
            this.userMenuArray[i] = this.userArrayshift[i];     // create array of user menu  
              
              // counting of user menu cost
              for (var j=0; j < this.nMenu; j++) { 
                this.sum[j] = this.arrayPrice[j]*this.userMenu[j];
                
              }
            this.arraySum[i] = this.sum.slice();
          }

        }     
      )
    }
}
 