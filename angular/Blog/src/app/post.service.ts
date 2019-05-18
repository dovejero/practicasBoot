import { Injectable } from '@angular/core';
import { postModel } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  arrPosts: postModel[];
  constructor() {
    this.arrPosts = [];
  }

  agregarPost(post: postModel) {
    this.arrPosts.push(post);
    localStorage.setItem('posts', JSON.stringify(this.arrPosts));
  }

  getAllPost() {
    console.log('AP: ', this.arrPosts);
    // return this.arrPosts;
    let post = JSON.parse(localStorage.getItem('posts'))
    return post;
  }

  getPostByCat(categoria: string) {
    console.log('entra', categoria);
    // return this.arrPosts.filter(item => item.categoria == categoria)
    // return this.arrPosts.filter(item => item.categoria == categoria)
    let post = JSON.parse(localStorage.getItem('posts'))
    return post.filter(item => item.categoria == categoria)
  }
}
