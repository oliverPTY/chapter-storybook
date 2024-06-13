// button.component.ts

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: ` <button [class]="getButtonClasses()">{{ label }}</button> `,
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
    /**
   * textto que tendra el boton
   */
  @Input() label = '';
    /**
   * tipo de boton 
   */
  @Input() type = '';
    /**
   * condicion si quiere que el boton tenga border
   *
   * @required
   */
  @Input() border = false;

  getButtonClasses() {
    let classes = this.type;
    if (this.border) {
      classes += ' border';
    }
    return classes;
  }
}
