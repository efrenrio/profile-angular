import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  readonly expandedIndex = signal<number | null>(null);

  isExpanded(index: number): boolean {
    return this.expandedIndex() === index;
  }

  toggleSkills(index: number): void {
    this.expandedIndex.set(this.expandedIndex() === index ? null : index);
  }
}
