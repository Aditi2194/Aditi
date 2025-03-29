const { test } = require('../lambdatest-setup')
const { expect } = require('@playwright/test')
 
 
test.describe('PlayWright Govind JS - 3', () => {
test('Scenario 3: Input Form Submit', async ({ page }) => {
const messageAfterSubmission = "Thanks for contacting us, we will get back to you shortly."; // Locators
const inputFormSubmit = page.locator("//a[normalize-space()='Input Form Submit']");
const submitButton = page.locator("//button[text()='Submit']");
const actualMessageAfterSubmission = page.locator("//p[@class='success-msg.hidden']");
const name = page.locator("input[name='name']");
const email = page.locator("#inputEmail4");
const password = page.locator("#inputPassword4");
const company = page.locator("#company");
const webSiteName = page.locator("#websitename");
const city = page.locator("#inputCity");
const address1 = page.locator("#inputAddress1");
const address2 = page.locator("#inputAddress2");
const state = page.locator("#inputState");
const zipCode = page.locator("#inputZip"); // Navigate to the Selenium Playground
await page.goto('https://www.lambdatest.com/selenium-playground/');
console.log("Navigated to Selenium Playground"); // Click on the 'Input Form Submit' link
await inputFormSubmit.click();
console.log("Clicked on 'Input Form Submit' link"); // Click submit without filling the form to check validation
await submitButton.click();
console.log("Clicked submit button to check form validation");
page.on('dialog', async alert => {
const text = alert.message();
console.log(text);
expect(text).toBe('Please fill out this field.'); }); // Fill in the form fields
console.log("Filling in the form fields...");
await name.fill("Govindharaj");
await email.fill("Govindharaj@persistent.com");
await password.fill("Zxcvbnm@123");
await company.fill("persistent");
await webSiteName.fill("persistent.com");
await page.selectOption("//select[@name='country']", { label: "United States" }); // Select by label
await city.fill("New York");
await address1.fill("west street");
await address2.fill("New York");
await state.fill("New York");
await zipCode.fill("560045"); // Submit the form
await submitButton.click();
console.log("Submitted the form"); // Validate the success message “Thanks for contacting us, we will get back to you shortly.” on the screen
const successMessage = page.locator('//p[@class="success-msg hidden"]');
await expect(successMessage).toHaveText('Thanks for contacting us, we will get back to you shortly.'); 
}) 
})