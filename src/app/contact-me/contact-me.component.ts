import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  readonly expandedIndex = signal<number | null>(null);

  isExpanded(index: number): boolean {
    return this.expandedIndex() === index;
  }

  toggleContactMe(index: number): void {
    this.expandedIndex.set(this.expandedIndex() === index ? null : index);
  }
}
