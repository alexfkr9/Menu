import { Injectable } from '@angular/core'

@Injectable()

export class ImageService {

	visibleImage = []

	getImages() {
		return this.visibleImage = IMAGES
	}

}

const IMAGES = [	
  
  
    {
      "id":1,
      "category": "first", 
      "dish" : "Борщ",
      "url":"assets/img/borsh.jpg",
      "price" : 15,            
      "unit": "п",
      "weight": 1           
    },
    {
      "id":2,
      "category": "first", 
      "dish" : "Суп",
      "url":"assets/img/soup.jpg",
      "price" : 17,
      "unit": "п",
      "weight": 1           
    },
    {
      "id":3,
      "category": "second", 
      "dish" : "Мясо",
      "url":"assets/img/steak.jpg",
      "price" : 20,
      "unit": "г",
      "weight": 100            
    },
    {
      "id":4,
      "category": "second", 
      "dish" : "Рыба",
      "url":"assets/img/fish.jpg",
      "price" : 18,
      "unit": "г",
      "weight": 100            
    },
    {
      "id":5,
      "category": "second", 
      "dish" : "Картошка",
      "url":"assets/img/potato.jpg",
      "price" : 8,
      "unit": "г",
      "weight": 100            
    },
    {
      "id":6,
      "category": "salads", 
      "dish" : "Оливье",
      "url":"assets/img/oliv.jpg",
      "price" : 14,
      "unit": "г",
      "weight": 100            
    },
    {
      "id":7,
      "category": "salads", 
      "dish" : "Селедка под шубой",
      "url":"assets/img/shuba.jpg",
      "price" : 16,
      "unit": "г",
      "weight": 100            
    },
    {
      "id":8,
      "category": "salads", 
      "dish" : "Помидоры, огурцы",
      "url":"assets/img/tomato.jpg",
      "price" : 10,
      "unit": "г",
      "weight": 100            
    },
    {
      "id":9,
      "category": "drink", 
      "dish" : "Сок",
      "url":"assets/img/juice.jpg",
      "price" : 14,
      "unit": "л",
      "weight": 0.3            
    },
    {
      "id":10,
      "category": "drink", 
      "dish" : "Пиво",
      "url":"assets/img/beer.jpg",
      "price" : 20,
      "unit": "л",
      "weight": 0.5            
    },
    {
      "id":11,
      "category": "drink", 
      "dish" : "Вино",
      "url":"assets/img/wine.jpg",
      "price" : 20,
      "unit": "л",
      "weight": 0.1          
    }
  
  ]