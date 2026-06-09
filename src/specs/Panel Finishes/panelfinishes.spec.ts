import { test } from '@playwright/test';
import { PanelFinishesPage } from '../../page/Panel Finishes/panelfinishes.page'; 

test.describe('Doors Editor - Panel Finishes Automation', () => {
    
     test.setTimeout(120000); 

    test('Test 1: Translucent Super White Glass', async ({ page }, testInfo) => {
        const finishesPage = new PanelFinishesPage(page, testInfo);
        
        await finishesPage.navigateToUrl();
        await finishesPage.clickPanelFinishes();
        await finishesPage.clickTranslucentSuperWhite();
        await finishesPage.applyOnAllDoorsAndCompare();
    });

    test('Test 2: Translucent White Glass', async ({ page }, testInfo) => {
        const finishesPage = new PanelFinishesPage(page, testInfo);
        
        await finishesPage.navigateToUrl();
        await finishesPage.clickPanelFinishes();
        await finishesPage.clickTranslucentWhiteGlass();
        await finishesPage.applyOnAllDoorsAndCompare();
    });

    test('Test 3: Mirror', async ({ page }, testInfo) => {
        const finishesPage = new PanelFinishesPage(page, testInfo);
        
        await finishesPage.navigateToUrl();
        await finishesPage.clickPanelFinishes();
        await finishesPage.clickMirror();
        await finishesPage.applyOnAllDoorsAndCompare();
    });

    test('Test 4: Polytec Woodmatt', async ({ page }, testInfo) => {
        const finishesPage = new PanelFinishesPage(page, testInfo);
        
        await finishesPage.navigateToUrl();
        await finishesPage.clickPanelFinishes();
        
        
        await finishesPage.clickPolytecWoodmatt1();
        await finishesPage.applyOnAllDoorsAndCompare();
        
        
        await finishesPage.clickPolytecWoodmatt2();
        await finishesPage.applyOnAllDoorsAndCompare();
    });

    test.only('Test 5: Laminex Truescale Absolute Grain', async ({ page }, testInfo) => {
        const finishesPage = new PanelFinishesPage(page, testInfo);
        
        await finishesPage.navigateToUrl();
        await finishesPage.clickPanelFinishes();
        
        
        await finishesPage.clickLaminexGrain1();
        await finishesPage.applyOnAllDoorsAndCompare();
        
        
        await finishesPage.clickLaminexGrain2();
        await finishesPage.applyOnAllDoorsAndCompare();
        
       
        // await finishesPage.clickLaminexGrain3();
        // await finishesPage.applyOnAllDoorsAndCompare();
        
        
        await finishesPage.clickLaminexGrain4();
        await finishesPage.applyOnAllDoorsAndCompare();
    });

});