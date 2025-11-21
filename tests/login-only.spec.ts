import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test('test login page only', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login('0111190125', '12345678');

});
