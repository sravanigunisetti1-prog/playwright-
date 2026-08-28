import { Page, Locator } from '@playwright/test';

export class TextBoxPage {
  readonly page: Page;
  readonly fullName: Locator;
  readonly email: Locator;
  readonly currentAddress: Locator;
  readonly permanentAddress: Locator;
  readonly submitBtn: Locator;
  readonly output: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fullName = page.locator('#userName');
    this.email = page.locator('#userEmail');
    this.currentAddress = page.locator('#currentAddress');
    this.permanentAddress = page.locator('#permanentAddress');
    this.submitBtn = page.locator('#submit');
    this.output = page.locator('#output');
  }

  async goto() {
    await this.page.goto('https://demoqa.com/text-box');
  }

  async fillFullName(name: string) {
    await this.fullName.fill(name);
  }

  async fillEmail(email: string) {
    await this.email.fill(email);
  }

  async fillCurrentAddress(address: string) {
    await this.currentAddress.fill(address);
  }

  async fillPermanentAddress(address: string) {
    await this.permanentAddress.fill(address);
  }

  async submit() {
    await this.submitBtn.click();
  }

  async getOutputText() {
    await this.output.waitFor({ state: 'visible' });
    return await this.output.textContent() || '';
  }
}

export default TextBoxPage;
