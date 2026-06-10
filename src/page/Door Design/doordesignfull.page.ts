import { Page, TestInfo, test, expect } from "@playwright/test";
import { getEnvVariable } from "../../utilities/env.utils"; 

export class doorDesignFullPage {
    private readonly page: Page;
    private readonly testInfo: TestInfo;
    private readonly url: string;

    constructor(page: Page, testInfo: TestInfo) {
        this.page = page;
        this.testInfo = testInfo;
        this.url = getEnvVariable("URL"); 
    }

    private get locators() {
        return {
            
            canvas:
                this.page.locator("//body/div[@id='root']/div/div[1]/div[1]/div[1]/canvas[1]"), 
            dimensionButton:
                this.page.getByText('Dimensions', { exact: false }),
            widthInput:
                this.page.locator("//div[@id='widthSet']//input"),
            heightInput:
                this.page.locator("//div[@id='heightSet']//input"),
            doordesignbutton:
                this.page.getByText('Door Design', { exact: false }),
            Solobutton:
                this.page.locator("//div[text()='Solo']"),
            duobutton:
                this.page.locator("//div[text()='Duo']"),
            triobutton:
                this.page.locator("//div[text()='Trio']"),
            quattrobutton:
                this.page.locator("//div[text()='Quattro']"),
            continentalbtton:
                this.page.locator("//div[text()='Continental']"),
            defaultbutton:
                this.page.locator("//div[text()='Default']"),
            design1button:
                this.page.locator("//div[text()='Design #1']"),
            design2button:
                this.page.locator("//div[text()='Design #2']"),
            design3button:
                this.page.locator("//div[text()='Design#3']"),
            customlayoutbutton:
                this.page.locator("//button[text()='Custom Layout']"),
            alignequallybutton:
                this.page.locator("//button[text()='Align Equally']"),
            deletebutton1:
                this.page.locator("(//i[contains(@style, 'font-size: 14px') and contains(@style, 'padding: 0px')])[1]"),
            deletebutton2:
                this.page.locator("(//i[contains(@style, 'font-size: 14px') and contains(@style, 'padding: 0px')])[1]"),
            deletebutton3:
                this.page.locator("(//i[contains(@style, 'font-size: 14px') and contains(@style, 'padding: 0px')])[1]"),
            deletebutton4:
                this.page.locator("(//i[contains(@style, 'font-size: 14px') and contains(@style, 'padding: 0px')])[1]"),
            addbutton1:
                this.page.locator("(//i[@class='bi bi-plus-lg' and contains(@style, 'padding: 0px')])[2]"),
            addbutton2:
                this.page.locator("(//i[@class='bi bi-plus-lg' and contains(@style, 'padding: 0px')])[2]"),
            addbutton3:
                this.page.locator("(//i[@class='bi bi-plus-lg' and contains(@style, 'padding: 0px')])[3]"),
        };
    }

   
    public async navigateToLoginPage(): Promise<void> {
        await test.step("Navigate to application URL", async () => {
            await this.page.goto(this.url);
        });
    }

    public async dimensionFlow(width: string, height: string): Promise<void> {
        await test.step("Set Dimensions", async () => {
            await this.locators.dimensionButton.click();
            await this.locators.canvas.waitFor({ state: "visible" });
            await this.locators.widthInput.fill(width);
            await this.locators.heightInput.fill(height);
            await this.page.waitForTimeout(1000);
        });
    }

    public async clickDoorDesignAndWait(): Promise<void> {
        await test.step("Click Door Design and wait 10 seconds", async () => {
            await this.locators.doordesignbutton.click();
            
        });
    }

    public async verifyBasicLayouts(): Promise<void> {
        await test.step("Select Basic Layouts one by one", async () => {
            const layouts = [
                { name: 'Solo', element: this.locators.Solobutton },
                { name: 'Duo', element: this.locators.duobutton },
                { name: 'Trio', element: this.locators.triobutton },
                { name: 'Quattro', element: this.locators.quattrobutton },
                { name: 'Continental', element: this.locators.continentalbtton },
                { name: 'Default', element: this.locators.defaultbutton }
            ];
            for (const layout of layouts) {
                const beforeImg = await this.locators.canvas.screenshot();
                await layout.element.click();
                await this.page.waitForTimeout(1000); 
                const afterImg = await this.locators.canvas.screenshot();
                expect(beforeImg).not.toEqual(afterImg);
            }
        });
    }

    public async verifyDesignerSelections(): Promise<void> {
        await test.step("Select Designer Selections one by one", async () => {
            const designs = [
                { name: 'Design 1', element: this.locators.design1button },
                { name: 'Design 2', element: this.locators.design2button },
                { name: 'Design 3', element: this.locators.design3button }
            ];
            for (const design of designs) {
                const beforeImg = await this.locators.canvas.screenshot();
                await design.element.click();
                await this.page.waitForTimeout(1000);
                const afterImg = await this.locators.canvas.screenshot();
                expect(beforeImg).not.toEqual(afterImg);
            }
        });
    }

    public async verifyCustomLayoutFlow(): Promise<void> {
        await test.step("Custom Layout: Delete 4, Add 4, Align Equally", async () => {
            await this.locators.customlayoutbutton.click();
            await this.page.waitForTimeout(1000);

            
            const deleteButtons = [
                this.locators.deletebutton1, this.locators.deletebutton2, 
                this.locators.deletebutton3, this.locators.deletebutton4
            ];
            for (let i = 0; i < deleteButtons.length; i++) {
                const beforeImg = await this.locators.canvas.screenshot();
                await deleteButtons[i].click();
                await this.page.waitForTimeout(1000);
                const afterImg = await this.locators.canvas.screenshot();
                expect(beforeImg).not.toEqual(afterImg);
            }

            
            const addButtons = [
                this.locators.addbutton1, this.locators.addbutton2, 
                this.locators.addbutton3
            ];
            for (let i = 0; i < addButtons.length; i++) {
                const beforeImg = await this.locators.canvas.screenshot();
                await addButtons[i].click();
                await this.page.waitForTimeout(1000);
                const afterImg = await this.locators.canvas.screenshot();
                expect(beforeImg).not.toEqual(afterImg);
            }

            
            const beforeAlign = await this.locators.canvas.screenshot();
            await this.locators.alignequallybutton.click();
            await this.page.waitForTimeout(1500);
            const afterAlign = await this.locators.canvas.screenshot();
            expect(beforeAlign).not.toEqual(afterAlign);
        });
    }
}