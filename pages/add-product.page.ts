import { Page } from '@playwright/test';

export class AddProductPage {
  constructor(private page: Page) {}

  async goToProducts() {
    await this.page.getByRole('link', { name: 'Dashboard المنتجات Dashboard' }).click();
  }

  async clickAddProduct() {
    await this.page.getByRole('button', { name: 'إضافة منتج add product' }).click();
  }

  async fillProductName(name: string) {
    await this.page.getByRole('textbox', { name: 'الإسم*' }).fill(name);
  }

  async fillPrice() {
    await this.page.getByRole('textbox', { name: 'السعر*' }).fill('100');
  }

  async selectWarehouse() {
    await this.page.locator('#mat-select-value-1').click();
    await this.page.getByText('Default Warehouse').click();
    await this.page.locator('.cdk-overlay-backdrop.cdk-overlay-transparent-backdrop').click();
  }

  async save() {
    await this.page.getByRole('button', { name: 'إضافة', exact: true }).click();
  }

  async createProduct(name: string) {
    await this.goToProducts();
    await this.clickAddProduct();
    await this.fillProductName(name);
    await this.fillPrice();
    await this.selectWarehouse();
    await this.save();
  }
}
