import { Page, TestInfo, test, expect } from "@playwright/test";
import { PlaywrightActionFactory } from "../../utilities/playwright.actions.utils";
import { PlaywrightVerificationFactory } from "../../utilities/playwright.verifications.utils";
import { LocatorInfo } from "../../interfaces/locator.info.interface";
import { getEnvVariable } from "../../utilities/env.utils";

export class PanelFinishesPage {
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
        this.url = getEnvVariable("URL") ;

        this.locators = {
            panelFinishesBtn: {
                description: "Panel Finishes Tab Button",
                locator: this.page.locator("//*[text()='Panel Finishes']")
            },
            canvas: {
                description: "Main Canvas Area",
                locator: this.page.locator("//body/div[@id='root']/div/div[1]/div[1]/div[1]/canvas[1]")
            },
            translucentSuperWhite: {
                description: "Translucent Super White Glass",
                locator: this.page.locator("//div[text()='Translucent Super White Glass']/following-sibling::div[1]/div/div[1]")
            },
            translucentWhiteGlass: {
                description: "Translucent White Glass",
                locator: this.page.locator("//div[text()='Translucent White Glass']/following-sibling::div[1]/div/div")
            },
            mirror: {
                description: "Mirror Finish",
                locator: this.page.locator("(//div[text()='Mirror']/following-sibling::div[1])[2]/div/div")
            },
            polytecWoodmatt1: {
                description: "Polytec Woodmatt Option 1",
                locator: this.page.locator("(//div[text()='Polytec Woodmatt']/following-sibling::div[1])[2]/div/div/img")
            },
            polytecWoodmatt2: {
                description: "Polytec Woodmatt Option 2",
                locator: this.page.locator("(//div[text()='Polytec Woodmatt']/following-sibling::div[1]//div[contains(@style, 'width: 60px')][1])[2]")
            },
            laminexGrain1: {
                description: "Laminex Truescale Grain 1",
                locator: this.page.locator("(//div[text()='Laminex Truescale Absolute Grain']/following-sibling::div[1]//div[contains(@style, 'width: 60px')][1])[1]/img")
            },
            laminexGrain2: {
                description: "Laminex Truescale Grain 2",
                locator: this.page.locator("(//div[text()='Laminex Truescale Absolute Grain']/following-sibling::div[1]//div[contains(@style, 'width: 60px')][1])[2]/img")
            },
            laminexGrain3: {
                description: "Laminex Truescale Grain 3",
                locator: this.page.locator("(//div[text()='Laminex Truescale Absolute Grain']/following-sibling::div[1]//div[contains(@style, 'width: 60px')][1])[3]/img")
            },
            laminexGrain4: {
                description: "Laminex Truescale Grain 4",
                locator: this.page.locator("(//div[text()='Laminex Truescale Absolute Grain']/following-sibling::div[1]//div[contains(@style, 'width: 60px')][1])[4]")
            }
        };
    }

    public async navigateToUrl(): Promise<void> {
        await test.step("Navigate to url", async () => {
            await this.playwrightActionsFactory.navigateToURL(this.url);
            await this.page.waitForLoadState('domcontentloaded');
        });
    }

    public async clickPanelFinishes(): Promise<void> {
        await test.step("Click panel finishes", async () => {
            await this.playwrightActionsFactory.click(this.locators.panelFinishesBtn);
            await this.page.waitForTimeout(500);
        });
    }

    public async clickTranslucentSuperWhite(): Promise<void> {
        await test.step("Click Translucent Super White Glass", async () => {
            await this.playwrightActionsFactory.click(this.locators.translucentSuperWhite);
        });
    }

    public async clickTranslucentWhiteGlass(): Promise<void> {
        await test.step("Click Translucent White Glass", async () => {
            await this.playwrightActionsFactory.click(this.locators.translucentWhiteGlass);
        });
    }

    public async clickMirror(): Promise<void> {
        await test.step("Click mirror", async () => {
            await this.playwrightActionsFactory.click(this.locators.mirror);
        });
    }

    public async clickPolytecWoodmatt1(): Promise<void> {
        await test.step("Click Polytec Woodmatt 1", async () => {
            await this.playwrightActionsFactory.click(this.locators.polytecWoodmatt1);
        });
    }

    public async clickPolytecWoodmatt2(): Promise<void> {
        await test.step("Click Polytec Woodmatt 2", async () => {
            await this.playwrightActionsFactory.click(this.locators.polytecWoodmatt2);
        });
    }

    public async clickLaminexGrain1(): Promise<void> {
        await test.step("Click Laminex Truescale Absolute Grain 1", async () => {
            await this.playwrightActionsFactory.click(this.locators.laminexGrain1);
        });
    }

    public async clickLaminexGrain2(): Promise<void> {
        await test.step("Click Laminex Truescale Absolute Grain 2", async () => {
            await this.playwrightActionsFactory.click(this.locators.laminexGrain2);
        });
    }

    public async clickLaminexGrain3(): Promise<void> {
        await test.step("Click Laminex Truescale Absolute Grain 3", async () => {
            await this.playwrightActionsFactory.click(this.locators.laminexGrain3);
        });
    }

    public async clickLaminexGrain4(): Promise<void> {
        await test.step("Click Laminex Truescale Absolute Grain 4", async () => {
            await this.playwrightActionsFactory.click(this.locators.laminexGrain4);
        });
    }

   
    public async applyOnAllDoorsAndCompare(): Promise<void> {
        await test.step("Apply on all door panels given coordinates and compare screenshots", async () => {
            const coordinates: Record<number, { x: number; y: number }> = {
                1: { x: 425, y: 170 },
                2: { x: 414, y: 225 },
                3: { x: 565, y: 227 },
                4: { x: 755, y: 229 }
            };

            for (let door = 1; door <= 4; door++) {
                
                const beforeImg = await this.locators.canvas.locator.screenshot();
                const target = coordinates[door];
                await this.page.mouse.click(target.x, target.y);
                await this.page.waitForTimeout(1000);
                const afterImg = await this.locators.canvas.locator.screenshot();
                expect(beforeImg).not.toEqual(afterImg);
            }
        });
    }
}