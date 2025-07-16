// import {test,expect} from '@playwright/test';

// test('Drag And Drop', async({page}) =>{
//     await page.goto("https://demoqa.com/droppable");

//     const drag = await page.locator("#draggable");
//     const drop = await page.locator("#droppable");

//     await drag.dragTo(drop);


//     await page.waitForTimeout(5000);
// })

import { test, expect } from '@playwright/test';

test('Drag And Drop', async ({ page }) => {
  await page.goto('https://demoqa.com/droppable');

  await page.locator('#draggable').waitFor({ state: 'visible' });
  await page.locator('#droppable').nth(0).waitFor({ state: 'visible' });

//   const drop = page
//     .getByRole('tabpanel', { name: 'Simple' })
//     .locator('#droppable');

//   await drop.waitFor({ state: 'visible' });

  await page.dragAndDrop('#draggable', '#droppable');

  await page.waitForTimeout(3000);
});

