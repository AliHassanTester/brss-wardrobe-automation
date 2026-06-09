import { Page, TestInfo, test, expect } from "@playwright/test";
import { PlaywrightActionFactory } from "../../utilities/playwright.actions.utils";
import { PlaywrightVerificationFactory } from "../../utilities/playwright.verifications.utils";
import { LocatorInfo } from "../../interfaces/locator.info.interface";
import { getEnvVariable } from "../../utilities/env.utils";

export class profileselectioncolourPage {
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

    public async profileselectioncolourPage(): Promise<void> {
        await test.step("Profile selection and verify changes via screenshots", async () => {
            
            await this.playwrightActionsFactory.click(this.locators.profileselection);
            

            const colorOptions = [ 
                  this.locators.blackcolour,
                  this.locators.pinkcolour,
                  this.locators.whitecolour,
                  this.locators.beighcolour,
                  this.locators.graycolour  
                ];


    for (const colorLocator of colorOptions) {
    
        const beforeImg = await this.locators.canvas.locator.screenshot();
    
        await this.playwrightActionsFactory.click(colorLocator);
        await this.page.waitForTimeout(1000); 
    
        const afterImg = await this.locators.canvas.locator.screenshot();
    
    
        expect(beforeImg).not.toEqual(afterImg);
        }

            
          
const hardwareOptions = [
    this.locators.AluminiumDoubleBottomTrack,
    this.locators.AluminiumRecessedSingleBottomTrack,
    this.locators.AluminiumSystemGasket1,
    this.locators.AluminiumSystemGasket2,
    this.locators.AluminiumSystemGasket3,
    this.locators.AluminiumSystemGasket1 
];

    for (const optionLocator of hardwareOptions) {
         const beforeImg = await this.locators.canvas.locator.screenshot();
         await this.playwrightActionsFactory.click(optionLocator);
         await this.page.waitForTimeout(1000); 
         const afterImg = await this.locators.canvas.locator.screenshot();
        expect(beforeImg).not.toEqual(afterImg);
        }
    });
    }
}