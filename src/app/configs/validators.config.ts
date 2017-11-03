import { AbstractControl, FormGroup } from '@angular/forms';
export class ValidatorsConfig {
    // for show validation
    static markAsTouchedAll(form: FormGroup | any, focus: boolean = true) {
        for (let i in form.controls) {
            if (form.controls.hasOwnProperty(i)) {
                let control = form.controls[i];
                control.markAsTouched();
                control.markAsDirty();
            }
        }

        const input = <any>document.querySelector('.form-control.ng-invalid');
        if (input != null && focus) input.focus();
    }

    // for is number validator
    static IsNumeric(control: AbstractControl) {
        return isNaN(control.value) ? { numeric: true } : null;
    }

    // for is email validator
    static IsEmail(control: AbstractControl) {
        const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return !pattern.test(control.value) ? { email: true } : null;
    }

    // for is password validator
    static IsPassword(control: AbstractControl) {
        const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,20}$/;
        return !pattern.test(control.value) ? { password: true } : null;
    }

    // for is phone number
    static IsPhone(control: AbstractControl) {
        const pattern = /^[\d]{9,10}$/;
        return !pattern.test(control.value) ? { phone: true } : null;
    }

    // for is name of member
    static IsName(control: AbstractControl) {
        const pattern = /^[A-Za-z]{3}/;
        return !pattern.test(control.value) ? { name: true } : null;

    }

    //for confirm pass
    static IsConfirmPass(control: AbstractControl) {
        const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,20}$/;
        return !pattern.test(control.value) ? { confirmPass: true } : null;
    }

    // for compare password
    static comparePassword(id: any) {
        return (control: AbstractControl) => {
            let password = <HTMLInputElement>document.getElementById(id);
            if (!password || control.invalid) return null;
            let value = password.value.trim();
            if (value == '') return null;
            return value === control.value ? null : { compare_password: true };
        }
    }

    // for my pattern
    static myPattern(pattern: string, myMessage: string) {
        return (control: AbstractControl) => {
            if (control.invalid) return;
            let _pattern = new RegExp(pattern);
            return !_pattern.test(control.value) ? { message: myMessage } : null;
        }
    }

    static IsPostCode(control: AbstractControl) {
        return !/[0-9]{5}/.test(control.value) ? { postcode: true } : null;
    }
}