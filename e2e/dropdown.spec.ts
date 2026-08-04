import { test, expect } from '@playwright/test';

test ('dropdown ',async({page})=>{
  await page.goto('https://demowebshop.tricentis.com/   ');

  await page.getByRole('link', {name: 'Books'}).first().click();
  await page.locator('#products-orderby').click();
  await page.locator('#products-orderby').selectOption({value: 'https://demowebshop.tricentis.com/books?orderby=10'}); 
   // get the count of the options in the dropdown
    const optionsCount = await page.locator('#products-orderby option').count();

const dropdownarray = await page.locator('#products-orderby option').allTextContents();
console.log(dropdownarray);  
await page.waitForTimeout(3000);


});

