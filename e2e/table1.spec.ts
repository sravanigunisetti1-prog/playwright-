import { test, expect } from '@playwright/test';

test ('Time verf',async({page})=>{
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
 await page.getByPlaceholder('Username'). fill('Admin');
   await page.getByPlaceholder('Password'). fill('admin123');
   await page.getByRole('button', {name:'Login'}). click();
   
await page.waitForTimeout(2000);
   await page.getByRole('link', {name:'Time'}).click();
  
   await page.waitForTimeout(3000);   //table header verification

//    const table= page.getByRole('table');
//    const theader = table.getByRole('columnheader');
//    const trow= table.getByRole('row')
//    const dataRows = trow.filter({ hasNot: page.getByRole('columnheader') });
//   const rowcount = await dataRows.count();
//    const tablecount= await table.count();
//    const headercount=  await theader.count();

//   console.log(`Headercolumn count: ${headercount}`);
//    console.log(`table count: ${tablecount}`);
// console.log(`row count: ${rowcount}`);
   const table = page.locator('div.oxd-table');
   
    const thead = table.locator('div.oxd-table-header');
    const theadrows = thead.locator('div.oxd-table-row.oxd-table-row--with-border');
    const theadCol = theadrows.locator('div.oxd-table-header-cell.oxd-padding-cell.oxd-table-th');
   
    const tbody = table.locator('div.oxd-table-body');
    const rows = tbody.locator('div.oxd-table-card div.oxd-table-row.oxd-table-row--with-border');
    const columns = rows.locator('div.oxd-table-cell.oxd-padding-cell');
 await page.waitForTimeout(5000);
    // Capture Row Count and Column Count
    await table.hover();
    await page.waitForTimeout(2000);
    await page.mouse.wheel(0, 1000);


    const rowCount = await rows.count();
    const columnCount = await columns.count();
    const headerCount = await theadCol.count();
    const headerrowsCount = await theadrows.count();


    console.log(`Row Count: ${rowCount}`);
    console.log(`Column Count: ${columnCount}`);
    console.log(`Header Column Count: ${headerCount}`);
    console.log(`Header Rows Count: ${headerrowsCount}`);



});