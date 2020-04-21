import {Component, OnDestroy, OnInit, AfterViewChecked} from '@angular/core';
import {PostsService} from '../shared/posts.service';
import {Post} from '../shared/interfaces';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

    totalValue: number;
    totalVal = [];
    oderVal = [];  
    userList = [];   
    menuList = [];
    nUser: number
    nMenu: number 
    userMenuArray = [];
    menuArray = [];
    userArray = [];        
    arrayDish = [];
    arrayPrice = [];
    arrayUnit = [];
    arrayWeight = [];    
    arraySum = [];
    sum = [];    
    userQuantity = [];
    disabled = false;    
    oderData: any = {};
    
    posts: Post[] = []
    pSub: Subscription

  constructor(private postsService: PostsService) {
  }

  ngOnInit() {
    this.pSub = this.postsService.getAll().subscribe(posts2 => {      
      this.oderData = posts2;
      this.getData(1);
    })
  }


// remove(id: string) {
//     this.dSub = this.postsService.remove(id).subscribe(() => {
//       this.posts = this.posts.filter(post => post.id !== id)
//     })
//   }


  // ngAfterViewChecked() {
  //   this.pSub = this.postsService.getAll().subscribe(posts => {
  //     // this.posts = posts;
  //     this.oderData = posts;
  //     this.getData(1);
  //   })
  // }

  getData(event: any) {
                    
          // create array of menuList
          this.menuArray = this.oderData.menuList.slice();  // copy data array of menuList
          this.nMenu = this.menuArray.length;

          // create array of user
          this.userList = this.oderData.userList.slice();   // copy data array of userList
          this.nUser = this.userList.length;

          this.calcTabe(1);       
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

      changeHandler(a: number,b: number) {                
          this.arraySum[a][b] = this.userMenuArray[a][b]*this.arrayPrice[b];
          this.totalVal[a] = this.arraySum[a].reduce(function(sum: number, elem: number) { return sum + elem;}, 0);
          this.oderVal = this.totalVal.reduce(function(sum: number, elem: number) { return sum + elem;}, 0);
      }

      activUser() {                
          console.log("Hello")
          this.disabled = true;
      }





  // remove() {
  //   this.dSub = this.postsService.remove().subscribe(() => {
  //     // this.posts = this.posts.filter(post => this.menuArray)
  //   })
  //     console.log("fkjgvflkjvflkj")
  // }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe()
    }
  }

}
