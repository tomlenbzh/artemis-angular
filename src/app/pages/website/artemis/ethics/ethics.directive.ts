import { Directive, Input, ElementRef, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appEthics]'
})
export class EthicsDirective implements OnInit {
  @Input() highlightColor: number;
  @HostBinding('class.blue')
  @Input()
  blue: boolean;
  @HostBinding('style.')
  @Input()
  colorHex: string;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    console.log(`highlightColor: ${this.highlightColor}`);
    console.log(`blue: ${this.blue}`);
    console.log(`elementRef: ${this.elementRef}`);

    // this.colorHex = 'red';
    // this.elementRef.nativeElement.style.backgroundColor = 'red';

    setTimeout(() => {
      this.elementRef.nativeElement.style.width = this.highlightColor + '%';
    }, 5000);
  }
}
