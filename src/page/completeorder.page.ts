import { Page, TestInfo, test, expect } from "@playwright/test";
import { PlaywrightActionFactory } from "./../utilities/playwright.actions.utils";
import { PlaywrightVerificationFactory } from "./../utilities/playwright.verifications.utils";
import { LocatorInfo } from "./../interfaces/locator.info.interface";
import { getEnvVariable } from "./../utilities/env.utils";
import { th } from "@faker-js/faker/.";

export class CompleteOrderPage {
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
            staffLoginBtn: {
                description: "Staff Log In Button",
                locator: this.page.locator("//div[text()='Staff Log In']")
            },
            loginEmail: {
                description: "Staff Login Email Input",
                locator: this.page.locator("//div[text()='Email:']/following-sibling::div/input")
            },
            loginPassword: {
                description: "Staff Login Password Input",
                locator: this.page.locator("//input[@type='password']")
            },
            loginBtn: {
                description: "Login Button",
                locator: this.page.locator("//button[text()='Login']")
            },
            getQuoteBtn: {
                description: "Get A Quote Button",
                locator: this.page.locator("//button[@class='greenBtn ']")
            },
            firstName: {
                description: "First Name",
                locator: this.page.locator("//div[text()='First Name']/following-sibling::div/input")
            },
            lastName: {
                description: "Last Name",
                locator: this.page.locator("//div[text()='Last Name']/following-sibling::div/input")
            },
            suburb: {
                description: "Suburb",
                locator: this.page.locator("//div[text()='Suburb']/following-sibling::div/input")
            },
            quoteEmail: {
                description: "Email",
                locator: this.page.locator("//div[text()='Email']/following-sibling::div/input")
            },
            phone: {
                description: "Phone",
                locator: this.page.locator("//div[text()='Phone']/following-sibling::div/input")
            },
            
            submitQuoteBtn: {
                description: "Submit Quote Button",
                locator: this.page.locator("//button[@class='bigBtn greenBtn ']")
            },
            
            designLibraryBtn: {
                description: "Design Library",
                locator: this.page.locator("(//button[text()='Design Library'])[2]")
            },

            // ---------------- Complete Order ----------------

            completeOrderBtn: {
                description: "Complete Order Button",
                locator: this.page.locator("//button[text()='Complete Order']")
            },
            subOrderBtn: {
                description: "Add Sub Order Button",
                locator: this.page.locator("//button[text()='Add Sub-Order']")
            },
            customBtn: {
                description: "Custom Button",
                locator: this.page.locator("//div[text()='Custom']")
            },
            addBtn: {
                description: "Add Button",
                locator: this.page.locator("//i[@class='bi bi-plus-circle-fill']")
            },
            confirmBtn: {
                description: "Confirm Button",
                locator: this.page.locator("//button[text()='Confirm']")
            },
            installationAddBtn: {
                description: "Installation Add Button",
                locator: this.page.locator("(//i[@class='bi bi-plus-circle-fill'])[1]")
            },
            selfPickupBtn: {
                description: "Self Pickup Button",
                locator: this.page.locator("(//button[text()='Select'])[1]")
            },
            nextBtn: {
                description: "Next Button",
                locator: this.page.locator("//button[text()='Next']")
            },
            changeBtn: {
                description: "Change Button",
                locator: this.page.locator("//button[text()='Change']")
            },
            inputField: {
                description: "Input Field",
                locator: this.page.locator("//div[@style='position: relative; display: flex; flex-direction: column; gap: 5px;']//input")
            },
            applyBtn: {
                description: "Apply Button",
                locator: this.page.locator("//button[text()='Apply']")
            },
            addressLine1: {
                description: "Address Line 1",
                locator: this.page.locator("//td[text()='Address Line 1']//following-sibling::td//input")
            },
            addressLine2: {
                description: "Address Line 2",
                locator: this.page.locator("//td[text()='Address Line 2']//following-sibling::td//input")
            },
            state: {
                description: "State",
                locator: this.page.locator("//td[text()='State']//following-sibling::td//input")
            },
            country: {
                description: "Country",
                locator: this.page.locator("//td[text()='Country']//following-sibling::td//input")
            },
            postcode: {
                description: "Postcode",
                locator: this.page.locator("//td[text()='Postcode']//following-sibling::td//input")
            },
            doneBtn: {
                description: "Done Button",
                locator: this.page.locator("//button[text()='Done']")
            },
            saveChangesBtn: {
                description: "Save Changes Button",
                locator: this.page.locator("//button[text()='Save Changes']")
            },
            invoiceBtn: {
                description: "Invoices Manager Button",
                locator: this.page.locator("//button[text()='Invoices Manager']")
            },
            updatedInvoices: {
                description: "Updated Invoices Button",
                locator: this.page.locator("//span[text()='Update Invoices']")
            },
            email: {
                description: "Price Value",
                locator: this.page.locator("(//button[text()='Send Email'])[1]")
            },
            closeBtn: {
                description: "Close Button",
                locator: this.page.locator("(//button[text()='Close'])[2]")
            },
            loginXeroBtn: {
                description: "Login Xero Button",
                locator: this.page.locator("(//span[text()='Log in'])[2]")
            },
            xeroEmail: {
                description: "Xero Email Input",
                locator: this.page.locator("//input[@data-automationid='Username--input']")
            },
            xeroPassword: {
                description: "Xero Password Input",
                locator: this.page.locator("//input[@data-automationid='PassWord--input']")
            },
            xeroLoginBtn: {
                description: "Xero Login Button",
                locator: this.page.locator("//button[text()='Log in']")
            },
            notNowBtn: {
                description: "Not Now Button",
                locator: this.page.locator("//button[text()='Not now']")
            },
            xeroAppBtn: {
                description: "Xero App Button",
                locator: this.page.locator("//span[@class='xnav-appbutton--text']")
            },
            demoCompany: {
                description: "Demo Company",
                locator: this.page.locator("(//a[text()='Demo Company (Global)'])[1]")
            },
            salesBtn: {
                description: "Sales Button",
                locator: this.page.locator("(//span[text()='Sales'])[1]")
            },
            invoicesBtn: {
                description: "Invoices Button",
                locator: this.page.locator("//span[text()='Invoices']")
            },
            depositRow: {
                description: "Deposit Row",
                locator: this.page.locator("//tbody//tr[2]")
            },
            accountInput: {
                description: "Account Input",
                locator: this.page.locator("//div[@class='xui-textinput xui-textinput-medium']//input")
            },
            recordPaymentBtn: {
                description: "Record Payment Button",
                locator: this.page.locator("//button[text()='Record payment']")
            },
            verificationText: {
                description: "Verification Text",
                locator: this.page.locator("//p[@id='ext-gen712']")
            },
            Editaddbtn:{
                description: "Edit add Button",
                locator: this.page.locator("(//i[@class='bi bi-plus-circle-fill'])[1]")
            },
            xeroLogBtn: {
                description: "Xero Log Button",
                locator: this.page.locator("//div[text()='Xero Log']")
            },
            forceXeroSyncBtn: {
                description: "Force Xero Sync Button",
                locator: this.page.locator("//button[text()='Force Xero Sync']")
            },
            incomingChangesPopup: {
                description: "Incoming Changes Popup",
                locator: this.page.locator("//h3[text()='Incoming changes:']")
            },
            xeroCloseBtn: {
                description: "Xero Close Button",
                locator: this.page.locator("//button[text()='Close']")
            },
            paidStatus: {
                description: "Paid Status",
                locator: this.page.locator("//span[text()='Paid']")
            },
            Xerocustomer:{
                description :"Xero customer profile",
                locator: this.page.locator("//button[text()='Xero Customer Profile ']")
            },
            updatexerocustomer:{
                description: "Update Xero customer",
                locator: this.page.locator("//button[text()='Update Xero Contact']")
            },

            invoices:{
                description: "Invoices",
                locator: this.page.locator("//button[text()='Invoices']")
            },
            sendemail:{
                description: "Send Email",
                locator: this.page.locator("(//button[text()='Send Email'])[1]")
            },
            Active:{
                description: "Active",
                locator :this.page.locator("//b[text()='ACTIVE']")
            },
            Awaitingpayment:{
                description: "Awaiting payment",
                locator : this.page.locator("//span[text()='Awaiting Payment']")
            },

            reports:{
                description: "Verify reports",
                locator: this.page.locator("(//div[text()='Reports'])[2]")
            },
            OrderConfirm:{
                description: "Order Confirm",
                locator :this.page.locator("//button[text()='Order Confirmation']")
            },
            IdStore:{
                description: "ID Store",
                locator : this.page.locator("(//div[@style='font-weight: bold; font-size: 14px;'])[1]")
            },
            editDesignListBtn: {
                description: "Edit Designs List Button",
                locator: this.page.locator("//button[text()='Edit Designs List']")
            },

            verify2Designs: {
                description: "Verify 2 Designs",
                locator: this.page.locator("//div[text()='2']")
            },

            verify3Designs: {
                description: "Verify 3 Designs",
                locator: this.page.locator("//div[text()='3']")
            },
            editOrderBtn: {
                description: "Edit Order Selection Button",
                locator: this.page.locator("//button[text()='Edit - Order Selection']")
            },

            installationModifyBtn: {
                description: "Installation Modify Button",
                locator: this.page.locator("(//div[text()='Installation'])[1]/ancestor::div[1]/following-sibling::div//button")
            },

            verifyAmount: {
                description: "Verify Amount",
                locator: this.page.locator("//span[text()='1,280']")
            },
        };
    }
   
    public async navigateToUrl(): Promise<void> {
        await test.step("Navigate to base URL", async () => {
            await this.playwrightActionsFactory.navigateToURL(this.url);
            await this.page.waitForLoadState("domcontentloaded");
        });
    }

    public async verifyHomepageLoaded(): Promise<void> {
        await test.step("Verify Homepage is loaded successfully", async () => {
            await expect(this.page).toHaveURL(new RegExp(this.url));
        });
    }

    public async performStaffLogin(completeOrderData: any): Promise<void> {
        await test.step("Perform Staff Login", async () => {
            await this.playwrightActionsFactory.click(this.locators.keyIcon);
            await this.playwrightActionsFactory.click(this.locators.staffLoginBtn);

            await this.playwrightActionsFactory.sendKeys(
                this.locators.loginEmail,
                completeOrderData.username
            );

            await this.playwrightActionsFactory.sendKeys(
                this.locators.loginPassword,
                completeOrderData.password
            );

            await this.playwrightActionsFactory.click(this.locators.loginBtn);

            await this.page.waitForTimeout(7000);
        });
    }

    public async verifySuccessfulLogin(): Promise<void> {
        await test.step("Verify successful login", async () => {
            await expect(this.locators.getQuoteBtn.locator).toBeVisible({
                timeout: 10000
            });
        });
    }

    public async completeOrder(completeOrderData: any): Promise<void> {
        await test.step("Complete Order Flow", async () => {
            await this.playwrightActionsFactory.click(this.locators.getQuoteBtn);
            await this.playwrightActionsFactory.sendKeys(this.locators.firstName, completeOrderData.firstName);
            await this.playwrightActionsFactory.sendKeys(this.locators.lastName, completeOrderData.lastName);
            await this.playwrightActionsFactory.sendKeys(this.locators.suburb, completeOrderData.suburb);
            await this.playwrightActionsFactory.sendKeys(this.locators.quoteEmail, completeOrderData.email);
            await this.playwrightActionsFactory.sendKeys(this.locators.phone, completeOrderData.phone);
            await this.playwrightActionsFactory.click(this.locators.submitQuoteBtn);
            await this.playwrightActionsFactory.click(this.locators.designLibraryBtn);
            await this.page.reload();
            await this.playwrightActionsFactory.click(this.locators.completeOrderBtn);
            await this.playwrightActionsFactory.click(this.locators.subOrderBtn);     
            await this.playwrightActionsFactory.click(this.locators.customBtn);
            await this.playwrightActionsFactory.click(this.locators.addBtn);
            await this.playwrightActionsFactory.click(this.locators.confirmBtn);
            await this.playwrightActionsFactory.click(this.locators.installationAddBtn);     
            await this.playwrightActionsFactory.click(this.locators.nextBtn);
            await this.playwrightActionsFactory.click(this.locators.selfPickupBtn);
            await this.playwrightActionsFactory.click(this.locators.nextBtn);
            await this.playwrightActionsFactory.click(this.locators.changeBtn);
            await this.playwrightActionsFactory.click(this.locators.inputField);
            await this.playwrightActionsFactory.sendKeys(this.locators.inputField,completeOrderData.supplyprice);
            await this.playwrightActionsFactory.click(this.locators.applyBtn);
            await this.playwrightActionsFactory.click(this.locators.nextBtn);
        
            await this.playwrightActionsFactory.click(this.locators.addressLine1);
            await this.playwrightActionsFactory.sendKeys(this.locators.addressLine1,completeOrderData.addressLine1);
            await this.playwrightActionsFactory.click(this.locators.addressLine2);
            await this.playwrightActionsFactory.sendKeys(this.locators.addressLine2,completeOrderData.addressLine2);
            await this.playwrightActionsFactory.click(this.locators.state);
            await this.playwrightActionsFactory.sendKeys(this.locators.state,completeOrderData.state);
            await this.playwrightActionsFactory.click(this.locators.country);
            await this.playwrightActionsFactory.sendKeys(this.locators.country,completeOrderData.country);
            await this.playwrightActionsFactory.click(this.locators.postcode);
            await this.playwrightActionsFactory.sendKeys(this.locators.postcode,completeOrderData.postcode);
            await this.playwrightActionsFactory.click(this.locators.doneBtn);
            await this.playwrightActionsFactory.click(this.locators.saveChangesBtn);
        });

    }

   public async verifyamount(): Promise<void> {
        await this.playwrightActionsFactory.click(this.locators.invoiceBtn);
        await this.playwrightActionsFactory.click(this.locators.Xerocustomer);
        await this.playwrightActionsFactory.click(this.locators.updatexerocustomer);
        await this.locators.Active.locator.waitFor({state: "visible",timeout: 60000,});
        await this.playwrightActionsFactory.click(this.locators.invoices);
        await this.playwrightActionsFactory.click(this.locators.updatedInvoices);
        await this.locators.sendemail.locator.waitFor({state: "visible",timeout: 90000,});
        await this.playwrightActionsFactory.click(this.locators.closeBtn);            
        await this.locators.Awaitingpayment.locator.first().waitFor({state: "visible",timeout: 60000,});
        await this.playwrightVerificationsFactory.verifyLocatorsCount(this.locators.Awaitingpayment,2);
    }
    
    public async verifyPdfOrderConfirmation(): Promise<void> {
        await this.playwrightActionsFactory.click(this.locators.reports);
        const expectedId =
            (await this.locators.IdStore.locator.textContent())?.trim() ?? "";
        const [pdfPage] = await Promise.all([
            this.page.context().waitForEvent("page"),
            this.playwrightActionsFactory.click(this.locators.OrderConfirm),
        ]);
        await pdfPage.waitForLoadState();
        await this.playwrightVerificationsFactory.verifyPdfContentByUrl(
            pdfPage.url(),
            expectedId
        );
    }

    public async EditDesignsList(): Promise<void> {
        await this.playwrightActionsFactory.click(this.locators.editDesignListBtn);
        await this.playwrightActionsFactory.click(this.locators.addBtn);
        await this.playwrightActionsFactory.click(this.locators.confirmBtn); 
        await this.locators.verify2Designs.locator.waitFor({state: "visible",timeout: 60000,});
        await this.playwrightActionsFactory.click(this.locators.editDesignListBtn);
        await this.playwrightActionsFactory.click(this.locators.addBtn);
        await this.playwrightActionsFactory.click(this.locators.confirmBtn); 
        await this.locators.verify3Designs.locator.waitFor({state: "visible",timeout: 60000,});
    }

    public async EditOrder(): Promise<void> {
        await this.playwrightActionsFactory.click(this.locators.editOrderBtn);
        await this.playwrightActionsFactory.click(this.locators.installationModifyBtn);
        await this.playwrightActionsFactory.click(this.locators.Editaddbtn);
        await this.playwrightActionsFactory.click(this.locators.doneBtn);
        await this.playwrightActionsFactory.click(this.locators.saveChangesBtn); 
        await this.page.waitForTimeout(20000);
        await this.locators.verifyAmount.locator.waitFor({state: "visible",timeout: 60000,});
        await this.page.close();
    }
}