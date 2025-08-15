import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  posts = [
    { id: 1, title: 'Post 1', img: 'https://via.placeholder.com/150', body: 'Body of post 1' },
    { id: 2, title: 'Post 2', img: 'https://via.placeholder.com/150', body: 'Body of post 2' },
    { id: 3, title: 'Post 3', img: 'https://via.placeholder.com/150', body: 'Body of post 3' }
  ];

  deletePost(id: number) {
    this.posts = this.posts.filter(p => p.id !== id);
  }
}