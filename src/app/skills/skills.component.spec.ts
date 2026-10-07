import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsComponent);
    fixture.detectChanges();
  });

  it('should collapse skill details by default and expand on toggle', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const toggleButton = compiled.querySelector('.skill-toggle') as HTMLButtonElement;

    expect(toggleButton).toBeTruthy();
    expect(toggleButton.getAttribute('aria-expanded')).toBe('false');
    expect(compiled.textContent).not.toContain('Software Development Languages and Frameworks');

    toggleButton.click();
    fixture.detectChanges();

    expect(toggleButton.getAttribute('aria-expanded')).toBe('true');
    expect(compiled.textContent).toContain('Software Development Languages and Frameworks');
  });
});
