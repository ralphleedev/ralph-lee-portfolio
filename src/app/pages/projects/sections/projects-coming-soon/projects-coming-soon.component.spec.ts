import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComingSoonComponent } from './projects-coming-soon.component';

describe('ProjectsComingSoonComponent', () => {
  let component: ProjectsComingSoonComponent;
  let fixture: ComponentFixture<ProjectsComingSoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComingSoonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsComingSoonComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
