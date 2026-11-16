import { Component } from '@angular/core';
import { ProjectsIntroComponent } from './sections/projects-intro/projects-intro.component';
import { ProjectsComingSoonComponent } from './sections/projects-coming-soon/projects-coming-soon.component';

@Component({
  selector: 'app-projects',
  imports: [ProjectsIntroComponent, ProjectsComingSoonComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent { }
