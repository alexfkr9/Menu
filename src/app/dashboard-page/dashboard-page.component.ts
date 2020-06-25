import {Component, OnDestroy, OnInit, AfterViewChecked} from '@angular/core';
import {Subscription} from 'rxjs';

import {PostsService} from '../shared/posts.service';
import {Post} from '../shared/interfaces';



@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})

export class DashboardPageComponent implements OnInit {

    totalValue: number;
    totalVal = [];
    oderVal: number;  
   
    
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
    menuData: any = {};
    
    menuList: Post[] = []
    pSub: Subscription

    price: number;

    inp_val: any = [];    

    menuArrlength: number = 0;
    arr = [];

  constructor(private postsService: PostsService) {
  }

  ngOnInit() {

    this.pSub = this.postsService.getAll().subscribe(menuList => {      
      this.menuData = menuList; 
           
      // create array of menuList 
      this.menuArray = this.menuData[0].menuList.slice();  // copy data array of menuArray 
      
      this.menuArrlength = this.menuArray.length;
      this.createArr(this.menuArrlength);      
        
    })      
    
}

  createArr(l:number) {
    console.log(l);
    this.arr = new Array(l);        
    for(var i = 0;i<l; i++) { 
      this.arr[i] = 0
      console.log(this.arr[i]) 
    }
console.log(this.arr);
    this.inp_val = this.arr.slice();
  }

    
     

    calcTabe() {
      for( var i = 0; this.inp_val.length; i++ ){
            this.arraySum[i] = (this.menuArray[i].price)*(this.inp_val[i] || 0);       
        this.oderVal = this.arraySum.reduce(function(sum: number, elem: number) 
              { return sum + elem;}, 0);        
      }
    }


    // Добавить в базу заказ
    send() {
      
      const post: any = {      
        // date: new Date(),
        user: this.inp_val                
      }

      this.postsService.create(post).subscribe(() => {
        // this.form.reset()
      })

    }
                             

}