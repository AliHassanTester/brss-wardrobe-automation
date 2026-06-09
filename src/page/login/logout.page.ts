import { Page, TestInfo, test } from "@playwright/test";
import { PlaywrightActionFactory } from "../../utilities/playwright.actions.utils";
import { PlaywrightVerificationFactory } from "../../utilities/playwright.verifications.utils";
import { LocatorInfo } from "../../interfaces/locator.info.interface";

export class LogoutPage {
    private readonly page: Page;
    private readonly testInfo: TestInfo;
    private readonly playwrightActionsFactory: PlaywrightActionFactory;
    private readonly playwrightVerificationsFactory: PlaywrightVerificationFactory;
    private readonly locators: { [key: string]: LocatorInfo };

    constructor(page: Page, testInfo: TestInfo) {
        this.page = page;
        this.testInfo = testInfo;

        this.playwrightActionsFactory = new PlaywrightActionFactory(page, testInfo);
        this.playwrightVerificationsFactory = new PlaywrightVerificationFactory(page, testInfo);

        this.locators = {
            profileIcon: {
                description: "Profile icon",
                locator: this.page.locator("//*[@class='bi bi-person-circle' and @style='padding: 0px;']"),
            },
            adminOption: {
                description: "Admin dropdown option",
                locator: this.page.locator('//*[@id="root"]/div/div[4]/div[2]'),
            },
            logoutButton: {
                description: "Logout button",
                locator: this.page.locator("//*[text()='Logout on this computer']"),
            },
        };
    }

    public async logoutPage(): Promise<void> {
        await test.step("Logout flow (Profile → Admin → Logout)", async () => {
            await this.playwrightActionsFactory.click(this.locators.profileIcon);
            await this.playwrightActionsFactory.click(this.locators.adminOption);
            await this.playwrightActionsFactory.click(this.locators.logoutButton);
            await this.page.waitForTimeout(7000);
        });
    }
}