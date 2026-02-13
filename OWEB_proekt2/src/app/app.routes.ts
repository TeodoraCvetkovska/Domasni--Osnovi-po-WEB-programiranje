import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Gallery } from './gallery/gallery';
import { Blogs } from './blogs/blogs';
import { SignIn } from './sign-in/sign-in';
import { Survey } from './survey/survey';

export const routes: Routes = [
    {
        path: 'home', component: Home
    }, 
    {
        path: 'gallery', component: Gallery
    }, 
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: 'blogs', component: Blogs
    },
    {
        path: 'sign-in', component: SignIn
    },
    {
        path: 'survey', component:Survey
    }
];
