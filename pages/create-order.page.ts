// pages/create-order.page.ts
import { Page, expect } from '@playwright/test';

export class CreateOrderPage {
  constructor(private page: Page) {}

  // ---------------- PAGE NAVIGATION ----------------
  async gotoOrders() {
    await this.page.getByRole('link', { name: 'Dashboard طلبيات Dashboard' }).click();
  }

  async startAddOrder() {
    await this.page.getByRole('button', { name: 'add order', exact: true }).click();
  }

  // ---------------- CUSTOMER INFORMATION ----------------
  async fillCustomer(mobile: string) {
    await this.page.getByRole('textbox', { name: 'رقم الهاتف*' }).fill(mobile);

    // اضغط على الـ suggestion بعد ما يظهر
    await this.page
      .getByRole('button', { name: new RegExp(`${mobile} -`) })
      .click();
  }

  async fillAddress(address: string) {
    await this.page.getByRole('textbox', { name: 'العنوان*' }).fill(address);
  }

  // ---------------- PRODUCT LINE ----------------
  async clickAddProduct() {
    await this.page.locator('#order_form_add_product').click();
  }

  async searchProduct(name: string) {
    await this.page.getByRole('textbox', { name: 'اختر منتج' }).fill(name);
  }

  async selectProduct(name: string) {
    await this.page.getByRole('button', { name, exact: false }).first().click();
  }

  async fillProductQty(name: string, qty: string) {
    await this.page
      .getByRole('row', { name: new RegExp(name) })
      .getByPlaceholder('أدخل الكمية')
      .fill(qty);
  }

  async confirmAddProduct() {
    await this.page.getByRole('button', { name: 'إضافة', exact: true }).click();
  }

  // ---------------- FINANCIAL ----------------
  async fillCOD(value: string) {
    await this.page.getByRole('textbox', { name: 'مجموع قيمة التحصيل *' }).fill(value);
  }

  // ---------------- SAVE ORDER ----------------
  async saveOrder() {
    await this.page.getByRole('button', { name: 'إضافة', exact: true }).click();
  }

  
}
