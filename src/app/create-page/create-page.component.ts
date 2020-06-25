import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {PostsService} from '../shared/posts.service';
import {Post} from '../shared/interfaces';
import { HttpService} from '../shared/http.service';


@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss'],
  providers: [HttpService] 
})
export class CreatePageComponent implements OnInit {

  form: FormGroup;
  oderData: any;
  menuList: any;

  constructor(private postsService: PostsService,
    private httpService: HttpService
    ) {
  }

  ngOnInit() {
      this.form = new FormGroup({
        title: new FormControl(),
        text: new FormControl(),
        author: new FormControl()              
      });

      
          this.httpService.getData().subscribe(
                data => {  
              this.oderData = data;
                }  ) 
       
}
  
  submit() {
    if (this.form.invalid) {
      return
    }

    const post: Post = {
      title: this.form.value.title,
      author: this.form.value.author,
      text: this.form.value.text,
      date: new Date(),      
      user: this.oderData.user     
    }

    this.postsService.create(post).subscribe(() => {
      this.form.reset()
    })
  }

}
