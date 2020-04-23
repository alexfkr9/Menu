import { Injectable } from '@angular/core';

@Injectable()

export class ImageService {

	visibleImage = [];

	getImages() {
		return this.visibleImage = IMAGES;
	}

}

const IMAGES = [	
  
  
    {
      "id":1,
      "category": "first", 
      "dish" : "Борщ",
      "url":"assets/img/borsh.jpg",
      "prise" : 15,            
      "unit": "п",
      "weight": 1           
    },
    {
      "id":2,
      "category": "first", 
      "dish" : "Суп",
      "url":"assets/img/soup.jpg",
      "prise" : 17,
      "unit": "п",
      "weight": 1           
    },
    {
      "id":3,
      "category": "second", 
      "dish" : "Мясо",
      "url":"assets/img/steak.jpg",
      "prise" : 20,
      "unit": "г",
      "weight": 100            
    },
    {
      "id":4,
      "category": "second", 
      "dish" : "Рыба",
      "url":"assets/img/fish.jpg",
      "prise" : 18,
      "unit": "г",
      "weight": 100            
    },
    {
      "id":5,
      "category": "second", 
      "dish" : "Картошка",
      "url":"assets/img/potato.jpg",
      "prise" : 8,
      "unit": "г",
      "weight": 100            
    },
    {
      "id":6,
      "category": "salads", 
      "dish" : "Оливье",
      "url":"assets/img/oliv.jpg",
      "prise" : 14,
      "unit": "г",
      "weight": 100            
    },
    {
      "id":7,
      "category": "salads", 
      "dish" : "Селедка под шубой",
      "url":"assets/img/shuba.jpg",
      "prise" : 16,
      "unit": "г",
      "weight": 100            
    },
    {
      "id":8,
      "category": "salads", 
      "dish" : "Помидоры, огурцы",
      "url":"assets/img/tomato.jpg",
      "prise" : 10,
      "unit": "г",
      "weight": 100            
    },
    {
      "id":9,
      "category": "drink", 
      "dish" : "Сок",
      "url":"assets/img/juice.jpg",
      "prise" : 14,
      "unit": "л",
      "weight": 0.3            
    },
    {
      "id":10,
      "category": "drink", 
      "dish" : "Пиво",
      "url":"assets/img/beer.jpg",
      "prise" : 20,
      "unit": "л",
      "weight": 0.5            
    },
    {
      "id":11,
      "category": "drink", 
      "dish" : "Вино",
      "url":"assets/img/wine.jpg",
      "prise" : 20,
      "unit": "л",
      "weight": 0.1          
    }
  
  ]