import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

	images: any = [];

  filterBy?: string = 'all';

  constructor(
  	private imageService: ImageService
  	) { 
  		this.images = this.imageService.getImages();
  		console.log(this.images)
  }

  ngOnInit(): void {
  }

}
