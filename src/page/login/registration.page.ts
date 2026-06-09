import { Page, TestInfo, test} from "@playwright/test";
import { PlaywrightActionFactory } from "../../utilities/playwright.actions.utils";
import { PlaywrightVerificationFactory } from "../../utilities/playwright.verifications.utils";
import { LocatorInfo } from "../../interfaces/locator.info.interface";
import { getEnvVariable } from "../../utilities/env.utils";

export class RegistrationPage {
    private readonly page: Page;
    private readonly testInfo: TestInfo;
    private readonly playwrightActionsFactory: PlaywrightActionFactory;
    private readonly playwrightVerificationsFactory: PlaywrightVerificationFactory;
    private readonly adminRegistrationlocators: { [key: string]: LocatorInfo };
    private readonly url: string;
/**
 * 
 * @param page 
 * @param testInfo
 */
    constructor(page: Page, testInfo: TestInfo) {
        this.page = page;
        this.testInfo = testInfo;
        this.playwrightActionsFactory = new PlaywrightActionFactory(page, testInfo);
        this.playwrightVerificationsFactory = new PlaywrightVerificationFactory(page, testInfo);
        this.url = getEnvVariable('URL');

        // Locators
        this.adminRegistrationlocators = {
            registerPage: { 
                description: 'Register Page' ,
                locator: this.page.locator(`//a[text()='register']`),
            },
            verifySignUpPage: { 
                description: 'Verify Sign up Page',
                locator: this.page.locator(`//h4[text()='Almost there, get your RedPocket login.']`),
            },
            firstName: { 
                description: 'First Name ' ,
                locator: this.page.locator(`//input[@name='fname']`),
            },
            lastName: { 
                description: 'Last Name',
                locator: this.page.locator(`//input[@name='lname']`),
            },
            address: { 
                description: 'Address',
                locator: this.page.locator(`//input[@name='address']`),
            },
            apartmentUnit: { 
                description: 'Apartment Unit',
                locator: this.page.locator(`//input[@name='unit']`),
            },
            city: { 
                description: 'City',
                locator: this.page.locator(`//input[@name='city']`),
            },
            state: { 
                description: 'State',
                locator: this.page.locator(`//select[@id='id_state']`),
            },
            stateOption: { 
                description: 'State Option',
                locator: this.page.locator(`//Select[@name='state']/child::option[@value='AL']`),
            },
            zipCode: { 
                description: 'Zip Code',
                locator: this.page.locator(`//input[@name='zip']`),
            },
            phoneNumber: { 
                description: 'Phone Number',
                locator: this.page.locator(`//input[@name='phone']`),
            },
            password: { 
                description: 'Password',
                locator: this.page.locator(`//input[@name='password']`),
            },
            confirmPassword: { 
                description: 'Confirm Password',
                locator: this.page.locator(`//input[@name='confirm_password']`),
            },
            privacyPolicy: { 
                description: 'Privacy Policy',
                locator: this.page.locator(`//input[@name='term_check']`),
            },
            register: { 
                description: 'Register',
                locator: this.page.locator(`//button[text()='REGISTER']`),
            },
        };
    }
    /**
     * Navigates to the login page
     */
    public async navigateToLoginPage(): Promise<void> {
        await test.step('Navigate to login page', async () => {
           await this.playwrightActionsFactory.navigateToURL(this.url);
        });
    }
    public async SignUp(scenario1:any): Promise<void> {
        await test.step('SignUp Page', async () => {
            await this.playwrightActionsFactory.click(this.adminRegistrationlocators.registerPage);
            await this.playwrightActionsFactory.waitForVisibility(this.adminRegistrationlocators.verifySignUpPage);
            await this.playwrightActionsFactory.sendKeys(this.adminRegistrationlocators.firstName, scenario1.registrationDetails.firstName);
            await this.playwrightActionsFactory.sendKeys(this.adminRegistrationlocators.lastName, scenario1.registrationDetails.lastName);
            await this.playwrightActionsFactory.sendKeys(this.adminRegistrationlocators.address, scenario1.registrationDetails.address);
            await this.playwrightActionsFactory.sendKeys(this.adminRegistrationlocators.apartmentUnit, scenario1.registrationDetails.appartmentUnit);
            await this.playwrightActionsFactory.sendKeys(this.adminRegistrationlocators.city, scenario1.registrationDetails.city); 
            await this.playwrightActionsFactory.click(this.adminRegistrationlocators.state);
          // await this.playwrightActionsFactory.selectFromDropdown(this.adminRegistrationlocators.state, scenario1.registrationDetails.state);
            await this.playwrightActionsFactory.sendKeys(this.adminRegistrationlocators.zipCode, scenario1.registrationDetails.zipCode);
            await this.playwrightActionsFactory.sendKeys(this.adminRegistrationlocators.phoneNumber, scenario1.registrationDetails.phoneNumber);
            await this.playwrightActionsFactory.sendKeys(this.adminRegistrationlocators.password, scenario1.registrationDetails.password);
            await this.playwrightActionsFactory.sendKeys(this.adminRegistrationlocators.confirmPassword, scenario1.registrationDetails.confirmPassword);
            await this.playwrightActionsFactory.click(this.adminRegistrationlocators.privacyPolicy);
            await this.playwrightActionsFactory.click(this.adminRegistrationlocators.register);
        });
    }
   
    public async selectCaliforniaState(): Promise<void> {
        await test.step('Selecting "California" from state dropdown', async () => {
            const stateDropdown = this.page.locator('#state, [name="state"], .state-dropdown');
                try {
                await stateDropdown.selectOption({ label: 'California' });
                return;
            } catch (error) {
                console.log('Standard select failed, trying alternative...');
            }
                try {
                await stateDropdown.click();
                await this.page.waitForTimeout(500); // Wait for dropdown to open
                await this.page.keyboard.type('Calif');
                await this.page.waitForTimeout(300);
                await this.page.keyboard.press('ArrowDown');
                await this.page.keyboard.press('Enter');
                return;
            } catch (error) {
                console.log('Keyboard approach failed, trying final method...');
            }
                try {
                await stateDropdown.click();
                await this.page.locator('text=California').first().click();
            } catch (error) {
                throw new Error('Failed to select California after trying all methods');
            }
                const selectedValue = await stateDropdown.inputValue();
            if (!selectedValue.includes('California') && !selectedValue.includes('CA')) {
                throw new Error('California selection verification failed');
            }
    
            await this.testInfo.attach('State selected', {
                body: 'California was successfully selected',
                contentType: 'text/plain'
            });
        });
    }
    
    
    }
    
