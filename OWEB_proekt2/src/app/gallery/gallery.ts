import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery implements OnInit {

  gallerySliki: any = [
   [ {
      url: 'skytower.jpg',
      alt: "sky tower",
      text: "Climb to level 60 on the Sky Tower! #stunningviews",
      likes: 153,
      dislikes: 20,
      changedL: false,
      changedD: false,
      comments: []
    }, 
    {
      url: 'viaduct.jpg',
      alt: "viaduct",
      text: "The Viaduct Harbour Marina at night",
      likes: 144,
      dislikes: 33,
      changedL: false,
      changedD: false,
      comments: []
    }, 
    {
      url: 'boogieboarding.jpeg',
      alt: "boogie boarding",
      text: "There is nothing more fun than boogie boarding!",
      likes: 255,
      dislikes: 56,
      changedL: false,
      changedD: false,
      comments: []
    } ],
    [{
      url: 'milfordbeach.jpeg',
      alt: "Milford Beach",
      text: "Perfect night walks on Milford Beach! Just look how cool the volcano stones are!",
      likes: 345,
      dislikes: 120,
      changedL: false,
      changedD: false,
      comments: []
    },
    {
      url: 'bird.jpeg',
      alt: "bird at Long Bay",
      text: "Whenever you are at Long Bay, you feel like you are in the wild! All kinds of birds not ever seen on other places in the world are walking next to you!",
      likes: 122,
      dislikes: 12,
      changedL: false,
      changedD: false,
      comments: []
    },
    {
      url: 'coast.jpeg',
      alt: "coast near Auckland",
      text: "Just endless coast, no umbrellas and sunbeds around! It's just you and the ocean!",
      likes: 278,
      dislikes: 85,
      changedL: false,
      changedD: false,
      comments: []
    } ]
  ];


  changeLikes(post: any): void {
    
      if(post.changedL == false && post.changedD == false)
      {
        post.likes++;
        post.changedL = true;
      } 
      else if(post.changedL == true)
      {
        post.likes--;
        post.changedL = false;
      }
    
  }

  changeDislikes(post: any): void {
    
      if(post.changedD == false && post.changedL == false)
      {
        post.dislikes++;
        post.changedD = true;
      }
      else if(post.changedD == true)
      {
        post.dislikes--;
        post.changedD = false;
      }
  }

  addComment(post: any, commentValue: string): void {
      if (commentValue.trim() != '') {
        post.comments.push(commentValue);
      }
  }

  deleteComment(post: any, index: number): void {
      // .splice(startingIndex, howManyToRemove)
      post.comments.splice(index, 1);
  }

  userName: string = '';

  ngOnInit(): void {
      this.userName = localStorage.getItem('username') || 'Guest';
  }


}
