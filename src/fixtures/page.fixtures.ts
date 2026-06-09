import { test as base } from '@playwright/test';
import { LoginPage } from '../page/login/login.page';
import { LogoutPage } from '../page/login/logout.page';
// import { DimensionPage } from '../page/dimension.page';
import { DimensionfullPage } from '../page/dimensionfull.page';
import { ProfileSelectionPage } from '../page/profileSelection/profileselection.page';
import {profileselectioncolourPage} from '../page/profileSelection/profileselectioncolour.page';
import { quebecAluminiumStilePage } from '../page/profileSelection/QuebecAluminiumStile.page';
import { wellingtonStilePage } from '../page/profileSelection/WellingtonStile.page';
import { diassoftlinegripstilePage } from '../page/profileSelection/diasSoftGripLineStile.page';
import { doorDesignFullPage } from '../page/Door Design/doordesignfull.page';
import { PanelFinishesPage } from '../page/Panel Finishes/panelfinishes.page';


type PageFixtures = {
    loginPage: LoginPage;
    logoutPage: LogoutPage;
    // dimensionPage: DimensionPage;
    dimensionfullPage: DimensionfullPage;
    ProfileSelectionPage: ProfileSelectionPage;
    profileselectioncolourPage: profileselectioncolourPage;
    quebecAluminiumStilePage: quebecAluminiumStilePage;
    wellingtonStilePage: wellingtonStilePage;
    diassoftlinegripstilePage: diassoftlinegripstilePage;
    doorDesignFullPage: doorDesignFullPage;
    PanelFinishesPage: PanelFinishesPage;
};

export const test = base.extend<PageFixtures>({
    loginPage: async ({ page }, use, testInfo) => {
        await use(new LoginPage(page, testInfo));
    },

    logoutPage: async ({ page }, use, testInfo) => {
        await use(new LogoutPage(page, testInfo));
    },

    // dimensionPage: async ({ page }, use, testInfo) => {
    //     await use(new DimensionPage(page, testInfo));
    // },

    dimensionfullPage: async ({ page }, use, testInfo) => {
        await use(new DimensionfullPage(page, testInfo));
    },
    ProfileSelectionPage: async ({ page }, use, testInfo) => {
        await use(new ProfileSelectionPage(page, testInfo));
    },
    profileselectioncolourPage: async ({ page }, use, testInfo) => {
        await use(new profileselectioncolourPage(page, testInfo));
    },
    quebecAluminiumStilePage: async ({ page }, use, testInfo) => {
        await use(new quebecAluminiumStilePage(page, testInfo));
    },
    wellingtonStilePage: async ({ page }, use, testInfo) => {
        await use(new wellingtonStilePage(page, testInfo)); 
    },
    diassoftlinegripstilePage: async ({ page }, use, testInfo) => {
        await use(new diassoftlinegripstilePage(page, testInfo));   
    },
    doorDesignFullPage: async ({ page }, use, testInfo) => {
        await use(new doorDesignFullPage(page, testInfo));   
    },
    PanelFinishesPage: async ({ page }, use, testInfo) => {
        await use(new PanelFinishesPage(page));   
    }, 


});