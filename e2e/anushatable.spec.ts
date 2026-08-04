import {test,expect} from '@playwright/test';  
// Orange HRM Login page
test.beforeEach(async({page})=>{
   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
   await page.waitForLoadState('domcontentloaded');


//    Login to the application
   await page.getByPlaceholder('Username').fill('Admin');
   await page.getByPlaceholder('Password').fill('admin123');
   await page.getByRole('button', {name:'Login'}).click();
   await page.waitForTimeout(5000);
});


test('Customdivtable',async({page})=>{


    await expect.soft(page.getByText("PIM")).toBeVisible();
    await page.getByText("PIM").click();


    // PIM tables
    await page.locator('div.oxd-table').hover();
    await page.waitForTimeout(2000);
    await page.mouse.wheel(0, 1000); // Scroll down to make the table visible
    await page.waitForSelector('div.oxd-table');


    const table = page.locator('div.oxd-table');
    const tbody = table.locator('div.oxd-table-body');
//Const tbody = page.locator('div.oxd-table').locator('div.oxd-table-body');


    const rows = tbody.locator('div.oxd-table-card div.oxd-table-row.oxd-table-row--with-border.oxd-table-row--clickable');
    const columns = rows.locator('div.oxd-table-cell');


    // Capture Row Count and Column Count
    const rowCount = await rows.count();
    const columnCount = await columns.count();
    console.log(`Row Count: ${rowCount}`);
    console.log(`Column Count: ${columnCount}`);


});
