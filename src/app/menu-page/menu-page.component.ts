import {Component, OnDestroy, OnInit, AfterViewChecked} from '@angular/core';
import {Subscription} from 'rxjs';

import {PostsService} from '../shared/posts.service';
import {Post} from '../shared/interfaces';



@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})

export class MenuPageComponent implements OnInit {

   
    totalVal = [];
    oderVal: number;    
    
    menuArray = [];
       
    arraySum = [];
    sum = [];    
    userQuantity = [];
      
    menuData: any = {};
    
    menuList: Post[] = []
    pSub: Subscription

    price: number;

    inp_val: any = [];   

    menuArrlength: number = 0;
    arr = [];

    userName:string;
      
    
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
    this.arr = new Array(l);        
    for(var i = 0;i<l; i++) { 
      this.arr[i] = 0;
      this.arraySum[i] = 0;   
    }
    this.inp_val = this.arr.slice();     
  }

        

    calcTabe(increased?) {
      for( var i = 0; this.inp_val.length; i++ ){
            this.arraySum[i] = (this.menuArray[i].price)*(this.inp_val[i] || 0);                    
            this.oderVal = this.arraySum.reduce(function(sum: number, elem: number) 
              { return sum + elem;}, 0);        
      }   
            
    }


    // Обращение из галлереи
      onChanged(increased:any ) {        
        this.calcTabe(increased);        
      }



    // Добавить в базу заказ
    send() {
      
      const post: any = {      
        date: new Date(),
        userName: this.userName,
        user: this.inp_val                
      }

      this.postsService.create(post).subscribe(() => {
        this.oderVal = 0;
        this.userName = "";
        this.createArr(this.menuArrlength)        
      })

    }
                             

}