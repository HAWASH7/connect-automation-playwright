import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    
headless: true,                  // يشغّل المتصفح بدون واجهة
    video: 'on',                     // تسجيل فيديو لكل تيست
    screenshot: 'only-on-failure',   // Screenshot فقط عند الفشل
    trace: 'retain-on-failure',      // Trace فقط عند الفشل
  },
  

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },


  ],


});
