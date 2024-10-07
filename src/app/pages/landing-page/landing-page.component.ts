import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { SkillsSectionComponent } from '../../components/skills-section/skills-section.component';
import { ProjectsSectionComponent } from '../../components/projects-section/projects-section.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    HeroSectionComponent,
    SkillsSectionComponent,
    ProjectsSectionComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
