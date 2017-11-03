import { Directive, Input, OnInit, ElementRef, Renderer, OnChanges } from '@angular/core';
declare const QRCode: any;
@Directive({
    selector: 'QRCode'
})
export class QRcodeDirective implements OnInit, OnChanges {
    constructor(element: ElementRef, private render: Renderer) {
        this.qrElement = element.nativeElement;
    }

    @Input('code') codeText: string;
    @Input('size') size: number = 128;
    qrCode: any;
    qrElement: HTMLElement;

    ngOnInit() {
        if (this.qrElement == null) return;
        this.hideElement(true);
        this.qrCode = new QRCode(this.qrElement, {
            width: this.size,
            height: this.size
        });
        this.processQRCode();
    }

    ngOnChanges() {
        this.processQRCode();
    }

    private hideElement(status: boolean) {
        this.render.setElementClass(this.qrElement, 'hidden', status);
    }

    private processQRCode() {
        this.hideElement(true);
        if (!this.codeText || !this.qrCode) return;
        if (this.codeText.trim() == '') return;
        this.hideElement(false);
        this.qrCode.makeCode(this.codeText);
    }

}