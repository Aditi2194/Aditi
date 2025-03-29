const { test } = require('../lambdatest-setup')
const { expect } = require('@playwright/test')
test.describe('PlayWright Govind JS - 2', () => {
test('Scenario 2: Drag & Drop Sliders - Set value to 95', async ({ page }) => {
 
const DragnDrop = page.locator('text=Drag & Drop Sliders');
const slider = page.locator('//input[@type="range" and @value="15"]');
const rangeValue = page.locator('#rangeSuccess'); // Assuming the range value element has this ID
 
// Step 1: Open the LambdaTest Selenium Playground page
await page.goto('https://www.lambdatest.com/selenium-playground/', { waitUntil: 'load', timeout: 120000 });
// Step 2: Click “Drag & Drop Sliders”
await DragnDrop.click(); //
 
// Step 3: Validate that the URL contains “drag-drop-range-sliders-demo”
await expect(page).toHaveURL(/.*drag-drop-range-sliders-demo/);
 
// Step 4: Select the slider “Default value 15” and drag the bar to make it 95
slider.focus();
while (await rangeValue.textContent() !== '95') {
   await slider.press('ArrowRight');
}
// Step 5: Validate whether the range value shows 95
await expect(rangeValue).toHaveText('95'); 
}) 
})