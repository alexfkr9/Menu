import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core'
import { ImageService } from '../shared/image.service'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

	images: any = []

  filterBy?: string = 'all'

  constructor(
  	private imageService: ImageService
  	) { 
  		this.images = this.imageService.getImages()
  }

  
  @Input() arraySum: any //Сумма за блюдо
  @Input() inp_val: any //Кол-во блюд

  

  @Output() onChanged = new EventEmitter<any>()
    change(increased:any) {      
      this.onChanged.emit(increased)         
  }

  ngOnInit(): void {
    
  }

  
}