import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('auckland');

  constructor(private router: Router) {}

  userName: string = '';

  ngOnInit(): void {
      this.refreshUser();
  }

  refreshUser()
  {
    this.userName = localStorage.getItem('username') || 'Guest';
  }

  logout() {
    //brisham od memorijata na browserot
    localStorage.removeItem('username');
    
    this.userName = 'Guest';
    
    this.router.navigate(['/home']);
  }

}
