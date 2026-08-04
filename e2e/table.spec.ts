import {test,expect} from '@playwright/test';


// Demo Web Shop Shopping cart table: Shopping cart


test("TC01 Demo Web Shop Shopping Cart Table", async({page})=>{
    await page.goto("",{waitUntil:'load'});  


    // add items to the Cart:
    await page.getByRole('link', {name:'Books'}).click();


    // get the count of add to cart
    const addtocart = page.getByRole('button', {name:'Add to cart'})
    // const addToCartCount = await page.getByRole('button', {name:'Add to cart'}).count();
    const addToCartCount = await addtocart.count();
    console.log('Count of Add to Cart buttons:', addToCartCount);



    // click each add to cart button
    for (let i = 0; i < addToCartCount; i++) {
        await addtocart.nth(i).click();
        await page.waitForTimeout(1000); // Wait for 1 second to allow the page to update
    }


    // click on Shopping cart link
    await page.getByRole('link', {name:'Shopping cart',exact: true }).click();


    // // get the count of rows in the shopping cart table
    // // const rowCount = await page.locator('table.cart').locator('tbody tr').count();
    // const rowCount = await page.locator('table.cart tbody tr').count();
    // console.log('Count of rows in the shopping cart table:', rowCount);




    // // Print all the names of the items in the shopping cart table (index starts with 0)
    // for (let i = 0; i < rowCount; i++) {
    //     const itemName = await page
    //     .locator('table.cart tbody tr').nth(i)
    //     .locator('td').nth(2)
    //     // .textContent();  // capturing the spaces
    //     .innerText();
    //     console.log(`Item ${i + 1}:`, itemName);
    // }


    // // click on Computing and Internet link
    // await page.locator('table.cart tbody tr').nth(0).locator('td').nth(2).locator('a').click();


     await page.waitForTimeout(5000); // Wait for 5 seconds to allow the page to load
});
