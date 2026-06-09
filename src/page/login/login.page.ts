import { Page, TestInfo, test } from "@playwright/test";
import { PlaywrightActionFactory } from "../../utilities/playwright.actions.utils";
import { PlaywrightVerificationFactory } from "../../utilities/playwright.verifications.utils";
import { LocatorInfo } from "../../interfaces/locator.info.interface";
import { getEnvVariable } from "../../utilities/env.utils";

export class LoginPage {
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
            keyIcon: {
                description: "Key icon button",
                locator: this.page.locator("//i[@class='bi bi-key-fill']"),
            },
            staffLogin: {
                description: "Staff Login button",
                locator: this.page.locator("//div[text()='Staff Log In']"),
            },
            emailInput: {
                description: "Email input field",
                locator: this.page.locator("//input[@style='padding: 5px; width: calc(100% - 10px);']"),
            },
            passwordInput: {
                description: "Password input field",
                locator: this.page.locator("//input[@style='padding: 5px 40px 5px 5px; width: calc(100% - 40px);']"),
            },
            loginButton: {
                description: "Login button",
                locator: this.page.locator("//*[text()='Login']"),
            }
        };
    }

    public async navigateToLoginPage(): Promise<void> {
        await test.step("Navigate to application URL", async () => {
            await this.playwrightActionsFactory.navigateToURL(this.url);
        });
    }

    public async loginPage(loginData: any): Promise<void> {
        await test.step("Login flow (Key → Staff → Credentials → Login)", async () => {
            await this.playwrightActionsFactory.click(this.locators.keyIcon);
            await this.playwrightActionsFactory.click(this.locators.staffLogin);
            await this.playwrightActionsFactory.sendKeys(
                this.locators.emailInput,
                loginData.loginDetails.username
            );
            await this.playwrightActionsFactory.sendKeys(
                this.locators.passwordInput,
                loginData.loginDetails.password
            );
            await this.playwrightActionsFactory.click(this.locators.loginButton);
            await this.page.waitForTimeout(7000);
        });
    }
}