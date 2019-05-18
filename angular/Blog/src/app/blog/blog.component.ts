import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { postModel } from '../models/post.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  fCategoria: string;
  categoria: postModel[];
  allBlogs: postModel[];
  constructor(private postService: PostService, private router: Router) {
    this.fCategoria = 'all'
  }

  ngOnInit() {
        // if (this.router.url.endsWith('/blog')) {
    //   // console.log('URL: ', this.router.url)
    //   this.allBlogs = this.postService.getAllPost();
    //   if(this.allBlogs.length > 0){
    //     this.hayContenido = true;
    //   }

    // } 
    this.allBlogs = this.postService.getAllPost();
  }

  filtrar() {
    console.log('FC: ', this.fCategoria)
    if (this.fCategoria == 'all') {
      this.allBlogs = this.postService.getAllPost();
    } else {
      this.allBlogs = this.postService.getPostByCat(this.fCategoria);
    }
  }
}
