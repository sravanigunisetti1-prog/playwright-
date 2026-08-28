import {test, expect} from '@playwright/test';


// hooks
test("orange",async({page})=>{
   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
   await page.waitForLoadState('domcontentloaded');
await page.screenshot({ path: 'screenshot.png', fullPage: true });

//    Login to the application
   await page.getByPlaceholder('Username').fill('Admin');
   await page.getByPlaceholder('Password').fill('admin123');
   await page.getByRole('button', {name:'Login'}).click();
   await page.waitForTimeout(3000);
});
