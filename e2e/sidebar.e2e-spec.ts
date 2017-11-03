import { browser, element, by } from 'protractor';

fdescribe('angular4-structure App', () => {
    it('should display message saying app works', () => {
        browser.get('/');
        browser.sleep(10000);
    });
});
