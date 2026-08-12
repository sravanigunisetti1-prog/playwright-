import{test, expect} from '@playwright/test'


test.beforeEach(async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
})

test('TC_LOGIN_01', async({page})=>{


   //TC_LOGIN_01 test case  //
   await page.getByPlaceholder('Username').fill('Admin');
   await page.getByPlaceholder('Password').fill('admin123');
   await page.getByRole('button', { name:'Login'}).click();
   
   await page.waitForTimeout(5000);

}
)
// // TC_LOGIN_02 test case//

test('TC_LOGIN_02', async({page})=>{

 await page.getByPlaceholder('Username').fill('Admin');
   await page.getByPlaceholder('Password').fill('wrong123');
   await page.getByRole('button', { name:'Login'}).click();
   
   await page.waitForTimeout(5000);

})

//test case 3//
test('TC_LOGIN_03', async({page})=>{

 await page.getByPlaceholder('Username').fill('Wrong');
   await page.getByPlaceholder('Password').fill('wrong123');
   await page.getByRole('button', { name:'Login'}).click();
   
   await page.waitForTimeout(5000);
})

//test case 4//

test('TC_LOGIN_04', async({page})=>{

 await page.getByPlaceholder('Username').fill('');
   await page.getByPlaceholder('Password').fill('wrong123');
   await page.getByRole('button', { name:'Login'}).click();
   
   await page.waitForTimeout(5000);})
 
   // test case 5//

   test('TC_LOGIN_05', async({page})=>{

 await page.getByPlaceholder('Username').fill('Admin');
   await page.getByPlaceholder('Password').fill('');
   await page.getByRole('button', { name:'Login'}).click();
   
   await page.waitForTimeout(5000);})

   