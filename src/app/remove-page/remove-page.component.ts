import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from '../shared/posts.service';
import {Post} from '../shared/interfaces';
import {Subscription} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-remove-page',
  templateUrl: './remove-page.component.html',
  styleUrls: ['./remove-page.component.scss']
})
export class RemovePageComponent implements OnInit, OnDestroy {

  posts: Post[] = []
  pSub: Subscription
  dSub: Subscription
  searchStr = ''

  constructor(private postsService: PostsService) {
  }

  ngOnInit() {
    this.pSub = this.postsService.getAllUsers().subscribe(posts => {
      this.posts = posts
      console.log(this.posts)
    })
  }

  
  remove(id?: string) {
    this.dSub = this.postsService.remove(id).subscribe(() => {
      this.posts = this.posts.filter(post => post.id !== id)
    })
  }



  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe()
    }

    if (this.dSub) {
      this.dSub.unsubscribe()
    }
  }

}
