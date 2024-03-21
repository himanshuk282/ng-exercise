import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]',
  standalone: true
})
export class UnlessDirective {
  private hasView:boolean = false;
  constructor(private templateRef:TemplateRef<any>,private vcRef:ViewContainerRef) { }
  @Input() set appUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.vcRef.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.vcRef.clear();
      this.hasView = false;
    }
  }

}
