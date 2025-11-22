import { Page, expect } from '@playwright/test';

export class AddStockPage {
  constructor(private page: Page) {}

  async gotoStockPage() {
    await this.page.getByRole('link', { name: 'Dashboard المستودع Dashboard' }).click();
    await this.page.waitForLoadState('networkidle');
  }

  async searchProduct(productName: string) {
    const searchInput = this.page.getByPlaceholder('ابحث عن طريق الاسم أو رقم المرجع للمنتج');
    await searchInput.fill(productName);

    // Enter علشان التصفيه
    await this.page.keyboard.press('Enter');

    // استنى لتظهر نتيجة البحث
    const resultRow = this.page.locator('.list-item-container').first();
    await expect(resultRow).toBeVisible({ timeout: 6000 });
  }

  async addStockToSearchedProduct(quantity: string) {
    const resultRow = this.page.locator('.list-item-container').first();

    await resultRow
      .getByPlaceholder('اضافة كمية')
      .fill(quantity);

    await resultRow
      .getByRole('button', { name: 'تأكيد' })
      .click();
  }
}
