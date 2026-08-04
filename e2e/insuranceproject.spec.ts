import{test} from '@playwright/test'
import{HomePage} from '../pages/VehicleinsuHomepage'

test ('Apply Automobile Insurance',async({page})=>{
 
 
 const vip=new HomePage(page);
 await vip.goto();
 await vip.auto();
 await page.waitForTimeout(3000);



});
