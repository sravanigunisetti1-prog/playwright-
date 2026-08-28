import { test, expect } from '@playwright/test';
import { TextBoxPage } from '../pages/TextBoxPage';

test.describe('DemoQA Text Box', () => {
  test('should submit form and display entered values', async ({ page }) => {
    const textbox = new TextBoxPage(page);
    await textbox.goto();

    const fullName = 'Sravani Sriperambuduru';
    const email = 'sravanigunisetti1@gmail.com';
    const currentAddr = 'Hyderabd , Telangana';
    const permanentAddr = 'same as current';

    await textbox.fillFullName(fullName);
    await textbox.fillEmail(email);
    await textbox.fillCurrentAddress(currentAddr);
    await textbox.fillPermanentAddress(permanentAddr);
    await textbox.submit();

    const output = await textbox.getOutputText();
    expect(output).toContain(fullName);
    expect(output).toContain(email);
    expect(output).toContain(currentAddr);
    expect(output).toContain(permanentAddr);
  });
});
