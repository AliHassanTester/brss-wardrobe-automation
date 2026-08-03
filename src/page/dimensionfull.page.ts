import { Page, test, expect } from "@playwright/test";
import { DisabledButtonData } from "@interfaces/dimension.interface";
export class DimensionfullPage {
    private readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    
    private get locators() {
        return {
            dimensionButton:
                this.page.locator("//button[text()='Dimensions']"),
            widthInput:
                this.page.locator("//div[@id='widthSet']//input"),
            heightInput:
                this.page.locator("//div[@id='heightSet']//input"),
            canvas:
                this.page.locator("//body/div[@id='root']/div/div[1]/div[1]/div[1]/canvas[1]"),
            doordecreasebutton:
                this.page.locator("//i[@class='bi bi-dash']"),
            doorincreasebutton:
                this.page.locator("//i[@class='bi bi-plus-lg']"),
            invalidWidth:
                this.page.locator("//div[text()='Invalid width value: ']"),
            invalidHeight:
                this.page.locator("//div[text()='Invalid height value: ']"),
                
        };
    }

    public async clickDoorIncreaseButton(count: number): Promise<void> {
        await test.step(`Click Door Increase button ${count} times`, async () => {
            for (let i = 1; i <= count; i++) {
                await this.locators.doorincreasebutton.click();
            }

            console.log(`Door increase button clicked ${count} times ✔`);
        });
    }

    public async pressBackspace(count: number): Promise<void> {
        await test.step(`Press Backspace ${count} times`, async () => {
            for (let i = 0; i < count; i++) {
                await this.page.keyboard.press("Backspace");
            }

            console.log(`Backspace pressed ${count} times ✔`);
        });
    }

    public async dimensionFlow(width: string, height: string): Promise<void> {
        await test.step("Dimension flow", async () => {
            await this.locators.dimensionButton.click();
            await this.locators.canvas.waitFor({ state: "visible" });
            const before = await this.locators.canvas.screenshot();
            await this.locators.widthInput.fill(width);
            await this.locators.heightInput.fill(height);
            await this.page.waitForTimeout(1500);
            const after = await this.locators.canvas.screenshot();
            expect(before).not.toEqual(after);
            console.log("Canvas Updated Successfully ✔");
        });
    }

    public async doorcount(): Promise<void> {
        await test.step("Door count", async () => {
            for (let i = 1; i <= 5; i++) {
                const beforeDecrease = await this.locators.canvas.screenshot();
                await this.locators.doordecreasebutton.click();
                const afterDecrease = await this.locators.canvas.screenshot();
                expect(beforeDecrease).not.toEqual(afterDecrease);
            }
            for (let i = 1; i <= 14; i++) {const beforeIncrease = await this.locators.canvas.screenshot();
                await this.locators.doorincreasebutton.click();
                const afterIncrease = await this.locators.canvas.screenshot();
                expect(beforeIncrease,`Canvas should change after increase click #${i}`).not.toEqual(afterIncrease);
            }
           console.log("Door count updated successfully ✔");
        });
    }

    public async invalidDimensionPopup(width: string, height: string): Promise<void> {
        await test.step("Verify invalid dimension validation popup", async () => {
            await this.locators.dimensionButton.click();
            await this.locators.canvas.waitFor({ state: "visible" });
            await this.locators.widthInput.fill(width);
            await expect(this.locators.invalidWidth).toBeVisible();
            await this.locators.heightInput.fill(height);
            await expect(this.locators.invalidHeight).toBeVisible();
            console.log("Invalid width and height validation popups are displayed ✔");
        });
    }
    public async verifyDoorAddButtonDisabled(width: string,height: string,updatedWidth1: string,updatedWidth2: string,updatedWidth3: string,updatedWidth4: string,updatedWidth5: string): Promise<void> {
        await test.step("Verify Door Add button is disabled", async () => {
            await this.locators.dimensionButton.click();
            await this.locators.canvas.waitFor({ state: "visible" });
            await this.locators.widthInput.fill(width);
            await this.locators.heightInput.fill(height);
            await expect(this.locators.doorincreasebutton).toBeDisabled();

            await this.locators.widthInput.click();
            await this.pressBackspace(4);
            
            await this.locators.widthInput.fill(updatedWidth1);
            await this.clickDoorIncreaseButton(3);
            await this.page.waitForTimeout(1000);
            await expect(this.locators.doorincreasebutton).toBeDisabled();
            
            await this.page.waitForTimeout(1000);
            await this.locators.widthInput.click();
            await this.pressBackspace(4);
            await this.locators.widthInput.fill(updatedWidth2);
            await this.clickDoorIncreaseButton(2);
            await expect(this.locators.doorincreasebutton).toBeDisabled();
            
            await this.page.waitForTimeout(1000);
            await this.locators.widthInput.click();
            await this.pressBackspace(4);
            await this.locators.widthInput.fill(updatedWidth3);
            await this.clickDoorIncreaseButton(3);
            await expect(this.locators.doorincreasebutton).toBeDisabled();

            await this.page.waitForTimeout(1000);
            await this.locators.widthInput.click();
            await this.pressBackspace(4);
            await this.locators.widthInput.fill(updatedWidth4);
            await this.clickDoorIncreaseButton(2);
            await expect(this.locators.doorincreasebutton).toBeDisabled();

            
            await this.page.waitForTimeout(1000);
            await this.locators.widthInput.click();
            await this.pressBackspace(4);
            await this.locators.widthInput.fill(updatedWidth5);
            await this.clickDoorIncreaseButton(3);
            await expect(this.locators.doorincreasebutton).toBeDisabled();

            console.log("Door Add button is disabled successfully ✔");
        });
    }
}