import { Page } from '@playwright/test';

export class DeleteProductPage {
  constructor(private page: Page) {}

  // الانتقال إلى صفحة المنتجات
  async gotoProductsPage() {
    await this.page.getByRole('link', { name: 'Dashboard المنتجات Dashboard' }).click();
    await this.page.waitForLoadState('networkidle');
  }

  // حذف آخر منتج (أو أي منتج أول واحد ظاهر)
  async deleteFirstProduct() {
    await this.page.getByRole('button', { name: 'حذف المنتج' }).first().click();
    await this.page.getByRole('button', { name: 'تأكيد' }).click();
        await this.page.getByRole('button', { name: 'حذف المنتج' }).first().click();
    await this.page.getByRole('button', { name: 'تأكيد' }).click();
        await this.page.getByRole('button', { name: 'حذف المنتج' }).first().click();
    await this.page.getByRole('button', { name: 'تأكيد' }).click();
        await this.page.getByRole('button', { name: 'حذف المنتج' }).first().click();
    await this.page.getByRole('button', { name: 'تأكيد' }).click();
    
  }
}
