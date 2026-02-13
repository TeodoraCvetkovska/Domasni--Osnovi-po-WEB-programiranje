import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  currentIndex: number=0;

  homeSliki: any = [
    {
      url: 'cityCenter.jpg',
      alt: "city center",
      title: "The city center",
      text: "The city center (also called the Viaduct) is recognized by its modern architecture. It is full with shops, bars, restaurants and night clubs."
    }, 
    {
      url: 'beach.jpg',
      alt: "beach",
      title: "Beaches",
      text: "There are stunning beaches around Auckland. Some of them include: Long Bay-Okura, Milford Beach, Muriwai Beach, Tawharanui"
    }, 
    {
      url: 'nature.jpg',
      alt: "nature",
      title: "Nature",
      text: "Auckland is filled with parks and natural resesrve parks where you could go on a so called bush walk."
    }
  ];

  userName: string = '';

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    setInterval(() => {

      this.currentIndex = (this.currentIndex + 1) % this.homeSliki.length;

      this.cdr.detectChanges();

    }, 5000);   //na sekoi 10 sekundi menuvaj go indeksot, i ke odi primer od 0 do 2 vo slucajov

     this.userName = localStorage.getItem('username') || 'Guest';
  }





}
