const { test } = require('../lambdatest-setup')
const { expect } = require('@playwright/test')
 
test.describe('PlayWright Govind JS - 1', () => {
test('Scenario 1: Simple Form Demo', async ({ page }) => {
 
const inputMessage = "Welcome to LambdaTest"; // Locators
const inputmessage = page.locator("//input[@id='user-message']");
const showInputMessageButton = page.locator("#showInput");
const simpleFormDemo = page.locator("//a[normalize-space(text())='Simple Form Demo']");
 
// Navigate to the URL-
await page.goto('https://www.lambdatest.com/selenium-playground/');
 
console.log("Navigated to LambdaTest Selenium Playground");
// Click on 'Simple Form Demo' link
await simpleFormDemo.click();
console.log("Clicked on 'Simple Form Demo' link");
// Verify URL contains 'simple-form-demo'
console.log("Verifying URL...");
await expect(page).toHaveURL(/.*simple-form-demo.*/);
// Fill the input field with the message
console.log('Filling input field with message: "${inputMessage}"');
await inputmessage.fill(inputMessage);
// Click the button to show the message
console.log("Clicking the button to display the input message...");
await showInputMessageButton.click();
// Verify the displayed message
const actualMessage = page.locator("#message");
const actualMessageText = await actualMessage.textContent();
console.log('Displayed message: "${actualMessageText}"');
await expect(actualMessage).toHaveText(inputMessage) 
}) 
})