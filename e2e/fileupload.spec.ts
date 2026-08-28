import { test } from '@playwright/test';
import { FileUploadPage } from '../pages/FileUploadPage';

test('file upload', async ({ page }) => {
  const fileUploadPage = new FileUploadPage(page);

  await fileUploadPage.goto();
  await fileUploadPage.uploadFile('files/taashvik.txt');
  await fileUploadPage.clickUpload();
  await fileUploadPage.verifyUploadSuccess();
});
