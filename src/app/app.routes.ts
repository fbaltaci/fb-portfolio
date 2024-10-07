import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent,
        title: 'Home'
    },
    {
        path: 'contact',
        component: ContactPageComponent,
        title: 'Contact'
    },
    {
        path: 'projects',
        component: ProjectsPageComponent,
        title: 'Projects'
    },
];
