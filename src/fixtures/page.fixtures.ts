import { test as base } from '@playwright/test';
import { LoginPage } from '../page/login/login.page';
import { DimensionfullPage } from '../page/dimensionfull.page';
import { ProfileSelectionPage } from '../page/profileSelection/profileselection.page';
import { doorDesignFullPage } from '../page/Door Design/doordesignfull.page';
import { PanelFinishesPage } from '../page/Panel Finishes/panelfinishes.page';

type PageFixtures = {
    loginPage: LoginPage;
    dimensionfullPage: DimensionfullPage;
    ProfileSelectionPage: ProfileSelectionPage;
    DoorDesignFullPage: doorDesignFullPage;
    panelFinishesPage: PanelFinishesPage;       
};

export const test = base.extend<PageFixtures>({
    loginPage: async ({ page }, use, testInfo) => {
        await use(new LoginPage(page, testInfo));
    },
    dimensionfullPage: async ({ page }, use, testInfo) => {
        await use(new DimensionfullPage(page));
    },
    ProfileSelectionPage: async ({ page }, use, testInfo) => {
        await use(new ProfileSelectionPage(page, testInfo)); 
    },
    DoorDesignFullPage: async ({ page }, use, testInfo) => {
        await use(new doorDesignFullPage(page, testInfo));   
    },
    panelFinishesPage: async ({ page }, use, testInfo) => {
        await use(new PanelFinishesPage(page, testInfo));  
    }, 
});

export { test as default };