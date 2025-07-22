import {test,expect} from '@playwright/test';
test('Handle Dropdown', async ({page}) =>{
    await page.goto("https://letcode.in/dropdowns");
    // await page.locator("#fruits").selectOption("Orange");
    // await page.locator("#fruits").selectOption({ label: 'Mango' });
    // await page.locator("#fruits").selectOption(["Orange","Apple","Banana"]);

    //Asertions
    //Total no. of options in the dropdown
    // const options = await page.locator("#fruits option")
    // await expect(options).toHaveCount(6);
    // await page.waitForTimeout(3000);

    // const options = await page.$$("#fruits option");
    // let status = false;
    // for(const option of options)
    // {
    //     // console.log(await option.textContent())
    //     let value = await option.textContent();
    //     if(value.includes('Mango'))
    //     {
    //         status = true;
    //         break;
    //     }
    // }


    // Select option from dropdown using loop
    const options = await page.$$("#fruits option");
    for(const option of options)
    {
        let value = await option.textContent();
        if(value.includes('Mango'))
        {
            await page.selectOption("#fruits",value )
            break;
        }
    }

})