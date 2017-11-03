import {
    Component,
    OnChanges,
    Input,
    Output,
    EventEmitter,
    trigger,
    state,
    style,
    transition,
    animate,
    ElementRef,
    ViewChild
} from '@angular/core';
@Component({
    selector: 'Notification',
    template: `
    <div [class]="'alert ' + alertClass" *ngIf="message !== undefined && message !== null" @notification>
        <i class="material-icons close" (click)="onClose()">clear</i>
        <span [innerHTML]="message"></span>
        <ng-content></ng-content>
    </div>
    `,
    animations: [
        trigger('notification', [
            state("in", style({
                opacity: 1
            })),
            transition('void => *', [
                style({
                    opacity: 0
                }),
                animate(500)
            ]),
            transition('* => void', [
                animate(300, style({
                    opacity: 0
                }))
            ])
        ])
    ]
})
export class NotificationDirective implements OnChanges {
    @Input() message: string;
    @Input() alertClass: string = 'alert-danger';
    @Input() setTimeout: number = 5;
    @Output() messageChange = new EventEmitter<string>();
    @Output() Output = new EventEmitter<any>();
    timeoutGlobal: any;

    constructor(private element: ElementRef) { }

    onClose() {
        this.message = null;
        this.messageChange.emit(this.message);
        this.Output.emit();
    }

    ngOnChanges() {
        if (this.message == undefined || this.message == null) return;
        clearTimeout(this.timeoutGlobal);
        this.timeoutGlobal = setTimeout(() => {
            this.message = null;
            this.messageChange.emit(this.message);
            this.Output.emit();
        }, this.setTimeout * 1000);
    }
}