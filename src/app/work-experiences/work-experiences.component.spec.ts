import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperiencesComponent } from './work-experiences.component';

describe('WorkExperiencesComponent', () => {
  let fixture: ComponentFixture<WorkExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkExperiencesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkExperiencesComponent);
    fixture.detectChanges();
  });

  it('should collapse experience details by default and expand on toggle', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const toggleButton = compiled.querySelector('.experience-toggle') as HTMLButtonElement;

    expect(toggleButton).toBeTruthy();
    expect(toggleButton.getAttribute('aria-expanded')).toBe('false');
    expect(compiled.textContent).not.toContain('Development and maintenance of applications using Microsoft Technologies');

    toggleButton.click();
    fixture.detectChanges();

    expect(toggleButton.getAttribute('aria-expanded')).toBe('true');
    expect(compiled.textContent).toContain('Development and maintenance of applications using Microsoft Technologies');
  });
});
