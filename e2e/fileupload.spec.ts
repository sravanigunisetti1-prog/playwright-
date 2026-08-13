 import{test,expect} from '@playwright/test'

test('file upload', async({page})=>{
await page.goto('https://the-internet.herokuapp.com/upload');

await page.locator('input#file-upload').setInputFiles('files/taashvik.txt');
await page.locator('input#file-submit').click();
await page.waitForTimeout(5000);})
