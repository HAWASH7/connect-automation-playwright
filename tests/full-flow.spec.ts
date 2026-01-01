import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { AddProductPage } from '../pages/add-product.page';
import { AddStockPage } from '../pages/add-stock.page';
import { CreateOrderPage } from '../pages/create-order.page';
import { StockVerificationPage } from '../pages/stock-verification.page';
import { DeleteProductPage } from '../pages/delete-product.page';

test('full e2e flow: login > add product > add stock > create order', async ({ page }) => {

const login = new LoginPage(page);
const addProduct = new AddProductPage(page);
const stock = new AddStockPage(page);
const orderPage = new CreateOrderPage(page);
const stockVerify = new StockVerificationPage(page);
const deleteProduct = new DeleteProductPage(page);

const random = Math.floor(Math.random() * 100000);  
const productName = `Product-Automation-${random}`;

  // ---------------- LOGIN ----------------
await login.login('0111190125', '12345678');

//   ---------------- ADD PRODUCT ----------------
 await addProduct.createProduct(productName);

//   // ---------------- ADD STOCK ----------------
//  await stock.gotoStockPage();

// await stock.searchProduct(productName);

// await stock.addStockToSearchedProduct('1000');

//   // ---------------- CREATE ORDER ----------------

//  await orderPage.gotoOrders();
// await orderPage.startAddOrder();
// await orderPage.fillCustomer('0598356823');
// await orderPage.fillAddress('القدس');
// await orderPage.clickAddProduct();
// await orderPage.searchProduct(productName);
// await orderPage.selectProduct(productName);
// await orderPage.fillProductQty(productName, '1');
// await orderPage.confirmAddProduct();
// await orderPage.fillAddress('القدس');
// await orderPage.fillCOD('200');
// await orderPage.saveOrder();

// ----------------- CHECK STOCK -----------------
// await stockVerify.gotoStockPage();
// await stockVerify.verifyStockIs999(productName);

// ----------------- DELETE PRODUCT -----------------


//await deleteProduct.gotoProductsPage();
//await deleteProduct.deleteFirstProduct();

});

