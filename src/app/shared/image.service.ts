import { Injectable } from '@angular/core';

@Injectable()

export class ImageService {

	visibleImage = [];

	getImages() {
		return this.visibleImage = IMAGES;
	}

}

const IMAGES = [
	{"id":1, "category": "voda", "caption": "View from 1...", "url":"assets/img/bulba.jpg"},
	{"id":2, "category": "voda", "caption": "View from 2...", "url":"assets/img/more.jpg"},
	{"id":3, "category": "fire", "caption": "View from 3...", "url":"assets/img/fire.jpg"},
	{"id":4, "category": "boats", "caption": "View from 4...", "url":"assets/img/osin.jpg"}
]