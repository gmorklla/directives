import { Directive, HostListener, HostBinding, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

	numberOfClicks: number = 0;

	@HostListener('mouseenter') mouseover() {
		this.backgroundColor = this.highlightColor;
		// this.renderer.setElementStyle(this.elemento.nativeElement, 'background-color', this.backgroundColor);
	};

	@HostListener('mouseout') mouseout() {
		this.backgroundColor = this.defaultColor;
	};

	@HostListener('click', ['$event']) clickeado(event) {
		this.numberOfClicks++;
		this.elemento.nativeElement.textContent = 'Number of clicks: ' + this.numberOfClicks;
	};

	@HostBinding('style.backgroundColor') get setColor() {
		return this.backgroundColor;
	};

	@Input() defaultColor = 'white';
	@Input() highlightColor = 'green';
	private backgroundColor: string;

  constructor(private elemento: ElementRef/*, private renderer: Renderer*/) {
  	// this.elemento.nativeElement.style.backgroundColor = 'green';
  	// this.renderer.setElementStyle(this.elemento.nativeElement, 'background-color', 'blue');
  }

  ngOnInit() {
  	this.backgroundColor = this.defaultColor;
  }

}
