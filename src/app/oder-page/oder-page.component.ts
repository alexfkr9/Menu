import { Component, OnInit} from '@angular/core';
import { HttpService} from '../shared/http.service';
  
   
@Component({
    selector: 'app-oder-page',
    templateUrl: './oder-page.component.html',
    styleUrls: ['./oder-page.component.scss'],
    providers: [HttpService] 
})
export class OderPageComponent implements OnInit { 
     
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

                  
    
    constructor(private httpService: HttpService){};

  
      
    ngOnInit(){
       // this.httpService.getUsers().subscribe(data => this.users=data);
       
       this.getData(1);      
    };
 
    getData(event: any) {
      this.httpService.getData().subscribe(
        data => {  
 			this.oderData = data;
          // create array of menuList
          this.menuArray = this.oderData.menuList.slice();  // copy data array of menuList
          this.nMenu = this.menuArray.length;

          // create array of user
          this.userList = this.oderData.userList.slice();   // copy data array of userList
          this.nUser = this.userList.length;

          this.calcTabe(1);
          
        } 
      ) 
    }

    calcTabe(event: any) {

          for( var i = 0; this.menuArray[i]; i++ ){
                this.arrayDish[i] = this.menuArray[i].dish;
                this.arrayPrice[i] = this.menuArray[i].prise;
                this.arrayUnit[i] = this.menuArray[i].unit;
                this.arrayWeight[i] = this.menuArray[i].weight;
          }                                      
              
              for( var i = 0; i < this.nUser; i++) {
                this.userArray = this.userList[i].slice();
                this.userQuantity[i] = this.userArray[0].slice();    // create array of user name            
                this.userMenuArray[i] = this.userList[i].slice();
                this.userMenuArray[i].shift();              // delete user name
                                
                this.totalValue = 0;
                  // counting of user menu cost
                  for (var j=0; j < this.nMenu; j++) { 
                    this.sum[j] = (this.arrayPrice[j]*this.userMenuArray[i][j]);
                    this.totalValue = this.totalValue + this.sum[j];
                  }
                this.arraySum[i] = this.sum.slice();
                this.totalVal[i] = this.totalValue;
                                            
              }
              
              this.oderVal = this.totalVal.reduce(function(sum: number, elem: number) { return sum + elem;}, 0);

        
    }

      // Расчет стоимости
      changeHandler(a: number,b: number) {                
          this.arraySum[a][b] = this.userMenuArray[a][b]*this.arrayPrice[b];
          this.totalVal[a] = this.arraySum[a].reduce(function(sum: number, elem: number) { return sum + elem;}, 0);
          this.oderVal = this.totalVal.reduce(function(sum: number, elem: number) { return sum + elem;}, 0);
      }

      activUser() {                
          console.log("Hello")
          this.disabled = true;
      }
   

} 