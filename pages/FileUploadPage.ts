import { type Page, expect } from '@playwright/test';

export class FileUploadPage {
  readonly page: Page;

  private readonly fileUploadInput = 'input#file-upload';
  private readonly uploadButton = 'input#file-submit';
  private readonly successMessage = 'h3';

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/upload');
  }

  async uploadFile(filePath: string) {
    await this.page.locator(this.fileUploadInput).setInputFiles(filePath);
  }

  async clickUpload() {
    await this.page.locator(this.uploadButton).click();
  }

  async verifyUploadSuccess() {
    await expect(this.page.locator(this.successMessage)).toHaveText('File Uploaded!');
  }
}
