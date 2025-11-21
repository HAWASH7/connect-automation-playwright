import { Page } from '@playwright/test';

export class AddStockPage {
  constructor(private page: Page) {}

  async gotoStockPage() {
    await this.page.getByRole('link', { name: 'Dashboard المستودع Dashboard' }).click();
  }

  async addStockToLastProduct(quantity: string) {
    // آخر كارد (آخر منتج)
    const lastCard = this.page.locator('.list-item-container').last();

    // اضافة كمية
    await lastCard.getByPlaceholder('اضافة كمية').fill(quantity);

    // تأكيد
    await lastCard.getByRole('button', { name: 'تأكيد' }).click();
  }
}
