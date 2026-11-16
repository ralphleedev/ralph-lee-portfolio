import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-projects-coming-soon',
  imports: [TranslatePipe],
  templateUrl: './projects-coming-soon.component.html',
  styleUrl: './projects-coming-soon.component.css',
})
export class ProjectsComingSoonComponent { }
