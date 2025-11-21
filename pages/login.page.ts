import { Page } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) {}

    async goto() {
        await this.page.goto('https://connect-plus.app/ar/login');
    }

    async selectCountry() {
        await this.page.getByLabel('Select country').selectOption('+970');
    }

    async fillPhone(phone: string) {
        await this.page.getByRole('textbox', { name: '5xxxxxxxx' }).fill(phone);
    }

    async fillPassword(password: string) {
        await this.page.getByRole('textbox', { name: 'أدخل كلمة المرور*' }).fill(password);
    }

    async submit() {
        await this.page.getByRole('button', { name: 'تسجيل الدخول' }).click();
    }

    async login(phone: string, password: string) {
        await this.goto();
        await this.selectCountry();
        await this.fillPhone(phone);
        await this.fillPassword(password);
        await this.submit();
    }
}
