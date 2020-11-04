import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChildren('accordion') teste: QueryList<ElementRef>;

  constructor() {}

  funcTest(i: number): void {
    const el = this.teste.toArray().filter((_item, index) => index === i)[0];
    el.nativeElement.classList.toggle('active');
    let content = el.nativeElement.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  }
}
