# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: orangehrm.spec.ts >> orange
- Location: e2e\orangehrm.spec.ts:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | 
  3  | 
  4  | // hooks
  5  | test("orange",async({page})=>{
  6  |    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  7  |    await page.waitForLoadState('domcontentloaded');
  8  | 
  9  | 
  10 | //    Login to the application
  11 |    await page.getByPlaceholder('Username').fill('Admin');
  12 |    await page.getByPlaceholder('Password').fill('admin123');
  13 |    await page.getByRole('button', {name:'Login'}).click();
> 14 |    await page.waitForTimeout(5000);
     |               ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
  15 | });
  16 | 
```