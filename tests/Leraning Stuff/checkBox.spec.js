// import { test, expect } from '@playwright/test';

// test('Checkbox test on demoqa.com', async ({ page }) => {
//   // Navigate to the checkbox page
//   await page.goto('https://demoqa.com/checkbox');

//   // Expand the full checkbox tree
//   await page.locator('.rct-option-expand-all').click();

//   // Locate specific checkbox label by text
//   const desktopLabel = page.locator('label >> text=Desktop');

//   // Click the checkbox label (clicking input directly may not work due to custom styling)
//   await desktopLabel.click();

//   // ✅ Assertion: Verify checkbox is selected
//   const result = page.locator('#result');
//   await expect(result).toContainText('desktop');
// });

import { test, expect } from '@playwright/test';

test('Checkboxes test on the-internet.herokuapp.com', async ({ page }) => {
  // Navigate to the checkbox page
  await page.goto('https://the-internet.herokuapp.com/checkboxes');

  // Locate both checkboxes
  const checkbox1 = page.locator('form#checkboxes input[type="checkbox"]').nth(0);
  const checkbox2 = page.locator('form#checkboxes input[type="checkbox"]').nth(1);

  // Check the first checkbox if not already checked
  if (!(await checkbox1.isChecked())) {
    await checkbox1.check();
  }

  // Uncheck the second checkbox if already checked
  if (await checkbox2.isChecked()) {
    await checkbox2.uncheck();
  }

  // ✅ Assertions
  await expect(checkbox1).toBeChecked();
  await expect(checkbox2).not.toBeChecked();
});

