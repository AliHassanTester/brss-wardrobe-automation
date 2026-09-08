import { Page, TestInfo, test, expect } from "@playwright/test";
import { PlaywrightActionFactory } from "./../utilities/playwright.actions.utils";
import { PlaywrightVerificationFactory } from "./../utilities/playwright.verifications.utils";
import { LocatorInfo } from "./../interfaces/locator.info.interface";
import { getEnvVariable } from "./../utilities/env.utils";

export class QuotePage {
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
                description: "Staff Login Key Icon",
                locator: this.page.locator("//i[@class ='bi bi-key-fill']") 
            },
            staffLoginBtn:{
                description: "Staff Log In Button",
                locator: this.page.locator("//div[text()='Staff Log In']") 
            },
            loginEmail: {
                description: "Staff Login Email Input",
                locator: this.page.locator("//div[text()='Email:']/following-sibling::div/input")
            },
            loginPassword: {
                description: "Staff Login Password Input",
                locator: this.page.locator("//input[@type = 'password']")
            },
            loginBtn: {
                description: "Login Submit Button",
                locator: this.page.locator("//button[text()='Login']")
            },
            getQuoteBtn: {
                description: "Get A Quote Button",
                locator: this.page.locator("//button[@class='greenBtn ']")
            },
            firstName: {
                description: "Quote First Name Input",
                locator: this.page.locator("//div[text()='First Name']/following-sibling::div/input")
            },
            lastName: {
                description: "Quote Last Name Input",
                locator: this.page.locator("//div[text()='Last Name']/following-sibling::div/input")
            },
            suburb: {
                description: "Quote Suburb Input",
                locator: this.page.locator("//div[text()='Suburb']/following-sibling::div/input")
            },
            quoteEmail: {
                description: "Quote Email Input",
                locator: this.page.locator("//div[text()='Email']/following-sibling::div/input")
            },
            phone: {
                description: "Quote Phone Input",
                locator: this.page.locator("//div[text()='Phone']/following-sibling::div/input")
            },
            comments: {
                description: "Quote Comments Input",
                locator: this.page.locator("//div[text()='Comments:']/following-sibling::div[1]//textarea")
            },
            submitQuoteBtn: {
                description: "Final Submit Quote Button",
                locator: this.page.locator("//button[@class='bigBtn greenBtn ']")
            },
            successHeading: {
                description: "Success Screen Heading",
                locator: this.page.locator("//div[contains(text(), 'Your design was sent to Wardrobeman')]")
            },
            designLibraryBtn: {
                description: "Design Library Button",
                locator: this.page.locator("(//button[text()='Design Library'])[2]")
            },
            designLibraryBtn2: {
                description: "Design Library Button",
                locator: this.page.locator("(//button[text()='Design Library'])[1]")
            },
            archiveBtn: {
                description: "Archive Button",
                locator: this.page.locator("//button[text()='Archive']")
            },
            yesBtn: {
                description: "Yes Confirmation Button",
                locator: this.page.locator("//button[text()='Yes']")
            },
            archivedTab: {
                description: "Archived Designs Tab",
                locator: this.page.locator("//div[contains(text(), 'Archived')]")
            },
            unarchiveBtn: {
                description: "Unarchive Button",
                locator: this.page.locator("//button[text()='Unarchive']")
            },
            activeTab: {
                description: "Active Designs Tab",
                locator: this.page.locator("//div[contains(text(), 'Active')]")
            },
            editBtn: {
                description: "Edit Button",
                locator: this.page.locator("//button[text()='Edit']")
            },
            doorAddBtn: {
                description: "Door Add Plus Button",
                locator: this.page.locator("//i[@class = 'bi bi-plus-lg']")
            },
            canvasArea: {
                description: "Canvas Area",
                locator: this.page.locator("//body/div[@id='root']/div/div[1]/div[1]/div[1]/canvas[1]")
            },
            getQuoteTabBtn: {
                description: "Get a Quote Tab Button",
                locator: this.page.locator("//button[text()='Get a Quote']")
            },
            updateAndGetQuoteBtn: {
                description: "Update Design and Get a Quote Button",
                locator: this.page.locator("//button[text()='Update Design and Get a Quote']")
            },
            revisionText: {
                description: "Revision Element Verification",
                locator: this.page.locator("(//div[text()='Design '])[2]")
            },
            revisionText2: {
                description: "Revision Element Verification",
                locator: this.page.locator("(//div[text()='Design '])[1]")
            },
            createNewDesignBtn: {
                description: "Create New Design Button",
                locator: this.page.locator("//button[text()='Create New Design']")
            },
            dimensionsBtn: {
                description: "Dimensions Button",
                locator: this.page.locator("//button[text()='Dimensions']")
            },
            widthInput: {
                description: "Width Input Field",
                locator: this.page.locator("//div[@id='widthSet']//input")
            },
            heightInput: {
                description: "Height Input Field",
                locator: this.page.locator("//div[@id='heightSet']//input")
            },
            sendDesignGetQuoteBtn: {
                description: "Send Design and Get a Quote Button",
                locator: this.page.locator("//button[text()='Send Design and Get a Quote']")
            },
           
            
        };
    }

    public async navigateToUrl(): Promise<void> {
        await test.step("Navigate to base URL", async () => {
            await this.playwrightActionsFactory.navigateToURL(this.url);
            await this.page.waitForLoadState('domcontentloaded');
        });
    }

    public async verifyHomepageLoaded(): Promise<void> {
        await test.step("Verify Homepage is loaded successfully", async () => {
            await expect(this.page).toHaveURL(new RegExp(this.url)); 
        });
    }

    public async performStaffLogin(quoteData: any): Promise<void> {
        await test.step("Perform Staff Login via Key Icon", async () => {
            await this.playwrightActionsFactory.click(this.locators.keyIcon);
            await this.playwrightActionsFactory.click(this.locators.staffLoginBtn);
            await this.playwrightActionsFactory.sendKeys(this.locators.loginEmail, quoteData.loginDetails.username);
            await this.playwrightActionsFactory.sendKeys(this.locators.loginPassword, quoteData.loginDetails.password);
            await this.playwrightActionsFactory.click(this.locators.loginBtn);
            await this.page.waitForTimeout(7000); 
        });
    }

    public async verifySuccessfulLogin(): Promise<void> {
        await test.step("Verify successful login by checking 'Get a Quote' button", async () => {
            await expect(this.locators.getQuoteBtn.locator).toBeVisible({ timeout: 7000 });
        });
    }

    public async fillAndSubmitQuoteForm(quoteData: any): Promise<void> {
        await test.step("Fill and submit 'Get a Quote' form", async () => {
            await this.playwrightActionsFactory.click(this.locators.getQuoteBtn);
            await this.playwrightActionsFactory.sendKeys(this.locators.firstName, quoteData.firstName);
            await this.playwrightActionsFactory.sendKeys(this.locators.lastName, quoteData.lastName);
            await this.playwrightActionsFactory.sendKeys(this.locators.suburb, quoteData.suburb);
            await this.playwrightActionsFactory.sendKeys(this.locators.quoteEmail, quoteData.email);
            await this.playwrightActionsFactory.sendKeys(this.locators.phone, quoteData.phone);
            
            if (quoteData.comments) {
                await this.playwrightActionsFactory.sendKeys(this.locators.comments, quoteData.comments);
            }

            await this.playwrightActionsFactory.click(this.locators.submitQuoteBtn);
        });
    }

    public async verifyQuoteSubmissionSuccess(): Promise<void> {
        await test.step("Verify success screen is displayed after quote submission", async () => {
            await expect(this.locators.successHeading.locator).toBeVisible({ timeout: 30000 });
        });
    }

    public async navigateToDesignLibraryAndReload(): Promise<void> {
        await test.step("Click Design Library button and reload page", async () => {
            await this.playwrightActionsFactory.click(this.locators.designLibraryBtn);
            await this.page.waitForTimeout(3000);
            await this.page.reload({ waitUntil: 'domcontentloaded' });
            await this.page.waitForTimeout(2000); 
        });
    }

    public async archiveFromCompleteOrdersAndVerify(): Promise<void> {
        await test.step("Go to Complete Orders, Archive, and verify Active Designs is empty", async () => {
            await this.playwrightActionsFactory.click(this.locators.archiveBtn);
            await this.playwrightActionsFactory.click(this.locators.yesBtn);
            await this.page.waitForTimeout(6000);
            await expect(this.locators.archiveBtn.locator.first()).toBeHidden();
        });
    }

    public async unarchiveFromArchivedAndVerify(): Promise<void> {
        await test.step("Reload, go to Archived Designs, Unarchive", async () => {
            await this.page.reload({ waitUntil: 'domcontentloaded' });
            await this.page.waitForTimeout(2000);
            await this.playwrightActionsFactory.click(this.locators.archivedTab);
            await this.page.waitForTimeout(2000);
            await this.playwrightActionsFactory.click(this.locators.unarchiveBtn);
            await this.playwrightActionsFactory.click(this.locators.yesBtn);
            await this.page.waitForTimeout(9000);
            await expect(this.locators.unarchiveBtn.locator.first()).toBeHidden();
        });
    }

    public async verifyDesignBackInActive(): Promise<void> {
        await test.step("Refresh, go to Active Designs, and verify design is present", async () => {
            await this.page.reload({ waitUntil: 'domcontentloaded' });
            await this.page.waitForTimeout(2000);
            await this.playwrightActionsFactory.click(this.locators.activeTab);
            await this.page.waitForTimeout(4000);
            await expect(this.locators.archiveBtn.locator.first()).toBeVisible();
        });
    }
    public async editAndVerifyCanvasDoorAddition(): Promise<void> {
    await test.step("Click Edit, add doors 3 times and compare canvas screenshots", async () => {
        
        await this.playwrightActionsFactory.click(this.locators.editBtn);
        await this.page.waitForTimeout(3000);

        for (let i = 1; i <= 3; i++) {
            const beforeScreenshot = await this.locators.canvasArea.locator.screenshot();

            await this.playwrightActionsFactory.click(this.locators.doorAddBtn);
            await this.page.waitForTimeout(1500);

            const afterScreenshot = await this.locators.canvasArea.locator.screenshot();

            expect(beforeScreenshot).not.toEqual(afterScreenshot);
            
            await this.testInfo.attach(`Canvas_Before_Click_${i}`, { body: beforeScreenshot, contentType: 'image/png' });
            await this.testInfo.attach(`Canvas_After_Click_${i}`, { body: afterScreenshot, contentType: 'image/png' });
        }
    });
    }
    public async updateDesignAndVerifyRevision(): Promise<void> {
        await test.step("Click Get a Quote, Update Design, and Verify Revision Element", async () => {
            await this.playwrightActionsFactory.click(this.locators.designLibraryBtn2);
            await this.page.waitForTimeout(3000);
            await expect(this.locators.revisionText2.locator).toBeVisible({ timeout: 10000 });
        });
    }
    public async updateDesignAndVerifyRevision2(): Promise<void> {
        await test.step("Click Get a Quote, Update Design, and Verify Revision Element", async () => {
            await this.playwrightActionsFactory.click(this.locators.designLibraryBtn);
            await this.page.waitForTimeout(3000);
            await expect(this.locators.revisionText2.locator).toBeVisible({ timeout: 10000 });
        });
    }

    public async configureDimensionsAndAddElevenDoors(quoteData: any): Promise<void> {
        await test.step("Configure new design dimensions and add 11 doors with snapshot checks", async () => {
            await this.playwrightActionsFactory.click(this.locators.createNewDesignBtn);
            await this.page.waitForTimeout(2000);
            await this.playwrightActionsFactory.click(this.locators.dimensionsBtn);
            await this.page.waitForTimeout(1000);
            
            await this.locators.heightInput.locator.fill("");
            await this.playwrightActionsFactory.sendKeys(this.locators.heightInput, quoteData.dimensionData.height);
            await this.page.waitForTimeout(1000);

            await this.locators.widthInput.locator.fill("");
            await this.playwrightActionsFactory.sendKeys(this.locators.widthInput, quoteData.dimensionData.width);
            await this.page.waitForTimeout(2000);

            for (let i = 1; i <= 11; i++) {
                const beforeScreenshot = await this.locators.canvasArea.locator.screenshot();
                await this.playwrightActionsFactory.click(this.locators.doorAddBtn);
                await this.page.waitForTimeout(1500); 
                const afterScreenshot = await this.locators.canvasArea.locator.screenshot();
                expect(beforeScreenshot).not.toEqual(afterScreenshot);
                await this.testInfo.attach(`T5_Canvas_Before_Click_${i}`, { body: beforeScreenshot, contentType: 'image/png' });
                await this.testInfo.attach(`T5_Canvas_After_Click_${i}`, { body: afterScreenshot, contentType: 'image/png' });
            }

            await this.playwrightActionsFactory.click(this.locators.getQuoteTabBtn);
            await this.page.waitForTimeout(2000);
            await this.playwrightActionsFactory.click(this.locators.sendDesignGetQuoteBtn);
            await this.page.waitForTimeout(5000);
        });
    }
}

