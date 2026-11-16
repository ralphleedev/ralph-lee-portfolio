import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-projects-intro',
  imports: [TranslatePipe],
  templateUrl: './projects-intro.component.html',
  styleUrl: './projects-intro.component.css',
})
export class ProjectsIntroComponent { }
