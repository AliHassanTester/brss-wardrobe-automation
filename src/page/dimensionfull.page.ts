import { Page, TestInfo, test, expect } from "@playwright/test";
export class DimensionfullPage {
    private readonly page: Page;
    private readonly testInfo: TestInfo;
    constructor(page: Page, testInfo: TestInfo) {
        this.page = page;
        this.testInfo = testInfo;
    }
    private get locators() {
        return {
            dimensionButton: this.page.locator("//button[text()='Dimensions']"),
            widthInput: this.page.locator("//div[@id='widthSet']//input"),
            heightInput: this.page.locator("//div[@id='heightSet']//input"),
            canvas: this.page.locator("//body/div[@id='root']/div/div[1]/div[1]/div[1]/canvas[1]"),
            doordecreasebutton: this.page.locator("//i[@class='bi bi-dash']"),
            doorincreasebutton: this.page.locator("//i[@class='bi bi-plus-lg']")
        };
    }
    // ===== Dimension Flow =====
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
}