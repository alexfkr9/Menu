export interface User {
  email: string
  password: string
  returnSecureToken?: boolean
}

export interface FbAuthResponse {
  idToken: string
  expiresIn: string
}

export interface Post {
  id?: string
  title: string
  text: string
  author: string
  user: any  
  date: Date 

  // userList: any  
}
 
export interface Get {
    totalValue: number
    totalVal: any
    oderVal: any    
    userList: any  
    menuList: any
    nUser: number
    nMenu: number    
    userMenuArray: any
    menuArray: any
    userArray: any        
    arrayDish: any
    arrayPrice: any
    arrayUnit: any
    arrayWeight: any    
    arraySum: any
    sum: any  
    userQuantity: any   
    disabled: boolean
    oderData: any
}
 
export interface FbCreateResponse {
  name: string
}