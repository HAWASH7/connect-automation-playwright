import { Page, expect } from '@playwright/test';

export class StockVerificationPage {
  constructor(private page: Page) {}

  async gotoStockPage() {
    await this.page.getByRole('link', { name: 'Dashboard المستودع Dashboard' }).click();
    await this.page.waitForLoadState('networkidle');
  }

  async verifyStockIs999(productName: string) {

    // ابحث عن المنتج
    const searchInput = this.page.getByPlaceholder('ابحث عن طريق الاسم أو رقم المرجع للمنتج');
    await searchInput.click();
    await searchInput.fill(productName);

    const productCard = this.page
      .locator('.list-item-container')
      .filter({ hasText: productName });

    await expect(productCard).toBeVisible();

    // اقرأ الكمية الافتراضية
    const defaultQty = await productCard.locator('.fs-small span').nth(3).textContent();
    const qty = Number(defaultQty?.trim());

    // لازم تكون 999
    await expect(qty).toBe(999);

    console.log(`✔️ Default stock is 999 as expected`);
  }
}
