// Http service [ Created by Loem 21-04-2017 ]

import { Directive, AfterViewInit, OnChanges, ElementRef, Input } from '@angular/core';
declare let $;
@Directive({
    selector: '[Loading]'
})
export class LoadingDirective implements AfterViewInit, OnChanges {
    constructor(el: ElementRef) { this.element = el.nativeElement; }
    @Input("Loading") loading: boolean;
    @Input("Text") text: string;
    element: HTMLElement;
    oldHtml: string = '';

    ngAfterViewInit() {
        if (this.loading == undefined) return;
        if (this.oldHtml == '')
            this.oldHtml = this.element.innerHTML;
        this.processHtmlElement();
    }

    ngOnChanges() {
        if (this.loading == undefined) return;
        if (this.element.innerHTML.trim() == '')
            return;
        else if (this.oldHtml.trim() == '')
            this.oldHtml = this.element.innerHTML;
        this.processHtmlElement();
    }

    // process loading : ตรวจสอบชนิดของ element
    private processHtmlElement() {
        switch (this.element.nodeName.toLowerCase()) {
            case 'button':
                this.buttonLoading();
                break;
            default:
                this.htmlLoading();
                break;
        }
    }

    // change html of button element : Loading สำหรับปุ่มกด
    private buttonLoading() {
        var button = <HTMLButtonElement>this.element;
        if (this.loading) {
            button.innerHTML = this.text || '<i class="fa fa-circle-o-notch fa-spin"></i> Loading...';
        }
        else {
            button.innerHTML = this.oldHtml;
        }
        button.disabled = this.loading;
    }

    // change html of html tag element : Loading สำหรับ tag ทั่วไป
    private htmlLoading() {
        const attr = 'data-loading';
        var elem = $(this.element);
        if (this.loading) {
            let cloneElm = elem.clone();
            cloneElm.attr(attr, '');
            cloneElm.html(this.text || '<i class="fa fa-circle-o-notch fa-spin"></i> Loading...');
            elem.after(cloneElm);
            elem.hide();
        }
        else {
            elem.next(`[${attr}]`).remove();
            elem.show();
        }
    }
}    