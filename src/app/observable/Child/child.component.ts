import {Component, ContentChild, ElementRef, OnInit} from '@angular/core';

@Component({
  template: `
    <ng-content></ng-content>
    <div>{{count}}</div>
    <button (click)="change()">change</button>
  `,
  selector: 'app-child'
})
export class ChildComponent implements OnInit {
  @ContentChild('parent')
  parent: ElementRef;

  count = 0;

  ngOnInit(): void {
  }

  change(): void {
    console.log(this.parent);
    this.parent.nativeElement.textContent = 'Hell0 to world!';
  }

  increment(): void {
    this.count++;
  }

  decrement(): void {
    this.count--;
  }
}
