import { AfterViewInit, Directive, ElementRef, Host, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnInit {
  highlightColor:string = "#ECFD6D";
  @HostBinding('style.fontFamily') fontFamily:string = "Segoe UI";
  //Defining element using dependency injection
  constructor(private element:ElementRef,private renderer:Renderer2) { }
  @HostListener('mouseenter') mouseEnter(event:Event){
    //Perform some action when mouse enters the element
    this.renderer.setStyle(this.element.nativeElement,'font-size','25px');
  }
  @HostListener('mouseleave') mouseLeave(event:Event){
    //Perform some action when mouse leaves the element
    this.renderer.setStyle(this.element.nativeElement,'font-size','14px');
  }
  @HostListener('mousedown') mouseDown(event:Event){
    this.fontFamily = "Segoe UI";
  }
  @HostListener('mouseup') mouseUp(event:Event){
    this.fontFamily = "Apple Color Emoji";
  }
  ngOnInit(): void {
    //using general element reference: It is possible that we not have the property we are setting
    // this.element.nativeElement.style.backgroundColor = this.highlightColor;
    //using renderer as best practice
    //Inplace of renderer, hostbinding can also be used to tap the correct property of element
    this.renderer.setStyle(this.element.nativeElement,'background-color',this.highlightColor);
  }
}
