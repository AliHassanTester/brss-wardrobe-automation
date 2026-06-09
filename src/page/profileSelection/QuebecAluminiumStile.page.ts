import { Page, TestInfo, test, expect } from "@playwright/test";
import { PlaywrightActionFactory } from "../../utilities/playwright.actions.utils";
import { PlaywrightVerificationFactory } from "../../utilities/playwright.verifications.utils";
import { LocatorInfo } from "../../interfaces/locator.info.interface";
import { getEnvVariable } from "../../utilities/env.utils";

export class quebecAluminiumStilePage {
    private readonly page: Page;
    private readonly testInfo: TestInfo;
    private readonly playwrightActionsFactory: PlaywrightActionFactory;
    private readonly playwrightVerificationsFactory: PlaywrightVerificationFactory;
    private readonly locators: { [key: string]: LocatorInfo };
    private readonly url: string;

    constructor(page: Page, testInfo: TestInfo) {
        this.page = page;
        this.testInfo = testInfo;

        this.playwrightActionsFactory = new PlaywrightActionFactory(page, testInfo);
        this.playwrightVerificationsFactory = new PlaywrightVerificationFactory(page, testInfo);

        
        this.url = getEnvVariable("URL");

        this.locators = {
            profileselection: {
                description: "Profile selection button",
                locator: this.page.locator("//*[text()='Profiles Selection']"),
            },
            dropdown: {
                description: "dropdown options",
                locator: this.page.locator("//i[@class='bi bi-caret-down-fill'][1]"),
            },
            
            IndecoQuebecAluminiumStile: {
                description: "Indeco Quebec Aluminium Stile option",
                locator: this.page.locator("//div[text()='Indeco Quebec Aluminium Stile']"),
            
            },
            blackcolour: {
                description: "Black colour option",
                locator: this.page.locator("//div[@style='width: 60px; height: 60px; background-color: rgb(0, 0, 0);']"),
            },
            pinkcolour: {
                description: "Pink colour option",
                locator: this.page.locator("//div[@style='width: 60px; height: 60px; background-color: rgb(253, 109, 200);']"),
            },
            beighcolour: {
                description: "Beigh colour option",
                locator: this.page.locator("//div[@style='width: 60px; height: 60px; background-color: rgb(249, 229, 185);']"),
            },
            whitecolour: {
                description: "White colour option",
                locator: this.page.locator("//div[@style='width: 60px; height: 60px; background-color: rgb(255, 255, 255);']"),
            },
            canvas: {
                description: "Main Canvas Area",
                locator: this.page.locator("//body/div[@id='root']/div/div[1]/div[1]/div[1]/canvas[1]"), 
            },

            graycolour: {
                description: "Gray colour option",
                locator: this.page.locator("//div[@style='width: 60px; height: 60px; background-color: rgb(180, 180, 180);']"),
            },

            AluminiumDoubleBottomTrack: {
                description: "Aluminium Double Bottom Track",
                locator: this.page.locator("//div[text()='Aluminium Double Bottom Track']"),
            },

            AluminiumRecessedSingleBottomTrack: {
                description: "Aluminium Recessed Single Bottom Track",
                locator: this.page.locator("//div[text()='Aluminium Recessed Single Bottom Track']"),
            },

            AluminiumSystemGasket1: {
                description: "Aluminium System Gasket, 10/4 mm (Type K)",
                locator: this.page.locator("//div[text()='Aluminium System Gasket, 10/4 mm (Type K)']"),
            },

            AluminiumSystemGasket2: {
                description: "Aluminium System Gasket, 10/4 mm (Type V)",
                locator: this.page.locator("//div[text()='Aluminium System Gasket, 10/4 mm (Type V)']"),
            },

            AluminiumSystemGasket3: {
                description: "Aluminium System Gasket, 10/4 mm (Type C)",
                locator: this.page.locator("//div[text()='Aluminium System Gasket, 10/4 mm (Type C)']"),
            },
        };
    }

    public async navigateToLoginPage(): Promise<void> {
        await test.step("Navigate to application URL", async () => {
            await this.playwrightActionsFactory.navigateToURL(this.url);
        });
    }

    public async quebecAluminiumStilePage(): Promise<void> {
        await test.step("Profile selection and verify changes via screenshots", async () => {
            
            await this.playwrightActionsFactory.click(this.locators.profileselection);
            await this.playwrightActionsFactory.click(this.locators.dropdown);


            
            const beforeImg = await this.locators.canvas.locator.screenshot();
            await this.playwrightActionsFactory.click(this.locators.IndecoQuebecAluminiumStile);
            await this.page.waitForTimeout(1000); 
            const afterImg = await this.locators.canvas.locator.screenshot();
            expect(beforeImg).not.toEqual(afterImg);

            const beforeImg1 = await this.locators.canvas.locator.screenshot();
            await this.playwrightActionsFactory.click(this.locators.blackcolour);
            await this.page.waitForTimeout(1000); 
            const afterImg1 = await this.locators.canvas.locator.screenshot();
            expect(beforeImg1).not.toEqual(afterImg1);

            

            
            const beforeImg2 = await this.locators.canvas.locator.screenshot();
            await this.playwrightActionsFactory.click(this.locators.pinkcolour);
            await this.page.waitForTimeout(1000); 
            const afterImg2 = await this.locators.canvas.locator.screenshot();
            expect(beforeImg2).not.toEqual(afterImg2);

            
            
            const beforeImg3 = await this.locators.canvas.locator.screenshot();
            await this.playwrightActionsFactory.click(this.locators.whitecolour);
            await this.page.waitForTimeout(1000); 
            const afterImg3 = await this.locators.canvas.locator.screenshot();
            expect(beforeImg3).not.toEqual(afterImg3);

            

            const beforeImg4 = await this.locators.canvas.locator.screenshot();
            await this.playwrightActionsFactory.click(this.locators.beighcolour);
            await this.page.waitForTimeout(1000); 
            const afterImg4 = await this.locators.canvas.locator.screenshot();
            expect(beforeImg4).not.toEqual(afterImg4);

            const beforeImg5 = await this.locators.canvas.locator.screenshot();
            await this.playwrightActionsFactory.click(this.locators.graycolour);
            await this.page.waitForTimeout(1000); 
            const afterImg5 = await this.locators.canvas.locator.screenshot();
            expect(beforeImg5).not.toEqual(afterImg5);

            const beforeImg6 = await this.locators.canvas.locator.screenshot();
            await this.playwrightActionsFactory.click(this.locators.AluminiumDoubleBottomTrack);
            await this.page.waitForTimeout(1000); 
            const afterImg6 = await this.locators.canvas.locator.screenshot();
            expect(beforeImg6).not.toEqual(afterImg6);

            const beforeImg7 = await this.locators.canvas.locator.screenshot();
            await this.playwrightActionsFactory.click(this.locators.AluminiumRecessedSingleBottomTrack);
            await this.page.waitForTimeout(1000); 
            const afterImg7 = await this.locators.canvas.locator.screenshot();
            expect(beforeImg7).not.toEqual(afterImg7);

            const beforeImg8 = await this.locators.canvas.locator.screenshot();
            await this.playwrightActionsFactory.click(this.locators.AluminiumDoubleBottomTrack);
            await this.page.waitForTimeout(1000); 
            const afterImg8 = await this.locators.canvas.locator.screenshot();
            expect(beforeImg8).not.toEqual(afterImg8);

            const beforeImg9 = await this.locators.canvas.locator.screenshot();
            await this.playwrightActionsFactory.click(this.locators.AluminiumSystemGasket1);
            await this.page.waitForTimeout(1000); 
            const afterImg9 = await this.locators.canvas.locator.screenshot();
            expect(beforeImg9).not.toEqual(afterImg9);

            const beforeImg10 = await this.locators.canvas.locator.screenshot();
            await this.playwrightActionsFactory.click(this.locators.AluminiumSystemGasket2);
            await this.page.waitForTimeout(1000); 
            const afterImg10 = await this.locators.canvas.locator.screenshot();
            expect(beforeImg10).not.toEqual(afterImg10);

            const beforeImg11 = await this.locators.canvas.locator.screenshot();
            await this.playwrightActionsFactory.click(this.locators.AluminiumSystemGasket3);
            await this.page.waitForTimeout(1000); 
            const afterImg11 = await this.locators.canvas.locator.screenshot();
            expect(beforeImg11).not.toEqual(afterImg11);

            const beforeImg12 = await this.locators.canvas.locator.screenshot();
            await this.playwrightActionsFactory.click(this.locators.AluminiumSystemGasket1);
            await this.page.waitForTimeout(1000); 
            const afterImg12 = await this.locators.canvas.locator.screenshot();
            expect(beforeImg12).not.toEqual(afterImg12);



            

        });
    }
}