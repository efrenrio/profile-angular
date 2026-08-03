import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-work-experiences',
  templateUrl: './work-experiences.component.html',
  styleUrl: './work-experiences.component.scss'
})
export class WorkExperiencesComponent {
  readonly expandedIndex = signal<number | null>(null);

  isExpanded(index: number): boolean {
    return this.expandedIndex() === index;
  }

  toggleExperience(index: number): void {
    this.expandedIndex.set(this.expandedIndex() === index ? null : index);
  }
}
