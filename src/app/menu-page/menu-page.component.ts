import {Component, Input, OnDestroy, OnInit, AfterViewChecked} from '@angular/core'
import {Subscription} from 'rxjs'

import {PostsService} from '../shared/posts.service'
import {Post} from '../shared/interfaces'

  // Получить данные пользователя из social-login.component  
import {AuthSocialService} from '../shared/services/auth-social.service'

import { AuthService } from 'angularx-social-login'

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})

export class MenuPageComponent implements OnInit {

    
    totalVal = []
    oderVal: number    
    
    menuArray = []
       
    arraySum = []
    sum = []   
    userQuantity = []
      
    menuData: any = {}
    
    menuList: Post[] = []
    pSub: Subscription

    price: number

    inp_val: any = []   

    menuArrlength: number = 0
    arr = []

    userName:string
      
    
  constructor(private postsService: PostsService,
              public someSrv: AuthSocialService,
              private _socioAuthServ: AuthService
              ) { 
  }                   

  @Input() user: any // Получить данные пользователя из 
                            // social-login.component  
                            
  ngOnInit() {

    this.pSub = this.postsService.getAll().subscribe(menuList => {      
      this.menuData = menuList 
           
      // create array of menuList 
      this.menuArray = this.menuData[0].menuList.slice()  // copy data array of menuArray       
      this.menuArrlength = this.menuArray.length
      this.createArr(this.menuArrlength)      
        console.log('someSrv.userSocial', this.someSrv.userSocial)
    })      
    
}

  createArr(l:number) {    
    this.arr = new Array(l)        
    for(var i = 0; i<l; i++) { 
      this.arr[i] = 0
      this.arraySum[i] = 0   
    }
    this.inp_val = this.arr.slice()     
  }

       

    calcTabe(increased?) {
      for( var i = 0; this.inp_val.length; i++ ){
            this.arraySum[i] = (this.menuArray[i].price)*(this.inp_val[i] || 0)                    
            this.oderVal = this.arraySum.reduce(function(sum: number, elem: number) 
              { return sum + elem}, 0)      
      }   
            
    }


    
    // Обращение из галлереи
      onChanged(increased:any ) {        
        this.calcTabe(increased)       
      }



      // Добавить в базу заказ
    send() {
      
      const post: any = {      
        date: new Date(),
        userName: this.userName || this.someSrv.userSocial.firstName,
        user: this.inp_val,
        foto: this.someSrv.userSocial.photoUrl                
      }

      this.postsService.create(post).subscribe(() => {
        this.oderVal = 0
        this.userName = ""
        this.createArr(this.menuArrlength)        
      })

    }
    

    // Method to log out.
  signOut(): void {    
    if (this.someSrv.userSocial) { this._socioAuthServ.signOut() }
    this.someSrv.userSocial = 0     
  }                     

}