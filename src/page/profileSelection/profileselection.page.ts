import { Page, TestInfo, test, expect } from "@playwright/test";
import { PlaywrightActionFactory } from "../../utilities/playwright.actions.utils";
import { LocatorInfo } from "../../interfaces/locator.info.interface";
import { getEnvVariable } from "../../utilities/env.utils";

export class ProfileSelectionPage {
    private readonly page: Page;
    private readonly playwrightActionsFactory: PlaywrightActionFactory;
    private readonly locators: { [key: string]: LocatorInfo };
    private readonly url: string;

    constructor(page: Page, testInfo: TestInfo) {
        this.page = page;
        this.playwrightActionsFactory = new PlaywrightActionFactory(page, testInfo);
        this.url = getEnvVariable("URL");

       
        this.locators = {
            profileselection:{
                description: "Profile selection button", 
                locator: this.page.locator("//*[text()='Profiles Selection']")
            },
            dropdown:{
                description: "dropdown options", 
                locator: this.page.locator("//i[@class='bi bi-caret-down-fill'][1]") 
            },
            canvas:{
                description: "Main Canvas Area",
                locator: this.page.locator("//body/div[@id='root']/div/div[1]/div[1]/div[1]/canvas[1]")
            },
            IndecoWellingtonStile:{
                description: "Indeco Wellington Stile option", 
                locator: this.page.locator("//div[text()='Indeco Wellington Stile']") 
            },
            IndecoQuebecAluminiumStile:{
                description: "Indeco Quebec Aluminium Stile option", 
                locator: this.page.locator("//div[text()='Indeco Quebec Aluminium Stile']") 
            },
            DIASSoftlineGripStile:{
                description: "DIAS Softline Grip Stile option", 
                locator: this.page.locator("//div[text()='DIAS Softline Grip Stile']")
            },
            IndecoSydneyStile:{
                description: "Indeco Sydney Stile option",
                locator: this.page.locator("//div[text()='Indeco Sydney Stile']")
            },
            blackcolour:{
                description: "Black colour option", 
                locator: this.page.locator("//div[@style='width: 60px; height: 60px; background-color: rgb(0, 0, 0);']") 
            },
            pinkcolour:{
                description: "Pink colour option", 
                locator: this.page.locator("//div[@style='width: 60px; height: 60px; background-color: rgb(253, 109, 200);']")
            },
            beighcolour:{
                description: "Beigh colour option", 
                locator: this.page.locator("//div[@style='width: 60px; height: 60px; background-color: rgb(249, 229, 185);']")
            },
            whitecolour:{
                description: "White colour option", 
                locator: this.page.locator("//div[@style='width: 60px; height: 60px; background-color: rgb(255, 255, 255);']")
            },
            graycolour:{
                description: "Gray colour option",
                locator: this.page.locator("//div[@style='width: 60px; height: 60px; background-color: rgb(180, 180, 180);']")
            },
            AluminiumDoubleBottomTrack:{
                description: "Aluminium Double Bottom Track", 
                locator: this.page.locator("//div[text()='Aluminium Double Bottom Track']") 
            },
            AluminiumRecessedSingleBottomTrack:{
                description: "Aluminium Recessed Single Bottom Track",
                locator: this.page.locator("//div[text()='Aluminium Recessed Single Bottom Track']")
            },
            AluminiumSystemGasket1:{
                description: "Aluminium System Gasket, 10/4 mm (Type K)",
                locator: this.page.locator("//div[text()='Aluminium System Gasket, 10/4 mm (Type K)']")
            },
            AluminiumSystemGasket2:{
                description: "Aluminium System Gasket, 10/4 mm (Type V)",
                locator: this.page.locator("//div[text()='Aluminium System Gasket, 10/4 mm (Type V)']")
            },
            AluminiumSystemGasket3:{
                description: "Aluminium System Gasket, 10/4 mm (Type C)",
                locator: this.page.locator("//div[text()='Aluminium System Gasket, 10/4 mm (Type C)']")
            },
            SoftlineDoorPanelDivider:{
                description: "Softline Door Panel Divider",
                locator: this.page.locator("//*[text()='Softline Door Panel Divider']")
            },
            SoftlineDoorPanelDivider18mm:{
                description: "Softline Door Panel Divider 18mm",
                locator: this.page.locator("//*[text()='Softline Door Panel Divider 18mm']")
            },
            yesbuttongripstile:{
                description: "Yes button for gripstile",
                locator: this.page.locator("//button[@id='modalConfirmBtn']")
            },
            LeftJambNone:{
                description: "Left Jamb None",
                locator: this.page.locator("//*[text()='Left Jamb']/following::*[normalize-space(text())='None'][1]")
            },
            LeftJambSoftlineWallJamb1:{
                description: "Left JambSoftline Wall Jamb1",
                locator: this.page.locator("//*[text()='Left Jamb']/following::*[normalize-space(text())='Softline Wall Jamb'][1]")
            },
            LeftJambSoftlineWallJamb2:{
                description: "Left JambSoftline Wall Jamb2",
                locator: this.page.locator("//*[text()='Left Jamb']/following::*[normalize-space(text())='Softline Wall Jamb'][2]")
            },
            RightJambNone:{
                description: "Right Jamb None",
                locator: this.page.locator("//*[text()='Right Jamb']/following::*[normalize-space(text())='None'][1]")
            },
            RightJambSoftlineWallJamb1:{
                description: "Right JambSoftline Wall Jamb1",
                locator: this.page.locator("//*[text()='Right Jamb']/following::*[normalize-space(text())='Softline Wall Jamb'][1]")
            },
            RightJambSoftlineWallJamb2:{
                description: "Right JambSoftline Wall Jamb2",
                locator: this.page.locator("//*[text()='Right Jamb']/following::*[normalize-space(text())='Softline Wall Jamb'][2]")
            },
        };
    }

    public async navigateToLoginPage(): Promise<void> {
        await test.step("Navigate to application URL", async () => {
            await this.playwrightActionsFactory.navigateToURL(this.url);
        });
    }

    public async verifyAllSystemsSwitching(): Promise<void> {
        await test.step("Verify changing all systems via dropdown", async () => {
            await this.playwrightActionsFactory.click(this.locators.profileselection);
            await this.playwrightActionsFactory.click(this.locators.dropdown);

            const stileOptions = [this.locators.IndecoWellingtonStile,this.locators.IndecoQuebecAluminiumStile,this.locators.DIASSoftlineGripStile,this.locators.IndecoSydneyStile];
             
            for (let i = 0; i < stileOptions.length; i++) {
                const beforeImg = await this.locators.canvas.locator.screenshot();
                await this.playwrightActionsFactory.click(stileOptions[i]);
                await this.page.waitForTimeout(1000); 
                const afterImg = await this.locators.canvas.locator.screenshot();
                expect(beforeImg).not.toEqual(afterImg);

                if (i < stileOptions.length - 1) {
                    await this.playwrightActionsFactory.click(this.locators.dropdown);
                }
            }
        });
    }

    public async verifyQuebecAluminiumStile(): Promise<void> {
        await test.step("Verify Quebec Aluminium Stile Colours and Gaskets", async () => {
            await this.playwrightActionsFactory.click(this.locators.profileselection);
            await this.playwrightActionsFactory.click(this.locators.dropdown);
            const beforeImg = await this.locators.canvas.locator.screenshot();
            await this.playwrightActionsFactory.click(this.locators.IndecoQuebecAluminiumStile);
            await this.page.waitForTimeout(1000); 
            const afterImg = await this.locators.canvas.locator.screenshot();
            expect(beforeImg).not.toEqual(afterImg);
            await this.loopThroughColours();
            await this.loopThroughIndecoHardware();
        });
    }

    public async verifyWellingtonStile(): Promise<void> {
        await test.step("Verify Wellington Stile Colours and Gaskets", async () => {
            await this.playwrightActionsFactory.click(this.locators.profileselection);
            await this.playwrightActionsFactory.click(this.locators.dropdown);
            const beforeImg = await this.locators.canvas.locator.screenshot();
            await this.playwrightActionsFactory.click(this.locators.IndecoWellingtonStile);
            await this.page.waitForTimeout(1000); 
            const afterImg = await this.locators.canvas.locator.screenshot();
            expect(beforeImg).not.toEqual(afterImg);
            await this.loopThroughColours();
            await this.loopThroughIndecoHardware();
        });
    }

    public async verifyDiasSoftlineGripStile(): Promise<void> {
        await test.step("Verify DIAS Softline Grip Stile Options", async () => {
            await this.playwrightActionsFactory.click(this.locators.profileselection);
            await this.playwrightActionsFactory.click(this.locators.dropdown);
            const beforeImg = await this.locators.canvas.locator.screenshot();
            await this.playwrightActionsFactory.click(this.locators.DIASSoftlineGripStile);
            await this.page.waitForTimeout(1000); 
            const afterImg = await this.locators.canvas.locator.screenshot();
            expect(beforeImg).not.toEqual(afterImg);
            const diasColours = [this.locators.blackcolour, this.locators.whitecolour, this.locators.graycolour];
            for (const color of diasColours) {
                await this.clickAndVerify(color);
            }
            await this.clickAndVerify(this.locators.SoftlineDoorPanelDivider);
            const beforeImg18mm = await this.locators.canvas.locator.screenshot();
            await this.playwrightActionsFactory.click(this.locators.SoftlineDoorPanelDivider18mm);
            await this.playwrightActionsFactory.click(this.locators.yesbuttongripstile);
            await this.page.waitForTimeout(1000); 
            const afterImg18mm = await this.locators.canvas.locator.screenshot();
            expect(beforeImg18mm).not.toEqual(afterImg18mm);
            await this.clickAndVerify(this.locators.SoftlineDoorPanelDivider);
            await this.clickAndVerify(this.locators.LeftJambNone);
            await this.clickAndVerify(this.locators.LeftJambSoftlineWallJamb1);
            await this.clickAndVerify(this.locators.LeftJambSoftlineWallJamb2);
            await this.clickAndVerify(this.locators.LeftJambNone);
            await this.clickAndVerify(this.locators.RightJambNone);
            await this.clickAndVerify(this.locators.RightJambSoftlineWallJamb1);
            await this.clickAndVerify(this.locators.RightJambSoftlineWallJamb2);
            await this.clickAndVerify(this.locators.RightJambNone);
        });
    }

    private async clickAndVerify(locatorInfo: LocatorInfo): Promise<void> {
        const beforeImg = await this.locators.canvas.locator.screenshot();
        await this.playwrightActionsFactory.click(locatorInfo);
        await this.page.waitForTimeout(1000); 
        const afterImg = await this.locators.canvas.locator.screenshot();
        expect(beforeImg).not.toEqual(afterImg);
    }

    private async loopThroughColours(): Promise<void> {
        const colorOptions = [ 
            this.locators.blackcolour, this.locators.pinkcolour, 
            this.locators.whitecolour, this.locators.beighcolour, this.locators.graycolour 
        ];
        for (const color of colorOptions) {
            await this.clickAndVerify(color);
        }
    }

    private async loopThroughIndecoHardware(): Promise<void> {
        const hardwareOptions = [this.locators.AluminiumDoubleBottomTrack,this.locators.AluminiumRecessedSingleBottomTrack,this.locators.AluminiumDoubleBottomTrack,this.locators.AluminiumSystemGasket1,this.locators.AluminiumSystemGasket2,this.locators.AluminiumSystemGasket3,this.locators.AluminiumSystemGasket1];
        
        for (const hardware of hardwareOptions) {
            await this.clickAndVerify(hardware);
        }
    }

    public async verifySydneyStile(): Promise<void> {
        await test.step("Verify Sydney Stile Colours and Gaskets", async () => {
            await this.playwrightActionsFactory.click(this.locators.profileselection);
            await this.playwrightActionsFactory.click(this.locators.dropdown);
            const beforeImg = await this.locators.canvas.locator.screenshot();
            await this.playwrightActionsFactory.click(this.locators.IndecoSydneyStile);
            await this.page.waitForTimeout(1000); 
            const afterImg = await this.locators.canvas.locator.screenshot();
            expect(beforeImg).not.toEqual(afterImg);
            await this.loopThroughColours();
            await this.loopThroughIndecoHardware();
        });
    }
}