import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn {

  constructor(private router: Router) {}

  onLogin(name: string) {
  localStorage.setItem('username', name);
  
  this.router.navigate(['/home']).then(() => {
      window.location.reload(); //prozorecot da se refresira
    });
  }

}
