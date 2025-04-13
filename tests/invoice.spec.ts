
import { test } from '@playwright/test';
import { expect } from '@playwright/test';

test('create invoice', async ({ page, context }) => {
  
    // Navigate to URL
    await page.goto('https://react-demo-drab.vercel.app');

    // Click element
    await page.click('text=Log in');

    // Fill input field
    await page.fill("input[name='email']", 'user@nextmail.com');

    // Fill input field
    await page.fill("input[name='password']", '123456');

    // Click element
    await page.click('button');

    // Waiting header contain dashboard
    await page.waitForSelector('text=Dashboard', { timeout: 10000 });

    // Navigate to URL
    await page.goto('https://react-demo-drab.vercel.app/dashboard/invoices');

    // // Take screenshot
    await page.screenshot({ path: 'invoices.png' });

    // Navigate to URL
    await page.goto('https://react-demo-drab.vercel.app/dashboard/invoices/create');

    await page.selectOption("select[name='customerId']",'Lee Robinson');

    // Fill input field
    await page.fill("input[name='amount']", '8888');

    await page.click("input[value='pending']");

    await page.screenshot({ path: 'new_invoice.png' });

    await page.click("button[type='submit']");


    await page.waitForURL('**/dashboard/invoices');
    
    // Navigate to URL
    await page.goto('https://react-demo-drab.vercel.app/dashboard/invoices');

    // // Take screenshot
    await page.screenshot({ path: 'invoices2.png' });

});
