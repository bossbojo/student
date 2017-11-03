import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from '../services/language.service';
@Pipe({
    name: 'lang',
    pure: false
})
export class LanguagePipe implements PipeTransform {
    constructor(private langService: LanguageService) {
    }

    transform(value: string, key: string) {
        return this.langService.translage(value, key);
    }
}