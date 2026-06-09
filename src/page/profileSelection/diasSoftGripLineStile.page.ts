import { Page, TestInfo, test, expect } from "@playwright/test";
import { PlaywrightActionFactory } from "../../utilities/playwright.actions.utils";
import { PlaywrightVerificationFactory } from "../../utilities/playwright.verifications.utils";
import { LocatorInfo } from "../../interfaces/locator.info.interface";
import { getEnvVariable } from "../../utilities/env.utils";

export class diassoftlinegripstilePage {
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
            
            DIASSoftlineGripStile: {
                description: "DIAS Softline Grip Stile option",
                locator: this.page.locator("//div[text()='DIAS Softline Grip Stile']"),
            
            },
            blackcolour: {
                description: "Black colour option",
                locator: this.page.locator("//div[@style='width: 60px; height: 60px; background-color: rgb(0, 0, 0);']"),
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

            SoftlineDoorPanelDivider: {
                description: "Softline Door Panel Divider",
                locator: this.page.locator("//*[text()='Softline Door Panel Divider']"),
            },

            SoftlineDoorPanelDivider18mm: {
                description: "Softline Door Panel Divider 18mm",
                locator: this.page.locator("//*[text()='Softline Door Panel Divider 18mm']"),
            },
            yesbuttongripstile: {
                description: "Yes button for gripstile",
                locator: this.page.locator("//button[@id='modalConfirmBtn']"),
            },

            LeftJambNone: {
                description: "Left Jamb None",
                locator: this.page.locator("//*[text()='Left Jamb']/following::*[normalize-space(text())='None'][1]"),
            },

            LeftJambSoftlineWallJamb1: {
                description: "Left JambSoftline Wall Jamb1",
                locator: this.page.locator("//*[text()='Left Jamb']/following::*[normalize-space(text())='Softline Wall Jamb'][1]"),
            },

            LeftJambSoftlineWallJamb2: {
                description: "Left JambSoftline Wall Jamb2",
                locator: this.page.locator("//*[text()='Left Jamb']/following::*[normalize-space(text())='Softline Wall Jamb'][2]"),
            },

            RightJambNone: {
                description: "Right Jamb None",
                locator: this.page.locator("//*[text()='Right Jamb']/following::*[normalize-space(text())='None'][1]"),
            },

            RightJambSoftlineWallJamb1: {
                description: "Right JambSoftline Wall Jamb1",
                locator: this.page.locator("//*[text()='Right Jamb']/following::*[normalize-space(text())='Softline Wall Jamb'][1]"),
            },

            RightJambSoftlineWallJamb2: {
                description: "Right JambSoftline Wall Jamb2",
                locator: this.page.locator("//*[text()='Right Jamb']/following::*[normalize-space(text())='Softline Wall Jamb'][2]"),
            },
        };
    }
                      
    public async navigateToLoginPage(): Promise<void> {
        await test.step("Navigate to application URL", async () => {
            await this.playwrightActionsFactory.navigateToURL(this.url);
        });
    }

    public async diassoftlinegripstilePage(): Promise<void> {
        await test.step("Profile selection and verify changes via screenshots", async () => {
            
            await this.playwrightActionsFactory.click(this.locators.profileselection);
            await this.playwrightActionsFactory.click(this.locators.dropdown);


            
            const beforeImg = await this.locators.canvas.locator.screenshot();
            await this.playwrightActionsFactory.click(this.locators.DIASSoftlineGripStile);
            await this.page.waitForTimeout(1000); 
            const afterImg = await this.locators.canvas.locator.screenshot();
            expect(beforeImg).not.toEqual(afterImg);

            const beforeImg1 = await this.locators.canvas.locator.screenshot();
            await this.playwrightActionsFactory.click(this.locators.blackcolour);
            await this.page.waitForTimeout(1000); 
            const afterImg1 = await this.locators.canvas.locator.screenshot();
            expect(beforeImg1).not.toEqual(afterImg1);

            const beforeImg3 = await this.locators.canvas.locator.screenshot();
            await this.playwrightActionsFactory.click(this.locators.whitecolour);
            await this.page.waitForTimeout(1000); 
            const afterImg3 = await this.locators.canvas.locator.screenshot();
            expect(beforeImg3).not.toEqual(afterImg3);

            const beforeImg5 = await this.locators.canvas.locator.screenshot();
            await this.playwrightActionsFactory.click(this.locators.graycolour);
            await this.page.waitForTimeout(1000); 
            const afterImg5 = await this.locators.canvas.locator.screenshot();
            expect(beforeImg5).not.toEqual(afterImg5);

            const beforeImg6 = await this.locators.canvas.locator.screenshot();
            await this.playwrightActionsFactory.click(this.locators.SoftlineDoorPanelDivider);
            await this.page.waitForTimeout(1000); 
            const afterImg6 = await this.locators.canvas.locator.screenshot();
            expect(beforeImg6).not.toEqual(afterImg6);

            const beforeImg7 = await this.locators.canvas.locator.screenshot();
            await this.playwrightActionsFactory.click(this.locators.SoftlineDoorPanelDivider18mm);
            await this.playwrightActionsFactory.click(this.locators.yesbuttongripstile);
            await this.page.waitForTimeout(1000); 
            const afterImg7 = await this.locators.canvas.locator.screenshot();
            expect(beforeImg7).not.toEqual(afterImg7);

            const beforeImg8 = await this.locators.canvas.locator.screenshot();
            await this.playwrightActionsFactory.click(this.locators.SoftlineDoorPanelDivider);
            await this.page.waitForTimeout(1000); 
            const afterImg8 = await this.locators.canvas.locator.screenshot();
            expect(beforeImg8).not.toEqual(afterImg8);

            const beforeImg9 = await this.locators.canvas.locator.screenshot();
            await this.playwrightActionsFactory.click(this.locators.LeftJambNone);
            await this.page.waitForTimeout(1000); 
            const afterImg9 = await this.locators.canvas.locator.screenshot();
            expect(beforeImg9).not.toEqual(afterImg9);

            const beforeImg10 = await this.locators.canvas.locator.screenshot();
            await this.playwrightActionsFactory.click(this.locators.LeftJambSoftlineWallJamb1);
            await this.page.waitForTimeout(1000); 
            const afterImg10 = await this.locators.canvas.locator.screenshot();
            expect(beforeImg10).not.toEqual(afterImg10);

            const beforeImg11 = await this.locators.canvas.locator.screenshot();
            await this.playwrightActionsFactory.click(this.locators.LeftJambSoftlineWallJamb2);
            await this.page.waitForTimeout(1000); 
            const afterImg11 = await this.locators.canvas.locator.screenshot();
            expect(beforeImg11).not.toEqual(afterImg11);

            const beforeImg12 = await this.locators.canvas.locator.screenshot();
            await this.playwrightActionsFactory.click(this.locators.LeftJambNone);
            await this.page.waitForTimeout(1000); 
            const afterImg12 = await this.locators.canvas.locator.screenshot();
            expect(beforeImg12).not.toEqual(afterImg12);

            const beforeImg13 = await this.locators.canvas.locator.screenshot();
            await this.playwrightActionsFactory.click(this.locators.RightJambNone);
            await this.page.waitForTimeout(1000); 
            const afterImg13 = await this.locators.canvas.locator.screenshot();
            expect(beforeImg13).not.toEqual(afterImg13);

            const beforeImg14 = await this.locators.canvas.locator.screenshot();
            await this.playwrightActionsFactory.click(this.locators.RightJambSoftlineWallJamb1);
            await this.page.waitForTimeout(1000); 
            const afterImg14 = await this.locators.canvas.locator.screenshot();
            expect(beforeImg14).not.toEqual(afterImg14);

            const beforeImg15 = await this.locators.canvas.locator.screenshot();
            await this.playwrightActionsFactory.click(this.locators.RightJambSoftlineWallJamb2);
            await this.page.waitForTimeout(1000); 
            const afterImg15 = await this.locators.canvas.locator.screenshot();
            expect(beforeImg15).not.toEqual(afterImg15);

            const beforeImg16 = await this.locators.canvas.locator.screenshot();
            await this.playwrightActionsFactory.click(this.locators.RightJambNone);
            await this.page.waitForTimeout(1000); 
            const afterImg16 = await this.locators.canvas.locator.screenshot();
            expect(beforeImg16).not.toEqual(afterImg16);

            



        

        });
    }
}  