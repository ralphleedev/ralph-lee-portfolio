import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsIntroComponent } from './projects-intro.component';

describe('ProjectsIntroComponent', () => {
  let component: ProjectsIntroComponent;
  let fixture: ComponentFixture<ProjectsIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsIntroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsIntroComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
